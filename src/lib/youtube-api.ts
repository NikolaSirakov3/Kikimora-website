import { YOUTUBE_CONFIG } from "./youtube-config";

const YOUTUBE_API_KEY = YOUTUBE_CONFIG.API_KEY;

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  duration?: string;
  viewCount?: string;
  tags?: string[];
  categoryId?: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
  topics?: string[];
  keyTakeaways?: string[];
  hasCaptions?: boolean;
  captionLanguages?: string[];
}

export interface YouTubeApiResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    contentDetails?: {
      duration: string;
    };
    statistics?: {
      viewCount: string;
    };
  }>;
  nextPageToken?: string;
}

export class YouTubeApiService {
  private static formatDuration(duration: string): string {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";

    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  static async getChannelVideos(
    channelId: string
  ): Promise<YouTubeVideo[]> {
    try {
      console.log(
        `🎯 Fetching channel videos with filters: ${YOUTUBE_CONFIG.MIN_VIDEO_DURATION} seconds minimum, ${YOUTUBE_CONFIG.MIN_PUBLISH_YEAR}+ only`
      );
      // First, get the uploads playlist ID
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
      );

      if (!channelResponse.ok) {
        throw new Error(
          `Failed to fetch channel: ${channelResponse.statusText}`
        );
      }

      const channelData = await channelResponse.json();

      if (!channelData.items || channelData.items.length === 0) {
        throw new Error("Channel not found");
      }

      const uploadsPlaylistId =
        channelData.items[0].contentDetails.relatedPlaylists.uploads;

      // Get maximum allowed videos per request (50 is YouTube API limit)
      const maxPerRequest = 50;

      // Then, get the videos from the uploads playlist
      // Fetch all videos using pagination
      let allPlaylistItems = [];
      let nextPageToken = undefined;
      
      do {
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxPerRequest}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}&key=${YOUTUBE_API_KEY}`
        );

        if (!playlistResponse.ok) {
          throw new Error(`Failed to fetch playlist: ${playlistResponse.statusText}`);
        }

        const playlistData = await playlistResponse.json();
        allPlaylistItems.push(...playlistData.items);
        nextPageToken = playlistData.nextPageToken;
      } while (nextPageToken);

      // Get video details including duration and view count
      const videoIds = allPlaylistItems
        .map((item) => item.snippet.resourceId.videoId)
        .join(",");

      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details: ${videoDetailsResponse.statusText}`
        );
      }

      const videoDetailsData: YouTubeApiResponse =
        await videoDetailsResponse.json();

      // Combine playlist data with video details and filter out shorts
      const allVideos: YouTubeVideo[] = allPlaylistItems.map(
        (item, index) => {
          const videoDetail = videoDetailsData.items[index];
          const duration = videoDetail?.contentDetails?.duration
            ? this.formatDuration(videoDetail.contentDetails.duration)
            : undefined;

          return {
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            duration,
            viewCount: videoDetail?.statistics?.viewCount,
          };
        }
      );

      // Log all videos before filtering
      console.log('📼 All videos before filtering:', allVideos.map(v => ({
        title: v.title,
        date: new Date(v.publishedAt).toLocaleDateString(),
        duration: v.duration,
        url: `https://www.youtube.com/watch?v=${v.id}`
      })));
      console.log(`Total videos found: ${allVideos.length}`);

      // Filter videos with "Episode" or "Ep." in title
      const episodeVideos = allVideos.filter(video => 
        video.title.includes('Episode') || video.title.includes('Ep.')
      );
      console.log('🎙️ Videos with "Episode" or "Ep." in title:', episodeVideos.map(v => ({
        title: v.title,
        date: new Date(v.publishedAt).toLocaleDateString(),
        duration: v.duration,
        url: `https://www.youtube.com/watch?v=${v.id}`
      })));
      console.log(`Total episode videos: ${episodeVideos.length}`);

      // Filter out YouTube Shorts and sort by publish date
      let filteredVideos = allVideos;

      // Apply shorts filter if enabled
      if (YOUTUBE_CONFIG.FILTER_SHORTS) {
        filteredVideos = filteredVideos.filter((video) => {
          // Skip videos without duration info
          if (!video.duration) return true;

          // Parse duration to check if it's a short
          const durationParts = video.duration.split(":");
          const minutes = parseInt(durationParts[0] || "0");
          const seconds = parseInt(durationParts[1] || "0");
          const totalSeconds = minutes * 60 + seconds;

          // Filter out videos under the minimum duration (YouTube Shorts)
          return totalSeconds >= YOUTUBE_CONFIG.MIN_VIDEO_DURATION;
        });
      }

      // Apply date filter if enabled
      if (YOUTUBE_CONFIG.FILTER_OLD_VIDEOS) {
        filteredVideos = filteredVideos.filter((video) => {
          const publishYear = new Date(video.publishedAt).getFullYear();
          const isRecentEnough = publishYear >= YOUTUBE_CONFIG.MIN_PUBLISH_YEAR;

          if (!isRecentEnough) {
            console.log(
              `📅 Channel: Filtered out old video: "${video.title.substring(0, 50)}..." (published ${publishYear})`
            );
          }

          return isRecentEnough;
        });
      }

      // Sort by publish date (newest first) and limit results
      filteredVideos = filteredVideos
        .sort((a, b) => {
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        })
        .slice(0, maxResults);

      // Debug logging to verify sorting and filtering
      console.log(
        "📅 Channel videos - Sorted episodes by date (newest first):",
        filteredVideos.map((v) => ({
          title: v.title.substring(0, 50) + "...",
          date: new Date(v.publishedAt).toLocaleDateString(),
          duration: v.duration,
        }))
      );

      return filteredVideos;
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      throw error;
    }
  }

  static async searchVideos(
    query: string,
    maxResults: number = 10
  ): Promise<YouTubeVideo[]> {
    try {
      // Get more videos initially to filter out shorts
      const initialMaxResults = Math.max(maxResults * 3, 30);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${initialMaxResults}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Failed to search videos: ${response.statusText}`);
      }

      const data = await response.json();

      // Get video details including duration and view count
      const videoIds = data.items.map((item: any) => item.id.videoId).join(",");

      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details: ${videoDetailsResponse.statusText}`
        );
      }

      const videoDetailsData: YouTubeApiResponse =
        await videoDetailsResponse.json();

      const allVideos: YouTubeVideo[] = data.items.map(
        (item: any, index: number) => {
          const videoDetail = videoDetailsData.items[index];
          const duration = videoDetail?.contentDetails?.duration
            ? this.formatDuration(videoDetail.contentDetails.duration)
            : undefined;

          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            duration,
            viewCount: videoDetail?.statistics?.viewCount,
          };
        }
      );

      // Filter out YouTube Shorts and sort by publish date
      let filteredVideos = allVideos;

      // Apply shorts filter if enabled
      if (YOUTUBE_CONFIG.FILTER_SHORTS) {
        filteredVideos = filteredVideos.filter((video) => {
          // Skip videos without duration info
          if (!video.duration) return true;

          // Parse duration to check if it's a short
          const durationParts = video.duration.split(":");
          const minutes = parseInt(durationParts[0] || "0");
          const seconds = parseInt(durationParts[1] || "0");
          const totalSeconds = minutes * 60 + seconds;

          // Filter out videos under the minimum duration (YouTube Shorts)
          return totalSeconds >= YOUTUBE_CONFIG.MIN_VIDEO_DURATION;
        });
      }

      // Apply date filter if enabled
      if (YOUTUBE_CONFIG.FILTER_OLD_VIDEOS) {
        filteredVideos = filteredVideos.filter((video) => {
          const publishYear = new Date(video.publishedAt).getFullYear();
          const isRecentEnough = publishYear >= YOUTUBE_CONFIG.MIN_PUBLISH_YEAR;

          if (!isRecentEnough) {
            console.log(
              `📅 Search: Filtered out old video: "${video.title.substring(0, 50)}..." (published ${publishYear})`
            );
          }

          return isRecentEnough;
        });
      }

      // Sort by publish date (newest first) and limit results
      filteredVideos = filteredVideos
        .sort((a, b) => {
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        })
        .slice(0, maxResults);

      // Debug logging to verify sorting and filtering
      console.log(
        "📅 Search videos - Sorted episodes by date (newest first):",
        filteredVideos.map((v) => ({
          title: v.title.substring(0, 50) + "...",
          date: new Date(v.publishedAt).toLocaleDateString(),
          duration: v.duration,
        }))
      );

      return filteredVideos;
    } catch (error) {
      console.error("Error searching YouTube videos:", error);
      throw error;
    }
  }

  static async getVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
    try {
      console.log(`🎯 Fetching video details for ID: ${videoId}`);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch video details: ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        console.log(`❌ No video found with ID: ${videoId}`);
        return null;
      }

      const video = data.items[0];
      const duration = video.contentDetails?.duration
        ? this.formatDuration(video.contentDetails.duration)
        : undefined;

      // Extract topics and key takeaways from description
      const { topics, keyTakeaways } = this.extractContentFromDescription(
        video.snippet.description
      );

      // Check for captions
      const captionInfo = await this.getCaptionInfo(videoId);

      const videoData: YouTubeVideo = {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        publishedAt: video.snippet.publishedAt,
        thumbnails: video.snippet.thumbnails,
        duration,
        viewCount: video.statistics?.viewCount,
        tags: video.snippet.tags || [],
        categoryId: video.snippet.categoryId,
        defaultLanguage: video.snippet.defaultLanguage,
        defaultAudioLanguage: video.snippet.defaultAudioLanguage,
        topics,
        keyTakeaways,
        hasCaptions: captionInfo.hasCaptions,
        captionLanguages: captionInfo.languages,
      };

      console.log(`✅ Successfully fetched video: "${videoData.title}"`);
      return videoData;
    } catch (error) {
      console.error("Error fetching video details:", error);
      throw error;
    }
  }

  private static async getCaptionInfo(
    videoId: string
  ): Promise<{ hasCaptions: boolean; languages: string[] }> {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        // If captions endpoint fails, assume no captions
        return { hasCaptions: false, languages: [] };
      }

      const data = await response.json();
      const hasCaptions = data.items && data.items.length > 0;
      const languages = hasCaptions
        ? data.items.map((item: any) => item.snippet.language).filter(Boolean)
        : [];

      return { hasCaptions, languages };
    } catch (error) {
      console.log("Could not fetch caption info:", error);
      return { hasCaptions: false, languages: [] };
    }
  }

  private static extractContentFromDescription(description: string): {
    topics: string[];
    keyTakeaways: string[];
  } {
    const topics: string[] = [];
    const keyTakeaways: string[] = [];

    // Extract topics from common patterns in podcast descriptions
    const topicPatterns = [
      /topics?[:\s]+([^.\n]+)/gi,
      /discuss(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /cover(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /focus(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /about[:\s]+([^.\n]+)/gi,
      /explor(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /dive\s+(?:into|deep)[:\s]+([^.\n]+)/gi,
    ];

    // Extract key takeaways from common patterns
    const takeawayPatterns = [
      /key\s+(?:takeaways?|points?|insights?)[:\s]+([^.\n]+)/gi,
      /main\s+(?:points?|takeaways?)[:\s]+([^.\n]+)/gi,
      /learn(?:ing)?[:\s]+([^.\n]+)/gi,
      /understand(?:ing)?[:\s]+([^.\n]+)/gi,
      /discuss(?:ing|ed)?[:\s]+([^.\n]+)/gi,
    ];

    // Extract topics
    topicPatterns.forEach((pattern) => {
      const matches = description.matchAll(pattern);
      for (const match of matches) {
        if (match[1]) {
          const topic = match[1].trim();
          if (topic && !topics.includes(topic)) {
            topics.push(topic);
          }
        }
      }
    });

    // Extract key takeaways
    takeawayPatterns.forEach((pattern) => {
      const matches = description.matchAll(pattern);
      for (const match of matches) {
        if (match[1]) {
          const takeaway = match[1].trim();
          if (takeaway && !keyTakeaways.includes(takeaway)) {
            keyTakeaways.push(takeaway);
          }
        }
      }
    });

    // If no specific topics found, try to extract from title and description
    if (topics.length === 0) {
      const commonTopics = [
        "Cybersecurity",
        "AI Security",
        "Ransomware",
        "Data Protection",
        "Network Security",
        "Cloud Security",
        "Incident Response",
        "Threat Intelligence",
        "Security Awareness",
        "Compliance",
        "Risk Management",
        "Penetration Testing",
        "Vulnerability Management",
        "Conversational AI",
        "Artificial Intelligence",
        "Machine Learning",
        "Hybrid Warfare",
        "Personal Security",
        "Digital Privacy",
        "Online Safety",
        "Smart Risk Management",
        "Business Protection",
      ];

      const descriptionLower = description.toLowerCase();

      commonTopics.forEach((topic) => {
        if (descriptionLower.includes(topic.toLowerCase())) {
          if (!topics.includes(topic)) {
            topics.push(topic);
          }
        }
      });

      // If still no topics, try to extract from the first few sentences
      if (topics.length === 0) {
        const sentences = description.split(/[.!?]+/).slice(0, 2);
        sentences.forEach((sentence) => {
          const cleanSentence = sentence.trim();
          if (cleanSentence.length > 10 && cleanSentence.length < 100) {
            topics.push(cleanSentence);
          }
        });
      }
    }

    // If no key takeaways found, generate some from the description
    if (keyTakeaways.length === 0) {
      const sentences = description
        .split(/[.!?]+/)
        .filter((s) => s.trim().length > 20);
      const relevantSentences = sentences.slice(0, 3); // Take first 3 relevant sentences

      relevantSentences.forEach((sentence) => {
        const cleanSentence = sentence.trim();
        if (cleanSentence && !keyTakeaways.includes(cleanSentence)) {
          keyTakeaways.push(cleanSentence);
        }
      });
    }

    return { topics, keyTakeaways };
  }
}

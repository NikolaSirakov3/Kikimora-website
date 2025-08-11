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
    channelId: string,
    maxResults: number = 10
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

      // Get more videos initially to filter out shorts
      const initialMaxResults = Math.max(maxResults * 3, 30); // Get more videos to filter

      // Then, get the videos from the uploads playlist
      const playlistResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${initialMaxResults}&key=${YOUTUBE_API_KEY}`
      );

      if (!playlistResponse.ok) {
        throw new Error(
          `Failed to fetch playlist: ${playlistResponse.statusText}`
        );
      }

      const playlistData: YouTubeApiResponse = await playlistResponse.json();

      // Get video details including duration and view count
      const videoIds = playlistData.items
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
      const allVideos: YouTubeVideo[] = playlistData.items.map(
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
}

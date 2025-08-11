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

      // Then, get the videos from the uploads playlist
      const playlistResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
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

      // Combine playlist data with video details
      const videos: YouTubeVideo[] = playlistData.items.map((item, index) => {
        const videoDetail = videoDetailsData.items[index];
        return {
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnails: item.snippet.thumbnails,
          duration: videoDetail?.contentDetails?.duration
            ? this.formatDuration(videoDetail.contentDetails.duration)
            : undefined,
          viewCount: videoDetail?.statistics?.viewCount,
        };
      });

      return videos;
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
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
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

      const videos: YouTubeVideo[] = data.items.map(
        (item: any, index: number) => {
          const videoDetail = videoDetailsData.items[index];
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            duration: videoDetail?.contentDetails?.duration
              ? this.formatDuration(videoDetail.contentDetails.duration)
              : undefined,
            viewCount: videoDetail?.statistics?.viewCount,
          };
        }
      );

      return videos;
    } catch (error) {
      console.error("Error searching YouTube videos:", error);
      throw error;
    }
  }
}

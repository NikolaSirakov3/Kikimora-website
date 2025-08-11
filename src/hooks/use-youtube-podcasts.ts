import { useState, useEffect } from "react";
import { YouTubeApiService, YouTubeVideo } from "../lib/youtube-api";

interface UseYouTubePodcastsOptions {
  channelId?: string;
  searchQuery?: string;
  maxResults?: number;
  autoFetch?: boolean;
}

interface UseYouTubePodcastsReturn {
  episodes: YouTubeVideo[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useYouTubePodcasts({
  channelId,
  searchQuery,
  maxResults,
  autoFetch = true,
}: UseYouTubePodcastsOptions = {}): UseYouTubePodcastsReturn {
  const [episodes, setEpisodes] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEpisodes = async () => {
    if (!channelId && !searchQuery) {
      setError("Either channelId or searchQuery must be provided");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let videos: YouTubeVideo[];

      if (channelId) {
        videos = await YouTubeApiService.getChannelVideos(channelId);
      } else if (searchQuery) {
        videos = await YouTubeApiService.searchVideos(searchQuery);
      } else {
        throw new Error("No channel ID or search query provided");
      }

      setEpisodes(videos);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch episodes";
      setError(errorMessage);
      console.error("Error fetching YouTube episodes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchEpisodes();
    }
  }, [channelId, searchQuery, maxResults, autoFetch]);

  return {
    episodes,
    loading,
    error,
    refetch: fetchEpisodes,
  };
}

import { format } from "date-fns";
import { useYouTubePodcasts } from "../../hooks/use-youtube-podcasts";
import { YOUTUBE_CONFIG } from "../../lib/youtube-config";

export function YouTubePodcastExample() {
  // Example 1: Fetch by channel ID (your actual channel)
  const {
    episodes: channelEpisodes,
    loading: channelLoading,
    error: channelError,
  } = useYouTubePodcasts({
    channelId: "UCfW3aw7jTQwqepbcE3etsTw", // Your actual channel ID
    maxResults: 5,
    autoFetch: false, // Set to false to prevent automatic fetching
  });

  // Example 2: Search by query
  const {
    episodes: searchEpisodes,
    loading: searchLoading,
    error: searchError,
  } = useYouTubePodcasts({
    searchQuery: YOUTUBE_CONFIG.SEARCH_QUERIES.PODCAST,
    maxResults: 5,
    autoFetch: true,
  });

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">
        YouTube API Integration Examples
      </h1>

      {/* Channel-based fetching */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Channel-based Episodes</h2>
        {channelLoading && <p>Loading channel episodes...</p>}
        {channelError && <p className="text-red-400">Error: {channelError}</p>}
        {channelEpisodes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channelEpisodes.map((episode) => (
              <div key={episode.id} className="bg-gray-800 rounded-lg p-4">
                <img
                  src={episode.thumbnails.medium.url}
                  alt={episode.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {format(new Date(episode.publishedAt), "MMM dd, yyyy")}
                </p>
                {episode.duration && (
                  <p className="text-sm text-gray-400">{episode.duration}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search-based fetching */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Search-based Episodes</h2>
        {searchLoading && <p>Loading search results...</p>}
        {searchError && <p className="text-red-400">Error: {searchError}</p>}
        {searchEpisodes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchEpisodes.map((episode) => (
              <div key={episode.id} className="bg-gray-800 rounded-lg p-4">
                <img
                  src={episode.thumbnails.medium.url}
                  alt={episode.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {format(new Date(episode.publishedAt), "MMM dd, yyyy")}
                </p>
                {episode.duration && (
                  <p className="text-sm text-gray-400">{episode.duration}</p>
                )}
                {episode.viewCount && (
                  <p className="text-sm text-gray-400">
                    {parseInt(episode.viewCount).toLocaleString()} views
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Configuration info */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Configuration</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>API Key:</strong> {YOUTUBE_CONFIG.API_KEY.substring(0, 10)}
            ...
          </p>
          <p>
            <strong>Channel ID:</strong> {YOUTUBE_CONFIG.CHANNEL_ID}
          </p>
          <p>
            <strong>Search Query:</strong>{" "}
            {YOUTUBE_CONFIG.SEARCH_QUERIES.PODCAST}
          </p>
          <p>
            <strong>Max Results:</strong> {YOUTUBE_CONFIG.DEFAULT_MAX_RESULTS}
          </p>
        </div>
      </div>
    </div>
  );
}

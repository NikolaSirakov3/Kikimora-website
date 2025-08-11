// YouTube API Configuration
export const YOUTUBE_CONFIG = {
  API_KEY: "AIzaSyDr3LCBlyjg6WfWYVt-jAWQPcDDTmXOyPs",
  // Your actual channel ID
  CHANNEL_ID: "UCfW3aw7jTQwqepbcE3etsTw",
  // Your channel handle
  CHANNEL_HANDLE: "@socyberbg",
  // Common search queries for your podcast
  SEARCH_QUERIES: {
    PODCAST: "White Hat Riddles Podcast SoCyber",
    CYBERSECURITY: "SoCyber cybersecurity",
    WHITE_HAT_RIDDLES: "White Hat Riddles",
  },
  // Default settings
  DEFAULT_MAX_RESULTS: 10,
  DEFAULT_ORDER: "date" as const, // 'date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'
};

// Helper function to get channel ID from channel URL
export function extractChannelId(channelUrl: string): string | null {
  const patterns = [
    /youtube\.com\/channel\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/c\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/user\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/@([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = channelUrl.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

// Helper function to validate YouTube API key
export function validateApiKey(apiKey: string): boolean {
  return apiKey.length > 0 && apiKey.startsWith("AIza");
}

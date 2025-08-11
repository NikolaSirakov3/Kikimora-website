# YouTube API Integration for Podcast Episodes

This document explains how to use the YouTube API integration to fetch podcast episodes dynamically.

## Setup

### 1. API Key Configuration

The YouTube API key is already configured in `src/lib/youtube-config.ts`:

```typescript
export const YOUTUBE_CONFIG = {
  API_KEY: "AIzaSyDr3LCBlyjg6WfWYVt-jAWQPcDDTmXOyPs",
  CHANNEL_ID: "UC_SoCyber", // Replace with your actual channel ID
  // ... other config
};
```

### 2. Getting Your Channel ID

To get your YouTube channel ID:

1. Go to your YouTube channel
2. Look at the URL: `https://www.youtube.com/channel/UC_SoCyber`
3. The channel ID is the part after `/channel/` (e.g., `UC_SoCyber`)

Alternatively, you can use the helper function:

```typescript
import { extractChannelId } from "../lib/youtube-config";

const channelId = extractChannelId(
  "https://www.youtube.com/channel/UC_SoCyber"
);
```

## Usage

### Basic Usage with Hook

```typescript
import { useYouTubePodcasts } from '../hooks/use-youtube-podcasts';

function MyComponent() {
  const { episodes, loading, error } = useYouTubePodcasts({
    searchQuery: "White Hat Riddles Podcast SoCyber",
    maxResults: 10
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {episodes.map(episode => (
        <div key={episode.id}>
          <h3>{episode.title}</h3>
          <img src={episode.thumbnails.medium.url} alt={episode.title} />
          <p>{episode.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Fetch by Channel ID

```typescript
const { episodes, loading, error } = useYouTubePodcasts({
  channelId: "UC_SoCyber",
  maxResults: 10,
});
```

### Search by Query

```typescript
const { episodes, loading, error } = useYouTubePodcasts({
  searchQuery: "White Hat Riddles Podcast",
  maxResults: 10,
});
```

### Manual Fetching

```typescript
const { episodes, loading, error, refetch } = useYouTubePodcasts({
  searchQuery: "White Hat Riddles Podcast",
  autoFetch: false, // Don't fetch automatically
});

// Fetch manually when needed
const handleRefresh = () => {
  refetch();
};
```

## API Service

You can also use the API service directly:

```typescript
import { YouTubeApiService } from "../lib/youtube-api";

// Get channel videos
const videos = await YouTubeApiService.getChannelVideos("UC_SoCyber", 10);

// Search videos
const searchResults = await YouTubeApiService.searchVideos(
  "White Hat Riddles Podcast",
  10
);
```

## Data Structure

Each episode object contains:

```typescript
interface YouTubeVideo {
  id: string; // YouTube video ID
  title: string; // Video title
  description: string; // Video description
  publishedAt: string; // ISO date string
  thumbnails: {
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
  duration?: string; // Formatted duration (e.g., "1:23:45")
  viewCount?: string; // Number of views
}
```

## Error Handling

The integration includes comprehensive error handling:

- **API Key Issues**: Invalid or missing API key
- **Channel Not Found**: Invalid channel ID
- **Rate Limiting**: YouTube API quota exceeded
- **Network Errors**: Connection issues

## Fallback Data

The `SoCyberPodcast` component includes fallback data that will be used if the YouTube API fails:

```typescript
const podcastEpisodes = episodes.length > 0 ? episodes : fallbackEpisodes;
```

## Configuration Options

### Search Queries

Predefined search queries in `youtube-config.ts`:

```typescript
SEARCH_QUERIES: {
  PODCAST: 'White Hat Riddles Podcast SoCyber',
  CYBERSECURITY: 'SoCyber cybersecurity',
  WHITE_HAT_RIDDLES: 'White Hat Riddles'
}
```

### Filter Settings

You can customize the filtering behavior:

```typescript
// Filter settings
FILTER_SHORTS: true, // Filter out videos under 5 minutes
MIN_VIDEO_DURATION: 300, // Minimum duration in seconds (5 minutes = 300 seconds)
FILTER_OLD_VIDEOS: true, // Filter out videos published before 2025
MIN_PUBLISH_YEAR: 2025, // Minimum publish year
```

To disable filtering:

- Set `FILTER_SHORTS: false` to include short videos
- Set `FILTER_OLD_VIDEOS: false` to include older videos

### API Limits

- **Default max results**: 10 videos
- **Maximum allowed**: 50 videos per request
- **Rate limit**: 10,000 units per day (free tier)

### Filtering Options

- **Shorts Filtering**: Automatically filters out videos under 5 minutes
- **Date Filtering**: Automatically filters out videos published before 2025
- **Sorting**: Episodes are sorted by publish date (newest first)
- **Configurable**: You can adjust the minimum video duration and publish year in the config file

## Security Notes

1. **API Key Protection**: The API key is currently in the client-side code. For production, consider:

   - Moving API calls to a backend service
   - Using environment variables
   - Implementing proper CORS policies

2. **Rate Limiting**: Monitor your API usage to avoid hitting quotas

## Troubleshooting

### Common Issues

1. **"Channel not found" error**

   - Verify your channel ID is correct
   - Ensure the channel is public

2. **"API key not valid" error**

   - Check if the API key is correct
   - Verify YouTube Data API v3 is enabled in Google Cloud Console

3. **No results returned**
   - Try different search queries
   - Check if videos are public
   - Verify channel has uploaded videos

### Debug Mode

Enable debug logging by checking the browser console for detailed error messages.

## Example Components

- `SoCyberPodcast.tsx` - Main podcast component with YouTube integration
- `YouTubePodcastExample.tsx` - Example showing different usage patterns

## Next Steps

1. Replace `UC_SoCyber` with your actual channel ID
2. Test the integration with your channel
3. Customize the search queries for your content
4. Consider implementing caching for better performance
5. Add pagination for large video collections

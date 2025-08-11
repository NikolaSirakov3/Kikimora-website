import { YOUTUBE_CONFIG } from "./youtube-config";

export async function getChannelIdFromHandle(
  handle: string
): Promise<string | null> {
  try {
    // Remove @ if present
    const cleanHandle = handle.startsWith("@") ? handle.slice(1) : handle;

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${cleanHandle}&type=channel&key=${YOUTUBE_CONFIG.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to search for channel: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0].snippet.channelId;
    }

    return null;
  } catch (error) {
    console.error("Error getting channel ID from handle:", error);
    return null;
  }
}

export async function getChannelInfo(channelId: string) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_CONFIG.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to get channel info: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0];
    }

    return null;
  } catch (error) {
    console.error("Error getting channel info:", error);
    return null;
  }
}

// Function to help you find your channel ID
export async function findYourChannelId(): Promise<void> {
  console.log("🔍 Searching for your channel ID...");

  // Try with your handle
  const channelId = await getChannelIdFromHandle(YOUTUBE_CONFIG.CHANNEL_HANDLE);

  if (channelId) {
    console.log("✅ Found your channel ID:", channelId);

    // Get more info about the channel
    const channelInfo = await getChannelInfo(channelId);
    if (channelInfo) {
      console.log("📺 Channel Info:", {
        title: channelInfo.snippet.title,
        description: channelInfo.snippet.description,
        subscriberCount: channelInfo.statistics?.subscriberCount,
        videoCount: channelInfo.statistics?.videoCount,
        viewCount: channelInfo.statistics?.viewCount,
      });
    }

    console.log("💡 Update your config file with this channel ID!");
  } else {
    console.log(
      "❌ Could not find channel ID. Please check your handle or try Method 1/2 above."
    );
  }
}

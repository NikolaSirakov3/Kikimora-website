import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Play, ChevronDown, ExternalLink, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { YouTubeApiService, YouTubeVideo } from "../lib/youtube-api";

export function PodcastEpisodePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(true);
  const [episodeData, setEpisodeData] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      navigate("/podcasts");
      return;
    }

    const fetchEpisodeData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch specific video data from YouTube API
        const videoData = await YouTubeApiService.getVideoDetails(id);

        if (videoData) {
          setEpisodeData(videoData);
        } else {
          setError("Episode not found");
        }
      } catch (err) {
        console.error("Error fetching episode data:", err);
        setError("Failed to load episode data");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodeData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw] flex items-center justify-center">
        <div className="text-white text-xl">Loading episode...</div>
      </div>
    );
  }

  if (error || !episodeData) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">
            {error || "Episode not found"}
          </div>
          <button
            onClick={() => navigate("/podcasts")}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Podcasts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Episode Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {episodeData.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {format(new Date(episodeData.publishedAt), "MMMM dd, yyyy")}
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{episodeData.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* YouTube Video Player */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={
                    episodeData.thumbnails?.high?.url ||
                    episodeData.thumbnails?.medium?.url
                  }
                  alt={episodeData.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a
                    href={`https://youtu.be/${episodeData.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors relative"
                  >
                    <Play size={20} className="text-white ml-1 absolute" />
                  </a>
                  <a
                    href={`https://youtu.be/${episodeData.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-blue-400 transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Episode Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Episode Description
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {episodeData.description}
              </p>
            </div>

            {/* Key Takeaways - AI Generated Section */}
            {episodeData.keyTakeaways && episodeData.keyTakeaways.length > 0 ? (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Key Takeaways
                </h2>
                <ul className="space-y-2">
                  {episodeData.keyTakeaways.map(
                    (takeaway: string, index: number) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{takeaway}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Key Takeaways (AI-Generated)
                </h2>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    AI-generated key takeaways will be available here. This
                    feature analyzes the episode content to extract the most
                    important points and insights.
                  </p>
                </div>
              </div>
            )}

            {/* Full Interactive Transcript */}
            <div className="mb-8">
              <button
                onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                className="flex items-center gap-2 text-xl font-semibold text-white mb-4 hover:text-gray-300 transition-colors"
              >
                Full Interactive Transcript
                <ChevronDown
                  size={20}
                  className={`transition-transform ${isTranscriptOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isTranscriptOpen && (
                <div className="bg-gray-800 rounded-lg p-4">
                  {episodeData.hasCaptions ? (
                    <div className="space-y-3">
                      <p className="text-gray-300">
                        This episode has captions available in the following
                        languages:
                        <span className="text-blue-400 ml-2">
                          {episodeData.captionLanguages?.join(", ") ||
                            "English"}
                        </span>
                      </p>
                      <a
                        href={`https://youtu.be/${episodeData.id}?t=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>View transcript on YouTube</span>
                      </a>
                      <p className="text-gray-400 text-sm">
                        Click the link above to view the interactive transcript
                        with timestamps on YouTube.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-gray-300">
                        This episode doesn't have captions available yet.
                      </p>
                      <a
                        href={`https://youtu.be/${episodeData.id}?t=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Check for captions on YouTube</span>
                      </a>
                      <p className="text-gray-400 text-sm">
                        YouTube may generate automatic captions. Click the link
                        above to check.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

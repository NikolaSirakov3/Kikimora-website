import { Play, ExternalLink } from "lucide-react";

interface Episode {
  id: string;
  episodeNumber: string;
  category: string;
  title: string;
  description: string;
  thumbnail?: string;
}

interface PopularEpisodesSectionProps {
  episodes: Episode[];
  onViewDetails?: (episodeId: string) => void;
  onPlay?: (episodeId: string) => void;
}

export function PopularEpisodesSection({
  episodes,
  onViewDetails,
  onPlay,
}: PopularEpisodesSectionProps) {
  return (
    <section className="w-full bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Popular Episodes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors"
            >
              {/* Thumbnail Area */}
              <div className="h-32 bg-black flex items-center justify-center">
                {episode.thumbnail ? (
                  <img
                    src={episode.thumbnail}
                    alt={`Episode ${episode.episodeNumber}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-white">
                    Ep {episode.episodeNumber}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                    {episode.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {episode.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {episode.description}
                </p>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onViewDetails?.(episode.id)}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </button>

                  <button
                    onClick={() => onPlay?.(episode.id)}
                    className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Play size={16} className="text-white ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

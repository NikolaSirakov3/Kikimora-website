import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Play, Download, ChevronDown } from "lucide-react";

export function PodcastEpisodePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(true);

  // Mock data for the episode
  const episodeData = {
    episodeNumber: id || "42",
    title: "The Future of Artificial Intelligence with Dr. Evelyn Reed",
    date: "2025-07-21",
    duration: "58:32",
    speaker: {
      name: "Dr. Evelyn Reed",
      role: "Lead AI Researcher at FutureScape Labs",
      initials: "ER",
    },
    topics: ["AI", "Machine Learning", "Ethics"],
    keyTakeaways: [
      "Neural networks mimic the human brain to learn from data.",
      "AI ethics focuses on fairness and eliminating bias in current algorithms.",
      "Personalized medicine is a key frontier for AI application.",
      "Human-centric design is crucial for augmenting human capabilities, not replacing them.",
    ],
    transcript: [
      {
        time: "00:00",
        text: 'Welcome back to "Future Forward." Today, we have a very special guest, Dr. Evelyn Reed.',
      },
      {
        time: "02:05",
        text: "The core concept of a neural network is to mimic the human brain's structure, allowing it to learn from vast amounts of data.",
      },
      {
        time: "05:50",
        text: "When we talk about AI ethics, it's not just about preventing doomsday scenarios; it's about ensuring fairness and eliminating bias in algorithms that make decisions today.",
      },
      {
        time: "14:52",
        text: "One of the most exciting frontiers is personalized medicine, where AI can predict diseases based on genetic markers.",
      },
      {
        time: "25:30",
        text: "The key is to approach AI development with a human-centric perspective. It's a tool to augment our capabilities, not replace them entirely.",
      },
    ],
    relatedEpisodes: [
      {
        id: "ep41",
        number: "41",
        title: "Sustainable Cities: A Blueprint for Urban Innovation",
      },
      {
        id: "ep40",
        number: "40",
        title: "The Psychology of Creativity and Flow States",
      },
      {
        id: "ep39",
        number: "39",
        title: "Decentralized Finance: Beyond the Hype",
      },
    ],
  };

  const handleRelatedEpisodeClick = (episodeId: string) => {
    navigate(`/podcast/${episodeId}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Episode Header */}
        <div className="mb-8 text-center">
          <div className="text-sm text-gray-400 mb-2">
            Episode {episodeData.episodeNumber}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {episodeData.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <span>{episodeData.date}</span>
            <span>•</span>
            <span>{episodeData.duration}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Interactive Waveform Player */}
            <div className="bg-gray-800 rounded-lg p-6 mb-80">
              <div className="h-6 bg-gray-700 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">
                  Interactive Waveform Player
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors relative">
                    <Play size={20} className="text-white ml-1 absolute" />
                  </button>
                  <span className="text-white text-sm">1x</span>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Key Takeaways (AI-Generated)
              </h2>
              <ul className="space-y-2">
                {episodeData.keyTakeaways.map((takeaway, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-start gap-3"
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                <div className="space-y-4">
                  {episodeData.transcript.map((segment, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-blue-400 font-mono text-sm min-w-[60px]">
                        [{segment.time}]
                      </span>
                      <p className="text-gray-300 flex-1">{segment.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-180 space-y-6">
            {/* Episode Thumbnail */}
            <div className="bg-gray-800 rounded-lg h-[50vh] w-[50vh] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Ep {episodeData.episodeNumber}
              </span>
            </div>

            {/* Speaker Information */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {episodeData.speaker.initials}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {episodeData.speaker.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {episodeData.speaker.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {episodeData.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary text-white text-sm rounded-full hover:bg-primary/90 cursor-pointer transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* You Might Also Like */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-4">
                You Might Also Like
              </h3>
              <div className="space-y-3">
                {episodeData.relatedEpisodes.map((episode) => (
                  <div
                    key={episode.id}
                    onClick={() => handleRelatedEpisodeClick(episode.id)}
                    className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
                  >
                    <div className="text-blue-400 text-sm font-semibold">
                      Ep {episode.number}
                    </div>
                    <div className="text-white text-sm">{episode.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

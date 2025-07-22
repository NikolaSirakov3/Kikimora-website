import { Play, ExternalLink } from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export function AllEpisodesSection() {
  const handleViewShowNotes = () => {
    console.log("View Full Show Notes clicked");
  };

  const handlePlayEpisode = () => {
    console.log("Play episode clicked");
  };

  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  return (
    <section className="w-full bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-white mb-8">All Episodes</h2>

        {/* Episode Card */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Episode Thumbnail */}
            <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">Ep 39</span>
            </div>

            {/* Episode Details */}
            <div className="flex-1 space-y-4">
              {/* Date and Episode Number */}
              <div className="text-gray-400 text-sm">2025-06-30 • Ep. 39</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400">
                Decentralized Finance: Beyond the Hype
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                We cut through the noise of cryptocurrencies to explore the
                foundational technology of DeFi and its potential to reshape
                global finance.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                  DeFi
                </span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                  Blockchain
                </span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                  Finance
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleViewShowNotes}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Full Show Notes
                </button>

                <button
                  onClick={handlePlayEpisode}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Play size={16} className="text-white ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              Get new episodes & exclusive content in your inbox.
            </p>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                defaultValue="your.email@example.com"
                className="flex-1 md:w-64 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm border border-gray-600 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
          {/* Future Forward */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">
              Future Forward
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring tomorrow's world, today. Join us as we dive into
              technology, society, and the human potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Episodes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About the Host
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

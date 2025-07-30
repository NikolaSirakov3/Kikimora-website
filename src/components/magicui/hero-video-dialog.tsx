import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

interface HeroVideoDialogProps {
  className?: string;
  animationStyle?: "top-in-bottom-out" | "fade" | "scale";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

const HeroVideoDialog: React.FC<HeroVideoDialogProps> = ({
  className = "",
  animationStyle = "top-in-bottom-out",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getAnimationVariants = () => {
    switch (animationStyle) {
      case "top-in-bottom-out":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        };
      default:
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
        };
    }
  };

  return (
    <>
      {/* Thumbnail with Play Button */}
      <div
        className={`relative cursor-pointer group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/50 transition-colors">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video"
              variants={getAnimationVariants()}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video iframe */}
              <iframe
                src={videoSrc}
                className="w-full h-full rounded-lg"
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroVideoDialog;

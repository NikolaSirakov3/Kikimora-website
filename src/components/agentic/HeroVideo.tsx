import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const HeroVideo = () => {
  return (
    <div className="flex-1 max-w-2xl shadow-2xl shadow-blue-500/10 rounded-lg overflow-hidden">
      <HeroVideoDialog
        className="block dark:hidden w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/b2S2vJ6PIgA"
        thumbnailSrc="https://res.cloudinary.com/dgbyqvq2k/image/upload/v1753851847/AgenticVideoThumb_poasqy.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/b2S2vJ6PIgA"
        thumbnailSrc="https://res.cloudinary.com/dgbyqvq2k/image/upload/v1753851847/AgenticVideoThumb_poasqy.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};

export default HeroVideo;

import { useState } from "react";
import { useParams } from "react-router-dom";
import colorAndBlack from "../assets/colorAndBlack.png";

export function PodcastEpisodePage() {
  const { id } = useParams<{ id: string }>();
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({
    chapter1: false,
    chapter2: false,
    chapter3: false,
    chapter4: false,
  });

  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  return (
    <section className="w-[99.1vw] xl:w-[99.1vw] min-h-screen bg-[#001E38] pt-[80px] pb-12 px-0">
      {/* Navigation Bar Offset with pt-[80px] */}
      <div className="flex flex-col items-center w-full mt-10">
        {/* Placeholder, Play Button, Waveform */}
        <div className="w-full max-w-[900px] mb-8 -ml-[15vw]">
          {/* Podcast Image Placeholder */}
          <div className="w-full aspect-[16/7] bg-[#1B2B3A] rounded-2xl mb-4 relative overflow-hidden max-w-[900px]">
            <img
              src={colorAndBlack}
              alt="Podcast Placeholder"
              className="object-cover w-full h-full rounded-2xl"
              style={{ maxWidth: 900 }}
            />
          </div>
          {/* Play Button and Waveform */}
          <div className="w-full flex flex-col items-center">
            <div className="w-full bg-[#6ED0FF] rounded-xl flex items-center px-6 py-4 mb-2">
              <button
                className="flex items-center gap-2 bg-[#1B2B3A] text-[#00E5BE] font-montserrat text-base focus:outline-none px-6 py-2 rounded-lg shadow-md font-bold"
                aria-label="Play podcast episode"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 32 32">
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#00E5BE"
                    fillOpacity="0.2"
                  />
                  <polygon points="13,10 23,16 13,22" fill="#00E5BE" />
                </svg>
              </button>
              {/* Waveform (vertical lines) */}
              <div className="flex items-end gap-[2px] h-6 ml-8">
                {[
                  8, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 14, 20,
                  12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18,
                  10, 16, 8, 14, 20, 12, 18, 10, 16, 14, 20, 12, 18, 10, 16, 8,
                  14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 8, 14, 20,
                  12, 18, 10, 16, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10,
                  16, 8, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 14,
                  20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12,
                  18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 14, 20, 12, 18, 10, 16,
                  8, 14, 20, 12, 18, 10, 16, 8, 14, 20, 12, 18, 10, 16, 8, 14,
                  20, 12, 18, 10, 16, 14, 20,
                ].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded bg-[#1B2B3A]"
                    style={{
                      height: `${h}px`,
                      opacity: 0.7 + 0.3 * (i % 2 ? 1 : 0),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Main Content and Timestamps stacked below */}
        <div className="flex flex-row items-start justify-between w-[1200px] gap-6">
          {/* Left Column - Main Content */}
          <div className="flex flex-col items-start w-[800px] gap-6">
            {/* Title */}
            <h1 className="text-white text-3xl mb-2 mt-2 tracking-wide text-left w-full">
              WHITE HAT RIDDLES - Episode {id}
            </h1>
            {/* Description */}
            <p className="text-white/90 font-montserrat text-base mb-4 w-full text-left">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            {/* Collapsible Chapter 1 */}
            <div className="flex flex-col items-start w-full mb-2">
              <div className="w-full">
                <button
                  className="flex items-center gap-2 text-[#fff]   text-xl focus:outline-none pl-0 py-2 rounded w-full text-left bg-transparent"
                  onClick={() => toggleChapter("chapter1")}
                  aria-expanded={openChapters.chapter1}
                  aria-controls="chapter1-content"
                >
                  <svg
                    className={`transition-transform duration-200 ${openChapters.chapter1 ? "rotate-90" : "rotate-0"}`}
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  CHAPTER 1: RANSOMWARE
                </button>
                {openChapters.chapter1 && (
                  <div
                    id="chapter1-content"
                    className="mt-3 text-white/80 font-montserrat text-base bg-transparent rounded-xl p-0"
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </div>
                )}
              </div>
            </div>

            {/* Collapsible Chapter 2 */}
            <div className="flex flex-col items-start w-full mb-2">
              <div className="w-full">
                <button
                  className="flex items-center gap-2 text-[#fff]   text-xl focus:outline-none pl-0 py-2 rounded w-full text-left bg-transparent"
                  onClick={() => toggleChapter("chapter2")}
                  aria-expanded={openChapters.chapter2}
                  aria-controls="chapter2-content"
                >
                  <svg
                    className={`transition-transform duration-200 ${openChapters.chapter2 ? "rotate-90" : "rotate-0"}`}
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  CHAPTER 2: PHISHING ATTACKS
                </button>
                {openChapters.chapter2 && (
                  <div
                    id="chapter2-content"
                    className="mt-3 text-white/80 font-montserrat text-base bg-transparent rounded-xl p-0"
                  >
                    Phishing attacks are becoming increasingly sophisticated.
                    Learn about the latest techniques used by attackers and how
                    to protect yourself and your organization from these
                    threats. Understanding the psychology behind phishing is
                    crucial for developing effective defense strategies.
                  </div>
                )}
              </div>
            </div>

            {/* Collapsible Chapter 3 */}
            <div className="flex flex-col items-start w-full mb-2">
              <div className="w-full">
                <button
                  className="flex items-center gap-2 text-[#fff]   text-xl focus:outline-none pl-0 py-2 rounded w-full text-left bg-transparent"
                  onClick={() => toggleChapter("chapter3")}
                  aria-expanded={openChapters.chapter3}
                  aria-controls="chapter3-content"
                >
                  <svg
                    className={`transition-transform duration-200 ${openChapters.chapter3 ? "rotate-90" : "rotate-0"}`}
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  CHAPTER 3: SOCIAL ENGINEERING
                </button>
                {openChapters.chapter3 && (
                  <div
                    id="chapter3-content"
                    className="mt-3 text-white/80 font-montserrat text-base bg-transparent rounded-xl p-0"
                  >
                    Social engineering exploits human psychology to gain
                    unauthorized access to systems and information. This chapter
                    explores common social engineering tactics and provides
                    practical advice on how to recognize and prevent these types
                    of attacks.
                  </div>
                )}
              </div>
            </div>

            {/* Collapsible Chapter 4 */}
            <div className="flex flex-col items-start w-full mb-2">
              <div className="w-full">
                <button
                  className="flex items-center gap-2 text-[#fff]   text-xl focus:outline-none pl-0 py-2 rounded w-full text-left bg-transparent"
                  onClick={() => toggleChapter("chapter4")}
                  aria-expanded={openChapters.chapter4}
                  aria-controls="chapter4-content"
                >
                  <svg
                    className={`transition-transform duration-200 ${openChapters.chapter4 ? "rotate-90" : "rotate-0"}`}
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  CHAPTER 4: SECURITY BEST PRACTICES
                </button>
                {openChapters.chapter4 && (
                  <div
                    id="chapter4-content"
                    className="mt-3 text-white/80 font-montserrat text-base bg-transparent rounded-xl p-0"
                  >
                    Implementing strong security practices is essential for
                    protecting your digital assets. This chapter covers password
                    management, two-factor authentication, regular updates, and
                    other fundamental security measures that everyone should
                    follow.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Aside */}
          <aside className="w-[350px] bg-[#6ED0FF] rounded-2xl p-6 mt-2">
            <h4 className="text-[#001E38]   text-2xl mb-4 text-center">
              Timestamps
            </h4>
            <p className="text-[#001E38]/90 font-montserrat text-base text-center">
              These are sample sections of a podcast episode. You can use this
              area to list timestamps, chapters, or key moments for the episode.
              This helps users jump to the most interesting parts quickly and
              improves accessibility for all listeners. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

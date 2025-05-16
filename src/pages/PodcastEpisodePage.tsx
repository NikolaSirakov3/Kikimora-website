import React from "react";
import { useParams } from "react-router-dom";

export function PodcastEpisodePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="w-[99.1vw] xl:w-[99.2vw] min-h-screen bg-[#001E38] pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Placeholder Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="aspect-[16/6] rounded-2xl bg-[#00539B] flex items-center justify-center border-4 border-[#00E5BE]">
            <span className="text-white text-3xl font-conthrax">
              Podcast {id}
            </span>
          </div>
        </div>
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left: Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <button
                className="flex items-center gap-2 text-[#00E5BE] font-montserrat text-base focus:outline-none hover:underline"
                aria-label="Play podcast episode"
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#00E5BE"
                    fillOpacity="0.2"
                  />
                  <polygon points="13,10 23,16 13,22" fill="#00E5BE" />
                </svg>
                <span>Play Episode</span>
              </button>
              <div className="h-2 w-full bg-[#00E5BE] rounded mt-4 mb-6" />
            </div>
            <h2 className="text-white font-conthrax text-2xl mb-4">
              WHITE HAT RIDDLES - Episode {id}
            </h2>
            <p className="text-white/80 font-montserrat mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <h3 className="text-white font-conthrax text-xl mb-2">
              CHAPTER 1: RANSOMWARE
            </h3>
            <p className="text-white/80 font-montserrat mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          {/* Right: Timestamps Box */}
          <aside className="w-full lg:w-[340px] flex-shrink-0">
            <div className="bg-[#3EDDCA]/20 rounded-2xl p-6">
              <h4 className="text-white font-conthrax text-lg mb-4 text-center">
                Timestamps
              </h4>
              <p className="text-white/80 font-montserrat text-sm">
                These are sample sections of a podcast episode. You can use this
                area to list timestamps, chapters, or key moments for the
                episode. This helps users jump to the most interesting parts
                quickly and improves accessibility for all listeners. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

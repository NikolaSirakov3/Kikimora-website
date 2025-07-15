export function AboutHero() {
  return (
    <div className="relative bg-[#2A1B54] w-full overflow-hidden min-h-[57vh] flex items-center">
      {/* Content Container */}
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1300px] w-full flex justify-between items-center">
          {/* Left Side - Title */}
          <div className="w-[45%]">
            <h1 className="text-white text-4xl leading-tight">
              Discover{" "}
              <span className="block mt-2">
                Kikimora for software developers
              </span>
            </h1>
          </div>

          {/* Right Side - Mascot and Card */}
          <div className="relative w-[55%] flex justify-center items-center min-h-[315px]">
            {/* Floating Card */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-br from-[#006466] to-[#065758] p-4 rounded-2xl w-[315px] shadow-xl">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-white text-lg leading-tight">
                  Empower Your Code with Advanced Security
                </h2>
                <button className="text-white/60 hover:text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-white/80 font-montserrat text-sm mb-2">
                Integrate cutting-edge security solutions effortlessly. Begin
                your seamless integration journey today!
              </p>
              <button className="text-white font-montserrat text-sm hover:text-[#00E5BE] transition-colors">
                See Case Study
              </button>
            </div>

            {/* Mascot Placeholder */}
            <div className="relative w-[252px] h-[252px] flex items-center justify-center">
              <div className="w-[189px] h-[189px] bg-gradient-to-br from-[#4A2B82] to-[#392163] rounded-full flex items-center justify-center">
                <div className="text-white/30 font-montserrat text-sm">
                  Mascot Placeholder
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0">
              <div className="w-10 h-10 bg-[#B66BFF] opacity-30 rounded-full blur-lg" />
            </div>
            <div className="absolute bottom-12 right-12">
              <div className="w-14 h-14 bg-[#00E5BE] opacity-20 rounded-full blur-xl" />
            </div>
            <div className="absolute top-24 left-0">
              <div className="w-20 h-20 bg-[#4A2B82] opacity-20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

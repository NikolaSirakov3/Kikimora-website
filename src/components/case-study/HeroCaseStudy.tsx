
function HeroCaseStudy() {
  return (
    <section className="w-screen bg-[#071C2C] py-12 px-4 md:px-16 min-h-[90vh]">
      <div className="max-w-[1200px] h-[80vh] ml-80 flex flex-col items-start justify-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight text-left">
          <span>Empower Your Code with</span>
          <br />
          <span>Advanced Security</span>
        </h1>
        <p className="text-base md:text-lg text-[#B0C4D9] mb-8 whitespace-nowrap overflow-hidden text-ellipsis w-full text-left">
          Integrate cutting-edge security solutions effortlessly. Begin your
          seamless integration journey today!
        </p>
        <div className="flex flex-row items-center justify-start gap-x-8 w-full mt-10">
          <div className="relative w-[800px] aspect-video rounded-xl overflow-hidden shadow-lg bg-[#0a1622] p-4 flex items-center justify-center">
            <img
              src="/menu1.jfif"
              alt="Video placeholder"
              className="object-cover w-full h-full rounded-lg"
            />
            <div
              className="pointer-events-none absolute left-0 bottom-0 w-full h-1/3"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #071C2C 90%)",
              }}
            />
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
              tabIndex={0}
              style={{ background: "rgba(0,0,0,0.3)" }}
              disabled
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  fill="#1E293B"
                  fillOpacity="0.7"
                />
                <polygon points="26,20 48,32 26,44" fill="#38BDF8" />
              </svg>
            </button>
          </div>
          <img
            src="/shield1.png"
            alt="Kikimora logo"
            className="w-96 md:w-[28rem] max-w-full drop-shadow-xl ml-20"
          />
        </div>
      </div>
    </section>
  );
}

export { HeroCaseStudy };

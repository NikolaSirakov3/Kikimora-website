import React from "react";

function InteractiveDemos() {
  return (
    <section className="w-screen bg-gradient-to-br from-[#1a2340] to-[#0a1a2f] py-16 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-left">
          Try our interactive demos!
        </h2>
        <p className="text-[#B0C4D9] text-base md:text-lg mb-6 text-left max-w-3xl">
          A website wireframe, also known as a page schematic or screen
          blueprint, is a visual guide that represents the skeletal framework of
          a website. Wireframes are created for the purpose of arranging
          elements to best accomplish a particular purpose. A website wireframe,
          also known as a page schematic or screen blueprint, is a visual guide
          that represents the skeletal framework of a website. Wireframes are
          created for the purpose of arranging elements to best accomplish a
          particular purpose.
        </p>
        <p className="text-[#B0C4D9] text-base md:text-lg mb-12 text-left max-w-3xl">
          A website wireframe, also known as a page schematic or screen
          blueprint, is a visual guide that represents the skeletal framework of
          a website. Wireframes are created for the purpose of arranging
          elements to best accomplish a particular purpose. A website wireframe,
          also known as a page schematic or screen blueprint, is a visual guide
          that represents the skeletal framework of a website. Wireframes are
          created for the purpose of arranging elements to best accomplish a
          particular purpose.
        </p>
        {/* Top row: text left, shield image right */}
        <div className="flex flex-col md:flex-row w-full gap-12 mb-12 items-stretch">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-2 text-left">
              Source for Business
            </h3>
            <p className="text-[#B0C4D9] text-sm mb-2 text-left">
              By using a website wireframe, the designer or developer can get
              input from the client, their manager, and other stakeholders.
            </p>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex-1">
                <span className="block text-white font-bold">No. 1</span>
                <span className="block text-[#B0C4D9] text-xs">
                  The effect of different scenarios on the display
                </span>
              </div>
              <div className="flex-1">
                <span className="block text-white font-bold">No. 2</span>
                <span className="block text-[#B0C4D9] text-xs">
                  The range of functions available
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/shield1.png"
              alt="Demo screenshot 2"
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
            />
          </div>
        </div>
        {/* Bottom row: kikimora image left, text right */}
        <div className="flex flex-col md:flex-row w-full gap-12 items-stretch">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/Kikimora.png"
              alt="Demo screenshot 1"
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-2 text-left">
              Source for Business
            </h3>
            <p className="text-[#B0C4D9] text-sm mb-2 text-left">
              By using a website wireframe, the designer or developer can get
              input from the client, their manager, and other stakeholders. They
              can also get input from the client, their manager, and other
              stakeholders.
            </p>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex-1">
                <span className="block text-white font-bold">No. 1</span>
                <span className="block text-[#B0C4D9] text-xs">
                  The effect of different scenarios on the display
                </span>
              </div>
              <div className="flex-1">
                <span className="block text-white font-bold">No. 2</span>
                <span className="block text-[#B0C4D9] text-xs">
                  The range of functions available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { InteractiveDemos };

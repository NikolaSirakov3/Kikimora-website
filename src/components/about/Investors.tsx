export function Investors() {
  return (
    <div className="bg-[#001E38]">
      <div className="w-full px-[5%] py-8 flex flex-col items-center pt-20">
        <h2 className="text-5xl text-white font-conthrax text-center mb-4">
          Investors
        </h2>
        <p className="text-white/80 text-lg font-montserrat text-center mb-12">
          The people who believed in our mission
        </p>
      </div>

      {/* Full width gray section */}
      <div className="w-full bg-gray-500">
        <div className="w-full px-[5%] py-12">
          <div className="max-w-[1300px] mx-auto flex justify-between items-center">
            <span className="text-white font-bold text-xl">VITOSHA</span>
            <span className="text-white font-bold text-xl">IMPETUS</span>
            <span className="text-white font-bold text-xl">CYEN</span>
            <span className="text-white font-bold text-xl">SEEDBLINK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

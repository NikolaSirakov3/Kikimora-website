interface StatBox {
  text: string;
  value: string;
  valueColor: "green" | "red";
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    translate?: string;
  };
}

interface FloatingStatsImageProps {
  imageSrc: string;
  imageAlt: string;
  stats: StatBox[];
  className?: string;
}

export function FloatingStatsImage({
  imageSrc,
  imageAlt,
  stats,
  className = "",
}: FloatingStatsImageProps) {
  return (
    <div className={`hidden md:block relative w-[550px] ${className}`}>
      {/* Floating Info Boxes */}
      {stats.map((stat, index) => (
        <div
          key={index}
          style={stat.position}
          className={`absolute z-10 bg-yellow-100 border border-yellow-100 rounded-lg shadow-lg px-4 py-2 text-gray-900 text-sm font-semibold max-w-[160px] text-center`}
        >
          {stat.text}{" "}
          <span className={`text-${stat.valueColor}-600 font-bold`}>
            {stat.value}
          </span>
        </div>
      ))}
      {/* Main Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-[550px] h-auto object-contain z-0"
      />
    </div>
  );
}

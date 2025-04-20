import React, { useState } from "react";

interface ImageOption {
  id: number;
  label: string;
  src: string;
}

const imageOptions: ImageOption[] = [
  { id: 1, label: "All-in-One Security", src: "/menu1.jfif" },
  { id: 2, label: "AI Auto Triangle", src: "/menu2.jfif" },
  { id: 3, label: "AI AutoFix", src: "/menu3.jfif" },
  { id: 4, label: "CI/CD Flow", src: "/menu4.jfif" },
  { id: 5, label: "Runtime Protection", src: "/menu5.jfif" },
];

export function ImageSwitcher() {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  return (
    <section className="py-16 px-4 bg-[#001E38]">
      <div className="flex flex-col items-center gap-8">
        {/* Image switcher text links */}
        <div className="flex gap-6 justify-center">
          {imageOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedImage(option.id)}
              style={{
                borderRadius: 0,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
              className={`text-base bg-transparent pb-2 outline-none font-montserrat ${
                selectedImage === option.id
                  ? "text-white font-semibold"
                  : "text-white/60"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Image display with fixed dimensions and white border */}
        <div className="w-[1000px] h-[600px] relative rounded-2xl border-2 border-white/20 overflow-hidden">
          {imageOptions.map((option) => (
            <img
              key={option.id}
              src={option.src}
              alt={`Menu ${option.id}`}
              className={`w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0 ${
                selectedImage === option.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

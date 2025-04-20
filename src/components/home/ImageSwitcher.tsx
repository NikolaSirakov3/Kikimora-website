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
                textDecoration: "none",
                outline: "none",
              }}
              className={`text-base bg-transparent pb-2 font-montserrat hover:no-underline focus:outline-none focus:ring-0 ${
                selectedImage === option.id
                  ? "text-white font-semibold"
                  : "text-white/60"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Image display with gradient border effect */}
        <div className="w-[1040px] h-[640px] relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/10 to-transparent">
          <div className="w-full h-full p-5 rounded-2xl bg-[#001E38]">
            <div className="w-[1000px] h-[600px] relative overflow-hidden rounded-xl">
              {imageOptions.map((option) => (
                <img
                  key={option.id}
                  src={option.src}
                  alt={`Menu ${option.id}`}
                  className={`w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0 rounded ${
                    selectedImage === option.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#001E38] via-[#001E38]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

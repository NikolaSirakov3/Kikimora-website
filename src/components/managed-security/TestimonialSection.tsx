interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    image: string;
  };
}

export function TestimonialSection() {
  const testimonial: TestimonialProps = {
    quote:
      "The implementation of Kikimora opened new opportunities for the bank's security department to manage cyber security risks more effectively.",
    author: {
      name: "Stefan Tsonev",
      position: "Head of IT Security Department at D Commerce Bank AD",
      company: "D Commerce Bank AD",
      image: "/logos/dbank.png",
    },
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-3xl p-12 max-w-[1200px] mx-auto">
          <p className="text-black text-lg md:text-xl text-left italic mb-12 leading-relaxed font-serif">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold">
                {testimonial.author.name}
              </span>
              <span className="text-gray-black text-sm">
                {testimonial.author.position}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

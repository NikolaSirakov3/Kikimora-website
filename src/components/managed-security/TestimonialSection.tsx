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
      "With a focus on security and efficiency, D Commerce Bank AD continually seeks innovative ways to enhance its operations and ensure the highest standards of service. The implementation of Kikimora.io opened new opportunities for the bank's security department to manage cyber security risks more effectively. Should you need a 5-tier, flexible, all-in-one platform for vulnerability management, we strongly recommend Kikimora.io.",
    author: {
      name: "Stefan Tsonev",
      position: "Head of IT Security Department at D Commerce Bank AD",
      company: "D Commerce Bank AD",
      image: "/logos/dbank.png",
    },
  };

  return (
    <div className="w-full bg-[#001324] py-16">
      <div className="container mx-auto px-4">
        <div className="bg-[#002847] rounded-3xl p-12 max-w-[1200px] mx-auto">
          <p className="text-white text-lg md:text-xl text-center italic mb-12 leading-relaxed">
            {testimonial.quote}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">
                {testimonial.author.name}
              </span>
              <span className="text-gray-300 text-sm">
                {testimonial.author.position}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

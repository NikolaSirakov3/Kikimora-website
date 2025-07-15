import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How soon will my order ship?",
    answer:
      "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
  },
  {
    id: 2,
    question: "Is there any warranty exclusions?",
    answer:
      "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
  },
  {
    id: 3,
    question: "Are there any return exclusions?",
    answer:
      "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
  },
  {
    id: 4,
    question: "Will I be charged for a replacement item?",
    answer:
      "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
  },
  {
    id: 5,
    question: "How can I track my orders & payment?",
    answer:
      "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.",
  },
];

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(2); // Setting second question as initially expanded

  return (
    <section className="w-full bg-gradient-to-b from-[#001E38] to-[#1B0B42] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl text-white   mb-4">Frequent ask qustions</h2>
          <p className="text-white/60 text-lg font-montserrat max-w-3xl mx-auto">
            These are some of the Frequently Asked Questions related to Kikimora
            and its product characteristics. These include, but are not limited
            to, the following:
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={cn(
                "bg-gradient-to-b from-[#001E38] to-[#1B0B42] cursor-pointer",
                expandedId === faq.id ? "pb-6" : ""
              )}
              onClick={() =>
                setExpandedId(expandedId === faq.id ? null : faq.id)
              }
            >
              <div className="flex items-center justify-between py-6">
                <h3 className="text-white font-montserrat text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#00E5BE] transition-transform duration-200 bg-transparent stroke-[#00E5BE] fill-transparent",
                    expandedId === faq.id ? "transform rotate-180" : ""
                  )}
                />
              </div>

              {expandedId === faq.id && (
                <div className="text-white/60 font-montserrat pr-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

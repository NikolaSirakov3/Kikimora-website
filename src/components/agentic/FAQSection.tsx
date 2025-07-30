import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is an 'attack surface'?",
    answer:
      "Your attack surface is the sum of all possible points (or 'attack vectors') where an unauthorized user could try to enter data to or extract data from an environment. Kikimora Agent focuses on your external attack surface, which includes all your internet-facing assets like websites, servers, and cloud services.",
  },
  {
    question:
      "How is Kikimora Agent different from a traditional vulnerability scanner?",
    answer:
      "Traditional scanners typically require you to specify the targets (IP addresses, hostnames) to scan. Kikimora Agent combines Attack Surface Management (ASM) with vulnerability scanning. It first discovers your assets (including ones you might not be aware of) and then scans them, providing a more comprehensive and proactive approach to security.",
  },
  {
    question: "Is the agent difficult to set up?",
    answer:
      "No, Kikimora Agent is a cloud-based service. You can start your first discovery scan in minutes by simply providing your primary domain. There is no software to install or complex configuration required to get started.",
  },
  {
    question: "What kind of vulnerabilities can it find?",
    answer:
      "Kikimora Agent can detect a wide range of security issues, including web application vulnerabilities (like SQL injection and XSS), infrastructure misconfigurations (like open ports and exposed databases), outdated software with known CVEs, and sensitive information exposure.",
  },
  {
    question:
      "How do you ensure the scanning process is safe and non-disruptive?",
    answer:
      "Our scanning engine is designed to be non-intrusive and mimic the reconnaissance activities of an attacker without performing any disruptive or exploitative actions. We use safe, industry-standard techniques to probe for information and vulnerabilities without impacting the performance or availability of your services.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            Common questions about Kikimora Agent's cybersecurity capabilities
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full border border-gray-200 rounded-lg shadow-lg"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mx-6 border-b border-gray-200 last:border-b-0 [&[data-state=open]]:border-0 [&[data-state=open]]:bg-white [&[data-state=open]]:rounded-none"
            >
              <AccordionTrigger className="text-left text-gray-700 hover:text-blue-600 hover:no-underline px-0 py-4 text-lg font-medium transition-colors bg-white border-0 focus:border-0 focus:outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-4 text-gray-600 leading-relaxed bg-white transition-all duration-2000 ease-in-out">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

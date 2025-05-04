export function PartnersSection() {
  const partners = [
    { name: "Rapid7 Nexpose", logo: "/logos/rapid7.png" },
    { name: "Burp Suite Professional", logo: "/logos/burp-suite.png" },
    { name: "Nessus Professional", logo: "/logos/nessus.png" },
    { name: "Atlassian", logo: "/logos/atlassian.png" },
    { name: "Qualys", logo: "/logos/qualys.png" },
  ];

  return (
    <div className="w-full bg-[#001324] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-16 mb-16 flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <p className="text-white text-center max-w-[1000px] mx-auto text-lg leading-relaxed">
          Kikimora Managed Security provides comprehensive cybersecurity
          protection for SMEs, safeguarding your business from evolving threats
          while ensuring compliance and minimizing response times. Kikimora acts
          as your dedicated security team, allowing you to focus on your core
          business.
        </p>
      </div>
    </div>
  );
}

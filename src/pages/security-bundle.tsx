import React from "react";

const SecurityBundle: React.FC = () => {
  return (
    <div className="min-h-screen w-[99.12vw] bg-white">
      {/* Hero Section */}
      <section className="mt-20">
        <div className="max-w-[1300px] mx-auto py-20">
            {/* Security Center Image */}
              <img
                src="/security-centre.svg"
                alt="Security Center"
                className="w-[80vw] h-[70vh]"
              />
        </div>
      </section>
    </div>
  );
};

export default SecurityBundle;

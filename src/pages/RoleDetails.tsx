import React from "react";
import { useParams, Link } from "react-router-dom";
import { roles } from "./careers";

export function RoleDetails() {
  const { role } = useParams<{ role: string }>();
  const roleData = roles.find((r) => r.slug === role);

  if (!roleData) {
    return (
      <main className="w-[99.1vw] min-h-screen bg-[#00345B] flex flex-col items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Role Not Found</h2>
          <Link to="/careers" className="text-[#31c9b7] underline">
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-[99.1vw] min-h-screen bg-[#00345B] flex flex-col items-center">
      <section className="w-full max-w-2xl mt-16 mb-10">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200 flex flex-col">
          <Link to="/careers" className="text-[#31c9b7] mb-4 w-fit">
            &larr; All Careers
          </Link>
          <div className="flex flex-row items-center gap-4 mb-6">
            {roleData.icon}
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-0">
              {roleData.title}
            </h1>
          </div>
          <div className="flex gap-3 mb-4">
            {roleData.tags.map((tag, i) => (
              <span
                key={i}
                className={`${tag.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <p className="text-black text-base md:text-lg mb-6">
            {roleData.description}
          </p>
          {/* Add more detailed info here if available */}
        </div>
      </section>
    </main>
  );
}

export default RoleDetails;

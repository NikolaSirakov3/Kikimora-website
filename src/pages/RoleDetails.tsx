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
      <section className="w-[1200px] mt-40 mb-10">
        <div className="w-full bg-white rounded-3xl shadow-2xl p-10 border border-gray-200 flex flex-col">
          <Link to="/careers" className="text-[#31c9b7] mb-4 w-fit">
            &larr; All Careers
          </Link>
          <div className="flex flex-row items-center gap-4 my-6">
            {roleData.icon}
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-0">
              {roleData.title}
            </h1>
          </div>
          <div className="flex gap-3 my-8">
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
          {/* Detailed Job Info */}
          <div className="mb-6 text-black">
            <div>
              <b>Job Title:</b> {roleData.jobTitle}
            </div>
            <div>
              <b>Start Date:</b> {roleData.startDate}
            </div>
            <div>
              <b>End Date:</b> {roleData.endDate}
            </div>
            <div>
              <b>Location:</b> {roleData.location}
            </div>
          </div>
          {roleData.overview && (
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 underline">
                Job Overview:
              </h2>
              <p>{roleData.overview}</p>
            </div>
          )}
          {roleData.responsibilities && (
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 underline">
                Key Responsibilities:
              </h2>
              <ul className="list-disc list-inside">
                {roleData.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {roleData.requiredSkills && (
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 underline">
                Required Qualifications & Skills:
              </h2>
              <ul className="list-disc list-inside">
                {roleData.requiredSkills.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {roleData.preferredSkills && (
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 underline">
                Preferred Qualifications:
              </h2>
              <ul className="list-disc list-inside">
                {roleData.preferredSkills.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default RoleDetails;

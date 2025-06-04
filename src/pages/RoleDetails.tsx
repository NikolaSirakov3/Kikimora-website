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
        <div className="w-full bg-white rounded-3xl shadow-2xl p-10 border border-gray-200 flex flex-col shadow-xl">
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
          {/* Apply Now Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-black mb-6">Apply Now</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label
                  className="block text-black font-medium mb-1"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] shadow-xl"
                />
              </div>
              <div>
                <label
                  className="block text-black font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] shadow-xl"
                />
              </div>
              <div>
                <label
                  className="block text-black font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] shadow-xl"
                />
              </div>
              <div>
                <label
                  className="block text-black font-medium mb-1"
                  htmlFor="cv"
                >
                  Upload your CV
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  className="w-full px-4 py-2 rounded-2xl bg-gray-200 text-black file:bg-white file:text-black file:rounded file:px-4 file:py-2 shadow-xl"
                />
              </div>
              <button
                type="submit"
                className="w-fit px-8 py-3 mt-2 rounded-2xl bg-[#31c9b7] text-white font-semibold text-lg hover:bg-[#25b0a3] transition-colors"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoleDetails;

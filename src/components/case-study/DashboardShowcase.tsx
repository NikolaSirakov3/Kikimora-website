import React from "react";

function DashboardShowcase() {
  return (
    <section className="w-screen flex flex-col items-center gap-24 py-20 bg-white dark:bg-[#0a1a2f]">
      {/* Top row: Dashboard + text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl mb-10">
        <div className="bg-white rounded-xl p-4 md:p-2 w-full max-w-2xl">
          <img
            src="/menu1.jfif"
            alt="Dashboard UI preview"
            className="rounded-xl w-full h-auto object-cover"
            style={{
              minHeight: 320,
              maxHeight: 400,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className="flex flex-col items-start max-w-md">
          <span className="inline-flex items-center mb-4">
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="text-indigo-500 mr-2"
            >
              <path
                d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 14.5C12 12.0147 14.0147 10 16.5 10C18.9853 10 21 12.0147 21 14.5C21 16.9853 18.9853 19 16.5 19C14.0147 19 12 16.9853 12 14.5Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 22V24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl md:text-2xl font-semibold text-indigo-700 dark:text-indigo-300">
              Perfect Dashboard
            </span>
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-2">
            Reprehenderit nemo quod tempore doloribus ratione distinctio quis
            quidem vitae sunt reiciendis, molestias omnis soluta?
          </p>
        </div>
      </div>
      {/* Bottom row: Charts + text */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 w-full max-w-6xl">
        <div className="bg-white rounded-xl p-4 md:p-2 w-full max-w-2xl">
          <img
            src="/menu1.jfif"
            alt="Dashboard UI preview"
            className="rounded-xl w-full h-auto object-cover"
            style={{
              minHeight: 320,
              maxHeight: 400,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className="flex flex-col items-start max-w-md">
          <span className="inline-flex items-center mb-4">
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="text-indigo-500 mr-2"
            >
              <path
                d="M6 26V14M12 26V8M18 26V18M24 26V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="6" cy="14" r="2" fill="currentColor" />
              <circle cx="12" cy="8" r="2" fill="currentColor" />
              <circle cx="18" cy="18" r="2" fill="currentColor" />
              <circle cx="24" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="text-xl md:text-2xl font-semibold text-indigo-700 dark:text-indigo-300">
              Charts, Diagrams & more
            </span>
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-2">
            Reprehenderit nemo quod tempore doloribus ratione distinctio quis
            quidem vitae sunt reiciendis, molestias omnis soluta?
          </p>
        </div>
      </div>
    </section>
  );
}

export { DashboardShowcase };

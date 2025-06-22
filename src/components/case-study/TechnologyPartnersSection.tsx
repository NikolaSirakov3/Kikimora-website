function TechnologyPartnersSection() {
  const technologies = ["Qualys", "Wazuh", "Nessus", "Jira"];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Powered by Best-in-Class Technology
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TechnologyPartnersSection };

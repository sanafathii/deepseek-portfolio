export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website built with React and Node.js.",
    },
    {
      id: 2,
      title: "Customer Churn Analysis",
      description:
        "A machine learning model to predict customer churn using Python.",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A cross-platform mobile app for task management built with React Native.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-8">My Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-2xl font-bold text-[#2563EB] mb-2">
                {project.title}
              </h3>
              <p className="text-[#1E293B]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Data Analysis",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] text-[#1E293B] px-6 py-3 rounded-lg shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      type: "education",
      date: "2020 - 2022",
      title: "Master’s in Computer Science",
      description: "University of XYZ, Specialized in Machine Learning",
    },
    {
      id: 2,
      type: "work",
      date: "2022 - Present",
      title: "Software Engineer at ABC Corp",
      description: "Led frontend development for enterprise SaaS platform",
    },
  ];

  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      <div className="absolute left-4 h-full w-0.5 bg-gray-300"></div>

      {timelineEvents.map((event, index) => (
        <div key={event.id} className="relative pl-16 mb-8">
          <div className="absolute left-0 top-2 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-white">
            {index + 1}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500">{event.date}</p>
            <h3 className="text-xl font-bold text-[#1E293B] mt-2">
              {event.title}
            </h3>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

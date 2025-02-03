import Timeline from "../../components/Timeline";
import ProgressBar from "../../components/ProgressBar";

export default function About() {
  const skills = [
    { skill: "React/Next.js", percentage: 90 },
    { skill: "Python", percentage: 85 },
    { skill: "Machine Learning", percentage: 80 },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-8">
          My Journey
        </h2>
        <Timeline />
        <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-8">
          Technical Skills
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Meet Me</h2>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/video-poster.jpg"
            >
              <source src="/about-me-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

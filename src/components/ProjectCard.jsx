import Image from "next/image";

export default function ProjectCard({ project, onImageClick }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 cursor-pointer" onClick={onImageClick}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.testimonial && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-600 italic">"{project.testimonial.text}"</p>
            <p className="mt-2 text-sm text-blue-600 font-medium">
              - {project.testimonial.client}
            </p>
          </div>
        )}

        {project.caseStudy && (
          <a
            href={project.caseStudy}
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View Case Study →
          </a>
        )}
      </div>
    </div>
  );
}

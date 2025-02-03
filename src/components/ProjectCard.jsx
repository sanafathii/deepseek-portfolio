import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.link && <Link href={project.link}>View Project</Link>}
      </div>
    </div>
  );
}

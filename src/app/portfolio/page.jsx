"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["all", ...new Set(projects.flatMap((p) => p.category))];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 rounded-full ${
              selectedFilter === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

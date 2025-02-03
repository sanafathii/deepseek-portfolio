"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-200"
        >
          ✕ Close
        </button>

        <div className="bg-white rounded-xl overflow-hidden">
          <div className="relative h-[60vh]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            {project.testimonial && (
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-600 italic">
                  "{project.testimonial.text}"
                </p>
                <p className="mt-2 text-sm text-blue-600 font-medium">
                  - {project.testimonial.client}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

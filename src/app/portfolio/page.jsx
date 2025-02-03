import ProjectCard from "../../components/ProjectCard";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "CRM Next CPQ",
      description:
        "A modern CRM and CPQ (Configure, Price, Quote) system built using Next.js, providing efficient sales and pricing workflows.",
      image: "/projects/crm-next.jpg",
      demoLink: "https://crm-next-cpq3.vercel.app/",
      repoLink: "https://github.com/sanafathii/CRM_NEXT",
    },
    {
      id: 2,
      title: "Real Estate Platform",
      description:
        "A dynamic real estate marketplace built with Next.js, allowing users to browse and list properties with ease.",
      image: "/projects/real-estate.jpg",
      demoLink: "https://real-estate-nrix.vercel.app/",
      repoLink: "https://github.com/sanafathii/realEstate",
    },
    {
      id: 3,
      title: "Next Food Ordering App",
      description:
        "A food ordering platform created with Next.js, offering a seamless user experience and fast checkout process.",
      image: "/projects/next-food.jpg",
      demoLink: "https://next-food-xi.vercel.app/",
      repoLink: "https://github.com/sanafathii/nextFood",
    },
    {
      id: 4,
      title: "React E-Commerce Store",
      description:
        "An interactive e-commerce store built with React, featuring product filtering, cart management, and a checkout system.",
      image: "/projects/react-store.jpg",
      demoLink: "https://react-store-b6cp.vercel.app/",
      repoLink: "https://github.com/sanafathii/reactStore",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

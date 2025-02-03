import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I build responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: "/icons/web-development.svg",
    },
    {
      id: 2,
      title: "Data Analysis",
      description:
        "I analyze and visualize data to uncover insights and help businesses make data-driven decisions.",
      icon: "/icons/data-analysis.svg",
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "I develop machine learning models to solve complex problems and automate processes.",
      icon: "/icons/machine-learning.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Services
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Image src={service.icon} alt={service.title} width={64} height={64} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

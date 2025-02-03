import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Sana</h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate developer with expertise in Frontend. I love building
          solutions that solve real-world problems.
        </p>
      </div>

      <div className="mt-8">
        <Image
          src="/homepage-image.avif"
          alt="Representation of my interests and expertise"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">My Interests</h2>
        <p className="mt-2 text-gray-600">
          I’m passionate about React.js and Next.js, and I enjoy exploring new
          technologies and creating innovative projects.
        </p>
      </div>
    </div>
  );
}

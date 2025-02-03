import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <Image
            src="/homepage-image.avif"
            alt="Professional Photo of Sanaz Fathi"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hi, I am Sana Fathi, a passionate and results-driven professional with
          expertise in data analysis, machine learning, and software
          development. Iam currently based in and love using data-driven
          approaches to solve complex problems and create impactful solutions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Education
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I hold a Masters degree in Computer Science from university of
          Kurdistan, where I specialized in machine learning and data analysis.
          During my studies, I worked on several projects involving predictive
          modeling, natural language processing, and big data analytics.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Work Experience
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I have 2 of experience in the tech industry, working on diverse
          projects ranging from data analysis to software development.
          Currently, I am working as a fronend developer at Mizfa
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Skills
        </h2>
        <ul className="text-lg text-gray-600 list-disc list-inside mb-6">
          <li>Programming Languages: Python, Java, JavaScript, SQL</li>
          <li>
            Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Tableau
          </li>
          <li>Machine Learning: Scikit-learn, TensorFlow, Keras</li>
          <li>Software Development: Agile methodologies, Git, Docker</li>
          <li>Soft Skills: Problem-solving, teamwork, communication</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Interests
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Outside of work, I enjoy exploring new technologies, contributing to
          open-source projects, and participating in hackathons. I am also
          passionate about mentoring aspiring developers and sharing my
          knowledge through blogs and workshops.
        </p>
      </div>
    </div>
  );
}

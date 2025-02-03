import BlogPost from "../../components/BlogPost";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description:
        "A beginner-friendly guide to building modern web applications with Next.js.",
      date: "October 10, 2023",
      link: "/blog/getting-started-with-nextjs",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description:
        "Learn how to use Tailwind CSS to create beautiful and responsive designs.",
      date: "October 5, 2023",
      link: "/blog/mastering-tailwind-css",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      description:
        "An overview of machine learning concepts and how to get started with Python.",
      date: "September 28, 2023",
      link: "/blog/introduction-to-machine-learning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Blog
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

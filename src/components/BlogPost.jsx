import Link from "next/link";

export default function BlogPost({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{post.date}</p>
        <Link href={post.link}>Read More</Link>
      </div>
    </div>
  );
}

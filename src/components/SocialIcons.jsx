import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-6">
      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/in/sanafathi/">
        <img
          src="/icons/linkedin.svg" // Replace with your LinkedIn icon
          alt="LinkedIn"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/your-username">
        <img
          src="/icons/github.svg" // Replace with your GitHub icon
          alt="GitHub"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>

      {/* Twitter */}
      <Link href="https://twitter.com/your-username">
        <img
          src="/icons/email.svg" // Replace with your Twitter icon
          alt="Twitter"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>
    </div>
  );
}

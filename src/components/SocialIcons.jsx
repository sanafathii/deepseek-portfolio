import Image from "next/image";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-6">
      <Link href="https://www.linkedin.com/in/sanafathi/">
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>
      <Link href="https://github.com/your-username">
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>
      <Link href="https://twitter.com/your-username">
        <Image
          src="/icons/email.svg"
          alt="Twitter"
          className="w-8 h-8 hover:opacity-75"
        />
      </Link>
    </div>
  );
}

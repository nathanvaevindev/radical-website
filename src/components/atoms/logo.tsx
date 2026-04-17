import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center transition-opacity duration-150 hover:opacity-80"
      aria-label="Radical Recruitment — Home"
    >
      <Image
        src="/logo 1.png"
        alt="Radical Recruitment"
        width={40}
        height={40}
        className="h-9 w-auto rounded-md"
      />
    </Link>
  );
}

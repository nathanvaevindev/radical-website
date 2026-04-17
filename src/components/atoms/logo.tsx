import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center transition-opacity duration-150 hover:opacity-80"
      aria-label="Radical Recruitment — Home"
    >
      <Image
        src="/logo.svg"
        alt="Radical Recruitment"
        width={171}
        height={25}
        priority
      />
    </Link>
  );
}

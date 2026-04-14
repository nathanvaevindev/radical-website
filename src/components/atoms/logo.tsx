import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-heading text-xl font-bold text-heading transition-opacity duration-150 hover:opacity-80"
      aria-label="Radical Recruitment — Home"
    >
      <Image
        src="/logo.png"
        alt=""
        width={28}
        height={28}
        className="rounded-md"
        aria-hidden="true"
      />
      <span>Radical Recruitment</span>
    </Link>
  );
}

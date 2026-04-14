import type { Metadata } from "next";
import HeroHome from "@/components/organisms/hero-home";

export const metadata: Metadata = {
  title:
    "Radical Recruitment — AI is everywhere. The human factor is rare.",
  description:
    "Radical Recruitment connects companies with elite AI professionals and helps AI talent grow through community, coaching, and the APAC framework.",
};

export default function HomePage() {
  return (
    <main>
      <HeroHome />
    </main>
  );
}

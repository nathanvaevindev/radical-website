import type { Metadata } from "next";
import HeroHome from "@/components/organisms/hero-home";
import HomeApac from "@/components/organisms/home-apac";
import HomeSplit from "@/components/organisms/home-split";
import HomePhotoSlider from "@/components/organisms/home-photo-slider";
import HomeCommunity from "@/components/organisms/home-community";
import HomeFounders from "@/components/organisms/home-founders";
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
      <HomeApac />
      <HomeSplit />
      <HomePhotoSlider />
      <HomeCommunity />
      <HomeFounders />
    </main>
  );
}

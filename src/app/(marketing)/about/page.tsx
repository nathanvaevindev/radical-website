import type { Metadata } from "next";
import AboutHero from "@/components/organisms/about-hero";
import AboutNelieke from "@/components/organisms/about-nelieke";
import AboutOscar from "@/components/organisms/about-oscar";
import AboutTeam from "@/components/organisms/about-team";
import AboutClosing from "@/components/organisms/about-closing";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the people behind Radical Recruitment. 30+ years of experience, strong connection with Gen Z and AI natives, and a selective approach to talent.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutNelieke />
      <AboutOscar />
      <AboutTeam />
      <AboutClosing />
    </main>
  );
}

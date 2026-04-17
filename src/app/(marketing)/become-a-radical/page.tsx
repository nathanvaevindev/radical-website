import type { Metadata } from "next";
import RadicalHero from "@/components/organisms/radical-hero";
import RadicalIntro from "@/components/organisms/radical-intro";
import RadicalSelection from "@/components/organisms/radical-selection";
import RadicalApac from "@/components/organisms/radical-apac";
import RadicalFaq from "@/components/organisms/radical-faq";

export const metadata: Metadata = {
  title: "Become a Radical",
  description:
    "Stop being a commodity. Join an elite community of AI professionals selected for adaptability, personality, awareness, and connection.",
};

export default function BecomeARadicalPage() {
  return (
    <main>
      <RadicalHero />
      <RadicalIntro />
      <RadicalSelection />
      <RadicalApac />
      <RadicalFaq />
    </main>
  );
}

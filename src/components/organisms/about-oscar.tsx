import FounderBlock from "@/components/molecules/founder-block";

export default function AboutOscar() {
  return (
    <FounderBlock
      name="Oscar Voskuil"
      title="Founder of Radical"
      email="oscar@radicalrecruitment.ai"
      quote="We want to make a contribution to technology that humanity actually benefits from."
      imageSrc="/photos/Oscar_chill.jpeg"
      objectPosition="left center"
      paragraphs={[
        "Oscar brings 25 years of experience in marketing and operations to Radical Recruitment. He designed the people-centric, technology-driven strategy that guides everything we do.",
        "Built and scaled successful teams across telecom, retail, and digital industries. As entrepreneur and manager he has deep understanding of what organisations truly need to grow. Selects and develops talent that drives measurable, long-term impact.",
      ]}
      flipped
    />
  );
}

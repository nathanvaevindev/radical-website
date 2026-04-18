"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/types";

// Placeholder team — will be replaced by Supabase data
const PLACEHOLDER_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Nelieke Wismans",
    role: "Co-founder",
    photoUrl: "/nelieke.jpeg",
    bio: null,
    linkedinUrl: "https://www.linkedin.com/in/neliekewismans/",
    sortOrder: 1,
  },
  {
    id: "2",
    name: "Oscar Voskuil",
    role: "Founder",
    photoUrl: "/oscar.png",
    bio: null,
    linkedinUrl: "https://www.linkedin.com/in/oscarvoskuil/",
    sortOrder: 2,
  },
  {
    id: "3",
    name: "Vincent Zepeda",
    role: "Tech Lead / Digital Transformation Specialist",
    photoUrl: "/Vincent.jpeg",
    bio: "Builds the recruit stack that every recruiter wishes for.",
    linkedinUrl: null,
    sortOrder: 3,
  },
  {
    id: "4",
    name: "Nathan van Veen",
    role: "Community Lead / Head of Growth",
    photoUrl: "/Nathan.jpeg",
    bio: "Builds the spaces where AI-natives grow, learn, and find their people.",
    linkedinUrl: null,
    sortOrder: 4,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Props = {
  team?: TeamMember[];
};

export default function AboutTeam({ team }: Props) {
  const members =
    team && team.length > 0
      ? team
      : PLACEHOLDER_TEAM;

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              className="group rounded-[12px] border border-surface-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              {/* Portrait */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[12px] bg-surface-light">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-smaragd/10 text-lg font-bold text-smaragd">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="font-heading text-lg font-bold text-heading">
                  {member.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{member.role}</p>
                {member.bio && (
                  <p className="mt-2 text-sm text-body">{member.bio}</p>
                )}
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-muted transition-colors duration-150 hover:text-smaragd"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

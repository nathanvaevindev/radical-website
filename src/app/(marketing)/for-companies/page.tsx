import type { Metadata } from "next";
import CompaniesHero from "@/components/organisms/companies-hero";
import CompaniesSelection from "@/components/organisms/companies-selection";
import CompaniesValue from "@/components/organisms/companies-value";
import CompaniesRoles from "@/components/organisms/companies-roles";
import CompaniesApac from "@/components/organisms/companies-apac";
import CompaniesMatching from "@/components/organisms/companies-matching";
import CompaniesHireForm from "@/components/organisms/companies-hire-form";

export const metadata: Metadata = {
  title: "For Companies",
  description:
    "Hire AI talent that doesn't expire. Radical Recruitment places elite AI professionals selected through the rigorous APAC framework.",
};

export default function ForCompaniesPage() {
  return (
    <main>
      <CompaniesHero />
      <CompaniesMatching />
      <CompaniesValue />
      <CompaniesHireForm />
      <CompaniesRoles />
      <CompaniesSelection />
      <CompaniesApac />
    </main>
  );
}

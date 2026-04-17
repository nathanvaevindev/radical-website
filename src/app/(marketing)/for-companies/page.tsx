import type { Metadata } from "next";
import CompaniesHero from "@/components/organisms/companies-hero";
import CompaniesSelection from "@/components/organisms/companies-selection";
import CompaniesValue from "@/components/organisms/companies-value";
import CompaniesRoles from "@/components/organisms/companies-roles";
import CompaniesApac from "@/components/organisms/companies-apac";
import CompaniesMatching from "@/components/organisms/companies-matching";
import CompaniesProfiles from "@/components/organisms/companies-profiles";
import CompaniesTariffs from "@/components/organisms/companies-tariffs";
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
      <CompaniesSelection />
      <CompaniesValue />
      <CompaniesRoles />
      <CompaniesApac />
      <CompaniesMatching />
      <CompaniesProfiles />
      <CompaniesTariffs />
      <CompaniesHireForm />
    </main>
  );
}

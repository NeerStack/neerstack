import type { Metadata } from "next";
import { LegalDoc } from "@/components/marketing/LegalDoc";
import { termsOfUse } from "@/content/legal";

export const metadata: Metadata = {
  title: termsOfUse.title,
  description: termsOfUse.description,
};

export default function TermsPage() {
  return <LegalDoc doc={termsOfUse} />;
}

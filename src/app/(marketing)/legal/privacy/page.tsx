import type { Metadata } from "next";
import { LegalDoc } from "@/components/marketing/LegalDoc";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
};

export default function PrivacyPage() {
  return <LegalDoc doc={privacyPolicy} />;
}

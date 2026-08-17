import type { Metadata } from "next";
import { LegalDoc } from "@/components/marketing/LegalDoc";
import { cookiePolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: cookiePolicy.title,
  description: cookiePolicy.description,
};

export default function CookiesPage() {
  return <LegalDoc doc={cookiePolicy} />;
}

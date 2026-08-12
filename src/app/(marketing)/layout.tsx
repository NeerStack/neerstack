import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { QuoteProvider } from "@/components/marketing/QuoteProvider";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuoteProvider>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </QuoteProvider>
  );
}

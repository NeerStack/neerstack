"use client";

import { Button } from "@/components/ui/Button";
import { useQuote } from "@/components/marketing/QuoteProvider";

export function HomeQuoteButton() {
  const { openQuote } = useQuote();
  return <Button onClick={openQuote}>Get a quote</Button>;
}

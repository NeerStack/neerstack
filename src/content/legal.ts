import { site } from "@/content/site";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: "privacy" | "terms" | "cookies";
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const legalUpdated = "17 August 2026";

const companyLine = `${site.legalName} (${site.rcNumber})`;
const contactLine = `${site.email}, ${site.address}`;

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses, and protects personal data.`,
  updated: legalUpdated,
  sections: [
    {
      heading: "Who we are",
      blocks: [
        {
          type: "p",
          text: `NeerStack is the trading name of ${companyLine}, a company registered in Nigeria. Registered office: ${site.address}.`,
        },
        {
          type: "p",
          text: `This policy explains how we handle personal data when you visit ${site.url}, contact us, or work with us. We process data in line with the Nigeria Data Protection Act 2023 (NDPA) and other applicable law.`,
        },
        {
          type: "p",
          text: `${site.legalName} is the data controller for personal data described here. Contact us at ${contactLine}.`,
        },
      ],
    },
    {
      heading: "Data we collect",
      blocks: [
        {
          type: "p",
          text: "We collect only what we need to run the site and respond to you.",
        },
        {
          type: "ul",
          items: [
            "Contact form: name, email address, optional phone number, and your message.",
            "Email or LinkedIn: whatever you choose to send us.",
            "Project work: names, emails, and business details needed to deliver a statement of work, under that engagement.",
            "Technical: browser type, pages viewed, and similar logs our host may keep to operate and secure the site.",
            "Preferences: a theme choice stored on your device (see the Cookie Policy).",
          ],
        },
        {
          type: "p",
          text: "We do not ask for payment card details through this website. We do not knowingly collect data from children.",
        },
      ],
    },
    {
      heading: "How we use data",
      blocks: [
        {
          type: "ul",
          items: [
            "To reply to enquiries and discuss possible work.",
            "To perform a contract, or steps you ask for before a contract.",
            "To operate, secure, and improve the website.",
            "To meet legal, tax, and accounting duties.",
          ],
        },
        {
          type: "p",
          text: "We rely on your consent when you submit the contact form, our legitimate interests in running a B2B software practice, and legal obligation where the law requires us to keep records.",
        },
      ],
    },
    {
      heading: "Sharing",
      blocks: [
        {
          type: "p",
          text: "We do not sell personal data. We may share it with:",
        },
        {
          type: "ul",
          items: [
            "Hosting, email, and infrastructure providers who process data on our instructions.",
            "Professional advisers (for example lawyers or accountants) where needed.",
            "Authorities when the law requires it.",
          ],
        },
        {
          type: "p",
          text: "If a provider is outside Nigeria, we take steps required by the NDPA before the transfer.",
        },
      ],
    },
    {
      heading: "Retention",
      blocks: [
        {
          type: "p",
          text: "Enquiry messages are kept as long as needed to handle the request and for a reasonable follow-up period, then deleted or archived as required by law. Contract and billing records are kept for the periods Nigerian company and tax rules require.",
        },
      ],
    },
    {
      heading: "Security",
      blocks: [
        {
          type: "p",
          text: "We use access controls, HTTPS, and least-privilege practices appropriate to a small professional firm. No method of transmission or storage is fully secure. Please avoid sending secrets through the public contact form.",
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Subject to the NDPA, you may ask to access, correct, delete, or restrict personal data we hold, object to certain processing, or withdraw consent where we rely on it. Write to us at the contact details above. You may also complain to the Nigeria Data Protection Commission (NDPC).",
        },
      ],
    },
    {
      heading: "Changes",
      blocks: [
        {
          type: "p",
          text: "We may update this policy. The date at the top of the page is the latest version. Material changes will be reflected on this page.",
        },
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  slug: "terms",
  title: "Terms and Conditions",
  description: `Terms for using the ${site.name} website and engaging ${site.legalName}.`,
  updated: legalUpdated,
  sections: [
    {
      heading: "Agreement",
      blocks: [
        {
          type: "p",
          text: `These terms govern your use of ${site.url} (the "Site"), operated by ${companyLine} ("NeerStack", "we", "us"). Registered office: ${site.address}.`,
        },
        {
          type: "p",
          text: "By using the Site you agree to these terms and to our Privacy Policy and Cookie Policy. If you do not agree, do not use the Site.",
        },
      ],
    },
    {
      heading: "The Site",
      blocks: [
        {
          type: "p",
          text: "The Site describes our software design, engineering, testing, and product services. Content is for general information. It is not a binding offer, legal advice, or a guarantee of results.",
        },
        {
          type: "p",
          text: "We may change or withdraw pages, portfolio items, or contact channels without notice. We do not warrant that the Site will be uninterrupted or error-free.",
        },
      ],
    },
    {
      heading: "Enquiries and paid work",
      blocks: [
        {
          type: "p",
          text: "Sending a message through the contact form does not create a client relationship. Paid work starts only when both parties sign a proposal, statement of work, or other written agreement. That agreement controls fees, scope, IP, confidentiality, and liability for the engagement.",
        },
        {
          type: "p",
          text: "If those documents conflict with these website terms, the signed engagement documents prevail for that project.",
        },
      ],
    },
    {
      heading: "Acceptable use",
      blocks: [
        {
          type: "p",
          text: "You must not misuse the Site, including by attempting to break security, scrape at a volume that harms the service, submit unlawful or misleading content, or use the Site to send spam.",
        },
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: `The Site, NeerStack name, mark, and original content are owned by ${site.legalName} or our licensors. You may not copy, modify, or republish them without written permission, except for fair dealing allowed by law.`,
        },
        {
          type: "p",
          text: "Client product names and marks (including PactReach and ProduceMart) remain the property of their owners and appear as examples of work.",
        },
      ],
    },
    {
      heading: "Liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent allowed by Nigerian law, we are not liable for loss arising from use of, or inability to use, the Site, including indirect or consequential loss, lost profit, or lost data. Nothing in these terms limits liability for fraud, death or personal injury caused by negligence, or any liability that cannot be limited by law.",
        },
        {
          type: "p",
          text: "Website content is provided as-is. Project warranties, if any, are set out only in the signed engagement documents.",
        },
      ],
    },
    {
      heading: "Governing law",
      blocks: [
        {
          type: "p",
          text: "These terms are governed by the laws of the Federal Republic of Nigeria. Courts in Nigeria have exclusive jurisdiction, without limiting any non-waivable consumer rights that may apply.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: `Questions about these terms: ${contactLine}.`,
        },
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar storage on this website.`,
  updated: legalUpdated,
  sections: [
    {
      heading: "What this covers",
      blocks: [
        {
          type: "p",
          text: `This policy explains cookies and similar technologies on ${site.url}, operated by ${companyLine}. It should be read with our Privacy Policy.`,
        },
      ],
    },
    {
      heading: "What we use today",
      blocks: [
        {
          type: "p",
          text: "We do not currently set advertising or analytics cookies. The Site stores your theme preference (light, dark, or system) in your browser's local storage so the layout stays consistent on return visits. That storage stays on your device and is not used to identify you across other sites.",
        },
        {
          type: "p",
          text: "Our hosting provider may set strictly necessary cookies or logs needed to deliver pages securely (for example TLS and traffic protection).",
        },
      ],
    },
    {
      heading: "If that changes",
      blocks: [
        {
          type: "p",
          text: "If we later add analytics or marketing cookies, we will update this page and, where required by law, ask for consent before non-essential cookies run.",
        },
      ],
    },
    {
      heading: "Your controls",
      blocks: [
        {
          type: "p",
          text: "You can clear site data or block cookies in your browser settings. Clearing local storage will reset the theme preference. Blocking all cookies may affect how some sites work; this Site should still remain usable.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: `Questions: ${contactLine}.`,
        },
      ],
    },
  ],
};

export const legalDocs = [privacyPolicy, termsOfUse, cookiePolicy] as const;

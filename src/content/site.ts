export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  hero: string;
  highlights: string[];
  process: { step: string; title: string; body: string }[];
  deliverables: string[];
  outcomes: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Website" | "Mobile" | "Platform";
  summary: string;
  image: string;
  /** Optional lockup/preview for void/dark surfaces */
  imageOnDark?: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "design",
    title: "UI/UX Design",
    short: "Interfaces that feel inevitable.",
    summary:
      "We design product surfaces that are clear, modern, and built for how people actually work, from first wireframe to polished systems.",
    hero:
      "Visual systems, product flows, and interaction details that make complex software feel simple to use.",
    highlights: [
      "Responsive layouts for desktop, tablet, and mobile",
      "Modern visual systems with purposeful hierarchy",
      "Experience flows that reduce friction and lift conversion",
      "Design systems that scale with your product team",
      "Prototype-led validation before expensive build cycles",
    ],
    process: [
      { step: "01", title: "Discover", body: "Stakeholder interviews, competitive scans, and a clear map of user jobs-to-be-done." },
      { step: "02", title: "Structure", body: "Information architecture, flows, and wireframes that lock scope before polish." },
      { step: "03", title: "Craft", body: "High-fidelity UI, motion cues, and component systems tuned to your brand." },
      { step: "04", title: "Handoff", body: "Specs, tokens, and prototypes engineers can ship without guessing." },
    ],
    deliverables: [
      "UX research summary and opportunity map",
      "User flows and low-fidelity wireframes",
      "High-fidelity UI for key screens",
      "Component library and design tokens",
      "Interactive prototype for stakeholder review",
    ],
    outcomes: [
      "Faster decisions with shared visual language",
      "Fewer rewrites during engineering",
      "Interfaces users understand on first use",
    ],
    tools: ["Figma", "FigJam", "Principle", "Lottie", "Design tokens"],
    faqs: [
      { q: "Do you work inside our existing design system?", a: "Yes. We extend what you have, or build a lightweight system if you are starting fresh." },
      { q: "Can design run in parallel with engineering?", a: "That is our default. We stage screens so build can start while later flows are still refining." },
    ],
  },
  {
    slug: "web-dev",
    title: "Website Development",
    short: "Fast, accessible, production-ready web.",
    summary:
      "We turn designs into resilient websites and web apps that are performant, maintainable, and ready for real users and real traffic.",
    hero: "Frontend architecture, APIs, and content systems that stay fast as your product grows.",
    highlights: [
      "Modern frontend stacks with clean architecture",
      "Accessible, SEO-aware page structure",
      "Integrations for forms, CMS, analytics, and APIs",
      "Performance budgets and Core Web Vitals focus",
      "CI-friendly deployments and preview environments",
    ],
    process: [
      { step: "01", title: "Plan", body: "Tech choices, content model, and delivery milestones aligned to launch goals." },
      { step: "02", title: "Build", body: "Component-driven UI, API wiring, and CMS hooks with reviewable pull requests." },
      { step: "03", title: "Harden", body: "Accessibility passes, performance tuning, and cross-browser QA." },
      { step: "04", title: "Launch", body: "Deploy, monitor, and hand over runbooks so your team owns the next iteration." },
    ],
    deliverables: [
      "Production web app or marketing site",
      "Responsive UI matching approved designs",
      "CMS or admin hooks where needed",
      "Analytics and form integrations",
      "Deployment pipeline and documentation",
    ],
    outcomes: [
      "Pages that load quickly and convert",
      "Code your team can maintain",
      "SEO foundations that do not fight growth",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind", "Node", "Vercel"],
    faqs: [
      { q: "Do you support static export and headless CMS?", a: "Yes. We pick the rendering model that fits your hosting and content workflow." },
      { q: "Can you rebuild an existing site without downtime?", a: "We plan cutovers with staging, redirects, and rollback paths so launches stay calm." },
    ],
  },
  {
    slug: "mobile-dev",
    title: "Mobile App Development",
    short: "Native-feeling apps, shipped with care.",
    summary:
      "From MVP to multi-platform product, we build mobile experiences that feel fast, reliable, and aligned with your brand.",
    hero: "iOS and Android products with solid APIs, thoughtful offline states, and release-ready builds.",
    highlights: [
      "Cross-platform and native-quality experiences",
      "API-backed features with solid offline and online states",
      "Release-ready builds with clear handoff",
      "Push, auth, payments, and device integrations",
      "Store submission support and crash monitoring",
    ],
    process: [
      { step: "01", title: "Scope", body: "MVP boundaries, platform targets, and a release plan your stakeholders can track." },
      { step: "02", title: "Implement", body: "Feature slices with shared design language and testable API contracts." },
      { step: "03", title: "Polish", body: "Motion, empty states, permissions, and edge cases that make apps feel finished." },
      { step: "04", title: "Ship", body: "Store builds, release notes, and monitoring so day-one issues get caught early." },
    ],
    deliverables: [
      "iOS and/or Android application builds",
      "Backend or API integration layer",
      "QA checklist and known-issue log",
      "Store assets guidance",
      "Handoff docs for ongoing maintenance",
    ],
    outcomes: [
      "Apps users keep opening",
      "Fewer production surprises after launch",
      "A foundation ready for version 1.1",
    ],
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    faqs: [
      { q: "Flutter or native?", a: "We recommend based on team skills, timeline, and how deep you need platform APIs." },
      { q: "Do you maintain apps after launch?", a: "Yes. Retainer or sprint-based support keeps stores, SDKs, and OS changes covered." },
    ],
  },
  {
    slug: "software-test",
    title: "Software Testing",
    short: "Confidence before every release.",
    summary:
      "We validate quality across critical paths so your team ships with fewer surprises: functional coverage, regression safety, and clear reporting.",
    hero: "Manual and automated quality programs that protect releases without slowing the roadmap.",
    highlights: [
      "Manual and automated test strategies",
      "Regression suites for release confidence",
      "Actionable defect reports, not noise",
      "API, UI, and end-to-end coverage plans",
      "Release gates tuned to your risk profile",
    ],
    process: [
      { step: "01", title: "Assess", body: "Map critical journeys, risk areas, and the gaps in your current QA practice." },
      { step: "02", title: "Design", body: "Write cases, pick automation targets, and define what done means for a release." },
      { step: "03", title: "Execute", body: "Run cycles, file clear defects, and keep stakeholders synced on severity." },
      { step: "04", title: "Automate", body: "Codify the highest-value checks so regressions get caught in CI." },
    ],
    deliverables: [
      "Test plan and coverage matrix",
      "Executed manual cycles with reports",
      "Automated suite for priority flows",
      "Defect log with reproduction steps",
      "Release readiness recommendation",
    ],
    outcomes: [
      "Fewer escaped bugs in production",
      "Predictable release cadence",
      "Shared definition of quality across teams",
    ],
    tools: ["Playwright", "Cypress", "Jest", "Postman", "CI pipelines"],
    faqs: [
      { q: "Can you plug into our existing CI?", a: "Yes. We integrate gates into the pipeline you already trust." },
      { q: "Do you only automate?", a: "No. High-risk exploratory and usability checks stay human where it matters." },
    ],
  },
  {
    slug: "product-management",
    title: "Product Management",
    short: "Clarity from idea to shipped outcome.",
    summary:
      "We help define scope, prioritize ruthlessly, and keep delivery aligned with business goals so engineering effort maps to outcomes.",
    hero: "Roadmaps, specs, and delivery rhythms that keep design and engineering pointed at the same result.",
    highlights: [
      "Roadmaps grounded in user and business value",
      "Clear specs and acceptance criteria",
      "Delivery cadence that keeps stakeholders aligned",
      "Discovery workshops that cut fluff early",
      "Metrics that show whether a release worked",
    ],
    process: [
      { step: "01", title: "Frame", body: "Clarify the problem, audience, and success metrics before solutions sprawl." },
      { step: "02", title: "Prioritize", body: "Build a roadmap that balances quick wins with foundational work." },
      { step: "03", title: "Specify", body: "Write stories and acceptance criteria engineers and designers can execute." },
      { step: "04", title: "Steer", body: "Run ceremonies, unblock teams, and report progress in plain language." },
    ],
    deliverables: [
      "Product brief and success metrics",
      "Prioritized roadmap",
      "Epics, stories, and acceptance criteria",
      "Release notes and stakeholder updates",
      "Post-launch learning summary",
    ],
    outcomes: [
      "Less thrash mid-sprint",
      "Engineering time tied to business goals",
      "Stakeholders who know what ships next",
    ],
    tools: ["Linear", "Jira", "Notion", "Amplitude", "Figma"],
    faqs: [
      { q: "Can you embed with our existing PM?", a: "Absolutely. We reinforce capacity, own a workstream, or run discovery spikes." },
      { q: "Do you only manage NeerStack builds?", a: "We can facilitate delivery for mixed teams, including your in-house engineers." },
    ],
  },
];

/** Public portfolio: ProduceMart + PactReach. Never Enitars/MageHub. */
export const portfolio: PortfolioItem[] = [
  {
    slug: "pactreach",
    title: "PactReach",
    category: "Platform",
    summary:
      "Escrow marketplace for brands and creators. NeerStack designed and built the product end to end: campaigns, deals, tracked links, wallets, and ops consoles.",
    image: "/images/pactreach/lockup-primary.png",
    imageOnDark: "/images/pactreach/lockup-on-dark.png",
    tags: ["Web", "Marketplace", "Escrow", "Product"],
    href: "https://pactreach.com/",
    featured: true,
  },
  {
    slug: "producemart",
    title: "ProduceMart",
    category: "Website",
    summary:
      "Agricultural e-commerce platform connecting buyers and suppliers. API and frontend built for clarity, trust, and conversion across catalog, checkout, and operations.",
    image: "/images/producemart.png",
    tags: ["Web", "Commerce", "API", "Marketplace"],
    href: "https://producemart.com/",
    featured: true,
  },
];

export const principles = [
  { title: "Clarity first", body: "Every screen, endpoint, and decision should be explainable in one sentence." },
  { title: "Ship in slices", body: "Vertical slices beat big-bang launches. Users feel progress; risk stays contained." },
  { title: "Own the craft", body: "Design, code, and QA stay connected so quality is not a late-stage apology." },
  { title: "Partner, do not vanish", body: "We work like an embedded team: visible progress, honest tradeoffs, clean handoff." },
];

export const engagementSteps = [
  { step: "01", title: "Brief", body: "Share goals, constraints, and what good looks like for the next release." },
  { step: "02", title: "Plan", body: "We return a scoped approach, timeline, and team shape you can approve quickly." },
  { step: "03", title: "Build", body: "Weekly demos, shared boards, and production-minded delivery from day one." },
  { step: "04", title: "Grow", body: "Launch, measure, and keep iterating with the same people who know the system." },
];

export const stats = [
  { value: "5", label: "Core disciplines", detail: "Design to delivery in one team" },
  { value: "2", label: "Featured products", detail: "PactReach and ProduceMart" },
  { value: "100%", label: "Remote-ready", detail: "Timezone-flexible partnership" },
  { value: "1", label: "Accountable team", detail: "No agency telephone game" },
];

export const site = {
  name: "NeerStack",
  tagline: "Engineering partners for teams who ship.",
  description:
    "Hire professional software engineers for outsourced web, mobile, design, testing, and product work.",
  url: "https://neerstack.com",
  linkedin: "https://www.linkedin.com/company/neerstack/",
  email: "support@neerstack.com",
};

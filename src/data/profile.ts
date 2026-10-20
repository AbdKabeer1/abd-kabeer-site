/* ---------------------------------------------------------------------------
   Single source of truth for all site content.
   Edit this file to update the site — components read from it only.
--------------------------------------------------------------------------- */

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  tag: string;
  period: string;
  summary: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: "Abd Kabeer Salako",
  shortName: "Abd Kabeer",
  role: "Product & Operations",
  location: "Lahti, Finland",
  phone: "+358 44 988 7853",
  phoneHref: "tel:+358449887853",
  email: "Salakokabeer2004@gmail.com",
  github: "https://github.com/AbdKabeer1",
  summary:
    "Aspiring product manager with hands-on experience in operations, logistics and e-commerce. " +
    "Contributed to an SME inventory-management product end to end during HNG product management " +
    "training — user research, PRD writing and feature prioritisation. Brings firsthand domain " +
    "knowledge from running an independent electronics business and coordinating a residential " +
    "construction project. Currently studying International Business at LAB University of Applied " +
    "Sciences, looking for internships in logistics, e-commerce or SaaS.",
  intro:
    "I turn messy operational reality into structured product work — from stockrooms and " +
    "supplier negotiations to PRDs and prioritisation.",
  focus: ["Product thinking", "Supply chain & warehousing", "E-commerce operations"],
  metrics: [
    { value: "30+", label: "device sales managed weekly" },
    { value: "100+", label: "warehouse items handled per shift" },
    { value: "6-flat", label: "residential project coordinated in budget" },
    { value: "4", label: "apartment turnovers managed daily" },
  ],
  experience: [
    {
      company: "Self-employed",
      role: "Micro Business Owner — Electronics & Gadgets",
      location: "Ogun State, Nigeria",
      period: "2024 — Jun 2025",
      bullets: [
        "Ran end-to-end product operations: sourcing, pricing, inventory and customer experience for 30+ weekly device sales.",
        "Cut slow-moving stock and improved turnover by acting on gaps in the product mix — informal, data-driven catalogue decisions.",
        "Adapted go-to-market strategy to inflation, currency fluctuations and competitor pricing.",
        "Built a loyal customer base through transparent communication and structured after-sales support.",
        "Business paused on relocation to Finland for higher education.",
      ],
    },
    {
      company: "Building Contractor",
      role: "Assistant Project Manager — Construction",
      location: "Ogun State, Nigeria",
      period: "2023 — 2024",
      bullets: [
        "Coordinated contractors, suppliers and clients to keep a 6-flat residential project on budget and on schedule.",
        "Resolved a mid-project supplier bottleneck by sourcing alternative vendors, preventing schedule delays.",
        "Tracked daily on-site progress and flagged quality issues early.",
      ],
    },
    {
      company: "Delmart Farms",
      role: "Warehouse Assistant",
      location: "Ogun State, Nigeria",
      period: "2023 — 2025",
      bullets: [
        "Handled 100+ items per shift across inbound and outbound warehouse operations.",
        "Improved inventory organisation to reduce time-on-task and improve workplace safety.",
        "Collaborated with delivery drivers to keep distribution accurate and on time.",
      ],
    },
    {
      company: "Airbnb Apartments",
      role: "Cleaner — Hospitality",
      location: "Abeokuta, Nigeria",
      period: "Aug 2020 — Nov 2022",
      bullets: [
        "Managed operations across up to four apartment turnovers per day with structured cleaning and restocking routines.",
        "Maintained consistency and detail quality that supported positive guest experiences.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "SME Inventory Tracker",
      tag: "Product management · HNG",
      period: "2025 — 2026",
      summary:
        "A cross-functional product helping small-business owners manage inventory across multiple " +
        "e-commerce platforms (Shopify, AliExpress and others).",
      bullets: [
        "Contributed user research and wrote sections of the Product Requirements Document.",
        "Took part in feature prioritisation and wireframe reviews.",
        "Worked in Trello for task management and Figma for review cycles.",
      ],
    },
    {
      name: "MyMemo",
      tag: "Product build · side project",
      period: "2026",
      summary:
        "A live Finnish vocabulary game for language learners: spelling rounds, spaced repetition, " +
        "personal word banks and lightweight accounts.",
      bullets: [
        "Designed the product loop and shipped it end to end on Vercel with a Turso database.",
        "Built spelling drills with CEFR levels, review scheduling and progress tracking.",
        "Handles real users with per-browser guest profiles and optional accounts.",
      ],
      links: [
        { label: "Live site", href: "https://mymemo-omega.vercel.app" },
        { label: "Source", href: "https://github.com/AbdKabeer1/mymemo" },
      ],
    },
  ] satisfies Project[],
  certifications: [
    {
      name: "Product Management Certification",
      issuer: "HNG",
      period: "2025 — 2026",
      detail:
        "Product thinking, user problem definition, user research, feature prioritisation, " +
        "PRD writing and cross-functional collaboration on live product tasks.",
    },
    {
      name: "Google Project Management Certificate",
      issuer: "Google",
      period: "2024 — 2025",
      detail:
        "Project planning, scheduling, risk management and process improvement across " +
        "Agile and Waterfall methodologies.",
    },
  ],
  education: [
    {
      qualification: "BBA, International Business",
      institution: "LAB University of Applied Sciences",
      location: "Lahti, Finland",
      period: "Sept 2025 — present",
      detail:
        "Relevant studies: international business, marketing, logistics, project management, " +
        "supply chain and operations.",
    },
    {
      qualification: "High School Certificate",
      institution: "Paddy Bartholomew High School",
      location: "Nigeria",
      period: "",
      detail: "",
    },
  ],
  skills: [
    {
      label: "Product",
      items: [
        "User research",
        "PRD writing",
        "Feature prioritisation",
        "Product thinking",
        "Requirements gathering",
      ],
    },
    {
      label: "Project & operations",
      items: [
        "Stakeholder coordination",
        "Workflow optimisation",
        "Inventory & logistics management",
        "Agile & Waterfall",
      ],
    },
    {
      label: "Tools",
      items: ["Figma", "Trello", "Microsoft Word", "Excel", "PowerPoint"],
    },
    {
      label: "Domain knowledge",
      items: [
        "E-commerce operations",
        "Supply chain & warehousing",
        "Multi-channel retail",
      ],
    },
  ] satisfies SkillGroup[],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Finnish", level: "Basic" },
    { name: "Yoruba", level: "Mother tongue" },
  ],
} as const;

export const year = new Date().getFullYear();

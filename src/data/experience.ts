export interface Experience {
  id: number;
  title: string;
  promotedFrom?: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  url?: string | string[];
  linkLabel?: string;
  linkLabels?: string[];
  image?: string;
}

export interface ExperienceProject {
  id: number;
  name: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Co-Founding CTO",
    promotedFrom: "Senior Web Developer · Dec 2024 – Feb 2026",
    company: "Open & Run",
    period: "Dec 2024 - Present",
    description:
      "Joined as Senior Web Developer in December 2024 and promoted to Co-Founding CTO in March 2026. Sole engineer on the full stack — architected and shipped a multi-tenant SaaS platform from 0 to production. Built role-based auth, staff and location management, daily checklists, incident reporting, document vault, DocuSign PDF automation, and Stripe per-location subscription billing. Deployed on Vercel with scheduled cron jobs and extended serverless functions. Leading all technical decisions end to end: architecture, infrastructure, product, and shipping.",
    technologies: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS", "Stripe", "DocuSign", "SendGrid", "Vercel"],
    url: ["https://www.openandrun.com/", "https://app.openandrun.com/"],
    linkLabels: ["Website", "App"],
    image: "/Projects/OpenAndRun.webp"
  },
  {
    id: 2,
    title: "Freelance Full Stack Engineer",
    company: "Upwork",
    period: "Nov 2022 - Present",
    description:
      "Top Rated Plus on Upwork with a 100% Job Success Score and $200K+ earned across 3+ years of full-time freelance work. Delivered high-quality frontend and full-stack projects for clients across luxury e-commerce, SaaS, Smart TV apps, and creative portfolios. Projects include La Ligne NYC, OFTV Web, OFTV LG TV App, Covet by Christos, Ourmada, SelfBook, and more.",
    technologies: ["React", "Next.js", "TypeScript", "Vue.js", "Shopify", "JavaScript", "HTML", "CSS"],
    url: "https://www.upwork.com/freelancers/emrichperrier",
    linkLabel: "Upwork Profile",
    image: "/Experience/upworksc.webp"
  },
  {
    id: 3,
    title: "Studio/Production Coordinator",
    company: "BUCK Design",
    period: "Mar 2024 - Aug 2024",
    description:
      "Supported studio operations at BUCK, a world-class motion design and creative studio. Managed front desk, coordinated with external contractors, supported IT setup for meetings and events, handled budgeting and invoicing, and organized internal cultural events.",
    technologies: ["Studio Operations", "IT Support", "Event Coordination", "Budgeting"],
    url: "https://buck.co/",
    linkLabel: "buck.co",
    image: "/Experience/bucky.webp"
  },
  {
    id: 4,
    title: "Junior Frontend Developer",
    company: "Tango Analytics",
    period: "Oct 2021 - Mar 2023",
    description:
      "Promoted from Frontend UI Intern to Junior Frontend Developer. Led the full migration of Tango's Mapviewer from VueJS 2 and Quasar v1 to VueJS 3 and Quasar v2, maintaining functionality consistency through debugging and refactoring. Built custom UI components for Tango's enterprise map software using Quasar Framework and Oracle Map Viewer. Self-taught TypeScript, Vue, and Quasar on the job to accelerate delivery.",
    technologies: ["Vue.js", "TypeScript", "Quasar Framework", "Oracle Map Viewer", "VueX"],
    url: "https://tangoanalytics.com/",
    linkLabel: "tangoanalytics.com",
    image: "/Projects/Tango.webp"
  },
  {
    id: 5,
    title: "Strength & Conditioning Coach",
    company: "JDI Barbell / Independent",
    period: "Dec 2020 - Present",
    description:
      "Online and in-person coaching for competitive powerlifting athletes. Write monthly training blocks updated week to week, review technique video submissions, run weekly check-in calls, and provide meet day handling including water cut protocol, warm-up scheduling, and attempt selection. Coached athletes to significant total increases — one client added 100kg to their total in 6 months.",
    technologies: ["Program Design", "Athlete Management", "Meet Day Handling", "Remote Coaching"],
    image: "/BeyondCode/powerlifting-squat.webp"
  }
];

export const sidebarProjects: ExperienceProject[] = [
  {
    id: 1,
    name: "Open & Run Platform",
    description:
      "Senior developer building a full-stack platform for business management solutions using React, Next.js, Supabase, and Vercel.",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "Vercel",
      "TailwindCSS",
      "NextAuth.js",
      "Stripe",
      "Docusign"
    ]
  },
  {
    id: 2,
    name: "AI Development Coaching",
    description:
      "Coaching a developer on how to build apps and code using AI development tools and modern development practices.",
    technologies: ["AI Tools", "Development Mentoring", "Code Review", "Best Practices"]
  },
  {
    id: 3,
    name: "Full-Stack Productivity App",
    description:
      "Designing and developing a full-stack productivity application while managing and mentoring another developer on the project.",
    technologies: [
      "Full-Stack Development",
      "Project Management",
      "Team Leadership",
      "Product Design"
    ]
  }
];

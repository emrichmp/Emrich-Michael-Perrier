export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  url?: string | string[];
  linkLabel?: string;
  linkLabels?: string[];
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
    title: "Senior Web Developer",
    company: "Open & Run",
    period: "12/2024 - Present",
    description:
      "Sole developer for Open & Run, building a full-stack platform for business management solutions.",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "Vercel",
      "TailwindCSS",
      "NextAuth.js",
      "Stripe",
      "Docusign"
    ],
    achievements: [
      "Built a full-stack platform using React, Next.js, Supabase, Vercel, and TailwindCSS",
      "Implemented sign-up/login flows, email verification with NextAuth.js, and password reset features",
      "Developed staff and location management pages, incident reporting tool, and integrated Docusign for automated PDF generation",
      "Integrated Stripe API for billing and established CI/CD pipelines using GitHub and Vercel",
      "Built RESTful APIs with Next.js authentication and implemented a chat tool for real-time communication"
    ],
    url: ["https://www.openandrun.com/", "https://app.openandrun.com/"],
    linkLabels: ["Website", "App"]
  },
  {
    id: 2,
    title: "Freelance Fullstack Software Engineer",
    company: "Upwork (Full-Time Freelance)",
    period: "11/2022 - Present",
    description:
      "Earned Upwork's Top Rated Plus badge with a 100% Job Success Score, delivering high-quality code for multiple frontend and full-stack projects.",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Vue", "Shopify"],
    achievements: [
      "Earned Upwork's Top Rated Plus badge with a 100% Job Success Score",
      "Consistently communicate with clients promptly and deliver progress updates on projects",
      "Deliver high quality code commits for multiple frontend and full-stack projects",
      "Completed projects for La Ligne, OFTV website, OFTV LG App, Covet by Christos, SelfBook, Ourmada, Open&Run and many more"
    ],
    url: "https://www.upwork.com/freelancers/emrichperrier",
    linkLabel: "Upwork Profile"
  },
  {
    id: 3,
    title: "Studio/Production Coordinator",
    company: "BUCK Design",
    period: "03/2024 - 08/2024",
    description:
      "Managed front desk operations and supported various administrative and technical functions.",
    technologies: ["IT Support", "Event Management", "Administrative Systems"],
    achievements: [
      "Managed front desk operations, including calls, deliveries, and guest/client assistance",
      "Supported budgeting, invoicing, maintenance coordination, and IT tech setups for meetings",
      "Organized cultural events to streamline logistics and enhance staff engagement"
    ],
    url: "https://buck.co/",
    linkLabel: "buck.co"
  },
  {
    id: 4,
    title: "Junior Frontend Developer (Promoted from Frontend UI Intern)",
    company: "Tango Analytics",
    period: "10/2021 - 03/2023",
    description:
      "Led migration projects and built custom UI components for Tango's client map software.",
    technologies: ["VueJS", "Quasar Framework", "TypeScript", "Oracle Map Viewer"],
    achievements: [
      "Led the migration of Tango's Mapviewer from VueJS 2.0 and Quasar v1 to VueJS 3.0 and Quasar v2",
      "Ensured functionality consistency through debugging and refactoring during migration",
      "Built custom UI components for Tango's client map software using Quasar Framework and Oracle Map Viewer",
      "Self-taught TypeScript, VueJS, and Quasar to accelerate feature development and software optimization"
    ],
    url: "https://tangoanalytics.com/",
    linkLabel: "tangoanalytics.com"
  },
  {
    id: 5,
    title: "Strength and Conditioning Coach",
    company: "Strength & Fitness Coach",
    period: "12/2020 - Present",
    description:
      "Write and plan training programs for competitive athletes, providing personalized coaching and support.",
    technologies: ["Program Design", "Athlete Management", "Communication Systems"],
    achievements: [
      "Write and plan training programs for 15 competitive athletes tailored for their competitive and health goals",
      "Oversaw Coaches Hours to assist athletes with technique, spotting for safety or general questions on movement mechanics",
      "Provide constant communication with clients and check in with them and the training program over weekly calls"
    ]
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

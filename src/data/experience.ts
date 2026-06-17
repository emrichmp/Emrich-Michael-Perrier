export interface Experience {
  id: number;
  title: string;
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
    title: "Co-Founding CTO & Senior Web Developer",
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
    url: ["https://www.openandrun.com/", "https://app.openandrun.com/"],
    linkLabels: ["Website", "App"],
    image: "/Projects/OpenAndRun.webp"
  },
  {
    id: 2,
    title: "Freelance Fullstack Software Engineer",
    company: "Upwork (Full-Time Freelance)",
    period: "11/2022 - Present",
    description:
      "Earned Upwork's Top Rated Plus badge with a 100% Job Success Score, delivering high-quality code for multiple frontend and full-stack projects.",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Vue", "Shopify"],
    url: "https://www.upwork.com/freelancers/emrichperrier",
    linkLabel: "Upwork Profile",
    image: "/Experience/upworksc.webp"
  },
  {
    id: 3,
    title: "Studio/Production Coordinator",
    company: "BUCK Design",
    period: "03/2024 - 08/2024",
    description:
      "Managed front desk operations and supported various administrative and technical functions.",
    technologies: ["IT Support", "Event Management", "Administrative Systems"],
    url: "https://buck.co/",
    linkLabel: "buck.co",
    image: "/Experience/bucky.webp"
  },
  {
    id: 4,
    title: "Junior Frontend Developer (Promoted from Frontend UI Intern)",
    company: "Tango Analytics",
    period: "10/2021 - 03/2023",
    description:
      "Led migration projects and built custom UI components for Tango's client map software.",
    technologies: ["VueJS", "Quasar Framework", "TypeScript", "Oracle Map Viewer"],
    url: "https://tangoanalytics.com/",
    linkLabel: "tangoanalytics.com",
    image: "/Projects/Tango.webp"
  },
  {
    id: 5,
    title: "Strength and Conditioning Coach",
    company: "Strength & Fitness Coach",
    period: "12/2020 - Present",
    description:
      "Write and plan training programs for competitive athletes, providing personalized coaching and support.",
    technologies: ["Program Design", "Athlete Management", "Communication Systems"],
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

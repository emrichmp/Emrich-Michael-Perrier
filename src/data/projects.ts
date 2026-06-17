export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  upworkUrl?: string;
  longDescription: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 5,
    title: "OFTV Web App",
    description: "Built major UI components for of.tv including navbar, header, and footer from Figma designs.",
    video: "https://pub-b966d945afe84c2bb3f6bae36be5f166.r2.dev/OFTV.mp4",
    technologies: ["Vue.js", "TypeScript", "VueX", "HTML", "CSS", "JavaScript", "Figma"],
    liveUrl: "https://of.tv/",
    longDescription:
      "Contracted to build major website components for of.tv. Implemented the navbar, header, and footer from Figma designs using Vue.js, TypeScript, and VueX for state management. Worked directly from design specs to deliver pixel-accurate, production-ready components.",
    features: [
      "Navbar component development and implementation",
      "Header section design and functionality",
      "Footer component construction",
      "Figma design integration and implementation",
      "Vue.js component architecture",
      "TypeScript integration for type safety"
    ]
  },
  {
    id: 4,
    title: "La Ligne NYC E-Commerce",
    description: "Frontend contributions and Shopify Scripts → Functions migration for luxury fashion e-commerce brand.",
    image: "/Projects/LaLigneNYC.webp",
    technologies: [
      "React",
      "TypeScript",
      "Shopify",
      "Hydrogen",
      "Redux",
      "styled-components",
      "JavaScript"
    ],
    liveUrl: "https://lalignenyc.com",
    longDescription:
      "Short-term engagement through The Lemonade Creative on La Ligne NYC, a luxury fashion e-commerce brand. Delivered React/TypeScript code improvements, resolved bug tickets, migrated Shopify Scripts to Shopify Functions, and shipped responsive design fixes across the storefront.",
    features: [
      "React/TypeScript codebase improvements and optimizations",
      "Bug ticket resolution and client support",
      "Shopify Scripts to Shopify Functions migration",
      "Responsive design enhancements and fixes",
      "E-commerce functionality improvements",
      "Performance optimization and code maintenance"
    ]
  },
  {
    id: 3,
    title: "Open & Run Platform",
    description:
      "Co-Founding CTO and sole engineer. Full-stack multi-tenant SaaS for small business operations.",
    image: "/Projects/OpenAndRun.webp",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "Vercel",
      "Tailwind CSS",
      "Stripe",
      "NextAuth.js",
      "SendGrid"
    ],
    liveUrl: "https://app.openandrun.com/",
    websiteUrl: "https://www.openandrun.com/",
    longDescription:
      "Co-Founding CTO and sole engineer on Open & Run — a full-stack multi-tenant SaaS platform built for the people who actually run small businesses. Architected and shipped the entire system from 0 to production: multi-tenant auth, role-based permissions, staff and location management, daily checklists, incident reporting, document vault, DocuSign PDF automation, and Stripe per-location subscription billing. Deployed on Vercel with scheduled cron jobs and extended serverless functions. Every technical decision — architecture, infrastructure, product, shipping — runs through me.",
    features: [
      "User authentication with NextAuth.js and email verification",
      "Staff and location management system",
      "Real-time incident reporting tool with photo attachments",
      "DocuSign integration for automated PDF generation",
      "Stripe API integration for billing and subscriptions",
      "Real-time chat tool for team communication"
    ]
  },
  {
    id: 11,
    title: "Coeur Leather",
    description:
      "Technical advisor on luxury leather goods Shopify storefront. Led Hydrogen → Liquid migration.",
    image: "/Projects/CoeurLeather.webp",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    liveUrl: "https://coeurleather.com",
    longDescription:
      "Technical advisor and lead developer for Coeur Leather, a high-end leather goods brand. Made and executed the architecture decision to migrate the storefront from Shopify Hydrogen back to Shopify Liquid — trading edge-case flexibility for maintainability, native Shopify features, and a faster iteration cycle. Delivered custom theme styling, premium product and collection templates, and a checkout experience tailored to a luxury brand.",
    features: [
      "Shopify Hydrogen to Liquid migration",
      "Luxury product and collection page templates",
      "Custom theme styling and brand-forward UX",
      "Native Shopify checkout and merchandising features",
      "Performance and maintainability improvements"
    ]
  },
  {
    id: 1,
    title: "Siddharth Agrawal Films Portfolio",
    description:
      "Portfolio website for LA-based Producer, DP, and Editor. Built with Next.js and Framer Motion.",
    video: "https://pub-b966d945afe84c2bb3f6bae36be5f166.r2.dev/SiddWebsiteDemo.mp4",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://www.siddharthagrawalfilms.com/",
    longDescription:
      "Designed and built a full portfolio website for Siddharth Agrawal, a Los Angeles-based Producer, Director of Photography, and Editor. The site showcases his reel, stills, bio, and contact with smooth animations, fast load times, and a clean responsive layout built to match the aesthetic of his work.",
    features: [
      "Professional portfolio showcase with reel and stills galleries",
      "Responsive design optimized for all devices",
      "Smooth animations and transitions",
      "Bio and about section with professional background",
      "Contact information and professional links",
      "Fast loading and SEO optimized"
    ]
  },
  {
    id: 2,
    title: "Kshitij Kapil Portfolio",
    description:
      "Portfolio website for Cinematographer and DP. Clean, fast, responsive.",
    video: "https://pub-b966d945afe84c2bb3f6bae36be5f166.r2.dev/KshitijWebsiteDemo.mp4",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://kshitijkapil.com/",
    longDescription:
      "Designed and built a portfolio website for Kshitij Kapil, a Cinematographer and Director of Photography. Features reel and stills galleries, bio, and contact — built with a minimal aesthetic that keeps the focus on his work. Responsive across all devices with smooth transitions and optimized performance.",
    features: [
      "Professional portfolio showcase with reel and stills galleries",
      "Responsive design optimized for all devices",
      "Smooth animations and transitions",
      "Bio and about section with professional background",
      "Contact information and professional links",
      "Fast loading and SEO optimized"
    ]
  },
  {
    id: 10,
    title: "Intrinsic Work",
    description:
      "Senior developer on full-stack productivity SaaS. Next.js frontend, NestJS backend, Google Calendar sync.",
    image: "/Projects/IntrinsicWork.webp",
    technologies: ["Next.js", "NestJS", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "https://www.myintrinsicwork.com/",
    longDescription:
      "Senior developer on Intrinsic Work, a productivity SaaS built around deep work and intentional planning. Responsible for feature delivery across the full stack — Next.js App Router frontend, NestJS backend, Supabase and PostgreSQL data layer. Key work includes architecting Google Calendar OAuth sync with encrypted token storage, building the Super Day time blocking flows, onboarding, and People/Notes modernization. Mentoring a junior developer alongside active shipping.",
    features: [
      "Super Day, Super List, and Big Goals product flows",
      "Full-stack development with Next.js and NestJS",
      "Supabase and PostgreSQL data layer",
      "TypeScript across frontend and backend",
      "Collaboration on product design and feature delivery"
    ]
  },
  {
    id: 9,
    title: "Helios Solar Tracker",
    description:
      "Lead engineer on compliance SaaS for solar owners tracking IRS material participation hours.",
    image: "/Projects/Helios.webp",
    technologies: ["TypeScript", "React", "Express", "PostgreSQL", "Drizzle ORM"],
    liveUrl: "https://solar-time-tracker.com/",
    longDescription:
      "Lead engineer and security lead on Helios Solar Tracker, a compliance SaaS for solar business owners tracking material participation hours for IRS federal tax credits. Built the full system — Express 5 API, PostgreSQL, Drizzle ORM, Google Calendar and Gmail sync for automatic hour ingestion, joint filing partner workflows, and PDF year-end reports. Completed CASA Tier 2 security compliance with a clean DAST scan before Google OAuth approval.",
    features: [
      "Material participation hour tracking for tax compliance",
      "React and TypeScript frontend",
      "Express API and PostgreSQL backend",
      "Drizzle ORM data modeling",
      "Reporting workflows for solar business owners"
    ]
  },
  {
    id: 6,
    title: "Tango Analytics Platform",
    description:
      "Led Vue 2 → 3 and Quasar v1 → v2 migration for enterprise map analytics platform.",
    image: "/Projects/Tango.webp",
    technologies: ["Vue.js", "TypeScript", "Quasar Framework", "Oracle Map Viewer"],
    liveUrl: "https://tangoanalytics.com/products/tango-platform/",
    longDescription:
      "Joined Tango Analytics as a Frontend UI Intern and was promoted to Junior Frontend Developer. Led the full migration of Tango's Mapviewer from VueJS 2 and Quasar v1 to VueJS 3 and Quasar v2, maintaining functionality consistency through debugging and refactoring. Built custom UI components for Oracle Map Viewer. Self-taught TypeScript, Vue, and Quasar on the job to accelerate delivery on an enterprise-grade product.",
    features: [
      "VueJS 2.0 to 3.0 migration with Quasar v1 to v2 upgrade",
      "Custom UI components development for map software",
      "Oracle Map Viewer integration and optimization",
      "TypeScript implementation for type safety",
      "Quasar Framework component architecture",
      "Enterprise-level debugging and refactoring"
    ]
  },
  {
    id: 7,
    title: "OFTV LG TV App",
    description:
      "Sole developer of OFTV's LG Smart TV app with Magic Remote support and Zype API integration.",
    image: "/Projects/LG_OFTV.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Smart TV", "WordPress", "LG App Development"],
    liveUrl:
      "https://us.lgappstv.com/main/tvapp/detail?appId=1220217&catCode1=&moreYn=N&cateYn=N&orderType=0&headerName=%EC%A0%84%EC%B2%B4&appRankCode=&sellrUsrNo=&curPage=1",
    upworkUrl: "https://www.upwork.com/freelancers/emrichperrier",
    longDescription:
      "Sole developer on the OFTV LG Smart TV application. Built entirely from HTML, CSS, and JavaScript based on Figma designs. Implemented cursor functionality for the LG Magic Remote, integrated OFTV's Zype API for content management, and connected WordPress API for dynamic content. Collaborated with a dedicated tester on Upwork to ship a polished, bug-free TV app experience.",
    features: [
      "LGTV Magic Remote cursor functionality implementation",
      "Figma design to code conversion and implementation",
      "OFTV Zype API integration for content management",
      "WordPress API integration for dynamic content",
      "Smart TV platform optimization and testing",
      "Upwork collaboration with dedicated tester for bug fixes"
    ]
  },
  {
    id: 8,
    title: "Covet by Christos Platform",
    description:
      "Livestreaming platform with Shopify integration for luxury fashion social commerce",
    video: "https://pub-b966d945afe84c2bb3f6bae36be5f166.r2.dev/CovetByChristos.mp4",
    technologies: ["React", "Next.js", "Shopify", "VideoSDK", "Sanity", "HubSpot"],
    liveUrl: "https://www.covetbychristos.com/",
    upworkUrl: "https://www.upwork.com/freelancers/emrichperrier",
    longDescription:
      "Built a custom livestreaming platform for Covet by Christos, a luxury fashion social commerce brand. Integrated VideoSDK for live shopping experiences, Shopify for real-time product management, Sanity CMS for content, and HubSpot CRM for customer data. Worked collaboratively with a team of developers and Figma designers to deliver a polished, production-ready live commerce experience.",
    features: [
      "Livestreaming platform development with VideoSDK integration",
      "Shopify e-commerce integration for real-time product management",
      "Custom React/Next.js frontend with responsive design",
      "Sanity CMS integration for content management",
      "HubSpot CRM integration for customer relationship management",
      "Team collaboration with developers and Figma designers"
    ]
  }
];

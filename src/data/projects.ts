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
    description: "Major web app components development including navbar, header & footer",
    video: "/Projects/OFTV.mp4",
    technologies: ["Vue.js", "TypeScript", "VueX", "HTML", "CSS", "JavaScript", "Figma"],
    liveUrl: "https://of.tv/",
    longDescription:
      "Worked on major website components such as the navbar, header & footer for the of.tv website. Utilized website examples and Figma designs to construct components using Vue.js, TypeScript, and VueX for state management.",
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
    description: "E-commerce website development and maintenance for luxury fashion brand",
    image: "/Projects/LaLigneNYC.png",
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
      "Completed short-term contributions on the La Ligne NYC e-commerce website for The Lemonade Creative. Work included React/TypeScript code improvements, bug fixes, Shopify Scripts to Shopify Functions migration, and responsive design enhancements for the luxury fashion brand.",
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
      "Full-stack business management platform for incident reporting, staff management, and operational excellence",
    image: "/Projects/OpenAndRun.png",
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
      "A comprehensive full-stack business management platform built as the Senior Developer and sole developer for Open & Run. The platform streamlines incident reporting, staff management, and operational processes for service-based businesses. Features include user authentication, real-time incident reporting, automated PDF generation, and integrated billing.",
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
      "High-end e-commerce storefront for a luxury leather goods brand. Migrated from Shopify Hydrogen back to Shopify Liquid for maintainability and native Shopify features.",
    image: "/Projects/CoeurLeather.png",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    liveUrl: "https://coeurleather.com",
    longDescription: "Coming soon.",
    features: []
  },
  {
    id: 1,
    title: "Siddharth Agrawal Films Portfolio",
    description:
      "Professional portfolio website showcasing reel, stills, bio and more for Producer, Director of Photography and Editor",
    video: "/Projects/SiddWebsiteDemo.mp4",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://www.siddharthagrawalfilms.com/",
    longDescription:
      "A fully built frontend portfolio website designed to showcase Siddharth Agrawal's professional work as a Producer, Director of Photography, and Editor. The website features a modern, responsive design with smooth animations and optimized performance.",
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
      "Professional portfolio website showcasing reel, stills, bio and more for Cinematographer and Director of Photography",
    video: "/Projects/KshitijWebsiteDemo.mp4",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://kshitijkapil.com/",
    longDescription:
      "A fully built frontend portfolio website designed to showcase Kshitij Kapil's professional work as a Cinematographer and Director of Photography. The website features a modern, responsive design with smooth animations and optimized performance.",
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
      "Productivity SaaS built around deep work and intentional time blocking: Super Day, Super List, Big Goals.",
    image: "/Projects/IntrinsicWork.png",
    technologies: ["Next.js", "NestJS", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "https://www.myintrinsicwork.com/",
    longDescription: "Coming soon.",
    features: []
  },
  {
    id: 9,
    title: "Helios Solar Tracker",
    description:
      "Compliance SaaS for solar business owners to track material participation hours for IRS federal tax credits.",
    image: "/Projects/Helios.png",
    technologies: ["TypeScript", "React", "Express", "PostgreSQL", "Drizzle ORM"],
    liveUrl: "https://solar-time-tracker.com/",
    longDescription: "Coming soon.",
    features: []
  },
  {
    id: 6,
    title: "Tango Analytics Platform",
    description:
      "Full-stack map viewer migration and custom UI components for enterprise analytics platform",
    image: "/Projects/Tango.jpg",
    technologies: ["Vue.js", "TypeScript", "Quasar Framework", "Oracle Map Viewer"],
    liveUrl: "https://tangoanalytics.com/products/tango-platform/",
    longDescription:
      "Led the migration of Tango's Mapviewer from VueJS 2.0 and Quasar v1 to VueJS 3.0 and Quasar v2, ensuring functionality consistency through debugging and refactoring. Built custom UI components for Tango's client map software using Quasar Framework and Oracle Map Viewer. Self-taught TypeScript, VueJS, and Quasar to accelerate feature development and software optimization.",
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
      "Smart TV application development for LG TV platform with Magic Remote functionality",
    image: "/Projects/LG_OFTV.png",
    technologies: ["HTML", "CSS", "JavaScript", "Smart TV", "WordPress", "LG App Development"],
    liveUrl:
      "https://us.lgappstv.com/main/tvapp/detail?appId=1220217&catCode1=&moreYn=N&cateYn=N&orderType=0&headerName=%EC%A0%84%EC%B2%B4&appRankCode=&sellrUsrNo=&curPage=1",
    upworkUrl: "https://www.upwork.com/freelancers/~01bc1f2a5b93ba02d2?p=1776650934225866752",
    longDescription:
      "Solely developed the OFTV LGTV Application using HTML, CSS and JavaScript based on provided Figma designs. Built cursor functionality for the LGTV Magic Remote feature and integrated with OFTV Zype and WordPress APIs to display content in an aesthetic UI.",
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
    video: "/Projects/CovetByChristos.mp4",
    technologies: ["React", "Next.js", "Shopify", "VideoSDK", "Sanity", "HubSpot"],
    liveUrl: "https://www.covetbychristos.com/",
    upworkUrl: "https://www.upwork.com/freelancers/~01bc1f2a5b93ba02d2?p=1776650934225866752",
    longDescription:
      "Developed a comprehensive livestreaming platform with Shopify integration for Covet by Christos, a luxury fashion social commerce platform. Worked collaboratively with a team of developers and Figma designers to build a custom solution that enables live shopping experiences with real-time product integration.",
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

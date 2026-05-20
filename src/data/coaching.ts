export interface CoachingService {
  id: number;
  title: string;
  description: string;
  features: string[];
  duration: string;
  price: string;
  category: "powerlifting" | "ai-development";
  image: string;
  ctaText: string;
  ctaLink: string;
}

export const coachingServices: CoachingService[] = [
  {
    id: 1,
    title: "Powerlifting Coaching",
    description:
      "Comprehensive strength training programs designed to maximize your powerlifting potential. From beginners to advanced lifters, I'll help you achieve your strength goals.",
    features: [
      "Personalized training programs",
      "Form analysis and correction",
      "Nutrition guidance",
      "Competition preparation",
      "Progress tracking",
      "Weekly check-ins",
      "Meet day coaching",
      "24/7 support"
    ],
    duration: "Indefinite",
    price: "$60/month",
    category: "powerlifting",
    image: "/coaching/powerlifting.jpg",
    ctaText: "Start Powerlifting Journey",
    ctaLink: "https://calendly.com/emrichmp/powerlifting-consultation"
  },
  {
    id: 2,
    title: "AI Development Coaching",
    description:
      "Learn to code effectively using AI development tools like Cursor and Replit. I'll teach you how to leverage AI to accelerate your development workflow and build better applications faster.",
    features: [
      "AI-powered coding tools (Cursor, Replit)",
      "Code generation and optimization",
      "AI-assisted debugging",
      "Best practices for AI development",
      "Project portfolio building",
      "Code review & optimization"
    ],
    duration: "Flexible",
    price: "$80/hour",
    category: "ai-development",
    image: "/coaching/ai-development.jpg",
    ctaText: "Start AI Development Journey",
    ctaLink: "https://calendly.com/emrichmp/ai-development-consultation"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Miguel L.",
    role: "Powerlifter",
    content:
      "Emrich's coaching helped me increase my total by 100kg in just 6 months. His attention to form and personalized programming made all the difference.",
    category: "powerlifting" as const
  },
  {
    id: 2,
    name: "Alex K.",
    role: "Full-Stack Developer",
    content:
      "Working with Emrich on AI development was incredible. He helped me build a complete AI-powered application from scratch. Highly recommend!",
    category: "ai-development" as const
  },
  {
    id: 3,
    name: "Mike R.",
    role: "Intermediate Lifter",
    content:
      "The form analysis and programming adjustments were game-changing. I finally hit my goal of a 500lb deadlift thanks to Emrich's guidance.",
    category: "powerlifting" as const
  }
];

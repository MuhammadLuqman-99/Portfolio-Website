export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'Digital Marketing' | 'Web Development' | 'Blockchain' | 'Full Stack';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    watchers?: number;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Analytics Dashboard",
    description: "Professional analytics dashboard for tracking Instagram, Facebook, and TikTok metrics in real-time",
    longDescription: "Complete professional analytics dashboard featuring multi-platform support, real-time metrics tracking, interactive charts with Chart.js, and responsive UI with Tailwind CSS. Perfect for digital marketers and social media managers.",
    image: "/images/projects/social-analytics.svg",
    technologies: ["Next.js", "React", "TypeScript", "Chart.js", "Tailwind CSS", "Instagram API", "Facebook API"],
    category: "Digital Marketing",
    githubUrl: "https://github.com/MuhammadLuqman-99/social-media-analytics-dashboard",
    liveUrl: "https://social-media-analytics-dashboard-five.vercel.app/",
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 2,
    title: "SEO Audit Tool",
    description: "Professional SEO analysis tool that provides comprehensive website audits with actionable insights",
    longDescription: "Complete SEO audit tool featuring meta tags analysis, headings structure validation, performance metrics, mobile-friendly checking, keyword density analysis, and image optimization detection. Includes visual score charts, PDF export, and prioritized recommendations with impact levels.",
    image: "/images/projects/seo-audit.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Cheerio", "jsPDF", "Axios"],
    category: "Digital Marketing",
    githubUrl: "https://github.com/MuhammadLuqman-99/seo-audit-tool",
    liveUrl: "https://seo-audit-tool.vercel.app/",
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 3,
    title: "Landing Page Generator",
    description: "Interactive tool to create stunning landing pages with customizable templates and real-time preview",
    longDescription: "Professional landing page generator with 6 pre-designed templates (SaaS, E-commerce, Agency, App, Startup, Event). Features include real-time color customization, live preview, HTML/CSS export, and responsive design. Perfect for marketers and entrepreneurs.",
    image: "/images/projects/landing-page.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    githubUrl: "https://github.com/MuhammadLuqman-99/landing-page-generator",
    liveUrl: "https://landing-page-generator-vert.vercel.app/",
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 4,
    title: "Durian Dashboard",
    description: "Full-stack Laravel & Next.js dashboard for durian business management with real-time analytics",
    longDescription: "Comprehensive dashboard combining Laravel backend with Next.js frontend for managing durian sales, inventory, and orders. Features include real-time analytics, order tracking, product management, and sales reporting. Perfect for agricultural e-commerce businesses.",
    image: "/images/projects/durian-dashboard.svg",
    technologies: ["Laravel", "Next.js", "React", "MySQL", "Tailwind CSS", "API Integration"],
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "https://laravel-dan-next-js-durian.vercel.app/dashboard",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 5,
    title: "TeamSale Platform",
    description: "Sales management platform for team collaboration and lead tracking",
    longDescription: "Complete sales management platform designed for teams to collaborate effectively. Features include lead management, sales pipeline tracking, team collaboration tools, real-time analytics, and performance dashboards. Streamlines the entire sales process from lead to conversion.",
    image: "/images/projects/teamsale.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "https://teamsale-website.vercel.app/",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 6,
    title: "Product Catalog System",
    description: "Modern e-commerce catalog system with dynamic product showcase and filtering",
    longDescription: "Professional product catalog system with dynamic product display, advanced filtering, search functionality, and responsive grid layout. Features include product categorization, price filtering, image galleries, and cart integration. Optimized for both desktop and mobile shopping experiences.",
    image: "/images/projects/catalog.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-commerce API"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "https://new-catalog-website.vercel.app/catalog",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  {
    id: 7,
    title: "Kilat Delivery Service",
    description: "Lightning-fast delivery service platform with real-time tracking and quick pickup",
    longDescription: "Modern delivery service platform featuring real-time GPS tracking, instant pickup requests, same-day delivery options, and live order status updates. Includes customer dashboard, delivery tracking map, pricing calculator, and 24/7 service availability. Built for speed and reliability.",
    image: "/images/projects/kilat.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Maps API", "Real-time DB"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "https://kilat-murex.vercel.app/",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectsByCategory = (category: string) =>
  projects.filter(project => project.category === category);

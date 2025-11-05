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
    image: "/images/projects/social-analytics.png",
    technologies: ["Next.js", "React", "TypeScript", "Chart.js", "Tailwind CSS", "Instagram API", "Facebook API"],
    category: "Digital Marketing",
    githubUrl: "https://github.com/MuhammadLuqman-99/social-media-analytics-dashboard",
    liveUrl: "#",
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
    image: "/images/projects/seo-audit.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Cheerio", "jsPDF", "Axios"],
    category: "Digital Marketing",
    githubUrl: "https://github.com/MuhammadLuqman-99/seo-audit-tool",
    liveUrl: "#",
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
    image: "/images/projects/landing-page.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    githubUrl: "https://github.com/MuhammadLuqman-99/landing-page-generator",
    liveUrl: "#",
    featured: true,
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

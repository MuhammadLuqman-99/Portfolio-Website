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
    liveUrl: "#", // Update after deployment
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      watchers: 0
    }
  },
  // More projects will be added here as you build them
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectsByCategory = (category: string) =>
  projects.filter(project => project.category === category);

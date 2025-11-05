import { useState } from 'react';
import { projects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'Blockchain', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Showcase of my recent work combining marketing strategy and technical development
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white glow'
                  : 'glass hover:bg-white/10 text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{getProjectIcon(project.category)}</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-dark-bg px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <FaStar /> Featured
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-primary-400 text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass hover:bg-white/10 rounded-lg transition-all group/btn"
                  >
                    <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all group/btn"
                    >
                      <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MuhammadLuqman-99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 rounded-lg transition-all group"
          >
            <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Helper function to get project icon
function getProjectIcon(category: string): string {
  const icons: { [key: string]: string } = {
    'Digital Marketing': '📊',
    'Web Development': '💻',
    'Blockchain': '⛓️',
    'Full Stack': '🚀'
  };
  return icons[category] || '💡';
}

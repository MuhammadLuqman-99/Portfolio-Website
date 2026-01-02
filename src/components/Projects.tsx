import { useState } from 'react';
import { projects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'Blockchain', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const getCategoryIcon = (category: string): string => {
    const icons: { [key: string]: string } = {
      'Digital Marketing': '📊',
      'Web Development': '💻',
      'Blockchain': '⛓️',
      'Full Stack': '🚀'
    };
    return icons[category] || '💡';
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work combining marketing strategy and technical development
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 border border-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl overflow-hidden card-hover group"
            >
              {/* Project image/header */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-accent-purple/20 flex items-center justify-center">
                <span className="text-6xl">{getCategoryIcon(project.category)}</span>

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-dark-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaStar className="text-xs" /> Featured
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-dark-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <span className="badge text-xs mb-3 inline-block">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-800 text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-800 text-gray-500 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MuhammadLuqman-99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { projects, featuredProjects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'Blockchain', 'Full Stack'];

  // Filter ALL projects based on selected category
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Showcase of my recent work combining marketing strategy and technical development
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-600 text-white glow scale-105'
                    : 'glass hover:bg-white/10 text-gray-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        {filteredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-600/20 to-primary-800/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
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
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 mb-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
            <button
              onClick={() => setFilter('All')}
              className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all"
            >
              View All Projects
            </button>
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

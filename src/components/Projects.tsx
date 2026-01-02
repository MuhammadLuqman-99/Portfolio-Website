import { useState } from 'react';
import { projects } from '@/data/projects';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'Blockchain', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">// work</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            Projects
          </h2>
          <div className="accent-line mt-6"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-mono text-sm px-4 py-2 transition-all duration-200 ${
                filter === category
                  ? 'text-white bg-white/10'
                  : 'text-neutral-600 hover:text-neutral-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group border border-neutral-900 hover:border-neutral-700 transition-all duration-300"
            >
              {/* Project header */}
              <div className="p-6 border-b border-neutral-900">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-xs text-neutral-500 border border-neutral-800 px-2 py-1">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-light text-neutral-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="font-mono text-xs text-neutral-600"
                    >
                      {tech}{index < Math.min(project.technologies.length, 4) - 1 && ' /'}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-neutral-900">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm group/link"
                    >
                      <span>Live</span>
                      <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 font-mono">No projects found.</p>
          </div>
        )}

        {/* View all on GitHub */}
        <div className="mt-16 pt-8 border-t border-neutral-900">
          <a
            href="https://github.com/MuhammadLuqman-99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group"
          >
            <FaGithub size={20} />
            <span className="font-mono text-sm">View all on GitHub</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

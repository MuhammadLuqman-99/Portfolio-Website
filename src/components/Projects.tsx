import { useState } from 'react';
import { projects, featuredProjects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const otherProjects = projects.filter(p => !p.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherProjects.length) % otherProjects.length);
  };

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

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-dark-bg px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <FaStar /> Featured
                </div>
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

        {/* Other Projects Carousel */}
        {otherProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              More <span className="gradient-text">Projects</span>
            </h3>

            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {otherProjects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0 px-4">
                      <div className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group max-w-4xl mx-auto">
                        <div className="md:flex">
                          {/* Project image */}
                          <div className="relative md:w-1/2 h-64 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Project content */}
                          <div className="p-6 md:w-1/2 flex flex-col justify-between">
                            <div>
                              <div className="mb-3">
                                <span className="text-primary-400 text-sm font-semibold">
                                  {project.category}
                                </span>
                              </div>

                              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                                {project.title}
                              </h3>

                              <p className="text-gray-300 text-sm mb-4">
                                {project.description}
                              </p>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 4).map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                              {project.githubUrl && project.githubUrl !== '#' && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass hover:bg-white/10 rounded-lg transition-all group/btn"
                                >
                                  <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                                  <span className="text-sm">Code</span>
                                </a>
                              )}
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {otherProjects.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all glow"
                    aria-label="Previous project"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all glow"
                    aria-label="Next project"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {otherProjects.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {otherProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-primary-500 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
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

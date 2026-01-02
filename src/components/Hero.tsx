import { useEffect, useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { HiArrowRight } from 'react-icons/hi';
import { profileData } from '@/data/profile';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = [
    'Digital Marketer',
    'Full Stack Developer',
    'Blockchain Developer',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-20 h-20 bg-dark-700 rounded-2xl rotate-12 animate-float flex items-center justify-center border border-dark-600">
          <FaReact className="text-3xl text-primary-400" />
        </div>
      </div>
      <div className="absolute bottom-40 right-40 hidden lg:block">
        <div className="w-16 h-16 bg-dark-700 rounded-2xl -rotate-12 animate-float flex items-center justify-center border border-dark-600" style={{ animationDelay: '1s' }}>
          <SiNextdotjs className="text-2xl text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-dark-700/50 border border-dark-600 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Crafting
              <br />
              <span className="text-gray-400">Digital</span>
              <br />
              <span className="gradient-text">Experiences</span>
            </h1>

            {/* Typing effect */}
            <div className="h-8 mb-6">
              <p className="text-gray-400 text-lg">
                Specializing in <span className="text-primary-400 font-medium">{text}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              {profileData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                Start Project
                <HiArrowRight />
              </a>
              <a href="#about" className="btn-secondary">
                View Work
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-dark-700/50 px-3 py-2 rounded-lg border border-dark-600">
                <FaReact className="text-cyan-400" />
                <span className="text-sm text-gray-300">React</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 px-3 py-2 rounded-lg border border-dark-600">
                <SiTypescript className="text-blue-400" />
                <span className="text-sm text-gray-300">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 px-3 py-2 rounded-lg border border-dark-600">
                <SiNextdotjs className="text-white" />
                <span className="text-sm text-gray-300">Next.js</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 px-3 py-2 rounded-lg border border-dark-600">
                <FaNodeJs className="text-green-500" />
                <span className="text-sm text-gray-300">Node.js</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-3xl p-8">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-dark-800/50 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-1">{profileData.stats.yearsExperience}+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-1">{profileData.stats.repositories}+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-1">{profileData.stats.happyClients}+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                    <div className="text-gray-400 text-sm">Satisfaction</div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 hover:bg-primary-500/20 border border-dark-600 hover:border-primary-500/50 rounded-xl flex items-center justify-center transition-all"
                  >
                    <FaGithub className="text-xl text-gray-300" />
                  </a>
                  <a
                    href={profileData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 hover:bg-primary-500/20 border border-dark-600 hover:border-primary-500/50 rounded-xl flex items-center justify-center transition-all"
                  >
                    <FaFacebook className="text-xl text-gray-300" />
                  </a>
                  {profileData.socials.linkedin && (
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-dark-800 hover:bg-primary-500/20 border border-dark-600 hover:border-primary-500/50 rounded-xl flex items-center justify-center transition-all"
                    >
                      <FaLinkedin className="text-xl text-gray-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-glow">
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

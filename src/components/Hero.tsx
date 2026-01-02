import { useEffect, useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 grid-pattern">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Top label */}
        <div className="mb-8">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">
            // hello world
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
          {profileData.name}
        </h1>

        {/* Typing effect title */}
        <div className="h-12 md:h-16 mb-8">
          <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-neutral-400">
            {'> '}{text}
            <span className="animate-blink text-white">_</span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
          {profileData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-neutral-700 text-white font-medium hover:border-neutral-500 hover:bg-white/5 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-16">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profileData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          {profileData.socials.linkedin && (
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          )}
        </div>

        {/* Stats - minimal */}
        <div className="flex flex-wrap gap-12 pt-8 border-t border-neutral-800">
          <div>
            <div className="font-mono text-3xl font-light text-white mb-1">
              {profileData.stats.yearsExperience}+
            </div>
            <div className="text-neutral-600 text-sm uppercase tracking-wider">Years</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-light text-white mb-1">
              {profileData.stats.repositories}+
            </div>
            <div className="text-neutral-600 text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-light text-white mb-1">
              {profileData.stats.happyClients}+
            </div>
            <div className="text-neutral-600 text-sm uppercase tracking-wider">Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}

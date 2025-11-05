import { useEffect, useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="text-primary-400 text-lg md:text-xl font-mono">
            👋 Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 glow-text">
          {profileData.name}
        </h1>

        {/* Typing effect title */}
        <div className="h-16 md:h-20 mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          {profileData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={profileData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          {profileData.socials.linkedin && (
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {profileData.stats.yearsExperience}+
            </div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {profileData.stats.repositories}+
            </div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {profileData.stats.happyClients}+
            </div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <a href="#about" className="text-primary-400 text-3xl inline-block">
            <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}

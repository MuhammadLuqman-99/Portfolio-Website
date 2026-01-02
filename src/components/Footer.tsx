import { FaGithub, FaFacebook } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-mono text-sm text-white mb-4">Muhammad Luqman</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Digital Marketer & Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-4">
              Connect
            </span>
            <div className="flex gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-700 text-sm font-mono">
            {currentYear}
          </p>
          <p className="text-neutral-700 text-sm">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

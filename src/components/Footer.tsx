import { FaGithub, FaFacebook, FaHeart, FaReact } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const services = [
    { label: 'Web Development', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Blockchain', href: '#services' },
    { label: 'Consultation', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-900 pt-16 pb-8 px-4 md:px-8 border-t border-dark-700">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              SM<span className="text-primary-400">Supports</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creating digital solutions that drive results and engage users.
            </p>
            <div className="flex gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-primary-500/20 border border-dark-600 hover:border-primary-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <FaGithub className="text-gray-400 hover:text-white" />
              </a>
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-primary-500/20 border border-dark-600 hover:border-primary-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <FaFacebook className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-500">Email:</span>
                <br />
                <a href={`mailto:${profileData.email}`} className="text-primary-400 hover:text-primary-300 transition-colors">
                  {profileData.email}
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Location:</span>
                <br />
                {profileData.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} SM Supports. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500" /> using <FaReact className="text-cyan-400" /> React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

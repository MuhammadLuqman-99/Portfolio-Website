import { FaHeart, FaGithub, FaFacebook } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Muhammad Luqman</h3>
            <p className="text-gray-400 leading-relaxed">
              Digital Marketer & Full Stack Developer transforming ideas into digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-all"
              >
                <FaGithub className="text-primary-400" />
              </a>
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-all"
              >
                <FaFacebook className="text-primary-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            Made with <FaHeart className="text-red-500" /> by Muhammad Luqman © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}

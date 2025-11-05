import { profileData } from '@/data/profile';
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass glow">
              <Image
                src="/images/avatar.jpg"
                alt="Muhammad Luqman"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-600/20 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              {profileData.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {profileData.bio}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FaBriefcase className="text-primary-400 text-xl" />
                <span>
                  <strong className="text-white">{profileData.currentPosition.role}</strong> at {profileData.currentPosition.company}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary-400 text-xl" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-primary-400 text-xl" />
                <a href={`mailto:${profileData.email}`} className="hover:text-primary-400 transition-colors">
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-primary-400">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {profileData.expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

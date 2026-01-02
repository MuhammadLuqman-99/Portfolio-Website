import { profileData } from '@/data/profile';
import Image from 'next/image';
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            React Developer &
            <br />
            <span className="gradient-text">Full-Stack Expert</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {profileData.tagline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-purple/20 rounded-3xl transform rotate-6"></div>

              {/* Image container */}
              <div className="relative bg-dark-700 rounded-3xl overflow-hidden border border-dark-600">
                <Image
                  src="/images/avatar.jpg"
                  alt="Muhammad Luqman"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-dark-700 border border-dark-600 rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-primary-400">{profileData.stats.yearsExperience}+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {profileData.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              {profileData.bio}
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-700/50 border border-dark-600 rounded-xl p-4 flex items-center gap-4">
                <div className="icon-box">
                  <FaBriefcase className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Current Role</div>
                  <div className="text-white font-medium">{profileData.currentPosition.role}</div>
                </div>
              </div>

              <div className="bg-dark-700/50 border border-dark-600 rounded-xl p-4 flex items-center gap-4">
                <div className="icon-box">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-medium">{profileData.location}</div>
                </div>
              </div>
            </div>

            {/* Expertise list */}
            <div className="bg-dark-700/30 border border-dark-600 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary-400">Core Expertise</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {profileData.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact link */}
            <div className="mt-8">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <FaEnvelope />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

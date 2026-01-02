import { profileData } from '@/data/profile';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">// about</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            About Me
          </h2>
          <div className="accent-line mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden bg-neutral-900">
              <Image
                src="/images/avatar.jpg"
                alt="Muhammad Luqman"
                width={500}
                height={500}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-neutral-800 -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-neutral-200">
              {profileData.title}
            </h3>

            <p className="text-neutral-500 leading-relaxed mb-8">
              {profileData.bio}
            </p>

            {/* Info grid */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-neutral-600 font-mono text-sm w-24">Role</span>
                <span className="text-neutral-300">{profileData.currentPosition.role}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neutral-600 font-mono text-sm w-24">Company</span>
                <span className="text-neutral-300">{profileData.currentPosition.company}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neutral-600 font-mono text-sm w-24">Location</span>
                <span className="text-neutral-300">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neutral-600 font-mono text-sm w-24">Email</span>
                <a href={`mailto:${profileData.email}`} className="text-neutral-300 hover:text-white transition-colors">
                  {profileData.email}
                </a>
              </div>
            </div>

            {/* Expertise */}
            <div className="pt-8 border-t border-neutral-800">
              <h4 className="font-mono text-sm text-neutral-500 mb-4 uppercase tracking-wider">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {profileData.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

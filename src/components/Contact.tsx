import { useState } from 'react';
import { FaGithub, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">// contact</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            Get In Touch
          </h2>
          <div className="accent-line mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <div>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Have a project in mind? I'm always interested in hearing about new opportunities and ideas.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <div>
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Email
                </span>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              <div>
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Location
                </span>
                <span className="text-neutral-300">{profileData.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8 border-t border-neutral-900">
              <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-4">
                Connect
              </span>
              <div className="flex gap-4">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={profileData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <FaFacebook size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 text-white focus:outline-none focus:border-neutral-500 transition-colors placeholder-neutral-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 text-white focus:outline-none focus:border-neutral-500 transition-colors placeholder-neutral-700"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 text-white focus:outline-none focus:border-neutral-500 transition-colors placeholder-neutral-700"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-neutral-600 uppercase tracking-wider block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 text-white focus:outline-none focus:border-neutral-500 transition-colors resize-none placeholder-neutral-700"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 mt-8 text-white hover:text-neutral-300 transition-colors"
              >
                <span className="font-mono text-sm">Send Message</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

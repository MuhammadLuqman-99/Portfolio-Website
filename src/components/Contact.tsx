import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa';
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
    <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Create
            <br />
            Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss and make something extraordinary together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 flex items-center gap-4 card-hover">
              <div className="icon-box">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href={`mailto:${profileData.email}`} className="text-primary-400 hover:text-primary-300 transition-colors">
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 flex items-center gap-4 card-hover">
              <div className="icon-box">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-gray-400">{profileData.location}</p>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
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
              </div>
            </div>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm">Available for Projects</span>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors resize-none placeholder-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

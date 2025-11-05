import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook } from 'react-icons/fa';
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
    // Create mailto link
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
    <section id="contact" className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href={`mailto:${profileData.email}`} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">{profileData.location}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-all"
                >
                  <FaGithub className="text-primary-400 text-xl" />
                </a>
                <a
                  href={profileData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-all"
                >
                  <FaFacebook className="text-primary-400 text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all transform hover:scale-105 glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

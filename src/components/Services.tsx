import { profileData } from '@/data/profile';

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive digital solutions to help your business grow
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

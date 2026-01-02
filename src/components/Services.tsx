import { profileData } from '@/data/profile';
import { FaChartLine, FaCode, FaCubes, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const serviceDetails = [
  {
    icon: <FaChartLine />,
    features: ['Social Media Marketing', 'SEO Optimization', 'Google & Facebook Ads', 'Content Strategy']
  },
  {
    icon: <FaCode />,
    features: ['Responsive Design', 'React & Next.js', 'E-commerce Solutions', 'API Integration']
  },
  {
    icon: <FaCubes />,
    features: ['Smart Contracts', 'DApp Development', 'NFT Projects', 'Web3 Integration']
  },
  {
    icon: <FaLightbulb />,
    features: ['Digital Strategy', 'IT Infrastructure', 'Tech Solutions', 'Growth Planning']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Fiverr <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional React and Full-Stack development services with modern technologies
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 card-hover group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">
                  {serviceDetails[index]?.icon || <FaLightbulb />}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              {/* Price badge */}
              <div className="text-primary-400 text-sm font-medium mb-4">
                From ${index === 0 ? '50' : index === 1 ? '100' : index === 2 ? '150' : '80'}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {serviceDetails[index]?.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                    <FaCheckCircle className="text-primary-500 text-xs flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

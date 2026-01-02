import { profileData } from '@/data/profile';
import { HiOutlineChartBar, HiOutlineCode, HiOutlineCube, HiOutlineLightBulb } from 'react-icons/hi';

const iconMap: { [key: string]: JSX.Element } = {
  'Digital Marketing': <HiOutlineChartBar />,
  'Web Development': <HiOutlineCode />,
  'Blockchain & Web3': <HiOutlineCube />,
  'Consultation': <HiOutlineLightBulb />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">// services</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            What I Do
          </h2>
          <div className="accent-line mt-6"></div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-neutral-900">
          {profileData.services.map((service, index) => (
            <div
              key={index}
              className="group bg-black p-10 hover:bg-neutral-950 transition-colors duration-300"
            >
              {/* Number */}
              <div className="font-mono text-xs text-neutral-700 mb-6">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="text-3xl text-neutral-600 group-hover:text-white transition-colors duration-300 mb-6">
                {iconMap[service.title] || <HiOutlineLightBulb />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-light text-neutral-200 group-hover:text-white transition-colors mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

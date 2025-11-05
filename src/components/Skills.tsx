import { FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt, FaGoogle, FaFacebook, FaInstagram, FaWordpress, FaRobot, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSolidity, SiMongodb, SiFirebase, SiTailwindcss as SiBootstrap, SiExpress, SiMysql, SiEthereum, SiCanva, SiFigma, SiNotion, SiGoogleanalytics, SiOpenai } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Digital Marketing',
      skills: [
        { name: 'SEO', icon: <FaGoogle />, level: 90, color: 'text-green-400' },
        { name: 'Google Analytics', icon: <SiGoogleanalytics />, level: 85, color: 'text-orange-400' },
        { name: 'Google Ads', icon: <FaGoogle />, level: 85, color: 'text-blue-400' },
        { name: 'Facebook Ads', icon: <FaFacebook />, level: 90, color: 'text-blue-500' },
        { name: 'Instagram Marketing', icon: <FaInstagram />, level: 90, color: 'text-pink-400' },
        { name: 'Email Marketing', icon: <MdEmail />, level: 80, color: 'text-red-400' },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: 'text-cyan-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: 'text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: 'text-cyan-300' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 85, color: 'text-green-500' },
        { name: 'Express', icon: <SiExpress />, level: 80, color: 'text-gray-400' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: 'text-green-400' },
        { name: 'MySQL', icon: <SiMysql />, level: 75, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Solidity', icon: <SiSolidity />, level: 80, color: 'text-gray-300' },
        { name: 'Ethereum', icon: <SiEthereum />, level: 75, color: 'text-purple-400' },
        { name: 'Web3.js', icon: <FaJs />, level: 75, color: 'text-yellow-400' },
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Canva', icon: <SiCanva />, level: 90, color: 'text-cyan-400' },
        { name: 'Figma', icon: <SiFigma />, level: 80, color: 'text-purple-400' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'text-orange-500' },
        { name: 'WordPress', icon: <FaWordpress />, level: 85, color: 'text-blue-400' },
      ]
    },
    {
      title: 'AI & LLM Tools',
      skills: [
        { name: 'ChatGPT', icon: <SiOpenai />, level: 95, color: 'text-green-400' },
        { name: 'Claude AI', icon: <FaBrain />, level: 95, color: 'text-purple-400' },
        { name: 'Gemini', icon: <FaRobot />, level: 85, color: 'text-blue-400' },
        { name: 'DeepSeek', icon: <TbBrain />, level: 80, color: 'text-cyan-400' },
        { name: 'Florafauna.ai', icon: <FaBrain />, level: 85, color: 'text-green-300' },
        { name: 'Gwen (Local LLM)', icon: <FaRobot />, level: 75, color: 'text-orange-400' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 h-full rounded-full transition-all duration-1000 animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

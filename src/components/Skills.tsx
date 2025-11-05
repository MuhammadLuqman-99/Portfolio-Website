import { FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSolidity, SiMongodb, SiFirebase } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
        { name: 'Firebase', icon: <SiFirebase />, level: 80 },
      ]
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Solidity', icon: <SiSolidity />, level: 75 },
        { name: 'Web3.js', icon: <FaJs />, level: 70 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-primary-400">{skill.icon}</span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full transition-all duration-1000"
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

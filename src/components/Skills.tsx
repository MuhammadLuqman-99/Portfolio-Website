import { FaReact, FaNode, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSolidity, SiMongodb, SiFirebase, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-green-500" />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 75 },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 80 },
      ]
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Solidity', icon: <SiSolidity className="text-gray-300" />, level: 75 },
        { name: 'Web3.js', icon: <SiJavascript className="text-yellow-400" />, level: 70 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">My Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 card-hover"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
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

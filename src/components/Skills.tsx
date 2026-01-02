import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSolidity, SiMongodb, SiFirebase, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Solidity', icon: <SiSolidity /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-neutral-500 tracking-wider">// skills</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            Technologies
          </h2>
          <div className="accent-line mt-6"></div>
        </div>

        {/* Skills grid - minimal icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <span className="text-3xl text-neutral-600 group-hover:text-white transition-colors duration-300 mb-4">
                {skill.icon}
              </span>
              <span className="font-mono text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 pt-8 border-t border-neutral-900">
          <p className="text-neutral-600 font-mono text-sm">
            + HTML5, CSS3, REST APIs, Web3.js, Ethers.js, and more
          </p>
        </div>
      </div>
    </section>
  );
}

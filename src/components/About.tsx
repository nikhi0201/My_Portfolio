import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Full Stack Development",
      description: "Proficient in React, Node.js, TypeScript, and modern web technologies"
    },
    {
      icon: <Brain size={24} />,
      title: "AI/ML Expertise",
      description: "Specialized in machine learning, neural networks, and data analysis"
    },
    {
      icon: <Rocket size={24} />,
      title: "Problem Solver",
      description: "1st place in TechnoSprint, 8th in IIM competition, 250+ questions solved"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A passionate developer from BV Raju Institute of Technology with a strong foundation in 
            AI/ML and full-stack development. I love building innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

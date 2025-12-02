import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "C", "Python", "SQL", "HTML", "CSS", "JavaScript", "React.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Git", "GitHub", "Figma", "MongoDB", "Node.js"]
  },
  {
    title: "Computer Engineering",
    skills: ["Data Structures and Algorithms", "DBMS", "OOPS", "Operating Systems", "Computer Networks", "Machine Learning", "Data Science"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Effective Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management"]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"
                whileHover={{ scale: 1.05, opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="mb-6 text-white">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="relative group/skill"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-0 group-hover/skill:opacity-50 transition-opacity"
                      />
                      <div className="relative px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-sm text-gray-300 group-hover/skill:text-white group-hover/skill:border-white/40 transition-all">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

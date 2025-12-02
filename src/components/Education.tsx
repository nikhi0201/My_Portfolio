import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    institution: "BV Raju Institute of Technology",
    degree: "B.Tech in Computer Science specialized in AI/ML",
    period: "Aug 2023 - present",
    grade: "CGPA: 9.06",
    icon: <GraduationCap size={24} />
  },
  {
    institution: "Narayana Junior College",
    degree: "Class XI - Class XII",
    period: "June 2021 - April 2023",
    grade: "Percentage: 98.8%",
    icon: <BookOpen size={24} />
  }
];

const coursework = [
  "Operating Systems",
  "Database Management Systems",
  "Introduction to Artificial Intelligence",
  "Discrete Mathematics",
  "Automata Compiler Design",
  "Deep Learning",
  "Computer Organization"
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
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
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.icon}
                </motion.div>

                <h3 className="mb-2 text-white">{edu.institution}</h3>
                <p className="text-gray-300 mb-2">{edu.degree}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{edu.period}</span>
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.grade}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"
            whileHover={{ scale: 1.05, opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="mb-6 text-white">Relevant Coursework</h3>
            
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all cursor-default"
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

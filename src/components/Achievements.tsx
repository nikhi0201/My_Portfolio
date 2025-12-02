import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Award, Code, Users } from 'lucide-react';

const achievements = [
  {
    title: "1st Position - TechnoSprint",
    description: "Secured first position in TechnoSprint, a coding event part of the annual Promethean Tech fest",
    icon: <Trophy size={24} />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "ML Certification - IIT Madras (NPTEL)",
    description: "Achieved top 5% certification in 'Introduction to Machine Learning' from IIT Madras",
    icon: <Award size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "8th Place - IIM Raipur Competition",
    description: "Achieved 8th place at Vislakshan, a national-level analysis competition by IIM Raipur",
    icon: <Code size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "300+ Programming Solutions",
    description: "Solved over 250 programming questions on various platforms demonstrating problem-solving skills",
    icon: <Code size={24} />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "DEMUX Hackathon Participant",
    description: "Participated in DEMUX, a 24 hour Hackathon held at BVRIT",
    icon: <Users size={24} />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Group Dance Competition",
    description: "Participated in the Group Dance Competition conducted in Mahindra University",
    icon: <Users size={24} />,
    color: "from-pink-500 to-purple-500"
  }
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Highlights from competitions, certifications, and academic excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <motion.div
                className="relative h-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color} rounded-t-2xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />

                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 mt-2`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>

                <h3 className="mb-3 text-white text-lg">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

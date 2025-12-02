import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Text Snatcher",
    type: "Generic AI",
    description: "Advanced Handwritten Text Recognition system capable of transcribing English and Hindi scripts using a CNN-BiLSTM-CTC architecture.",
    highlights: [
      "Achieved approximately 95% accuracy",
      "5% character error rate",
      "8-10% word error rate",
      "96% precision"
    ],
    tech: ["Python", "CNN", "BiLSTM", "CTC", "IAM Dataset", "Devanagari Dataset"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Carbon Emission Calculator",
    type: "Front End",
    description: "Responsive web application for calculating vehicle-based carbon footprints with AI-driven suggestions for reducing emissions.",
    highlights: [
      "Per-person and total emission calculations",
      "Multiple gases tracking (CO, CH, NO, CO₂, NOₓ, SOₓ, PM)",
      "90%+ accuracy in results",
      "AI-driven eco-friendly suggestions"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Typing Speed Race Game",
    type: "Full Stack",
    description: "Interactive multiplayer typing game to measure speed, accuracy, and progress with real-time synchronization and server-level validation.",
    highlights: [
      "Synchronized multiplayer gameplay",
      "Real-time progress tracking",
      "Dynamic accuracy computation",
      "Server-side validation"
    ],
    tech: ["React.js", "Socket.io", "Node.js", "Express"],
    gradient: "from-purple-500 to-pink-500"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work spanning AI/ML, full-stack development, and innovative web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group h-full"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <motion.div
                className="relative h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />

                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 text-xs bg-gradient-to-r ${project.gradient} rounded-full`}>
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-4 text-white">{project.title}</h3>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`}>•</span>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

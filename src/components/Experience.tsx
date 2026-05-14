import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Ventinique Ayeon Groupe",
    period: "Dec 2025 - Present",
    highlights: [
      "Built and deployed scalable backend services and RESTful APIs with Node.js, Express.js, TypeScript, and MongoDB.",
      "Implemented JWT-based authentication and role-based access control (RBAC) for secure API communication.",
      "Optimized database queries and indexing to improve response time and system performance.",
      "Collaborated in Agile/Scrum workflows with Git, peer reviews, CI/CD pipelines, and systematic debugging."
    ]
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hands-on experience delivering production-grade backend services and APIs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"
                whileHover={{ scale: 1.02, opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white">{experience.role}</h3>
                    <p className="text-gray-300">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-indigo-300">
                    <Briefcase size={18} />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-400 list-disc list-inside">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

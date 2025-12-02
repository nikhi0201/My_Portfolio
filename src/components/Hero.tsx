import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <span className="block text-gray-400 mb-2">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NIKHITH TANGADIPALLY
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.p>
            <motion.p
              className="text-gray-400 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              B.Tech in Computer Science specialized in AI/ML
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com/nikhi0201"
              icon={<Github size={20} />}
              label="GitHub"
              delay={0.9}
            />
            <SocialLink
              href="https://www.linkedin.com/in/nikhith-tangadipally-3363a4293/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              delay={1.0}
            />
            <SocialLink
              href="mailto:nikki020106@gmail.com"
              icon={<Mail size={20} />}
              label="Email"
              delay={1.1}
            />
            <SocialLink
              href="tel:+917671964629"
              icon={<Phone size={20} />}
              label="+91-7671964629"
              delay={1.2}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                  <motion.div
                    className="w-1 h-3 bg-white rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  delay,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="group-hover:text-indigo-400 transition-colors">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </motion.a>
  );
}

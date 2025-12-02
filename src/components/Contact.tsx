import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "nikki020106@gmail.com",
    href: "mailto:nikki020106@gmail.com",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+91-7671964629",
    href: "tel:+917671964629",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "Nikhith",
    href: "https://github.com/nikhi0201",
    color: "from-gray-500 to-gray-700"
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/nikhith-tangadipally-3363a4293/",
    color: "from-blue-500 to-cyan-500"
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 mb-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group block"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center">
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {method.icon}
                </motion.div>
                
                <div className="text-sm text-gray-400 mb-1">{method.label}</div>
                <div className="text-white text-sm break-words">{method.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative p-12 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl backdrop-blur-sm text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <h3 className="mb-4 text-white">Let's Build Something Amazing Together</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hi, 
                I'd love to hear from you!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="mailto:nikki020106@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/50"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
                
                <motion.a
                  href="https://github.com/nikhi0201"
                  className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Nikhith Tangadipally. Crafted with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

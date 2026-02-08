import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Home() {
  const skills = [
    { name: 'Distributed Systems', icon: '🌐' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Apache Spark', icon: '⚡' },
    { name: 'Java/Spring Boot', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Real-time Processing', icon: '⚙️' },
    { name: 'AWS', icon: '☁️' }
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '90%', label: 'Performance Improvement' },
    { value: '7000+', label: 'Hours Saved (Monthly)' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <img
                src="/images/sajal_port.jpg"
                alt="Sajal Suhane"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200/4F46E5/FFFFFF?text=SS'
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Sajal Suhane
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-4 text-blue-100"
            >
              Senior Software Engineer @ Goldman Sachs
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto"
            >
              Distributed Systems Architect | Cloud Computing Specialist | Fintech Innovation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="https://linkedin.com/in/sajalsuhane"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                About Me
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Senior Software Engineer</span> specializing in distributed systems, cloud architecture, and fintech innovation. With experience at <span className="font-semibold">Goldman Sachs</span> and a strong academic background from the <span className="font-semibold">University of Texas at Dallas</span>, I build scalable, fault-tolerant systems that solve complex business challenges.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  My expertise spans Apache Spark, distributed algorithms, machine learning, and building high-performance backend systems using Java, Python, and modern cloud technologies. I've achieved <span className="text-blue-600 dark:text-blue-400 font-semibold">90% performance improvements</span> in financial workflows and reduced MTTR by <span className="text-blue-600 dark:text-blue-400 font-semibold">7,000+ hours/month</span> through innovative distributed systems design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and domains I specialize in
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:ssuhane31@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/sajalsuhane"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

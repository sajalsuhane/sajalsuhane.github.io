import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <img
              src="/images/sajal_port.jpg"
              alt="Sajal Suhane"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Sajal Suhane
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Distributed Systems Engineer | Researcher | Open Source Contributor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="https://linkedin.com/in/sajalsuhane"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/sajalsuhane"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              I'm a passionate software engineer specializing in distributed systems, cloud computing, and real-time data processing. With experience at Goldman Sachs and a strong academic background from the University of Texas at Dallas, I build scalable, fault-tolerant systems that solve complex business challenges.
            </p>
            <p className="text-lg mb-4">
              My expertise includes Apache Spark, distributed algorithms, machine learning, and building high-performance backend systems using Java and Spring Boot.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Distributed Systems', 'Apache Spark', 'Java/Spring Boot', 'Cloud Computing', 'Machine Learning', 'Real-time Data Processing', 'Fault Tolerance', 'Scalable Architecture'].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
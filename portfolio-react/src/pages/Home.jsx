import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Home() {
  const projects = [
    {
      title: 'Cloud Migration Framework',
      company: 'Goldman Sachs',
      description: 'Migrated on-premises financial workflows to AWS Cloud, achieving 90% reduction in processing time (20min → 2min)',
      impact: '90% performance improvement',
      tags: ['AWS', 'Distributed Systems', 'Cloud Architecture']
    },
    {
      title: 'Distributed AIOps Platform',
      company: 'Tata Consultancy Services',
      description: 'Enhanced ignio AIOps platform with distributed intelligence and autonomous remediation',
      impact: '7,000 hours/month MTTR reduction',
      tags: ['AIOps', 'Distributed Algorithms', 'Automation']
    },
    {
      title: 'Real-time Predictive Analytics',
      company: 'Research Publication',
      description: 'Published research on distributed predictive maintenance systems for industrial robots',
      impact: 'Peer-reviewed IJEAT publication',
      tags: ['Machine Learning', 'IoT', 'Real-time Processing']
    },
    {
      title: 'Distributed Queuing System',
      company: 'Goldman Sachs',
      description: 'Proof-of-concept distributed queuing system with Kibana dashboards',
      impact: '31.7% efficiency improvement',
      tags: ['Kafka', 'Data Pipelines', 'Observability']
    }
  ]

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Goldman Sachs',
      division: 'CFOSS Division',
      period: '2021 - Present',
      description: 'Lead distributed systems development for financial workflows'
    },
    {
      role: 'Software Development Intern',
      company: 'Goldman Sachs',
      division: 'Controllers Division',
      period: '2020 - 2021',
      description: 'Operational storage tools handling billions of data points/second'
    },
    {
      role: 'Research Assistant',
      company: 'University of Texas at Dallas',
      division: 'Distributed Systems Research',
      period: '2019 - 2020',
      description: 'Distributed algorithms for biomedical sensor data processing'
    },
    {
      role: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      division: 'Digitate (ignio AIOps)',
      period: '2017 - 2019',
      description: 'Enhanced AIOps platform, saved 9,000+ human hours/year globally'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section - Brutalist Typography */}
      <section className="min-h-[90vh] flex items-center border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl">
              {/* Name - Massive Typography */}
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-black dark:text-white mb-8 leading-none tracking-tight">
                SAJAL<br />SUHANE
              </h1>

              {/* Title - Bold */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 max-w-3xl">
                Senior Software Engineer specializing in Distributed Systems & Cloud Architecture
              </p>

              {/* Current Role */}
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12">
                @ Goldman Sachs · Dallas, TX
              </p>

              {/* CTAs - Sharp Boxes */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
                >
                  VIEW WORK
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <a 
                  href="https://linkedin.com/in/sajalsuhane"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl sm:text-6xl font-black text-black dark:text-white mb-8 tracking-tight">
                ABOUT
              </h2>
              <div className="space-y-6 text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                <p>
                  I design and build <strong className="font-bold text-black dark:text-white">distributed systems</strong> that scale. With 5+ years at <strong className="font-bold text-black dark:text-white">Goldman Sachs</strong> and research from <strong className="font-bold text-black dark:text-white">UT Dallas</strong>, I focus on cloud-native architecture, microservices, and real-time data processing.
                </p>
                <p>
                  My work has achieved <strong className="font-bold text-black dark:text-white">90% performance improvements</strong> in financial workflows and reduced Mean Time To Resolution by <strong className="font-bold text-black dark:text-white">7,000+ hours/month</strong> across 100+ global clients.
                </p>
                <p>
                  Published researcher in distributed predictive maintenance systems. Expert in Apache Spark, Java/Spring Boot, Python, AWS, and Kubernetes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Projects - Card Grid */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-black dark:text-white mb-4 tracking-tight">
              SELECTED WORK
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Projects that demonstrate distributed systems expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-white dark:group-hover:text-black">
                    {project.title}
                  </h3>
                  <ArrowRightIcon className="w-6 h-6 flex-shrink-0 ml-4" />
                </div>
                <p className="text-sm font-bold mb-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-700">
                  {project.company}
                </p>
                <p className="text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <span className="text-sm font-bold bg-black text-white dark:bg-white dark:text-black px-3 py-1 group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white">
                    {project.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-mono border-2 border-black dark:border-white px-2 py-1 group-hover:border-white dark:group-hover:border-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              to="/research"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
            >
              VIEW ALL PROJECTS
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience - Timeline */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-black dark:text-white mb-4 tracking-tight">
              EXPERIENCE
            </h2>
          </motion.div>

          <div className="max-w-4xl space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-l-4 border-black dark:border-white pl-8 pb-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      {exp.division}
                    </p>
                  </div>
                  <span className="text-base font-mono text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
            >
              FULL CV
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white mb-8 tracking-tight">
              LET'S WORK<br />TOGETHER
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
              Interested in distributed systems, cloud architecture, or fintech innovation? Let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:ssuhane31@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
              >
                EMAIL ME
              </a>
              <a 
                href="https://github.com/sajalsuhane"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a 
                href="/cv.pdf"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

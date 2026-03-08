import { motion } from 'framer-motion'
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Home() {
  const stats = [
    { value: '90%', label: 'Processing Time Reduction', detail: 'Cloud migration at Goldman Sachs' },
    { value: '7,000+', label: 'Hours/Month Saved', detail: 'MTTR reduction across 100+ clients' },
    { value: '9,000+', label: 'Human Hours/Year Saved', detail: 'AIOps autonomous remediation' },
    { value: '31.7%', label: 'Efficiency Improvement', detail: 'Distributed queuing system' },
  ]

  const projects = [
    {
      title: 'Cloud Migration Framework',
      company: 'Goldman Sachs',
      description: 'Migrated on-premises financial workflows to AWS Cloud, achieving 90% reduction in processing time.',
      impact: '20min → 2min processing',
      tags: ['AWS', 'Microservices', 'Spring Boot', 'Kafka'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/20 hover:border-blue-500/40',
    },
    {
      title: 'Distributed AIOps Platform',
      company: 'TCS Digitate',
      description: 'Enhanced ignio AIOps platform with distributed intelligence and autonomous remediation capabilities.',
      impact: '7,000 hrs/month MTTR reduction',
      tags: ['AIOps', 'ML', 'Python', 'Automation'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20 hover:border-purple-500/40',
    },
    {
      title: 'Real-time Predictive Analytics',
      company: 'Published Research',
      description: 'Distributed predictive maintenance systems for industrial robots. Published in IJEAT journal.',
      impact: 'Peer-reviewed publication',
      tags: ['Machine Learning', 'IoT', 'Real-time'],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
    },
    {
      title: 'Distributed Queuing System',
      company: 'Goldman Sachs',
      description: 'Proof-of-concept distributed queuing system with Kibana dashboards for operational storage.',
      impact: '31.7% efficiency gain',
      tags: ['Kafka', 'Elasticsearch', 'Kibana'],
      gradient: 'from-amber-500/10 to-orange-500/10',
      border: 'border-amber-500/20 hover:border-amber-500/40',
    },
  ]

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Goldman Sachs',
      division: 'CFOSS Division',
      period: '2021 - Present',
      current: true,
    },
    {
      role: 'Software Development Intern',
      company: 'Goldman Sachs',
      division: 'Controllers Division',
      period: '2020 - 2021',
    },
    {
      role: 'Research Assistant',
      company: 'UT Dallas',
      division: 'Distributed Systems',
      period: '2019 - 2020',
    },
    {
      role: 'Systems Engineer',
      company: 'TCS Digitate',
      division: 'ignio AIOps',
      period: '2017 - 2019',
    },
  ]

  const techStack = [
    'Java', 'Spring Boot', 'Python', 'Go', 'React', 'AWS',
    'Kubernetes', 'Docker', 'Kafka', 'Spark', 'PostgreSQL', 'Redis',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient grid-bg min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot"></span>
              <span className="text-sm text-emerald-400 font-medium">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
              Sajal
              <br />
              <span className="gradient-text">Suhane</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4 max-w-2xl font-light">
              Senior Software Engineer
            </p>
            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl">
              Distributed Systems &amp; Cloud Architecture @ <span className="text-white font-medium">Goldman Sachs</span> &middot; Dallas, TX
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors duration-200 shadow-lg shadow-blue-500/25"
              >
                View My Work
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium text-base hover:border-slate-400 hover:text-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>

            {/* Tech stack ticker */}
            <div className="mt-16 pt-8 border-t border-slate-800/50">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Tech I work with</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-slate-700/50 bg-slate-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Impact & Results
            </h2>
            <p className="text-slate-400 text-lg">
              Measurable outcomes from production systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="gradient-border p-6 rounded-xl glow-hover"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Selected Work
              </h2>
              <p className="text-slate-400 text-lg">
                Projects demonstrating distributed systems expertise
              </p>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-xl border ${project.border} bg-gradient-to-br ${project.gradient} p-6 sm:p-8 transition-all duration-300 glow-hover`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">
                      {project.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                    {project.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Experience
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-0">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 pb-10 border-l border-slate-700/50 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                  exp.current ? 'bg-blue-400 ring-4 ring-blue-400/20' : 'bg-slate-600'
                }`} />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium">
                      {exp.company} <span className="text-slate-500">&middot; {exp.division}</span>
                    </p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/about"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View full experience
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's build something{' '}
              <span className="gradient-text">together</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Interested in distributed systems, cloud architecture, or fintech innovation? I'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:ssuhane31@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/sajalsuhane"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sajalsuhane"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

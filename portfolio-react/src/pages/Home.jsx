import { motion } from 'framer-motion'
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Home() {
  const stats = [
    { value: '$1M+', label: 'Annual Cost Savings', detail: 'Sybase IQ → Snowflake migration' },
    { value: '90%', label: 'Processing Time Reduction', detail: 'On-prem Spark → AWS Glue migration' },
    { value: '135%', label: 'Faster Ingestions', detail: 'Kubernetes-backed microservices' },
    { value: '650%', label: 'Faster Query Execution', detail: 'Spring Boot + Snowflake platform' },
  ]

  const projects = [
    {
      title: 'Sybase IQ → Snowflake Migration',
      company: 'Goldman Sachs – Associate',
      description: 'Led transformation of legacy on-prem Sybase IQ operational store to cloud-native Snowflake architecture, demising legacy tech stack and eliminating on-prem storage dependencies.',
      impact: '$1M+ annual cost savings',
      tags: ['Kubernetes', 'Snowflake', 'Spring Boot', 'Contour HTTPProxy'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/20 hover:border-blue-500/40',
    },
    {
      title: 'AWS Glue Migration Framework',
      company: 'Goldman Sachs – Analyst',
      description: 'Developed reusable migration framework enabling teams to move on-prem Spark workflows to AWS Glue with minimal changes.',
      impact: '$230K savings/workflow · 90% faster',
      tags: ['AWS Glue', 'Spark', 'S3', 'Python'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20 hover:border-purple-500/40',
    },
    {
      title: 'AI-Driven Optimization of Bio-Energy Systems',
      company: 'Published Research',
      description: 'AI-driven models for optimizing bio-energy systems, focusing on resource assessment and emission reduction. Published in Applied Chemical Engineering, 2025.',
      impact: 'Peer-reviewed publication',
      tags: ['AI/ML', 'Bio-Energy', 'Optimization', 'Emission Reduction'],
      gradient: 'from-amber-500/10 to-orange-500/10',
      border: 'border-amber-500/20 hover:border-amber-500/40',
    },
    {
      title: 'Biomedical Sensor Analytics',
      company: 'UT Dallas',
      description: 'Developed automated algorithms for cleaning and analyzing high-frequency biomedical sensor data from wearable devices.',
      impact: '0.6 FTE reduction · 70% efficiency gain',
      tags: ['Python', 'Real-time Processing', 'Cross-platform'],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
    },
  ]

  const experience = [
    {
      role: 'Software Developer – Associate',
      company: 'Goldman Sachs',
      division: 'Tech Lead, 10-member team',
      period: 'Dec 2024 – Present',
      current: true,
      achievements: [
        'Led Sybase IQ → cloud-native migration, achieving $1M+ annual cost savings',
        'Deployed scalable platform using Kubernetes, Snowflake, Contour HTTPProxy',
        'Delivered 135% faster ingestions and 650% faster query execution',
      ],
    },
    {
      role: 'Software Developer – Analyst',
      company: 'Goldman Sachs',
      division: 'CFOSS Division',
      period: 'Jun 2023 – Dec 2024',
      achievements: [
        'Built reusable Spark → AWS Glue migration framework ($230K savings/workflow)',
        'Co-built AI-powered knowledge chatbot reducing support resolution from 5hrs to 1hr',
        'Built S3-backed computation system for Market Risk, improving efficiency by 25%',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Goldman Sachs',
      division: 'Controllers Division',
      period: 'Jun 2022 – Aug 2022',
      achievements: [
        'Engineered distributed operational store processing 3B+ events/sec',
        'Built queuing-based ingestion POC with 31.7% efficiency improvement',
      ],
    },
    {
      role: 'Software Developer',
      company: 'University of Texas at Dallas',
      division: 'Biomedical Sensor Research',
      period: 'Nov 2021 – May 2023',
      achievements: [
        'Automated biomedical sensor data processing, reducing manual effort by 0.6 FTE',
        'Designed cross-platform apps for real-time sensor analytics (70% efficiency gain)',
      ],
    },
  ]

  const education = [
    {
      degree: 'M.S. Computer Science',
      institution: 'University of Texas at Dallas',
      location: 'Texas, USA',
    },
    {
      degree: 'B.E. Computer Science',
      institution: 'Savitribai Phule Pune University',
      location: 'Maharashtra, India',
    },
  ]

  const skills = {
    'Languages': {
      items: ['Java', 'Python', 'SQL', 'Scala', 'C++'],
      color: 'blue',
    },
    'Distributed Systems': {
      items: ['Event-Driven Systems', 'High-Throughput Ingestion', 'Queues', 'Microservices'],
      color: 'purple',
    },
    'Cloud & Infra': {
      items: ['Kubernetes', 'AWS (Glue, S3, DynamoDB)', 'Docker', 'CI/CD'],
      color: 'cyan',
    },
    'Big Data & Observability': {
      items: ['Snowflake', 'Spark', 'Hadoop (HDFS, Hive, MapReduce)', 'Kibana', 'Grafana', 'Prometheus'],
      color: 'emerald',
    },
  }

  const colorMap = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-300', hover: 'hover:border-blue-500/40' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-300', hover: 'hover:border-cyan-500/40' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-300', hover: 'hover:border-purple-500/40' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-300', hover: 'hover:border-emerald-500/40' },
  }

  const techStack = [
    'Java', 'Python', 'SQL', 'Scala', 'Kubernetes', 'AWS',
    'Snowflake', 'Spark', 'Docker', 'Spring Boot', 'Kafka', 'PostgreSQL',
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
            {/* $1M+ Savings highlight badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 pulse-dot"></span>
                $1M+ Annual Cost Savings Delivered
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
              Sajal
              <br />
              <span className="gradient-text">Suhane</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4 max-w-2xl font-light">
              Software Developer – Associate
            </p>
            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl">
              Distributed Systems &amp; Cloud-Native Architecture @ <span className="text-white font-medium">Goldman Sachs</span> &middot; Dallas, TX
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors duration-200 shadow-lg shadow-blue-500/25"
              >
                View My Work
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
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
                Highlights from production systems and platform engineering
              </p>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Research &amp; publications
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
      <section id="experience" className="py-20 sm:py-24 border-t border-slate-800/50">
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

          <div className="max-w-4xl space-y-0">
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

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      {exp.company} <span className="text-slate-500">&middot; {exp.division}</span>
                    </p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <span className="mr-2 mt-1 text-blue-400">&#x2713;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
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
              Technical Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, { items, color }], index) => {
              const c = colorMap[color]
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-xl border ${c.border} ${c.bg} p-6 transition-all duration-300 ${c.hover}`}
                >
                  <h3 className={`text-sm font-semibold ${c.text} mb-4 uppercase tracking-wider`}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-tag px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 border border-slate-700/50 bg-slate-800/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education */}
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
              Education
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="gradient-border rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-500">
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
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

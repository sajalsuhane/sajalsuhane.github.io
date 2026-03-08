import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function About() {
  const skills = {
    'Distributed Systems': {
      items: ['Microservices', 'Cloud-Native', 'Scalable Design', 'Fault Tolerance', 'Event-Driven', 'Distributed Caching', 'Consensus Algorithms'],
      color: 'blue',
    },
    'Cloud & DevOps': {
      items: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'IaC', 'Monitoring', 'Serverless'],
      color: 'cyan',
    },
    'Languages & Frameworks': {
      items: ['Java', 'Spring Boot', 'Python', 'Django', 'JavaScript', 'React', 'Go', 'Rust', 'SQL'],
      color: 'purple',
    },
    'Data & Analytics': {
      items: ['Apache Spark', 'Big Data', 'Machine Learning', 'Data Pipelines', 'Real-time Analytics', 'NLP'],
      color: 'emerald',
    },
  }

  const colorMap = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-300', hover: 'hover:border-blue-500/40' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-300', hover: 'hover:border-cyan-500/40' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-300', hover: 'hover:border-purple-500/40' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-300', hover: 'hover:border-emerald-500/40' },
  }

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Goldman Sachs',
      division: 'CFOSS Division',
      period: '2021 - Present',
      location: 'Dallas, TX',
      current: true,
      responsibilities: [
        'Lead design and development of cloud-native distributed systems for financial workflows',
        'Architect scalable microservices for real-time financial data processing',
        'Implement distributed caching and event-driven architectures',
        'Optimize system performance for mission-critical financial applications',
      ],
      achievements: [
        'Led cloud migration achieving 90% reduction in processing time (20min → 2min)',
        'Designed distributed systems reducing MTTR by 7,000 hours/month across 100+ clients',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'Goldman Sachs',
      division: 'Controllers Division',
      period: '2020 - 2021',
      location: 'Dallas, TX',
      responsibilities: [
        'Developed operational storage tools handling billions of data points per second',
        'Created distributed tracing solutions for complex financial workflows',
        'Designed proof-of-concept distributed queuing system',
      ],
      achievements: [
        'Achieved 31.7% efficiency gain with distributed queuing system and Kibana dashboards',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'University of Texas at Dallas',
      division: 'Distributed Systems Research',
      period: '2019 - 2020',
      location: 'Richardson, TX',
      responsibilities: [
        'Developed distributed algorithms for biomedical sensor data processing',
        'Designed scalable databases for IoT sensor networks',
        'Built real-time data pipelines',
      ],
      achievements: [
        'Reduced human effort by 0.6 FTE through automated data processing',
        'Published research in IJEAT journal',
      ],
    },
    {
      role: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      division: 'Digitate (ignio AIOps)',
      period: '2017 - 2019',
      location: 'Pune, India',
      responsibilities: [
        'Enhanced ignio AIOps platform with distributed intelligence',
        'Implemented autonomous remediation systems',
        'Conducted architecture and security reviews for UK/EU-based clients',
      ],
      achievements: [
        'Saved 9,000+ human hours/year worldwide through autonomous remediation',
        'Reduced MTTR by 7,000 hours/month across 100+ global clients',
      ],
    },
  ]

  const education = [
    {
      degree: 'M.S. Computer Science',
      institution: 'University of Texas at Dallas',
      period: '2021 - 2023',
      specialization: 'Distributed Systems, Cloud Computing, Advanced Algorithms',
    },
    {
      degree: 'B.E. Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: '2013 - 2017',
      specialization: 'Computer Engineering, Software Development',
    },
  ]

  const certifications = [
    { name: 'IBM Data Science Professional', org: 'IBM' },
    { name: 'Machine Learning', org: 'Stanford / Coursera' },
    { name: 'ignio AIOps Certifications', org: 'Digitate' },
    { name: 'Advanced Google Analytics', org: 'Google' },
    { name: 'Deep Learning: Face Recognition', org: 'LinkedIn Learning' },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="hero-gradient grid-bg py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Senior Software Engineer with 5+ years designing scalable, high-performance distributed systems for financial institutions. Published researcher with expertise in cloud-native architecture and real-time data processing.
            </p>
            <a
              href="/cv.pdf"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium text-sm hover:bg-blue-500/20 transition-all duration-200"
              download
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Professional Summary
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Proven expertise in <span className="text-white font-medium">cloud-native development</span>, <span className="text-white font-medium">microservices architecture</span>, and <span className="text-white font-medium">real-time data processing</span> with a strong focus on distributed systems innovation.
              </p>
              <p>
                Led cloud migrations achieving <span className="text-blue-400 font-medium">90% performance improvements</span> and designed distributed systems reducing MTTR by <span className="text-blue-400 font-medium">7,000+ hours/month</span> across 100+ global clients.
              </p>
              <p>
                Published researcher in distributed predictive maintenance systems. Committed to distributed-first design, prioritizing scalability, fault tolerance, and observability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`gradient-border rounded-xl p-6 sm:p-8 glow-hover ${exp.current ? 'ring-1 ring-blue-500/20' : ''}`}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-5 gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">
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
                  <div className="text-left lg:text-right">
                    <p className="text-sm font-mono text-slate-400">
                      {exp.period}
                    </p>
                    <p className="text-xs text-slate-500">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-800/50">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Key Achievements</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-blue-300/80">
                        <span className="mr-2 mt-1 text-blue-400">&#x2713;</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
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
                <p className="text-xs font-mono text-slate-500 mb-3">
                  {edu.period}
                </p>
                <p className="text-xs text-slate-400">
                  {edu.specialization}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Certifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl"
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-700/50 bg-slate-800/20 p-4 hover:border-slate-600 transition-colors"
              >
                <p className="text-sm font-medium text-white mb-1">{cert.name}</p>
                <p className="text-xs text-slate-500">{cert.org}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

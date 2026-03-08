import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Research() {
  const publications = [
    {
      title: 'Real-time Predictive Analytics for Industrial Robots',
      journal: 'International Journal of Engineering and Advanced Technology (IJEAT)',
      date: '2020',
      volume: 'Volume 9, Issue 3',
      description: 'Published research on distributed predictive maintenance systems for industrial automation. Novel approach to distributed machine learning for real-time predictive analytics.',
      impact: [
        'Cited by researchers in industrial automation field',
        'Distributed machine learning for IoT sensor networks',
        'Real-time data pipelines for predictive maintenance',
      ],
      url: 'https://www.ijeat.org/wp-content/uploads/papers/v9i3/C5342029320.pdf',
      tags: ['Machine Learning', 'Distributed Systems', 'IoT', 'Predictive Analytics'],
    },
  ]

  const projects = [
    {
      title: 'Cloud Migration Framework for Financial Systems',
      company: 'Goldman Sachs - CFOSS Division',
      period: '2021 - Present',
      description: 'Led the design and implementation of a comprehensive cloud migration framework for legacy financial systems, transforming on-premises workflows into cloud-native, distributed architectures on AWS.',
      challenge: 'Legacy financial workflows processing in 20+ minutes with limited scalability. Required migration to cloud while maintaining data integrity and regulatory compliance.',
      solution: [
        'Designed microservices architecture using Spring Boot and AWS services',
        'Implemented distributed event-driven processing with Kafka',
        'Created fault-tolerant data pipelines with AWS Lambda and Step Functions',
        'Built comprehensive monitoring using CloudWatch and Prometheus',
      ],
      impact: [
        '90% reduction in processing time (20min → 2min)',
        'Adopted as best practice within Goldman Sachs CFOSS division',
        'Presented at internal technical conferences',
      ],
      technologies: ['AWS', 'Spring Boot', 'Kafka', 'Microservices', 'Lambda', 'CloudWatch'],
      color: 'blue',
    },
    {
      title: 'Distributed AIOps Platform Enhancement',
      company: 'Tata Consultancy Services - Digitate',
      period: '2017 - 2019',
      description: 'Enhanced the ignio AIOps platform with distributed intelligence and autonomous remediation capabilities, serving Fortune 500 clients globally.',
      challenge: 'Manual IT operations resolution taking thousands of hours per month across 100+ global clients. Needed intelligent automation to reduce MTTR.',
      solution: [
        'Developed distributed algorithms for anomaly detection',
        'Implemented autonomous remediation workflows',
        'Created predictive models for incident prevention',
        'Built scalable architecture for multi-tenant operations',
      ],
      impact: [
        'Reduced MTTR by 7,000 hours/month across 100+ clients',
        'Saved 9,000+ human hours/year worldwide',
        'Patent-pending technology in AI-powered operations',
      ],
      technologies: ['AIOps', 'Machine Learning', 'Python', 'Automation', 'Distributed Systems'],
      color: 'purple',
    },
    {
      title: 'Distributed Queuing System with Observability',
      company: 'Goldman Sachs - Controllers Division',
      period: '2020 - 2021',
      description: 'Designed and implemented a proof-of-concept distributed queuing system with comprehensive observability dashboards for operational storage workflows.',
      challenge: 'Existing operational storage tools handling billions of data points per second lacked visibility and efficient queue management.',
      solution: [
        'Built distributed queuing system using Kafka',
        'Created real-time Kibana dashboards for monitoring',
        'Implemented distributed tracing with OpenTelemetry',
        'Designed data retention and archival strategies',
      ],
      impact: [
        '31.7% efficiency improvement in data processing',
        'Real-time visibility into operational workflows',
        'Scalable architecture for future growth',
      ],
      technologies: ['Kafka', 'Kibana', 'Elasticsearch', 'OpenTelemetry', 'Java'],
      color: 'cyan',
    },
    {
      title: 'Biomedical Sensor Data Processing Platform',
      company: 'University of Texas at Dallas',
      period: '2019 - 2020',
      description: 'Developed distributed algorithms and scalable databases for processing biomedical sensor data from IoT networks in real-time.',
      challenge: 'Processing large volumes of biomedical sensor data requiring 0.6 FTE of manual effort. Needed automated, real-time processing pipeline.',
      solution: [
        'Designed scalable time-series databases',
        'Implemented real-time data pipelines using Apache Spark',
        'Created distributed analytics workflows',
        'Built APIs for data access and visualization',
      ],
      impact: [
        'Reduced human effort by 0.6 FTE through automation',
        'Real-time processing of biomedical sensor data',
        'Foundation for published research',
      ],
      technologies: ['Apache Spark', 'Time-series DB', 'Python', 'IoT', 'Real-time Processing'],
      color: 'emerald',
    },
  ]

  const colorBorder = {
    blue: 'border-blue-500/20 hover:border-blue-500/40',
    purple: 'border-purple-500/20 hover:border-purple-500/40',
    cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
    emerald: 'border-emerald-500/20 hover:border-emerald-500/40',
  }

  const colorAccent = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
  }

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
              Research &{' '}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Published research, production systems, and technical contributions in distributed systems and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Publications
            </h2>
            <p className="text-slate-400">Peer-reviewed research contributions</p>
          </motion.div>

          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="gradient-border rounded-xl p-6 sm:p-8 glow-hover"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {pub.title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mb-4">
                <span>{pub.journal}</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>{pub.date}</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>{pub.volume}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {pub.description}
              </p>

              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Impact</p>
                <ul className="space-y-1.5">
                  {pub.impact.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <span className="mr-2 mt-1 text-blue-400">&#x2022;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {pub.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={pub.url}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Paper
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Major Projects
            </h2>
            <p className="text-slate-400">Production systems and proof-of-concept implementations</p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-xl border ${colorBorder[project.color]} bg-slate-900/50 overflow-hidden glow-hover`}
              >
                {/* Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium">
                        {project.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Challenge */}
                <div className="px-6 sm:px-8 py-5 bg-slate-800/20 border-y border-slate-800/50">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Challenge</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution & Impact */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-medium">Solution</p>
                    <ul className="space-y-2">
                      {project.solution.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-400">
                          <span className="mr-2 mt-1 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-medium">Impact</p>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className={`mr-2 mt-0.5 ${colorAccent[project.color]}`}>&#x2713;</span>
                          <span className={`font-medium ${colorAccent[project.color]}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Open Source
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Check out my repositories and contributions on GitHub.
            </p>
            <a
              href="https://github.com/sajalsuhane"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

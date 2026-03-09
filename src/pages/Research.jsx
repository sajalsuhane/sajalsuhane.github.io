import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Research() {
  const publications = [
    {
      title: 'AI-Driven Optimization of Bio-Energy Systems: Models for Resource Assessment and Emission Reduction',
      journal: 'Applied Chemical Engineering',
      date: '2025',
      volume: 'Volume 9, Issue 1',
      authors: 'Rushali Rajaram Katkar, Sajal Suhane, Smita Suhane, S. Sugumaran, Santosh Bhauso Takale, Surekha Dehu Khetree, Shyamsing Thakur, Shital Yashwant Waware, Anant Sidhappa Kurhade',
      description: 'Systematic study on AI-driven models for optimizing bio-energy systems, focusing on resource assessment and emission reduction strategies using machine learning techniques.',
      tags: ['AI/ML', 'Bio-Energy', 'Optimization', 'Emission Reduction'],
      url: 'https://ace.as-pub.com/index.php/ACE/article/view/5837',
    },
    {
      title: 'Robolution: Real Time Predictive Analytics for Industrial Robots',
      journal: 'International Journal of Engineering and Advanced Technology (IJEAT)',
      date: '2020',
      volume: 'Volume 9, Issue 3',
      authors: 'Sajal Suhane, Pramod D. Patil, Ravi Mishra, Simran Koul et al.',
      description: 'Research on distributed predictive maintenance systems for industrial automation. Novel approach to distributed machine learning for real-time predictive analytics on IoT sensor networks.',
      tags: ['Machine Learning', 'Distributed Systems', 'IoT', 'Predictive Analytics'],
      url: 'https://www.researchgate.net/publication/355701550_Robolution_Real_Time_Predictive_Analytics_for_Industrial_Robots',
    },
  ]

  const projects = [
    {
      title: 'Cloud-Native Platform Overhaul',
      company: 'Goldman Sachs – Associate',
      period: 'Dec 2024 – Present',
      description: 'Led the transformation of a legacy Sybase IQ–based operational store into a cloud-native architecture, serving as Tech Lead for a 10-member team directing system design, roadmap planning, and cross-organizational stakeholder alignment.',
      challenge: 'Legacy Sybase IQ operational store with on-prem storage dependencies, high costs, and slow query execution times.',
      solution: [
        'Architected scalable data platform using Kubernetes, Snowflake, Contour HTTPProxy, and event-driven ingestion pipelines',
        'Designed new Spring Boot microservice (migrated from Dropwizard) retaining all API contracts',
        'Seamlessly switched clients to Kubernetes-backed endpoints',
      ],
      impact: [
        '$1M+ annual cost savings',
        '135% faster ingestions',
        '650% faster query execution',
        'Eliminated on-prem storage dependencies',
      ],
      technologies: ['Kubernetes', 'Snowflake', 'Spring Boot', 'Contour HTTPProxy', 'Event-Driven'],
      color: 'blue',
    },
    {
      title: 'AWS Glue Migration Framework',
      company: 'Goldman Sachs – Analyst',
      period: 'Jun 2023 – Dec 2024',
      description: 'Developed a reusable migration framework enabling teams to move on-prem Spark workflows to AWS Glue with minimal changes. Also mentored an intern and co-built an AI-powered knowledge chatbot.',
      challenge: 'On-prem Spark workflows processing in 20+ minutes with high infrastructure costs. Support tickets taking 5 hours to resolve due to scattered documentation.',
      solution: [
        'Built reusable Spark → AWS Glue migration framework with minimal code changes',
        'Co-built AI-powered knowledge chatbot indexing nested Confluence spaces',
        'Built S3-backed intermediate computation system for Market Risk',
      ],
      impact: [
        '$230K annual savings per workflow',
        '90% reduction in processing time (20min → 2min)',
        'Support ticket resolution: 5 hours → 1 hour',
        '25% workflow efficiency improvement for Market Risk',
      ],
      technologies: ['AWS Glue', 'Spark', 'S3', 'DynamoDB', 'Python', 'AI/NLP'],
      color: 'purple',
    },
    {
      title: 'Distributed Operational Store',
      company: 'Goldman Sachs – Intern',
      period: 'Jun 2022 – Aug 2022',
      description: 'Engineered core components of a distributed operational store processing 3B+ events per second across Risk & Finance teams.',
      challenge: 'Operational store handling billions of data points per second lacked observability and had ingestion timeout issues.',
      solution: [
        'Engineered core distributed store components for Risk & Finance',
        'Designed Kibana dashboards using live API metrics',
        'Built queuing-based ingestion POC eliminating timeouts',
      ],
      impact: [
        '31.7% efficiency improvement',
        '30% reduction in ingestion time',
        'Enhanced observability across Risk & Finance',
      ],
      technologies: ['Kafka', 'Kibana', 'Elasticsearch', 'Java', 'Distributed Systems'],
      color: 'cyan',
    },
    {
      title: 'Biomedical Sensor Data Platform',
      company: 'University of Texas at Dallas',
      period: 'Nov 2021 – May 2023',
      description: 'Developed automated algorithms for cleaning and analyzing high-frequency biomedical sensor data, designed cross-platform applications for real-time sensor analytics, and optimized databases for wearable device data.',
      challenge: 'Processing large volumes of biomedical sensor data requiring 0.6 FTE of manual effort. Millions of readings per minute from wearable devices needed efficient storage and real-time analytics.',
      solution: [
        'Developed automated algorithm for cleaning high-frequency biomedical sensor data',
        'Designed cross-platform applications for real-time sensor analytics',
        'Optimized databases to manage millions of readings per minute',
      ],
      impact: [
        'Reduced manual effort by 0.6 FTE',
        '70% operational efficiency improvement',
        'Real-time processing of wearable device data',
      ],
      technologies: ['Python', 'Real-time Processing', 'Cross-platform', 'Database Optimization'],
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
              Published research in AI/ML and bio-energy systems, plus production engineering work in distributed systems and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Profiles */}
      <section className="py-12 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <p className="text-xs text-slate-500 uppercase tracking-wider">Research Profiles</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.a
              href="https://scholar.google.com/citations?hl=en&user=cma2gPQAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 p-5 rounded-xl gradient-border glow-hover group"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Citations & Publications</p>
                <p className="text-white font-semibold">Google Scholar</p>
                <p className="text-xs text-slate-400 truncate">scholar.google.com</p>
              </div>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-400 flex-shrink-0 transition-colors duration-200" />
            </motion.a>

            <motion.a
              href="https://www.researchgate.net/scientific-contributions/Sajal-Suhane-2335180549"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="flex items-center gap-4 p-5 rounded-xl gradient-border glow-hover group"
            >
              <div className="w-11 h-11 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53c.033.163.07.305.112.438.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.073.564.53 0 1.01-.094 1.44-.283a3.808 3.808 0 0 0 1.102-.756 3.745 3.745 0 0 0 .724-1.095c.166-.408.248-.84.248-1.296a3.422 3.422 0 0 0-.015-.34h-4.053a.5.5 0 0 0-.5.5v.84h2.536a2.122 2.122 0 0 1-.243.675 1.896 1.896 0 0 1-.516.566 2.18 2.18 0 0 1-.69.34 2.8 2.8 0 0 1-.82.112 2.44 2.44 0 0 1-1.048-.214 2.128 2.128 0 0 1-.757-.597 2.574 2.574 0 0 1-.453-.902 3.93 3.93 0 0 1-.15-1.12c0-.433.05-.822.15-1.166a2.52 2.52 0 0 1 .446-.882 2.02 2.02 0 0 1 .748-.568 2.45 2.45 0 0 1 1.055-.207c.357 0 .675.06.956.183.282.12.52.283.716.487l1.22-1.22A4.003 4.003 0 0 0 19.587 0zM0 4.5v15h15v-15H0zm13.5 13.5H1.5V6H13.5v12z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Research Network</p>
                <p className="text-white font-semibold">ResearchGate</p>
                <p className="text-xs text-slate-400 truncate">researchgate.net</p>
              </div>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-600 group-hover:text-teal-400 flex-shrink-0 transition-colors duration-200" />
            </motion.a>
          </div>
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
            <p className="text-slate-400">Peer-reviewed research contributions ({publications.length} papers)</p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="gradient-border rounded-xl p-6 sm:p-8 glow-hover"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {pub.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mb-3">
                  <span>{pub.journal}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>{pub.date}</span>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>{pub.volume}</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  <span className="font-medium text-slate-400">Authors:</span> {pub.authors}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {pub.description}
                </p>

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
            <p className="text-slate-400">Production systems and engineering contributions</p>
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

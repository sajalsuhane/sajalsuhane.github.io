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
      challenge: 'Legacy financial workflows were processing in 20+ minutes with limited scalability and reliability. Required migration to cloud while maintaining data integrity and regulatory compliance.',
      solution: [
        'Designed microservices architecture using Spring Boot and AWS services',
        'Implemented distributed event-driven processing with Kafka',
        'Created fault-tolerant data pipelines with AWS Lambda and Step Functions',
        'Built comprehensive monitoring using CloudWatch and Prometheus',
      ],
      impact: [
        '90% reduction in processing time (20 minutes → 2 minutes)',
        'Adopted as best practice within Goldman Sachs CFOSS division',
        'Presented at internal technical conferences',
      ],
      technologies: ['AWS', 'Spring Boot', 'Kafka', 'Microservices', 'Lambda', 'CloudWatch'],
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
      technologies: ['AIOps', 'Machine Learning', 'Distributed Systems', 'Python', 'Automation'],
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
    },
  ]

  const openSource = [
    {
      name: 'Distributed Systems Resources',
      description: 'Curated collection of distributed systems papers, talks, and implementations',
      status: 'Active',
    },
    {
      name: 'Cloud Architecture Patterns',
      description: 'Reference implementations of cloud-native architecture patterns',
      status: 'Planned',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-black dark:text-white mb-8 tracking-tight">
              RESEARCH &<br />PROJECTS
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
              Published research, production systems, and open-source contributions in distributed systems and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white mb-4 tracking-tight">
              PUBLICATIONS
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Peer-reviewed research contributions
            </p>
          </motion.div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border-4 border-black dark:border-white p-8"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-3">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-base text-gray-700 dark:text-gray-300 font-bold mb-4">
                    <span>{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.date}</span>
                    <span>•</span>
                    <span>{pub.volume}</span>
                  </div>
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    {pub.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-black dark:text-white mb-3 uppercase tracking-wide">
                    Impact
                  </h4>
                  <ul className="space-y-2">
                    {pub.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-base text-gray-800 dark:text-gray-200">
                        <span className="mr-3 mt-1 text-black dark:text-white font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-mono text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={pub.url}
                  className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-base hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  READ PAPER
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white mb-4 tracking-tight">
              MAJOR PROJECTS
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Production systems and proof-of-concept implementations
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white"
              >
                {/* Header */}
                <div className="p-8 border-b-4 border-black dark:border-white">
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                      {project.company}
                    </p>
                    <span className="text-base font-mono text-gray-700 dark:text-gray-300 font-bold mt-2 sm:mt-0">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Challenge */}
                <div className="p-8 border-b-4 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-3 uppercase tracking-wide">
                    Challenge
                  </h4>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-8 border-b-4 border-black dark:border-white">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wide">
                    Solution
                  </h4>
                  <ul className="space-y-2">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start text-base text-gray-800 dark:text-gray-200">
                        <span className="mr-3 mt-1 text-black dark:text-white font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="p-8 border-b-4 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wide">
                    Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-base">
                        <span className="mr-3 mt-1 text-black dark:text-white font-bold">•</span>
                        <span className="font-bold text-gray-800 dark:text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="p-8">
                  <h4 className="text-lg font-bold text-black dark:text-white mb-4 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-mono text-sm font-medium"
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

      {/* Open Source */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white mb-4 tracking-tight">
              OPEN SOURCE
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Community contributions and shared knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {openSource.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">
                    {project.name}
                  </h3>
                  <span className={`text-xs font-bold px-2 py-1 ${
                    project.status === 'Active' 
                      ? 'bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white' 
                      : 'bg-gray-300 text-black dark:bg-gray-700 dark:text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-base leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12"
          >
            <a
              href="https://github.com/sajalsuhane"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW GITHUB PROFILE
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function About() {
  const skills = {
    'Distributed Systems': [
      'Microservices Architecture',
      'Cloud-Native Development',
      'Scalable System Design',
      'Fault-Tolerant Systems',
      'Consensus Algorithms',
      'Event-Driven Architecture',
      'Distributed Caching',
    ],
    'Cloud & DevOps': [
      'AWS Architecture',
      'Kubernetes',
      'Docker',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Observability',
      'Serverless Architecture',
    ],
    'Programming': [
      'Java',
      'Spring Boot',
      'Python',
      'Django',
      'JavaScript',
      'React',
      'Go',
      'Rust',
      'SQL',
      'Bash',
    ],
    'Data & Analytics': [
      'Apache Spark',
      'Big Data Processing',
      'Machine Learning',
      'Data Pipelines',
      'Real-time Analytics',
      'Time Series Analysis',
      'NLP',
    ],
  }

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Goldman Sachs',
      division: 'CFOSS Division',
      period: '2021 - Present',
      location: 'Dallas, TX',
      responsibilities: [
        'Lead design and development of cloud-native distributed systems for financial workflows',
        'Architect scalable microservices for real-time financial data processing',
        'Implement distributed caching and event-driven architectures for high-frequency trading',
        'Optimize system performance and reliability for mission-critical financial applications',
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
      degree: 'Master of Science in Computer Science',
      institution: 'University of Texas at Dallas',
      period: '2021 - 2023',
      specialization: 'Distributed Systems, Cloud Computing, Advanced Algorithms',
    },
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: '2013 - 2017',
      specialization: 'Computer Engineering, Software Development',
    },
  ]

  const certifications = [
    'IBM Data Science Professional Certification',
    'ignio AIOps Certifications (Digitate)',
    'Advanced Google Analytics Certification',
    'Machine Learning by Andrew Ng (Stanford University)',
    'Deep Learning: Face Recognition (LinkedIn Learning)',
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
              ABOUT ME
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed mb-8">
              Senior Software Engineer and Distributed Systems Architect with 5+ years of experience designing and implementing scalable, high-performance systems for financial institutions and enterprise applications.
            </p>
            <a
              href="/cv.pdf"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
              download
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              DOWNLOAD CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-black text-black dark:text-white mb-8 tracking-tight">
                SUMMARY
              </h2>
              <div className="space-y-6 text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                <p>
                  Proven expertise in <strong className="font-bold text-black dark:text-white">cloud-native development</strong>, <strong className="font-bold text-black dark:text-white">microservices architecture</strong>, and <strong className="font-bold text-black dark:text-white">real-time data processing</strong> with a strong focus on distributed systems innovation.
                </p>
                <p>
                  Published researcher in distributed predictive maintenance systems. Led cloud migrations achieving <strong className="font-bold text-black dark:text-white">90% performance improvements</strong> and designed distributed systems reducing MTTR by <strong className="font-bold text-black dark:text-white">7,000+ hours/month</strong> across 100+ global clients.
                </p>
                <p>
                  Committed to <strong className="font-bold text-black dark:text-white">distributed-first design</strong>, prioritizing scalability, fault tolerance, and observability in every system from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tight">
              EXPERIENCE
            </h2>
          </motion.div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white p-8"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {exp.division}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0 text-left lg:text-right">
                    <p className="text-lg font-mono text-gray-700 dark:text-gray-300 font-bold">
                      {exp.period}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-black dark:text-white mb-3 uppercase tracking-wide">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-base text-gray-800 dark:text-gray-200">
                        <span className="mr-3 mt-1 text-black dark:text-white font-bold">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-base">
                        <span className="mr-3 mt-1 text-black dark:text-white font-bold">•</span>
                        <span className="font-bold text-gray-800 dark:text-gray-200">{achievement}</span>
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
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tight">
              TECHNICAL EXPERTISE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white p-8"
              >
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-mono text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tight">
              EDUCATION
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-4 border-black dark:border-white p-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-lg font-mono text-gray-700 dark:text-gray-300 font-bold mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-base text-gray-800 dark:text-gray-200">
                  <strong>Specialization:</strong> {edu.specialization}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tight">
              CERTIFICATIONS
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-4 border-black dark:border-white p-8"
            >
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-lg text-gray-800 dark:text-gray-200">
                    <span className="mr-4 text-black dark:text-white font-bold text-2xl">›</span>
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

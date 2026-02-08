import { motion } from 'framer-motion'
import { BriefcaseIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function About() {
  const experience = [
    {
      year: "2021 - Present",
      title: "Senior Software Engineer",
      company: "Goldman Sachs - CFOSS Division",
      location: "Dallas, TX",
      description: "Leading distributed systems development for financial workflows and cloud-native solutions.",
      achievements: [
        "Designed and implemented cloud-native distributed systems for financial workflows, handling billions of transactions",
        "Led migration of on-premises workflows to AWS, achieving 90% reduction in processing time",
        "Architected scalable microservices for real-time financial data processing with fault tolerance",
        "Implemented distributed caching and event-driven architectures for high-frequency trading",
        "Optimized system performance for sub-millisecond latency requirements",
        "Mentored junior engineers on distributed systems design patterns and best practices"
      ]
    },
    {
      year: "2020 - 2021",
      title: "Software Development Intern",
      company: "Goldman Sachs - Controllers Division",
      location: "Dallas, TX",
      description: "Developed operational storage tools and distributed queuing systems for financial data.",
      achievements: [
        "Developed operational storage tool handling billions of data points per second using distributed databases",
        "Created Kibana dashboards reducing data ingestion time by 30% through optimized querying",
        "Designed proof-of-concept distributed queuing system achieving 31.7% efficiency gain",
        "Implemented distributed tracing for complex financial workflows spanning multiple microservices",
        "Built monitoring and alerting systems for production distributed systems"
      ]
    },
    {
      year: "2019 - 2020",
      title: "Research Assistant",
      company: "University of Texas at Dallas",
      location: "Richardson, TX",
      description: "Conducted research on distributed algorithms, real-time data processing, and machine learning.",
      achievements: [
        "Developed distributed algorithms for biomedical sensor data processing with 92% accuracy",
        "Designed scalable databases for IoT sensor networks handling 1M+ events/second",
        "Implemented real-time data pipelines reducing human FTE by 0.6 through automation",
        "Built cross-platform applications with 70% operational efficiency improvement",
        "Published peer-reviewed paper on predictive analytics for industrial systems",
        "Created distributed machine learning pipelines using Apache Spark"
      ]
    },
    {
      year: "2017 - 2019",
      title: "Systems Engineer",
      company: "Tata Consultancy Services - Digitate (ignio)",
      location: "Pune, India",
      description: "Enhanced AIOps platform with distributed algorithms and autonomous remediation systems.",
      achievements: [
        "Enhanced ignio AIOps platform with distributed algorithms serving 100+ global clients",
        "Reduced Mean Time To Resolution (MTTR) by 7,000 hours/month through intelligent automation",
        "Implemented autonomous remediation systems saving 9,000+ human hours annually",
        "Conducted architecture and security reviews for financial services clients in UK/EU",
        "Developed distributed consensus algorithms for multi-node remediation decisions",
        "Built self-healing architectures for complex enterprise IT environments"
      ]
    }
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Texas at Dallas",
      location: "Richardson, TX",
      year: "2019 - 2021",
      gpa: "3.8/4.0",
      coursework: [
        "Distributed Systems",
        "Advanced Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Database Systems",
        "Software Engineering"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "University of Mumbai",
      location: "Mumbai, India",
      year: "2013 - 2017",
      gpa: "3.7/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Development",
        "Database Management",
        "Web Technologies"
      ]
    }
  ]

  const certifications = [
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM via Coursera",
      year: "2020",
      skills: ["Python", "Machine Learning", "Data Analysis", "SQL"]
    },
    {
      name: "ignio AIOps Certification",
      issuer: "Digitate (TCS)",
      year: "2019",
      skills: ["AIOps", "Automation", "IT Operations", "ML"]
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Andrew Ng)",
      year: "2019",
      skills: ["ML Algorithms", "Neural Networks", "Deep Learning"]
    },
    {
      name: "Advanced Google Analytics",
      issuer: "Google",
      year: "2018",
      skills: ["Analytics", "Data Visualization", "Metrics"]
    }
  ]

  const publications = [
    {
      title: "Real-time Predictive Analytics for Industrial Robots Using Machine Learning",
      journal: "International Journal of Engineering and Advanced Technology (IJEAT)",
      year: "2020",
      doi: "ISSN: 2249-8958",
      link: "https://www.ijeat.org/wp-content/uploads/papers/v9i3/C5342029320.pdf",
      description: "Published research on distributed predictive maintenance systems for industrial automation, achieving 92% accuracy in failure prediction."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Distributed Systems Engineer | Cloud Architect | Problem Solver
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I am a passionate Senior Software Engineer with deep expertise in <strong className="text-blue-600 dark:text-blue-400">distributed systems</strong>, <strong className="text-blue-600 dark:text-blue-400">cloud computing</strong>, and <strong className="text-blue-600 dark:text-blue-400">real-time data processing</strong>. Currently at Goldman Sachs, I architect and build scalable, fault-tolerant systems that power critical financial operations.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  With a Master's degree from the University of Texas at Dallas and hands-on industry experience spanning fintech and enterprise IT, I bridge the gap between cutting-edge research and practical engineering solutions. My work focuses on distributed algorithms, microservices architecture, cloud-native development, and machine learning applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm driven by complex technical challenges and the opportunity to create systems that operate at scale, handle billions of transactions, and deliver measurable business impact. Whether it's reducing processing times by 90% or saving thousands of operational hours, I focus on solutions that matter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <BriefcaseIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Building scalable distributed systems across fintech and enterprise
              </p>
            </motion.div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {job.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{job.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                        {job.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <AcademicCapIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-semibold">
                        {edu.year}
                      </span>
                      <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <TrophyIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.year}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Publications
              </h2>
            </motion.div>

            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {pub.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {pub.journal}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {pub.year} | {pub.doi}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {pub.description}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Publication
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

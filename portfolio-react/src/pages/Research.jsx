import { motion } from 'framer-motion'
import { CodeBracketIcon, BeakerIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Research() {
  const projects = [
    {
      title: "Real-time Predictive Analytics for Industrial Robots",
      category: "Research",
      image: "/images/img_finalyearproj.jpg",
      description: "Distributed system for real-time predictive maintenance of industrial machinery using machine learning algorithms. Achieved 92% accuracy in failure prediction.",
      technologies: ["Python", "Apache Spark", "Machine Learning", "Distributed Computing", "Time Series Analysis"],
      github: "https://github.com/sajalsuhane/realtimepredictiveanalyticsforrobots.git",
      paper: "https://www.ijeat.org/wp-content/uploads/papers/v9i3/C5342029320.pdf",
      highlights: [
        "Published in International Journal of Engineering and Advanced Technology (IJEAT)",
        "92% accuracy in predictive failure detection",
        "Scalable architecture handling 1M+ sensor readings/second",
        "Reduced maintenance costs by 40% through predictive approach"
      ]
    },
    {
      title: "Distributed Face Recognition System",
      category: "Computer Vision",
      image: "/images/face_recog.jpg",
      description: "Real-time distributed face detection and recognition system with database matching capabilities using OpenCV and deep learning.",
      technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision", "Real-time Processing"],
      github: "https://github.com/sajalsuhane/realtime_face_detection.git",
      highlights: [
        "Real-time face detection with 95% accuracy",
        "Distributed architecture for parallel processing",
        "Database integration for identity matching",
        "Sub-second response time for recognition"
      ]
    },
    {
      title: "Cloud-Native Financial Workflow System",
      category: "Distributed Systems",
      image: "/images/newbg.jpg",
      description: "Architected and implemented scalable microservices for financial data processing at Goldman Sachs. Handles billions of transactions with fault tolerance.",
      technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "Apache Kafka", "Distributed Tracing"],
      highlights: [
        "90% reduction in processing time through cloud migration",
        "Handles billions of transactions per day",
        "Sub-millisecond latency for critical operations",
        "Fault-tolerant architecture with 99.99% uptime"
      ]
    },
    {
      title: "Audio Sentiment Analysis Pipeline",
      category: "NLP & Machine Learning",
      image: "/images/img_audiosentiment.png",
      description: "Scalable audio-to-text conversion with distributed sentiment analysis pipeline. Processes multiple audio streams in parallel.",
      technologies: ["Python", "NLP", "Speech Processing", "Distributed Computing", "Machine Learning"],
      github: "https://github.com/sajalsuhane/audiosentimentanalysis.git",
      highlights: [
        "Distributed audio processing pipeline",
        "Real-time sentiment analysis",
        "Support for multiple audio formats",
        "85% accuracy in sentiment classification"
      ]
    },
    {
      title: "Autonomous IT Operations Platform (ignio)",
      category: "AIOps",
      image: "/images/ignio AIOps.jpg",
      description: "Enhanced AIOps platform with distributed algorithms and autonomous remediation systems serving 100+ global clients.",
      technologies: ["Java", "Python", "Machine Learning", "Distributed Systems", "Event Processing"],
      highlights: [
        "Reduced MTTR by 7,000 hours/month",
        "Autonomous remediation saving 9,000+ hours/year",
        "Serving 100+ enterprise clients globally",
        "Distributed consensus algorithms for multi-node decisions"
      ]
    },
    {
      title: "ISKCON Temple Management System",
      category: "Mobile Application",
      image: "/images/pic02.jpeg",
      description: "Distributed scheduling system for temple operations with real-time coordination features and volunteer management.",
      technologies: ["Android", "Java", "Firebase", "Real-time Database", "Push Notifications"],
      github: "https://github.com/sajalsuhane/Iskcon_Temple_Android_Application.git",
      highlights: [
        "Real-time event scheduling and coordination",
        "Volunteer management system",
        "Push notifications for event updates",
        "Offline-first architecture with sync"
      ]
    },
    {
      title: "Smart Power Consumption Optimizer",
      category: "IoT & Optimization",
      image: "/images/pic03.jpg",
      description: "Distributed system for optimizing household power consumption based on variable pricing and usage patterns.",
      technologies: ["Python", "Time Series Analysis", "Optimization Algorithms", "IoT", "Data Analytics"],
      github: "https://github.com/sajalsuhane/household_power_consumption.git",
      highlights: [
        "20-30% reduction in power costs",
        "Real-time usage monitoring and optimization",
        "Predictive analytics for consumption patterns",
        "Integration with smart home devices"
      ]
    },
    {
      title: "Biomedical Sensor Data Processing System",
      category: "Healthcare & IoT",
      image: "/images/bg.jpg",
      description: "Distributed algorithms for processing biomedical sensor data from IoT networks with real-time analytics.",
      technologies: ["Python", "Apache Spark", "IoT", "Real-time Analytics", "Distributed Systems"],
      highlights: [
        "Scalable database for 1M+ sensor events/second",
        "Real-time anomaly detection",
        "70% operational efficiency improvement",
        "HIPAA-compliant data handling"
      ]
    }
  ]

  const skills = {
    "Distributed Systems": [
      "Microservices Architecture",
      "Event-Driven Systems",
      "Distributed Caching",
      "Consensus Algorithms",
      "Fault Tolerance",
      "Load Balancing"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, Lambda, RDS)",
      "Kubernetes & Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Observability",
      "Serverless Architecture"
    ],
    "Programming Languages": [
      "Java & Spring Boot",
      "Python",
      "JavaScript/TypeScript",
      "Go",
      "SQL",
      "Bash/Shell"
    ],
    "Data & ML": [
      "Apache Spark",
      "Apache Kafka",
      "Machine Learning",
      "Deep Learning",
      "Time Series Analysis",
      "Real-time Analytics"
    ],
    "Databases": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Cassandra",
      "Elasticsearch",
      "DynamoDB"
    ],
    "Tools & Frameworks": [
      "Git & GitHub",
      "Kubernetes",
      "Terraform",
      "Grafana & Prometheus",
      "ELK Stack",
      "Apache Airflow"
    ]
  }

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
            <BeakerIcon className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects & Research</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Building distributed systems that scale, innovate, and deliver impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <RocketLaunchIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of distributed systems, machine learning, and software engineering projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-4xl">${project.category === 'Research' ? '🔬' : project.category === 'Computer Vision' ? '👁️' : project.category === 'Distributed Systems' ? '🌐' : project.category === 'NLP & Machine Learning' ? '🤖' : project.category === 'AIOps' ? '⚙️' : project.category === 'Mobile Application' ? '📱' : project.category === 'IoT & Optimization' ? '💡' : '🔧'}</div>`
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-semibold"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Paper
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <CodeBracketIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore More on GitHub
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Check out my complete portfolio of open-source projects and contributions
            </p>
            <a
              href="https://github.com/sajalsuhane"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Visit GitHub Profile
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

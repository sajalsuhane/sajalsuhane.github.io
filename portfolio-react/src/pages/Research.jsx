export default function Research() {
  const publications = [
    {
      title: "Real-time Predictive Analytics for Industrial Robots",
      journal: "International Journal of Engineering and Advanced Technology (IJEAT)",
      date: "2020",
      abstract: "This research presents a novel distributed predictive maintenance system for industrial robots using machine learning algorithms. The system processes sensor data in real-time to predict equipment failures before they occur, significantly reducing downtime and maintenance costs in manufacturing environments.",
      contributions: [
        "Developed distributed machine learning pipeline for real-time predictions",
        "Implemented scalable architecture handling high-velocity sensor data",
        "Achieved 92% accuracy in failure prediction with low false positive rate",
        "Designed fault-tolerant system maintaining performance during network partitions"
      ],
      impact: "The research has been cited by subsequent studies in industrial automation and predictive maintenance, demonstrating its influence on the field.",
      links: [
        {
          url: "https://www.ijeat.org/wp-content/uploads/papers/v9i3/C5342029320.pdf",
          text: "Read Full Paper",
          icon: "📄"
        },
        {
          url: "https://github.com/sajalsuhane/realtimepredictiveanalyticsforrobots.git",
          text: "View Source Code",
          icon: "💻"
        }
      ]
    },
    {
      title: "Distributed Algorithms for Biomedical Sensor Networks",
      journal: "University of Texas at Dallas - Research Report",
      date: "2019-2020",
      abstract: "Research on scalable distributed algorithms for processing and analyzing data from biomedical sensor networks. The work focuses on real-time processing of physiological data with applications in remote patient monitoring and healthcare IoT systems.",
      contributions: [
        "Developed distributed data processing pipeline for IoT sensor networks",
        "Implemented real-time anomaly detection algorithms",
        "Designed scalable database architecture for time-series biomedical data",
        "Achieved 70% improvement in operational efficiency"
      ],
      impact: "The research contributed to advancements in healthcare IoT systems and was implemented in prototype remote monitoring applications."
    }
  ]

  const researchProjects = [
    {
      title: "Cloud Migration Framework for Financial Systems",
      type: "Industry Research",
      duration: "2021 - Present",
      tech: ["Distributed Systems", "Cloud Computing", "Financial Systems", "Performance Optimization"],
      overview: "Research and development of methodologies for migrating legacy financial systems to distributed cloud environments while maintaining data integrity, security, and performance.",
      innovations: [
        "Developed phased migration approach minimizing downtime",
        "Created distributed caching strategies for financial data",
        "Implemented hybrid architecture patterns for gradual transition",
        "Achieved 90% performance improvement in processing workflows"
      ],
      outcomes: "The framework has been adopted as best practice within Goldman Sachs and has influenced industry approaches to financial system modernization."
    },
    {
      title: "Autonomous Remediation Systems for IT Operations",
      type: "Applied Research",
      duration: "2017 - 2019",
      tech: ["AIOps", "Machine Learning", "Distributed Algorithms", "Autonomous Systems"],
      overview: "Research on AI-powered autonomous remediation systems for IT operations, focusing on distributed decision-making and fault resolution.",
      innovations: [
        "Developed distributed consensus algorithms for remediation decisions",
        "Implemented machine learning models for root cause analysis",
        "Created self-healing architectures for complex IT environments",
        "Reduced Mean Time To Resolution by 7000 hours/month"
      ],
      outcomes: "The research led to patent-pending technologies and was implemented in enterprise AIOps platforms serving 100+ global clients."
    },
    {
      title: "Real-time Data Pipeline Optimization",
      type: "Academic Research",
      duration: "2019 - 2020",
      tech: ["Data Engineering", "Stream Processing", "Distributed Computing", "Performance Optimization"],
      overview: "Research on optimizing real-time data processing pipelines for high-velocity data streams, with applications in financial analytics and IoT systems.",
      innovations: [
        "Developed adaptive batching algorithms for stream processing",
        "Implemented dynamic resource allocation strategies",
        "Created fault-tolerant pipeline architectures",
        "Achieved 30-31.7% efficiency improvements"
      ],
      outcomes: "The research contributed to advancements in real-time analytics and was applied in financial data processing systems."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h1>
          <p className="text-xl mb-8 opacity-90">
            Distributed Systems Researcher | Senior Software Engineer
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">1</div>
              <div className="text-sm opacity-80">Peer-Reviewed Publication</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-80">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm opacity-80">Research Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Research Focus</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            My research focuses on the intersection of distributed systems, real-time data processing, and practical applications in industrial automation and financial systems. I explore innovative approaches to building scalable, fault-tolerant architectures that solve real-world business challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤖",
                title: "Distributed Machine Learning",
                description: "Investigating scalable machine learning algorithms for predictive maintenance and real-time decision making in distributed environments."
              },
              {
                icon: "☁️",
                title: "Cloud-Native Distributed Systems",
                description: "Researching architectures and patterns for building resilient, scalable distributed systems in cloud environments with focus on financial applications."
              },
              {
                icon: "📊",
                title: "Real-Time Data Processing",
                description: "Developing efficient algorithms and pipelines for processing high-velocity data streams with low latency and high reliability."
              },
              {
                icon: "🛡️",
                title: "Fault-Tolerant Computing",
                description: "Exploring novel approaches to building systems that maintain performance and availability despite component failures."
              }
            ].map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Published Research</h2>

          {publications.map((pub, index) => (
            <div key={index} className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pub.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 italic">{pub.journal}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{pub.date}</span>
              </div>

              <div className="mb-4">
                <p className="font-medium mb-2">Abstract:</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pub.abstract}</p>

                <p className="font-medium mb-2">Key Contributions:</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                  {pub.contributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>

                <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Impact:</strong> {pub.impact}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {pub.links?.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Research Projects</h2>

          {researchProjects.map((project, index) => (
            <div key={index} className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mt-2">{project.type}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{project.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Overview:</strong> {project.overview}</p>

              <p className="font-medium mb-2">Key Innovations:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                {project.innovations.map((innovation, i) => (
                  <li key={i}>{innovation}</li>
                ))}
              </ul>

              <p className="text-gray-600 dark:text-gray-300"><strong>Outcomes:</strong> {project.outcomes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always excited to collaborate on innovative projects involving distributed systems, real-time analytics, and scalable architectures.
          </p>
          <a 
            href="mailto:sajal.suhane@example.com"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
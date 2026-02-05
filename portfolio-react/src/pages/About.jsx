import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    {
      year: "2021 - Present",
      title: "Senior Software Engineer",
      company: "Goldman Sachs, Dallas, TX",
      description: "Leading distributed systems development for financial applications, specializing in cloud migration frameworks and real-time data processing. Key achievements include developing scalable architectures for financial systems and optimizing distributed computing workflows.",
      achievements: [
        "Designed cloud migration framework adopted as best practice",
        "Achieved 90% performance improvement in financial processing workflows",
        "Developed distributed caching strategies for high-velocity financial data"
      ]
    },
    {
      year: "2020 - 2021",
      title: "Software Engineer",
      company: "Digitate (Tata Consultancy Services), Pune, India",
      description: "Developed autonomous remediation systems and AIOps solutions for enterprise IT operations, serving 100+ global clients and reducing Mean Time To Resolution by 7000 hours/month.",
      achievements: [
        "Built distributed consensus algorithms for remediation decisions",
        "Implemented machine learning models for root cause analysis",
        "Created self-healing architectures for complex IT environments",
        "Contributed to patent-pending AIOps technologies"
      ]
    },
    {
      year: "2019 - 2020",
      title: "Research Assistant & Graduate Student",
      company: "University of Texas at Dallas, Richardson, TX",
      description: "Conducted research on distributed algorithms, real-time data processing, and predictive analytics. Published research on industrial robot predictive maintenance and biomedical sensor networks.",
      achievements: [
        "Published peer-reviewed paper on real-time predictive analytics",
        "Developed distributed machine learning pipeline with 92% accuracy",
        "Created scalable architecture for high-velocity sensor data processing",
        "Achieved 30-31.7% efficiency improvements in data pipelines"
      ]
    },
    {
      year: "2018 - 2019",
      title: "Software Engineering Intern",
      company: "Tata Consultancy Services, Pune, India",
      description: "Worked on enterprise software solutions, distributed systems, and gained hands-on experience with large-scale software development methodologies.",
      achievements: [
        "Contributed to enterprise distributed systems projects",
        "Gained experience with agile development methodologies",
        "Worked on cross-functional teams for complex software solutions"
      ]
    },
    {
      year: "2016 - 2018",
      title: "Undergraduate Studies",
      company: "University of Mumbai, India",
      description: "Completed Bachelor's degree in Computer Engineering with focus on algorithms, data structures, and software development fundamentals.",
      achievements: [
        "Built foundation in computer science principles",
        "Developed early projects in machine learning and data analysis",
        "Gained proficiency in multiple programming languages"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Distributed Systems Engineer | Researcher | Problem Solver
          </motion.p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              I am a passionate software engineer with expertise in distributed systems, cloud computing, and real-time data processing. Currently working at Goldman Sachs, I specialize in building scalable, fault-tolerant systems that solve complex business challenges in the financial domain.
            </p>
            <p className="text-lg mb-4">
              With a strong academic background from the University of Texas at Dallas and hands-on industry experience, I bridge the gap between cutting-edge research and practical engineering solutions. My work focuses on distributed algorithms, machine learning, and high-performance backend systems.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Career Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="relative pb-8">
                    <div className="absolute left-0 top-4 w-4 h-4 bg-blue-600 rounded-full -ml-2 border-2 border-white dark:border-gray-800"></div>
                    <div className="ml-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                      {item.achievements && (
                        <div className="mt-3">
                          <p className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  University of Texas at Dallas
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Master of Science in Computer Science
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400">2018 - 2020</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in Distributed Systems, Machine Learning, and Data Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Distributed Systems',
              'Apache Spark',
              'Java/Spring Boot',
              'Cloud Computing (AWS)',
              'Machine Learning',
              'Real-time Data Processing',
              'Kubernetes',
              'Microservices Architecture',
              'Python',
              'SQL/NoSQL Databases',
              'Data Engineering',
              'Fault-Tolerant Systems'
            ].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
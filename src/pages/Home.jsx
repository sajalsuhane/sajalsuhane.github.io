import { useEffect, useState } from 'react'
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'
import CopyEmailButton from '../components/CopyEmailButton'
import { EMAIL, ROUTE_META, trackResumeDownload } from '../lib/site'

const stats = [
  { value: '$1M+', label: 'Annual Cost Savings', detail: 'Sybase IQ → Snowflake migration' },
  { value: '90%', label: 'Processing Time Reduction', detail: 'On-prem Spark → AWS Glue migration' },
  { value: '135%', label: 'Faster Ingestions', detail: 'Kubernetes-backed microservices' },
  { value: '650%', label: 'Faster Query Execution', detail: 'Spring Boot + Snowflake platform' },
]

const experience = [
  {
    role: 'Software Developer – Associate',
    company: 'Goldman Sachs',
    division: 'Tech Lead, 10-member team',
    period: 'Dec 2024 – Present',
    current: true,
    achievements: [
      'Led the Sybase IQ → Snowflake migration, demising the legacy on-prem stack and eliminating on-prem storage dependencies',
      'Architected the replacement platform: Kubernetes-backed Spring Boot microservices with event-driven ingestion, retaining all existing API contracts',
      'Directed system design, roadmap planning, and cross-organizational stakeholder alignment',
    ],
    tags: ['Kubernetes', 'Snowflake', 'Spring Boot', 'Contour HTTPProxy'],
  },
  {
    role: 'Software Developer – Analyst',
    company: 'Goldman Sachs',
    division: 'CFOSS Division',
    period: 'Jun 2023 – Dec 2024',
    achievements: [
      'Built a reusable Spark → AWS Glue migration framework, letting teams move on-prem workflows to the cloud with minimal changes ($230K savings per workflow)',
      'Co-built an AI-powered knowledge chatbot indexing nested Confluence spaces, cutting support resolution from 5 hours to 1',
      'Built an S3-backed computation system for Market Risk, improving workflow efficiency by 25%',
    ],
    tags: ['AWS Glue', 'Spark', 'S3', 'Python'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Goldman Sachs',
    division: 'Controllers Division',
    period: 'Jun 2022 – Aug 2022',
    achievements: [
      'Engineered core components of a distributed operational store processing 3B+ events/sec for Risk & Finance',
      'Built a queuing-based ingestion POC with 31.7% efficiency improvement',
    ],
    tags: ['Kafka', 'Kibana', 'Elasticsearch', 'Java'],
  },
  {
    role: 'Software Developer',
    company: 'University of Texas at Dallas',
    division: 'Biomedical Sensor Research',
    period: 'Nov 2021 – May 2023',
    achievements: [
      'Automated cleaning and analysis of high-frequency biomedical sensor data from wearable devices, reducing manual effort by 0.6 FTE',
      'Designed cross-platform apps for real-time sensor analytics (70% efficiency gain)',
    ],
    tags: ['Python', 'Real-time Processing', 'Cross-platform'],
  },
]

const skills = {
  Languages: ['Java', 'Python', 'SQL', 'Scala', 'C++'],
  'Distributed Systems': ['Event-Driven Systems', 'High-Throughput Ingestion', 'Queues', 'Microservices'],
  'Cloud & Infra': ['Kubernetes', 'AWS (Glue, S3, DynamoDB)', 'Docker', 'CI/CD'],
  'Big Data & Observability': ['Snowflake', 'Spark', 'Hadoop (HDFS, Hive, MapReduce)', 'Kibana', 'Grafana', 'Prometheus'],
}

const techStack = ['Java', 'Python', 'Kubernetes', 'AWS', 'Snowflake', 'Spark']

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    document.title = ROUTE_META.home.title
  }, [])

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="hero-gradient grid-bg min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: text content */}
            <div className="hero-enter">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Tech Lead &middot; 10-member team &middot; Dallas, TX
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                Sajal
                <br />
                Suhane
              </h1>

              <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-2xl font-normal">
                Software Engineer at Goldman Sachs
              </p>
              <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl">
                Distributed systems &amp; cloud-native architecture
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/cv.pdf"
                  onClick={trackResumeDownload}
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium text-base hover:border-blue-500 hover:text-white transition-colors duration-200"
                >
                  View My Work
                  <ArrowRightIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="font-mono text-base text-slate-200 select-all">{EMAIL}</span>
                <CopyEmailButton />
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800/50">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Tech I work with</p>
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
            </div>

            {/* Right: profile photo */}
            <div className="hero-enter-delayed flex justify-center lg:justify-end">
              <div className="relative">
                {photoFailed ? (
                  <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">
                    <span className="text-5xl font-black text-slate-500">SS</span>
                  </div>
                ) : (
                  <img
                    src="/images/sajal_port.jpg"
                    alt="Sajal Suhane, software engineer at Goldman Sachs"
                    width="320"
                    height="320"
                    fetchPriority="high"
                    onError={() => setPhotoFailed(true)}
                    className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top border border-slate-700 bg-slate-900"
                  />
                )}

                <div className="hidden sm:block absolute -bottom-2 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-slate-400">Currently at</p>
                  <p className="text-sm font-bold text-white">Goldman Sachs</p>
                </div>

                <div className="hidden sm:block absolute -top-2 -left-6 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-slate-400">Based in</p>
                  <p className="text-sm font-bold text-white">Dallas, TX</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Impact */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Impact &amp; Results
            </h2>
            <p className="text-slate-400 text-lg">
              Measurable outcomes from production systems
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 transition-colors duration-200 hover:border-blue-500/40"
              >
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience — the page spine */}
      <section id="experience" className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experience
            </h2>
            <Link
              to="/research"
              className="inline-flex items-center min-h-11 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              Published research &amp; project deep-dives
              <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>

          <ol className="max-w-4xl list-none m-0 p-0">
            {experience.map((exp) => (
              <li
                key={exp.role + exp.company}
                className="relative pl-6 sm:pl-8 pb-12 border-l border-slate-700/50 last:pb-0"
              >
                <div
                  className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                    exp.current ? 'bg-blue-500 ring-4 ring-blue-500/20 pulse-dot' : 'bg-slate-600'
                  }`}
                  aria-hidden="true"
                />

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
                      {exp.company} <span className="text-slate-400">&middot; {exp.division}</span>
                    </p>
                  </div>
                  <span className="text-sm font-mono text-slate-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((item) => (
                    <li key={item} className="flex items-start text-sm text-slate-400">
                      <span className="mr-2 mt-1 text-blue-400" aria-hidden="true">&#x2713;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 text-sm text-slate-400 max-w-4xl">
            <span className="text-slate-300 font-medium">Education</span> &middot; M.S. Computer Science, UT Dallas &middot; B.E. Computer Science, SPPU
          </p>
        </div>
      </section>

      {/* 4. Skills */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 border border-slate-700/50 bg-slate-800/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hiring for distributed systems or platform work?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              I&apos;m a software engineer at Goldman Sachs in Dallas &mdash; happy to talk about platform, data, or infra roles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="font-mono text-base text-slate-200 select-all">{EMAIL}</span>
              <CopyEmailButton />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/cv.pdf"
                onClick={trackResumeDownload}
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/sajalsuhane"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-blue-500 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

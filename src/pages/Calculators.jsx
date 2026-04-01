import { useState } from 'react'
import { motion } from 'framer-motion'
import Calculator401k from '../components/Calculator401k'
import CalculatorNPS from '../components/CalculatorNPS'

const tabs = [
  { id: '401k', label: '401(k) Calculator', description: 'US retirement savings with employer match' },
  { id: 'nps', label: 'NPS Calculator', description: 'India National Pension System' },
]

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('401k')

  return (
    <div className="min-h-screen">
      <section className="hero-gradient grid-bg py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Retirement <span className="gradient-text">Calculators</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Plan your retirement with real-time projections. All values update instantly as you adjust inputs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                    : 'border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600'
                }`}
              >
                <span className="block">{tab.label}</span>
                <span className="block text-xs mt-0.5 opacity-60">{tab.description}</span>
              </button>
            ))}
          </div>

          {/* Calculator */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === '401k' ? <Calculator401k /> : <CalculatorNPS />}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Calculator401k() {
  const [currentAge, setCurrentAge] = useState(25)
  const [retirementAge, setRetirementAge] = useState(65)
  const [currentSalary, setCurrentSalary] = useState(100000)
  const [salaryGrowth, setSalaryGrowth] = useState(3)
  const [contributionPct, setContributionPct] = useState(6)
  const [employerMatchPct, setEmployerMatchPct] = useState(50)
  const [employerMatchLimit, setEmployerMatchLimit] = useState(6)
  const [currentBalance, setCurrentBalance] = useState(10000)
  const [annualReturn, setAnnualReturn] = useState(7)

  const results = useMemo(() => {
    const years = Math.max(0, retirementAge - currentAge)
    let balance = currentBalance
    let totalContributions = 0
    let totalEmployerMatch = 0
    let totalReturns = 0
    let salary = currentSalary
    const yearlyData = []

    for (let i = 0; i < years; i++) {
      const contribution = salary * (contributionPct / 100)
      const matchable = Math.min(contributionPct, employerMatchLimit)
      const match = salary * (matchable / 100) * (employerMatchPct / 100)
      const returns = balance * (annualReturn / 100)

      balance += contribution + match + returns
      totalContributions += contribution
      totalEmployerMatch += match
      totalReturns += returns

      yearlyData.push({
        age: currentAge + i + 1,
        balance: Math.round(balance),
        contributions: Math.round(totalContributions),
        match: Math.round(totalEmployerMatch),
      })

      salary *= 1 + salaryGrowth / 100
    }

    return {
      finalBalance: Math.round(balance),
      totalContributions: Math.round(totalContributions),
      totalEmployerMatch: Math.round(totalEmployerMatch),
      totalReturns: Math.round(balance - currentBalance - totalContributions - totalEmployerMatch),
      years,
      yearlyData,
    }
  }, [currentAge, retirementAge, currentSalary, salaryGrowth, contributionPct, employerMatchPct, employerMatchLimit, currentBalance, annualReturn])

  const maxBar = results.finalBalance || 1

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SliderInput label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={70} unit=" yrs" />
        <SliderInput label="Retirement Age" value={retirementAge} onChange={setRetirementAge} min={currentAge + 1} max={80} unit=" yrs" />
        <SliderInput label="Current Salary" value={currentSalary} onChange={setCurrentSalary} min={20000} max={500000} step={5000} format={formatCurrency} />
        <SliderInput label="Annual Salary Growth" value={salaryGrowth} onChange={setSalaryGrowth} min={0} max={10} step={0.5} unit="%" />
        <SliderInput label="Your Contribution" value={contributionPct} onChange={setContributionPct} min={0} max={100} step={1} unit="%" />
        <SliderInput label="Employer Match Rate" value={employerMatchPct} onChange={setEmployerMatchPct} min={0} max={100} step={5} unit="%" />
        <SliderInput label="Employer Match Limit" value={employerMatchLimit} onChange={setEmployerMatchLimit} min={0} max={10} step={0.5} unit="%" />
        <SliderInput label="Current Balance" value={currentBalance} onChange={setCurrentBalance} min={0} max={1000000} step={5000} format={formatCurrency} />
        <SliderInput label="Expected Annual Return" value={annualReturn} onChange={setAnnualReturn} min={0} max={15} step={0.5} unit="%" />
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Final Balance" value={formatCurrency(results.finalBalance)} color="blue" />
        <ResultCard label="Your Contributions" value={formatCurrency(results.totalContributions)} color="cyan" />
        <ResultCard label="Employer Match" value={formatCurrency(results.totalEmployerMatch)} color="purple" />
        <ResultCard label="Investment Returns" value={formatCurrency(results.totalReturns)} color="emerald" />
      </div>

      {/* Breakdown Bar */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Balance Breakdown</h3>
        <div className="flex rounded-lg overflow-hidden h-8">
          {results.totalContributions > 0 && (
            <div
              className="bg-cyan-500 transition-all duration-500"
              style={{ width: `${(results.totalContributions / results.finalBalance) * 100}%` }}
              title={`Contributions: ${formatCurrency(results.totalContributions)}`}
            />
          )}
          {results.totalEmployerMatch > 0 && (
            <div
              className="bg-purple-500 transition-all duration-500"
              style={{ width: `${(results.totalEmployerMatch / results.finalBalance) * 100}%` }}
              title={`Employer Match: ${formatCurrency(results.totalEmployerMatch)}`}
            />
          )}
          {results.totalReturns > 0 && (
            <div
              className="bg-emerald-500 transition-all duration-500"
              style={{ width: `${(results.totalReturns / results.finalBalance) * 100}%` }}
              title={`Returns: ${formatCurrency(results.totalReturns)}`}
            />
          )}
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-cyan-500" /> Contributions</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-purple-500" /> Employer Match</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Returns</span>
        </div>
      </div>

      {/* Growth Chart */}
      {results.yearlyData.length > 0 && (
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Growth Over {results.years} Years
          </h3>
          <div className="flex items-end gap-px h-48">
            {results.yearlyData.map((d, i) => {
              const show = results.yearlyData.length <= 20 || i % Math.ceil(results.yearlyData.length / 20) === 0 || i === results.yearlyData.length - 1
              if (!show) return null
              return (
                <div key={d.age} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div
                    className="w-full bg-blue-500/80 rounded-t transition-all duration-300 hover:bg-blue-400 min-h-[2px]"
                    style={{ height: `${(d.balance / maxBar) * 100}%` }}
                  />
                  <span className="text-[10px] text-slate-500">{d.age}</span>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-xl">
                    <p className="text-white font-medium">Age {d.age}</p>
                    <p className="text-slate-400">Balance: {formatCurrency(d.balance)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function SliderInput({ label, value, onChange, min, max, step = 1, unit = '', format }) {
  return (
    <div className="rounded-lg border border-slate-700/50 bg-slate-800/20 p-4">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-medium text-slate-400">{label}</label>
        <span className="text-sm font-semibold text-white font-mono">
          {format ? format(value) : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  )
}

function ResultCard({ label, value, color }) {
  const colors = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
  }
  const textColors = {
    blue: 'text-blue-300',
    cyan: 'text-cyan-300',
    purple: 'text-purple-300',
    emerald: 'text-emerald-300',
  }
  return (
    <div className={`rounded-xl border ${colors[color]} p-4`}>
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className={`text-lg sm:text-xl font-bold ${textColors[color]} font-mono`}>{value}</p>
    </div>
  )
}

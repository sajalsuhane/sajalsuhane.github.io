import { useState, useMemo } from 'react'

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function CalculatorNPS() {
  const [currentAge, setCurrentAge] = useState(25)
  const [retirementAge, setRetirementAge] = useState(60)
  const [monthlyContribution, setMonthlyContribution] = useState(5000)
  const [contributionGrowth, setContributionGrowth] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(10)
  const [annuityPct, setAnnuityPct] = useState(40)
  const [annuityReturn, setAnnuityReturn] = useState(6)

  const results = useMemo(() => {
    const years = Math.max(0, retirementAge - currentAge)
    const monthlyRate = expectedReturn / 100 / 12
    let totalCorpus = 0
    let totalInvested = 0
    let monthly = monthlyContribution
    const yearlyData = []

    for (let year = 0; year < years; year++) {
      for (let month = 0; month < 12; month++) {
        totalInvested += monthly
        totalCorpus = (totalCorpus + monthly) * (1 + monthlyRate)
      }
      yearlyData.push({
        age: currentAge + year + 1,
        corpus: Math.round(totalCorpus),
        invested: Math.round(totalInvested),
      })
      monthly *= 1 + contributionGrowth / 100
    }

    const totalCorpusRounded = Math.round(totalCorpus)
    const annuityAmount = Math.round(totalCorpusRounded * (annuityPct / 100))
    const lumpSum = totalCorpusRounded - annuityAmount
    const monthlyPension = Math.round(annuityAmount * (annuityReturn / 100) / 12)
    const wealthGained = totalCorpusRounded - Math.round(totalInvested)

    return {
      totalCorpus: totalCorpusRounded,
      totalInvested: Math.round(totalInvested),
      wealthGained,
      annuityAmount,
      lumpSum,
      monthlyPension,
      years,
      yearlyData,
    }
  }, [currentAge, retirementAge, monthlyContribution, contributionGrowth, expectedReturn, annuityPct, annuityReturn])

  const maxBar = results.totalCorpus || 1

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SliderInput label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={60} unit=" yrs" />
        <SliderInput label="Retirement Age" value={retirementAge} onChange={setRetirementAge} min={currentAge + 1} max={70} unit=" yrs" />
        <SliderInput label="Monthly Contribution" value={monthlyContribution} onChange={setMonthlyContribution} min={500} max={150000} step={500} format={formatINR} />
        <SliderInput label="Annual Contribution Increase" value={contributionGrowth} onChange={setContributionGrowth} min={0} max={25} step={1} unit="%" />
        <SliderInput label="Expected Annual Return" value={expectedReturn} onChange={setExpectedReturn} min={4} max={14} step={0.5} unit="%" />
        <SliderInput label="Annuity Purchase %" value={annuityPct} onChange={setAnnuityPct} min={40} max={100} step={5} unit="%" />
        <SliderInput label="Annuity Return Rate" value={annuityReturn} onChange={setAnnuityReturn} min={1} max={10} step={0.5} unit="%" />
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultCard label="Total Corpus at 60" value={formatINR(results.totalCorpus)} color="blue" />
        <ResultCard label="Total Invested" value={formatINR(results.totalInvested)} color="cyan" />
        <ResultCard label="Wealth Gained" value={formatINR(results.wealthGained)} color="emerald" />
        <ResultCard label="Lump Sum Withdrawal" value={formatINR(results.lumpSum)} color="purple" />
        <ResultCard label="Annuity Investment" value={formatINR(results.annuityAmount)} color="amber" />
        <ResultCard label="Est. Monthly Pension" value={formatINR(results.monthlyPension)} color="blue" highlight />
      </div>

      {/* Breakdown Bar */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Corpus Breakdown</h3>
        <div className="flex rounded-lg overflow-hidden h-8">
          {results.totalInvested > 0 && (
            <div
              className="bg-cyan-500 transition-all duration-500"
              style={{ width: `${(results.totalInvested / results.totalCorpus) * 100}%` }}
              title={`Invested: ${formatINR(results.totalInvested)}`}
            />
          )}
          {results.wealthGained > 0 && (
            <div
              className="bg-emerald-500 transition-all duration-500"
              style={{ width: `${(results.wealthGained / results.totalCorpus) * 100}%` }}
              title={`Returns: ${formatINR(results.wealthGained)}`}
            />
          )}
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-cyan-500" /> Total Invested</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Wealth Gained</span>
        </div>
      </div>

      {/* At-Retirement Split */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">At Retirement</h3>
        <div className="flex rounded-lg overflow-hidden h-8">
          <div
            className="bg-purple-500 transition-all duration-500"
            style={{ width: `${100 - annuityPct}%` }}
            title={`Lump Sum: ${formatINR(results.lumpSum)}`}
          />
          <div
            className="bg-amber-500 transition-all duration-500"
            style={{ width: `${annuityPct}%` }}
            title={`Annuity: ${formatINR(results.annuityAmount)}`}
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-purple-500" /> Lump Sum ({100 - annuityPct}%)</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500" /> Annuity ({annuityPct}%)</span>
        </div>
      </div>

      {/* Growth Chart */}
      {results.yearlyData.length > 0 && (
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Corpus Growth Over {results.years} Years
          </h3>
          <div className="flex items-end gap-px h-48">
            {results.yearlyData.map((d, i) => {
              const show = results.yearlyData.length <= 20 || i % Math.ceil(results.yearlyData.length / 20) === 0 || i === results.yearlyData.length - 1
              if (!show) return null
              return (
                <div key={d.age} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div
                    className="w-full bg-blue-500/80 rounded-t transition-all duration-300 hover:bg-blue-400 min-h-[2px]"
                    style={{ height: `${(d.corpus / maxBar) * 100}%` }}
                  />
                  <span className="text-[10px] text-slate-500">{d.age}</span>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-xl">
                    <p className="text-white font-medium">Age {d.age}</p>
                    <p className="text-slate-400">Corpus: {formatINR(d.corpus)}</p>
                    <p className="text-slate-400">Invested: {formatINR(d.invested)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500 text-center">
        NPS minimum annuity purchase is 40%. Tax benefits under Sec 80CCD(1B) not shown.
      </p>
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

function ResultCard({ label, value, color, highlight }) {
  const colors = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5',
  }
  const textColors = {
    blue: 'text-blue-300',
    cyan: 'text-cyan-300',
    purple: 'text-purple-300',
    emerald: 'text-emerald-300',
    amber: 'text-amber-300',
  }
  return (
    <div className={`rounded-xl border ${colors[color]} p-4 ${highlight ? 'ring-1 ring-blue-500/30' : ''}`}>
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className={`text-lg sm:text-xl font-bold ${textColors[color]} font-mono`}>{value}</p>
    </div>
  )
}

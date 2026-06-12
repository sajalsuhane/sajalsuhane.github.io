import { useEffect, useRef, useState } from 'react'
import { EMAIL, trackEmailCopy } from '../lib/site'

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      trackEmailCopy()
      setCopied(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (permissions / insecure context) — mailto in the
      // footer remains the fallback path.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 min-w-[7.5rem] items-center justify-center rounded-lg border border-slate-700 px-4 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-blue-500 hover:text-white"
      aria-label={`Copy email address ${EMAIL}`}
    >
      <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</span>
    </button>
  )
}

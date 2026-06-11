export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'GitHub', href: 'https://github.com/sajalsuhane' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sajalsuhane' },
  ]

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Sajal Suhane
            </h3>
            <p className="text-sm text-slate-400">
              Software Engineer at Goldman Sachs &middot; Dallas, TX
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:ssuhane31@gmail.com"
              className="inline-flex items-center min-h-11 font-mono text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              ssuhane31@gmail.com
            </a>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center min-h-11 px-4 rounded-lg text-sm text-slate-400 border border-slate-700/50 hover:text-white hover:border-slate-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Sajal Suhane. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

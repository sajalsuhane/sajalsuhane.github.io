export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'GitHub', href: 'https://github.com/sajalsuhane' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sajalsuhane' },
    { name: 'Email', href: 'mailto:ssuhane31@gmail.com' },
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
              Software Developer &middot; Distributed Systems &middot; Dallas, TX
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm text-slate-400 border border-slate-700/50 hover:text-white hover:border-slate-600 transition-all duration-200"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Sajal Suhane. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

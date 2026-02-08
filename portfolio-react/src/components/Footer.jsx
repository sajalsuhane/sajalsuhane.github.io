export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'GitHub', href: 'https://github.com/sajalsuhane' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sajalsuhane' },
    { name: 'Email', href: 'mailto:ssuhane31@gmail.com' },
  ]

  return (
    <footer className="border-t-4 border-black dark:border-white bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Name/Brand */}
          <div>
            <h3 className="text-2xl font-black text-black dark:text-white mb-2">
              SAJAL SUHANE
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Senior Software Engineer · Distributed Systems
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white font-bold text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-black dark:border-white">
          <p className="text-base text-gray-600 dark:text-gray-400 font-mono">
            © {currentYear} Sajal Suhane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

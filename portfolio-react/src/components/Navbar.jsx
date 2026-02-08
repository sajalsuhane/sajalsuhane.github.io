import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'RESEARCH', href: '/research' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-black text-black dark:text-white tracking-tight hover:opacity-70 transition-opacity"
          >
            SS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              className="ml-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-base hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-black dark:border-white">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-bold text-base hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

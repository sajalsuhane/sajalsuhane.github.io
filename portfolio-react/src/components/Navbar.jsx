import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">
            Sajal Suhane
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/research" className="hover:text-blue-400 transition-colors">
              Research
            </Link>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
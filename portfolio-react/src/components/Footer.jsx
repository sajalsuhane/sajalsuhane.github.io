export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Sajal Suhane. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/sajalsuhane" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/sajalsuhane" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/SajalSuhane1998" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
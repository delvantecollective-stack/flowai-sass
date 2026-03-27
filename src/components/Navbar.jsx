import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">F</div>
          <span className="text-white font-bold text-xl">FlowAI</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {['Features', 'Pricing', 'Testimonials', 'FAQ'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-200">{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Log in</a>
          <a href="#" className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-full font-semibold transition btn-glow">
            Get Started Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#050510] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-gray-400">
          {['Features', 'Pricing', 'Testimonials', 'FAQ'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition" onClick={() => setOpen(false)}>{link}</a>
          ))}
          <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-center">
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  )
}

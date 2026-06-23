import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/98 backdrop-blur border-b border-[#1a1a1a] py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-black text-2xl tracking-wider">
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="#ef233c"><path d="M16 6L4 26h7l5-10 5 10h7z" /></svg>
          <span className="text-white">APEX</span>
          <span className="text-[#ef233c]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Programas', 'Treinadores', 'Planos', 'Contato'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-white font-medium transition-colors font-sans"
            >
              {item}
            </a>
          ))}
          <a href="#planos" className="fire-btn px-6 py-2.5 text-white text-sm font-medium rounded-lg font-sans">
            Começar Agora
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#ef233c]">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a]"
          >
            <div className="flex flex-col gap-5 p-6">
              {['Programas', 'Treinadores', 'Planos', 'Contato'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-white font-medium font-sans"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

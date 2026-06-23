import { motion, useScroll, useTransform } from 'framer-motion'
import { FaFire, FaTrophy, FaChevronDown, FaPlay } from 'react-icons/fa'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#ef233c 1px, transparent 1px), linear-gradient(90deg, #ef233c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-0.5 bg-[#ef233c]" />
          <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans font-medium">
            São Paulo · Est. 2018
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-black leading-none mb-2"
        >
          <span className="block text-[18vw] md:text-[14vw] lg:text-[160px] text-white tracking-tighter">
            FORJA
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-display font-black leading-none mb-8"
        >
          <span
            className="block text-[18vw] md:text-[14vw] lg:text-[160px] tracking-tighter"
            style={{ WebkitTextStroke: '2px #ef233c', color: 'transparent' }}
          >
            CAMPEÕES
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10 font-sans"
        >
          Elite fitness para quem não aceita mediocridade. Treinamento de alta performance com os melhores coaches do Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#planos"
            className="fire-btn px-10 py-4 text-white font-sans font-medium text-sm tracking-widest uppercase text-center flex items-center justify-center gap-2"
          >
            <FaFire size={14} /> Começar Treinar
          </a>
          <a
            href="#programas"
            className="px-10 py-4 border border-[#1a1a1a] text-gray-500 font-sans text-sm tracking-widest uppercase hover:border-[#ef233c] hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <FaPlay size={12} /> Ver Programas
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
        >
          <div
            className="w-28 h-28 rounded-full border border-[#ef233c]/30 flex flex-col items-center justify-center text-center"
            style={{ background: 'rgba(239,35,60,0.06)' }}
          >
            <FaTrophy className="text-[#ef233c] mb-1" size={20} />
            <span className="font-display font-black text-white text-sm">1ª SEMANA</span>
            <span className="text-[#ef233c] text-xs font-bold">GRÁTIS</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-[#ef233c] animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}

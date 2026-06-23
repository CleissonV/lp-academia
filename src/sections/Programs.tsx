import { motion } from 'framer-motion'
import ProgramCard from '../components/ui/ProgramCard'
import { programs } from '../constants/data'

export default function Programs() {
  return (
    <section id="programas" className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-8 h-0.5 bg-[#ef233c]" />
          <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans">Modalidades</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter"
        >
          PROGRAMAS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm font-sans mt-3 max-w-lg"
        >
          Cada modalidade foi desenhada para levar você ao próximo nível. Encontre o seu.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program, i) => (
          <ProgramCard key={i} program={program} index={i} />
        ))}
      </div>
    </section>
  )
}

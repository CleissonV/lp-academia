import { motion } from 'framer-motion'
import GymImage from '../components/ui/GymImage'
import { gymImages } from '../constants/data'

export default function Gallery() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-8 h-0.5 bg-[#ef233c]" />
          <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans">Nossa Estrutura</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter"
        >
          GALERIA
        </motion.h2>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {gymImages.map((src, i) => (
          <GymImage key={i} src={src} alt="gym" index={i} />
        ))}
      </div>
    </section>
  )
}

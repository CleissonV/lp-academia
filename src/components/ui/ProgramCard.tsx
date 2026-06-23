import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { GymProgram } from '../../types'

interface Props {
  program: GymProgram
  index: number
}

export default function ProgramCard({ program, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="program-card bg-[#0d0d0d] p-8 cursor-default"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex w-12 h-12 items-center justify-center bg-[#ef233c]/10 text-[#ef233c]">
          <program.icon size={24} strokeWidth={1.8} />
        </span>
        <span className="text-[#ef233c] text-xs font-display font-bold tracking-widest uppercase">{program.level}</span>
      </div>
      <h3 className="font-display font-black text-2xl text-white mb-2">{program.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">{program.desc}</p>
      <div className="flex items-center gap-4 text-xs text-gray-700 font-sans flex-wrap">
        <span className="text-[#f97316]">⏱ {program.duration}</span>
        <span>{program.schedule}</span>
      </div>
    </motion.div>
  )
}

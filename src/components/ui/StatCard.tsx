import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCounter } from '../../hooks/useCounter'
import type { Stat } from '../../types'

interface Props {
  stat: Stat
  index: number
}

export default function StatCard({ stat, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(stat.value, 2000, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <stat.icon className="text-[#ef233c] mx-auto mb-3" size={28} />
      <div className="font-display font-black text-5xl md:text-6xl text-white mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-600 text-sm font-sans tracking-widest uppercase">{stat.label}</div>
    </motion.div>
  )
}

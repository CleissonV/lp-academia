import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Trainer } from '../../types'
import { trainerPhotos } from '../../constants/data'

interface Props {
  trainer: Trainer
  index: number
}

export default function TrainerCard({ trainer, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="program-card bg-[#050505] text-center overflow-hidden"
    >
      <img
        src={trainerPhotos[index % trainerPhotos.length]}
        alt={trainer.name}
        className="w-full h-64 object-cover object-top"
      />
      <div className="p-8">
        <h3 className="font-display font-bold text-2xl text-white mb-1">{trainer.name}</h3>
        <p className="font-sans font-medium text-sm mb-1" style={{ color: trainer.color }}>
          {trainer.spec}
        </p>
        <p className="text-gray-700 text-xs font-sans">{trainer.cref} · {trainer.years} experiência</p>
      </div>
    </motion.div>
  )
}

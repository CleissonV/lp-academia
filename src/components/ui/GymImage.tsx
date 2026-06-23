import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  src: string
  alt: string
  index: number
}

export default function GymImage({ src, alt, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative overflow-hidden group"
    >
      <img src={src} alt={alt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#ef233c]/0 group-hover:bg-[#ef233c]/20 transition-all duration-300" />
    </motion.div>
  )
}

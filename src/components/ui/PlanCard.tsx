import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import type { PricingPlan } from '../../types'

interface Props {
  plan: PricingPlan
  index: number
}

export default function PlanCard({ plan, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="rounded-xl p-8 border relative"
      style={{
        background: plan.color,
        borderColor: plan.border,
        boxShadow: plan.highlight ? '0 25px 60px rgba(239,35,60,0.12)' : 'none',
      }}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 fire-btn px-4 py-1 text-white text-xs font-display font-bold tracking-widest uppercase rounded-full whitespace-nowrap">
          Mais Popular
        </div>
      )}
      <h3 className="font-display font-black text-2xl text-white mb-4">{plan.name}</h3>
      <div className="mb-6">
        <span className="font-display font-black text-5xl text-white">{plan.price}</span>
        <span className="text-gray-600 text-sm font-sans">{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-center gap-3 text-sm text-gray-400 font-sans">
            <FaCheck
              size={10}
              style={{ color: plan.highlight ? '#ef233c' : '#f97316', flexShrink: 0 }}
            />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`block text-center py-3 rounded-lg text-sm font-medium font-sans transition-all ${
          plan.highlight ? 'fire-btn text-white' : 'border text-gray-400 hover:text-white hover:border-gray-500'
        }`}
        style={!plan.highlight ? { borderColor: plan.border } : {}}
      >
        Escolher Plano
      </a>
    </motion.div>
  )
}

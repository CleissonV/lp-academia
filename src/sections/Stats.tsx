import StatCard from '../components/ui/StatCard'
import { stats } from '../constants/data'

export default function Stats() {
  return (
    <section className="py-20 border-y border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}

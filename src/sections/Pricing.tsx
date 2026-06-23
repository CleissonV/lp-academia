import PlanCard from '../components/ui/PlanCard'
import { plans } from '../constants/data'

export default function Pricing() {
  return (
    <section id="planos" className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#ef233c]" />
          <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans">Investimento</span>
        </div>
        <h2 className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter">PLANOS</h2>
        <p className="text-gray-600 text-sm font-sans mt-3 max-w-lg">
          Sem taxa de matrícula. Cancele quando quiser. Primeira semana grátis em todos os planos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} index={i} />
        ))}
      </div>
      <p className="text-gray-700 text-xs font-sans text-center mt-6">
        * Preços por pessoa, cobrados mensalmente. Planos semestrais e anuais com desconto. Consulte-nos.
      </p>
    </section>
  )
}

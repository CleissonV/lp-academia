import TrainerCard from '../components/ui/TrainerCard'
import { trainers } from '../constants/data'

export default function Trainers() {
  return (
    <section id="treinadores" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#ef233c]" />
            <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans">Nossa Equipe</span>
          </div>
          <h2 className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter">COACHES</h2>
          <p className="text-gray-600 text-sm font-sans mt-3 max-w-lg">
            Profissionais certificados com histórico comprovado de transformações reais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <TrainerCard key={i} trainer={trainer} index={i} />
          ))}
        </div>
        <div className="mt-12 p-8 border border-[#1a1a1a] bg-[#050505] flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <p className="text-white font-display font-bold text-xl mb-1">Quer fazer parte do nosso time?</p>
            <p className="text-gray-600 text-sm font-sans">Estamos sempre à procura de coaches excepcionais.</p>
          </div>
          <a
            href="mailto:contato@apextraining.com.br"
            className="fire-btn px-8 py-3 text-white text-sm font-medium font-sans whitespace-nowrap rounded-lg"
          >
            Enviar Currículo
          </a>
        </div>
      </div>
    </section>
  )
}

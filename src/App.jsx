import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  FaBars, FaTimes, FaDumbbell, FaFire, FaTrophy, FaRunning,
  FaHeartbeat, FaUsers, FaCheck, FaPhone, FaWhatsapp,
  FaInstagram, FaYoutube, FaChevronDown, FaPlay
} from 'react-icons/fa'
import { MdFitnessCenter, MdSportsGymnastics } from 'react-icons/md'
import { GiMuscleUp, GiWeightLiftingUp, GiBiceps } from 'react-icons/gi'

const useCounter = (target, duration = 2000, inView) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const targetNum = parseInt(target.replace(/\D/g, ''))
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * targetNum))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

const StatCard = ({ number, suffix, label, icon: Icon }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(number, 2000, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <Icon className="text-[#ef233c] mx-auto mb-3" size={28} />
      <div className="font-display font-black text-5xl md:text-6xl text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-sm font-sans tracking-widest uppercase">{label}</div>
    </motion.div>
  )
}

const programs = [
  {
    name: 'HIIT Extremo',
    level: 'Avançado',
    duration: '45 min',
    emoji: '⚡',
    desc: 'Treino intervalado de alta intensidade que queima até 800 cal/sessão. Máxima entrega, máximo resultado.',
    schedule: 'Seg/Qua/Sex · 6h, 12h, 18h',
  },
  {
    name: 'Musculação Performance',
    level: 'Todos os níveis',
    duration: '60 min',
    emoji: '💪',
    desc: 'Ganho de massa com periodização científica. Protocolos individualizados com acompanhamento constante.',
    schedule: 'Diário · 6h às 22h',
  },
  {
    name: 'Functional Training',
    level: 'Intermediário',
    duration: '50 min',
    emoji: '🏋️',
    desc: 'Movimentos funcionais que melhoram força, equilíbrio e mobilidade. Treino completo para vida real.',
    schedule: 'Ter/Qui/Sáb · 7h, 13h, 19h',
  },
  {
    name: 'MMA & Artes Marciais',
    level: 'Todos os níveis',
    duration: '60 min',
    emoji: '🥊',
    desc: 'Boxe, Muay Thai e BJJ. Condicionamento físico máximo aliado à técnica de luta e autodefesa.',
    schedule: 'Ter/Qui/Sáb · 7h, 19h',
  },
  {
    name: 'Yoga & Mobilidade',
    level: 'Iniciante',
    duration: '60 min',
    emoji: '🧘',
    desc: 'Equilíbrio, flexibilidade e recuperação ativa. Complemento essencial para qualquer atleta.',
    schedule: 'Seg/Qua/Sex · 7h, 20h',
  },
  {
    name: 'Bootcamp Outdoor',
    level: 'Avançado',
    duration: '60 min',
    emoji: '🔥',
    desc: 'Treino ao ar livre de alta intensidade. Supera limites em grupo, com a energia da natureza.',
    schedule: 'Sáb/Dom · 7h',
  },
]

const trainers = [
  { name: 'André Martins', spec: 'HIIT & Performance', cref: 'CREF-SP 045231', icon: GiMuscleUp, years: '8 anos', color: '#ef233c' },
  { name: 'Carla Vieira', spec: 'Musculação & Nutrição', cref: 'CREF-SP 078902', icon: GiBiceps, years: '10 anos', color: '#f97316' },
  { name: 'Lucas Ferreira', spec: 'MMA & Artes Marciais', cref: 'CREF-SP 023441', icon: GiWeightLiftingUp, years: '12 anos', color: '#ef233c' },
]

const plans = [
  {
    name: 'Básico',
    price: 'R$ 89',
    period: '/mês',
    features: ['Acesso livre', '1 modalidade', 'Vestiário', 'Avaliação mensal'],
    color: '#111111',
    border: '#2a2a2a',
  },
  {
    name: 'Performance',
    price: 'R$ 197',
    period: '/mês',
    features: [
      'Acesso livre',
      'Todas as modalidades',
      'Personal 2x/mês',
      'App de treino',
      'Avaliação quinzenal',
      'Desconto em suplementos',
    ],
    highlight: true,
    color: '#1a0505',
    border: '#ef233c',
  },
  {
    name: 'Elite',
    price: 'R$ 397',
    period: '/mês',
    features: [
      'Acesso 24h',
      'Tudo do Performance',
      'Personal ilimitado',
      'Nutricionista',
      'Bioimpedância mensal',
      'Acesso à sauna',
    ],
    color: '#0f0a00',
    border: '#f97316',
  },
]

const ProgramCard = ({ p, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="program-card bg-[#0d0d0d] p-8 cursor-default"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{p.emoji}</span>
        <span className="text-[#ef233c] text-xs font-display font-bold tracking-widest uppercase">{p.level}</span>
      </div>
      <h3 className="font-display font-black text-2xl text-white mb-2">{p.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">{p.desc}</p>
      <div className="flex items-center gap-4 text-xs text-gray-700 font-sans flex-wrap">
        <span className="text-[#f97316]">⏱ {p.duration}</span>
        <span>{p.schedule}</span>
      </div>
    </motion.div>
  )
}

const TrainerCard = ({ trainer, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      className="program-card bg-[#050505] p-8 text-center"
    >
      <div
        className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border border-[#1a1a1a]"
        style={{ background: `${trainer.color}15` }}
      >
        <trainer.icon size={48} style={{ color: trainer.color }} />
      </div>
      <h3 className="font-display font-bold text-2xl text-white mb-1">{trainer.name}</h3>
      <p className="font-sans font-medium text-sm mb-1" style={{ color: trainer.color }}>
        {trainer.spec}
      </p>
      <p className="text-gray-700 text-xs font-sans">{trainer.cref} · {trainer.years} experiência</p>
    </motion.div>
  )
}

const PlanCard = ({ plan, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15 }}
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #ef233c, #f97316)',
        }}
      />

      {/* Nav */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/98 backdrop-blur border-b border-[#1a1a1a] py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-black text-2xl tracking-wider">
            <span className="text-white">APEX</span>
            <span className="text-[#ef233c]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Programas', 'Treinadores', 'Planos', 'Contato'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-white font-medium transition-colors font-sans"
              >
                {item}
              </a>
            ))}
            <a href="#planos" className="fire-btn px-6 py-2.5 text-white text-sm font-medium rounded-lg font-sans">
              Começar Agora
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#ef233c]">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a]"
            >
              <div className="flex flex-col gap-5 p-6">
                {['Programas', 'Treinadores', 'Planos', 'Contato'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-500 hover:text-white font-medium font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(239,35,60,0.08) 0%, transparent 60%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#ef233c 1px, transparent 1px), linear-gradient(90deg, #ef233c 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-[#ef233c]" />
            <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans font-medium">
              São Paulo · Est. 2018
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display font-black leading-none mb-2"
          >
            <span className="block text-[18vw] md:text-[14vw] lg:text-[160px] text-white tracking-tighter">
              FORJA
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display font-black leading-none mb-8"
          >
            <span
              className="block text-[18vw] md:text-[14vw] lg:text-[160px] tracking-tighter"
              style={{ WebkitTextStroke: '2px #ef233c', color: 'transparent' }}
            >
              CAMPEÕES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10 font-sans"
          >
            Elite fitness para quem não aceita mediocridade. Treinamento de alta performance com os melhores coaches do Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#planos"
              className="fire-btn px-10 py-4 text-white font-sans font-medium text-sm tracking-widest uppercase text-center flex items-center justify-center gap-2"
            >
              <FaFire size={14} /> Começar Treinar
            </a>
            <a
              href="#programas"
              className="px-10 py-4 border border-[#1a1a1a] text-gray-500 font-sans text-sm tracking-widest uppercase hover:border-[#ef233c] hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <FaPlay size={12} /> Ver Programas
            </a>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
          >
            <div
              className="w-28 h-28 rounded-full border border-[#ef233c]/30 flex flex-col items-center justify-center text-center"
              style={{ background: 'rgba(239,35,60,0.06)' }}
            >
              <FaTrophy className="text-[#ef233c] mb-1" size={20} />
              <span className="font-display font-black text-white text-sm">1ª SEMANA</span>
              <span className="text-[#ef233c] text-xs font-bold">GRÁTIS</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <FaChevronDown className="text-[#ef233c] animate-bounce" size={16} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="2000" suffix="+" label="Alunos Ativos" icon={FaUsers} />
          <StatCard number="98" suffix="%" label="Satisfação" icon={FaTrophy} />
          <StatCard number="6" suffix="" label="Anos de História" icon={FaFire} />
          <StatCard number="15" suffix="+" label="Modalidades" icon={FaDumbbell} />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="py-4 bg-[#ef233c] overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display font-black text-white/80 text-sm tracking-widest uppercase flex items-center gap-4">
              HIIT <span className="text-white/40">·</span> MUSCULAÇÃO <span className="text-white/40">·</span> MMA <span className="text-white/40">·</span> YOGA <span className="text-white/40">·</span> FUNCTIONAL <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
      </div>

      {/* Programs */}
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
          {programs.map((p, i) => (
            <ProgramCard key={i} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* Trainers */}
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
              <TrainerCard key={i} trainer={trainer} i={i} />
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

      {/* Pricing */}
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
            <PlanCard key={i} plan={plan} i={i} />
          ))}
        </div>
        <p className="text-gray-700 text-xs font-sans text-center mt-6">
          * Preços por pessoa, cobrados mensalmente. Planos semestrais e anuais com desconto. Consulte-nos.
        </p>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#ef233c]" />
              <span className="text-[#ef233c] text-xs tracking-[0.4em] uppercase font-sans">Fale Conosco</span>
            </div>
            <h2 className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter">CONTATO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { icon: FaPhone, label: 'Telefone', value: '(11) 3456-7890' },
                { icon: FaWhatsapp, label: 'WhatsApp', value: '(11) 99999-9999' },
                { icon: FaInstagram, label: 'Instagram', value: '@apextrainingsp' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(239,35,60,0.1)', border: '1px solid rgba(239,35,60,0.2)' }}
                  >
                    <item.icon className="text-[#ef233c]" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs font-sans uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-medium font-sans">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="border border-[#1a1a1a] p-6 mt-4">
                <p className="text-[#ef233c] text-xs tracking-widest uppercase font-sans mb-3">Endereço</p>
                <p className="text-white font-sans font-medium">Av. Paulista, 2500 — Bela Vista</p>
                <p className="text-gray-600 text-sm font-sans">São Paulo, SP · CEP 01310-100</p>
                <p className="text-gray-700 text-xs font-sans mt-3">Segunda a Sábado: 5h30 às 23h</p>
                <p className="text-gray-700 text-xs font-sans">Domingo: 8h às 18h</p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Nome', type: 'text', ph: 'Seu nome' },
                { label: 'E-mail', type: 'email', ph: 'seu@email.com' },
                { label: 'Telefone', type: 'tel', ph: '(11) 99999-9999' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs tracking-widest uppercase text-gray-600 mb-1.5 font-sans">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-white text-sm font-sans placeholder-gray-800 focus:border-[#ef233c] focus:outline-none transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-600 mb-1.5 font-sans">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Qual é o seu objetivo?"
                  className="w-full bg-[#050505] border border-[#1a1a1a] px-4 py-3 text-white text-sm font-sans placeholder-gray-800 focus:border-[#ef233c] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 fire-btn text-white font-sans font-medium text-sm tracking-widest uppercase"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #ef233c, #f97316)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 60px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tighter"
          >
            SUA TRANSFORMAÇÃO<br />COMEÇA AGORA
          </motion.h2>
          <p className="text-red-100 text-lg mb-10 font-sans">
            1ª semana grátis. Sem burocracia. Sem desculpas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="px-10 py-4 bg-white text-[#ef233c] font-display font-bold text-lg uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} /> Falar no WhatsApp
            </a>
            <a
              href="tel:+551134567890"
              className="px-10 py-4 border-2 border-white text-white font-display font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <FaPhone size={16} /> (11) 3456-7890
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-8 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="font-display font-black text-3xl text-white block mb-3">
                APEX<span className="text-[#ef233c]">.</span>
              </span>
              <p className="text-gray-700 text-xs font-sans leading-relaxed">
                Elite fitness para quem não aceita mediocridade. Transformando corpos e mentes desde 2018.
              </p>
              <div className="flex gap-4 mt-5">
                {[FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
                  <a key={i} href="#" className="text-gray-700 hover:text-[#ef233c] transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#ef233c] text-xs tracking-widest uppercase font-sans mb-4">Links</p>
              <div className="space-y-2">
                {['Programas', 'Treinadores', 'Planos', 'Contato', 'Política de Privacidade'].map(link => (
                  <a key={link} href="#" className="block text-gray-700 text-xs font-sans hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#ef233c] text-xs tracking-widest uppercase font-sans mb-4">Horários</p>
              <div className="space-y-1.5 text-gray-700 text-xs font-sans">
                <p>Segunda a Sexta: 5h30 – 23h00</p>
                <p>Sábado: 7h00 – 20h00</p>
                <p>Domingo: 8h00 – 18h00</p>
                <p className="mt-3 text-gray-800">Feriados: consultar unidade</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-800 text-xs font-sans">
              © 2024 APEX Training Center. CREF-SP Registrado. Todos os direitos reservados.
            </p>
            <p className="text-gray-800 text-xs font-sans">
              Desenvolvido com excelência por <span className="text-[#ef233c]">Agência Digital</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

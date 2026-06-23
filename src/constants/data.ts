import { FaDumbbell, FaFire, FaTrophy, FaUsers } from 'react-icons/fa'
import { GiMuscleUp, GiWeightLiftingUp, GiBiceps } from 'react-icons/gi'
import { LuZap, LuDumbbell, LuActivity, LuSwords, LuPersonStanding, LuFlame } from 'react-icons/lu'
import type { GymProgram, Trainer, PricingPlan, Stat } from '../types'

export const programs: GymProgram[] = [
  {
    title: 'HIIT Extremo',
    level: 'Avançado',
    duration: '45 min',
    icon: LuZap,
    desc: 'Treino intervalado de alta intensidade que queima até 800 cal/sessão. Máxima entrega, máximo resultado.',
    schedule: 'Seg/Qua/Sex · 6h, 12h, 18h',
    color: '#ef233c',
  },
  {
    title: 'Musculação Performance',
    level: 'Todos os níveis',
    duration: '60 min',
    icon: LuDumbbell,
    desc: 'Ganho de massa com periodização científica. Protocolos individualizados com acompanhamento constante.',
    schedule: 'Diário · 6h às 22h',
    color: '#ef233c',
  },
  {
    title: 'Functional Training',
    level: 'Intermediário',
    duration: '50 min',
    icon: LuActivity,
    desc: 'Movimentos funcionais que melhoram força, equilíbrio e mobilidade. Treino completo para vida real.',
    schedule: 'Ter/Qui/Sáb · 7h, 13h, 19h',
    color: '#ef233c',
  },
  {
    title: 'MMA & Artes Marciais',
    level: 'Todos os níveis',
    duration: '60 min',
    icon: LuSwords,
    desc: 'Boxe, Muay Thai e BJJ. Condicionamento físico máximo aliado à técnica de luta e autodefesa.',
    schedule: 'Ter/Qui/Sáb · 7h, 19h',
    color: '#ef233c',
  },
  {
    title: 'Yoga & Mobilidade',
    level: 'Iniciante',
    duration: '60 min',
    icon: LuPersonStanding,
    desc: 'Equilíbrio, flexibilidade e recuperação ativa. Complemento essencial para qualquer atleta.',
    schedule: 'Seg/Qua/Sex · 7h, 20h',
    color: '#ef233c',
  },
  {
    title: 'Bootcamp Outdoor',
    level: 'Avançado',
    duration: '60 min',
    icon: LuFlame,
    desc: 'Treino ao ar livre de alta intensidade. Supera limites em grupo, com a energia da natureza.',
    schedule: 'Sáb/Dom · 7h',
    color: '#ef233c',
  },
]

export const trainers: Trainer[] = [
  { name: 'André Martins', spec: 'HIIT & Performance', cref: 'CREF-SP 045231', icon: GiMuscleUp, years: '8 anos', color: '#ef233c' },
  { name: 'Carla Vieira', spec: 'Musculação & Nutrição', cref: 'CREF-SP 078902', icon: GiBiceps, years: '10 anos', color: '#f97316' },
  { name: 'Lucas Ferreira', spec: 'MMA & Artes Marciais', cref: 'CREF-SP 023441', icon: GiWeightLiftingUp, years: '12 anos', color: '#ef233c' },
]

export const plans: PricingPlan[] = [
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

export const stats: Stat[] = [
  { value: 2000, suffix: '+', label: 'Alunos Ativos', icon: FaUsers },
  { value: 98, suffix: '%', label: 'Satisfação', icon: FaTrophy },
  { value: 6, suffix: '', label: 'Anos de História', icon: FaFire },
  { value: 15, suffix: '+', label: 'Modalidades', icon: FaDumbbell },
]

export const gymImages: string[] = [
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&q=80&auto=format&fit=crop',
]

export const trainerPhotos: string[] = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627483297886-49710ae1fc22?w=400&q=80&auto=format&fit=crop',
]

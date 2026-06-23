<h1 align="center">APEX — Academia de Elite</h1>

<p align="center">
  Landing page para academia premium com animação de contadores com easing cúbico, planos de treino, perfis de personal trainers e galeria.
  <br /><br />
  <a href="https://lp-academia.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page de alta performance para academia. O hero usa sobreposição grid com gradiente CSS para efeito visual. Estatísticas contam de 0 até o valor alvo com easing cúbico personalizado ao entrar no viewport. Apresenta programas de treino, equipe de personal trainers e planos de mensalidade.

## Funcionalidades

- Hero com grid pattern overlay via CSS linear-gradient
- Hook `useCounter` com easing cúbico `1 - (1-t)³` ativado ao rolar
- Marquee strip animado
- 6 programas de treino com cards informativos
- Perfis dos personal trainers com certificações
- 3 planos de preços com destaque no plano recomendado
- Galeria da academia

## Stack

- **React 18 + TypeScript** — componentes tipados
- **Tailwind CSS 3** — estilização utility-first
- **Framer Motion 11** — animações e detecção de viewport
- **Vite 5** — build rápido
- **react-icons** — ícones variados (fa, md, gi, lu)

## Instalação

```bash
git clone https://github.com/CleissonV/lp-academia
cd lp-academia
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # programas, trainers, planos, stats
├── types/
│   └── index.ts         # GymProgram, Trainer, PricingPlan, Stat
├── hooks/
│   └── useCounter.ts    # animação de contador com easing cúbico
├── components/
│   └── ui/
│       ├── StatCard.tsx
│       ├── ProgramCard.tsx
│       ├── TrainerCard.tsx
│       ├── PlanCard.tsx
│       └── GymImage.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Marquee.tsx
│   ├── Programs.tsx
│   ├── Trainers.tsx
│   ├── Gallery.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── CTAStrip.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)

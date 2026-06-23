import type { IconType } from 'react-icons'

export interface GymProgram {
  icon: IconType
  title: string
  desc: string
  duration: string
  level: string
  color: string
  schedule: string
}

export interface Trainer {
  name: string
  spec: string
  cref: string
  icon: IconType
  years: string
  color: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  highlight?: boolean
  color: string
  border: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: IconType
}

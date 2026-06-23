import { useState, useEffect } from 'react'

export function useCounter(target: number, duration: number, inView: boolean): number {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, inView])
  return count
}

import { motion, useScroll } from 'framer-motion'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Marquee from './sections/Marquee'
import Programs from './sections/Programs'
import Trainers from './sections/Trainers'
import Gallery from './sections/Gallery'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import CTAStrip from './sections/CTAStrip'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

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
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <Programs />
      <Trainers />
      <Gallery />
      <Pricing />
      <Contact />
      <CTAStrip />
      <Footer />
    </div>
  )
}

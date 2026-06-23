import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function CTAStrip() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ef233c, #f97316)' }}
    >
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
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
  )
}

import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
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
  )
}

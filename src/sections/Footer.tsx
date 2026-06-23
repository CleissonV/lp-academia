import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
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
  )
}

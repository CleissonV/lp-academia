export default function Marquee() {
  return (
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
  )
}

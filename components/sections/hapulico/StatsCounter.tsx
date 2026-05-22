"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { icon: "🏗️", end: 1000, suffix: "+", label: "Dự án đã triển khai" },
  { icon: "🏭", end: 40000, suffix: "m²", label: "Nhà máy", format: "comma" },
  { icon: "📦", end: 500000, suffix: "+", label: "Sản phẩm cung cấp", format: "comma" },
  { icon: "👥", end: 800, suffix: "+", label: "Nhân viên" },
]

function format(n: number, withComma?: boolean) {
  return withComma ? n.toLocaleString("vi-VN") : n.toString()
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [values, setValues] = useState(stats.map(() => 0))
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const duration = 1800
            const startTime = performance.now()
            const tick = (now: number) => {
              const t = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              setValues(stats.map((s) => Math.round(s.end * eased)))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        backgroundImage: "url(https://placehold.co/1920x600/1e293b/64748b?text=Lavipco+Factory)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(0,63,127,0.92),rgba(15,23,42,0.92))" }} />
      <div className="container-pad relative">
        <div className="text-center mb-12">
          <h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", letterSpacing: "-0.02em" }}>
            Những con số ấn tượng
          </h2>
          <div className="mx-auto h-1 w-16 rounded" style={{ background: "#f97316" }} />
        </div>
        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
          <style>{`@media(min-width:768px){.stats-counter-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          <div className="grid gap-8 stats-counter-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", gridColumn: "1 / -1" }}>
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="font-black text-white mb-2" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1 }}>
                  {format(values[i], s.format === "comma")}<span style={{ color: "#f97316" }}>{s.suffix}</span>
                </div>
                <div className="font-medium" style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

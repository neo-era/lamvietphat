"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const slides = [
  {
    img: "https://placehold.co/1920x800/003F7F/FFFFFF?text=Lavipco+Cityscape",
    title: "LAVIPCO — TỎA SÁNG KHẮP MỌI MIỀN",
    desc: "Chuyên thi công, tư vấn, sản xuất thiết bị chiếu sáng đô thị, tín hiệu giao thông trên toàn quốc — từ năm 2014.",
  },
  {
    img: "https://placehold.co/1920x800/0066CC/FFFFFF?text=Smart+Lighting",
    title: "GIẢI PHÁP CHIẾU SÁNG THÔNG MINH",
    desc: "Hệ thống chiếu sáng tự động điều khiển từ xa, tiết kiệm năng lượng, vận hành 24/7.",
  },
  {
    img: "https://placehold.co/1920x800/1e3a8a/FFFFFF?text=National+Coverage",
    title: "PHỤC VỤ TOÀN QUỐC",
    desc: "Đội ngũ kỹ sư và công nhân có mặt tại 10+ tỉnh thành — sẵn sàng triển khai dự án quy mô lớn.",
  },
]

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "80vh", minHeight: "560px" }}>
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: idx === i ? 1 : 0,
            zIndex: idx === i ? 1 : 0,
            backgroundImage: `url(${s.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      {/* dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)", zIndex: 2 }} />

      {/* content */}
      <div className="relative h-full flex items-center justify-center text-center px-6" style={{ zIndex: 3 }}>
        <div className="max-w-4xl mx-auto pt-20">
          {slides.map((s, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: idx === i ? 1 : 0,
                transform: idx === i ? "translateY(0)" : "translateY(20px)",
                position: idx === i ? "relative" : "absolute",
                left: idx === i ? "auto" : "50%",
                width: idx === i ? "auto" : "100%",
              }}
            >
              {idx === i && (
                <>
                  <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2rem,5.5vw,4.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em", textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>
                    {s.title}
                  </h1>
                  <p className="max-w-2xl mx-auto mb-10" style={{ color: "#e5e7eb", fontSize: "clamp(0.95rem,1.5vw,1.15rem)", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                  <Link
                    href="/ve-chung-toi"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#ea580c,#f97316)", boxShadow: "0 4px 20px rgba(249,115,22,0.4)" }}
                  >
                    Xem thêm
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-2.5" style={{ bottom: "5rem", zIndex: 4 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="rounded-full transition-all"
            style={{
              width: idx === i ? "32px" : "10px",
              height: "10px",
              background: idx === i ? "#f97316" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* scroll down */}
      <a
        href="#tong-quan"
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-80 hover:opacity-100 transition-opacity"
        style={{ bottom: "1.5rem", zIndex: 4, animation: "bounce-down 2.2s ease-in-out infinite" }}
      >
        <span className="text-xs font-medium uppercase tracking-wider">Cuộn xuống</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>

      <style>{`
        @keyframes bounce-down {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -10px); }
          60% { transform: translate(-50%, -5px); }
        }
      `}</style>
    </section>
  )
}

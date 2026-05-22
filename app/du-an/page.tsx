"use client"

import Link from "next/link"
import { useState } from "react"
import { projects, PROJECT_CATEGORY_LABELS, type ProjectCategory } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

const ALL = "ALL"
type Filter = ProjectCategory | typeof ALL

const gradients = [
  "linear-gradient(135deg,#0b1d3a 0%,#1e3a8a 60%,#0ea5e9 100%)",
  "linear-gradient(135deg,#1a0533 0%,#3730a3 60%,#6366f1 100%)",
  "linear-gradient(135deg,#052e16 0%,#166534 60%,#22c55e 100%)",
  "linear-gradient(135deg,#0c1a3a 0%,#0369a1 60%,#06b6d4 100%)",
  "linear-gradient(135deg,#1c1505 0%,#92400e 60%,#f59e0b 100%)",
  "linear-gradient(135deg,#2d1b69 0%,#553c9a 60%,#a78bfa 100%)",
]
const emojis = ["💡", "🏖️", "☀️", "🎡", "🏙️", "🏗️"]

export default function DuAnPage() {
  const [filter, setFilter] = useState<Filter>(ALL)
  const [province, setProvince] = useState("ALL")

  const provinces = Array.from(new Set(projects.map((p) => p.province)))
  const categories = Array.from(new Set(projects.map((p) => p.category)))

  const filtered = projects.filter((p) => {
    const matchCat = filter === ALL || p.category === filter
    const matchProv = province === "ALL" || p.province === province
    return matchCat && matchProv && p.published
  })

  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "50vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto w-full">
          <ScrollReveal><div className="tag-label mb-6 justify-center">Portfolio</div></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-black mb-6" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              Dự án <span className="gradient-text">đã thực hiện</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "1.1rem", color: "#9a9a9a", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Hơn 50 công trình lớn trên toàn quốc — tổng giá trị hàng chục tỷ đồng.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      <section className="section-pad">
        <div className="container-pad">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={() => setFilter(ALL)} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all" style={{ background: filter === ALL ? "linear-gradient(135deg,#1d4ed8,#3b82f6)" : "#0d0d0d", color: filter === ALL ? "#fff" : "#9a9a9a", border: `1px solid ${filter === ALL ? "transparent" : "#232323"}` }}>
                Tất cả
              </button>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setFilter(cat)} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all" style={{ background: filter === cat ? "linear-gradient(135deg,#1d4ed8,#3b82f6)" : "#0d0d0d", color: filter === cat ? "#fff" : "#9a9a9a", border: `1px solid ${filter === cat ? "transparent" : "#232323"}` }}>
                  {PROJECT_CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              <button onClick={() => setProvince("ALL")} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: province === "ALL" ? "#141414" : "transparent", color: province === "ALL" ? "#f8f8f8" : "#4a4a4a", border: `1px solid ${province === "ALL" ? "#2e2e2e" : "#1c1c1c"}` }}>
                Tất cả tỉnh thành
              </button>
              {provinces.map((prov) => (
                <button key={prov} onClick={() => setProvince(prov)} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: province === prov ? "#141414" : "transparent", color: province === prov ? "#f8f8f8" : "#4a4a4a", border: `1px solid ${province === prov ? "#2e2e2e" : "#1c1c1c"}` }}>
                  {prov}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "#4a4a4a" }}>
              <div className="text-5xl mb-4">🔍</div>
              <p>Không tìm thấy dự án phù hợp.</p>
            </div>
          ) : (
            <ScrollRevealGroup>
              <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
                <style>{`@media(min-width:640px){.proj-list{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.proj-list{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
                <div className="grid gap-5 proj-list" style={{ gridTemplateColumns: "1fr" }}>
                  {filtered.map((p, i) => (
                    <ScrollRevealItem key={p.id}>
                      <Link
                        href={`/du-an/${p.slug}`}
                        className="block relative rounded-2xl overflow-hidden group"
                        style={{ minHeight: "300px", border: "1px solid #232323", transition: "transform 0.3s, box-shadow 0.3s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.018)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,.6)" }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradients[i % gradients.length], fontSize: "5rem", opacity: 0.9 }}>
                          <span style={{ opacity: 0.15 }}>{emojis[i % emojis.length]}</span>
                        </div>
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(7,7,7,.9) 0%,rgba(7,7,7,.3) 50%,rgba(7,7,7,0) 100%)" }} />
                        <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.5),transparent)" }} />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="mb-1.5" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#06b6d4", fontWeight: 700 }}>
                            {PROJECT_CATEGORY_LABELS[p.category]} · {p.province} · {p.year}
                          </p>
                          <p className="font-bold mb-2 leading-snug" style={{ fontSize: "1rem" }}>{p.title}</p>
                          <div className="flex items-center justify-between">
                            <p style={{ fontSize: "0.78rem", color: "#9a9a9a" }}>{p.client}</p>
                            {p.contractValue && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(59,130,246,.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,.2)" }}>
                                {formatPrice(p.contractValue)}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </ScrollRevealItem>
                  ))}
                </div>
              </div>
            </ScrollRevealGroup>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad text-center">
          <ScrollReveal>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
              Bắt đầu <span className="gradient-text">dự án mới?</span>
            </h2>
            <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", maxWidth: "420px", lineHeight: 1.8 }}>
              Liên hệ để được khảo sát miễn phí và nhận báo giá chi tiết.
            </p>
            <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
              Liên hệ ngay →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

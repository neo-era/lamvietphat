"use client"

import Link from "next/link"
import { useState } from "react"
import { products, PRODUCT_CATEGORY_LABELS, type ProductCategory } from "@/lib/data"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

const ALL = "ALL"
type Filter = ProductCategory | typeof ALL

const categoryEmoji: Record<ProductCategory, string> = {
  DEN_DUONG_LED: "💡",
  DEN_PHA_LED: "🔦",
  DEN_CONG_VIEN: "🏮",
  TRU_DEN: "🏛️",
  TU_DIEU_KHIEN: "🖥️",
  HE_THONG_DIEU_KHIEN: "⚙️",
  DEN_TIN_HIEU: "🚦",
  CAMERA_VMS: "📷",
  DEN_CANH_QUAN: "✨",
}

export default function SanPhamPage() {
  const [filter, setFilter] = useState<Filter>(ALL)
  const [search, setSearch] = useState("")

  const categories = Array.from(new Set(products.map((p) => p.category)))

  const filtered = products.filter((p) => {
    const matchCat = filter === ALL || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.shortDesc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch && p.published
  })

  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "50vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto w-full">
          <ScrollReveal><div className="tag-label mb-6 justify-center">Danh mục sản phẩm</div></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-black mb-6" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              Sản phẩm <span className="gradient-text">chiếu sáng</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "1.1rem", color: "#9a9a9a", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              Đèn đường LED, trụ đèn, tủ điều khiển chất lượng cao — bảo hành 3 năm chính hãng.
            </p>
          </ScrollReveal>

          {/* Search bar */}
          <ScrollReveal delay={0.15}>
            <div className="relative max-w-md mx-auto">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl transition-all outline-none"
                style={{ background: "#0d0d0d", border: "1px solid #2e2e2e", color: "#f8f8f8", fontSize: "0.9rem" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* FILTER + GRID */}
      <section className="section-pad">
        <div className="container-pad">
          {/* Category filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                onClick={() => setFilter(ALL)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ background: filter === ALL ? "linear-gradient(135deg,#1d4ed8,#3b82f6)" : "#0d0d0d", color: filter === ALL ? "#fff" : "#9a9a9a", border: `1px solid ${filter === ALL ? "transparent" : "#232323"}` }}
              >
                Tất cả ({products.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ background: filter === cat ? "linear-gradient(135deg,#1d4ed8,#3b82f6)" : "#0d0d0d", color: filter === cat ? "#fff" : "#9a9a9a", border: `1px solid ${filter === cat ? "transparent" : "#232323"}` }}
                >
                  {categoryEmoji[cat]} {PRODUCT_CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "#4a4a4a" }}>
              <div className="text-5xl mb-4">🔍</div>
              <p>Không tìm thấy sản phẩm phù hợp.</p>
            </div>
          ) : (
            <ScrollRevealGroup>
              <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
                <style>{`@media(min-width:640px){.prod-list{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.prod-list{grid-template-columns:repeat(3,1fr)!important;}}@media(min-width:1280px){.prod-list{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
                <div className="grid gap-5 prod-list" style={{ gridTemplateColumns: "1fr" }}>
                  {filtered.map((p) => (
                    <ScrollRevealItem key={p.id}>
                      <Link
                        href={`/san-pham/${p.slug}`}
                        className="block group rounded-2xl overflow-hidden h-full transition-all duration-300"
                        style={{ background: "#0d0d0d", border: "1px solid #232323" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,.4)"; e.currentTarget.style.transform = "translateY(-3px)" }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#232323"; e.currentTarget.style.transform = "none" }}
                      >
                        {/* Image / placeholder */}
                        <div className="relative h-48 flex items-center justify-center text-6xl" style={{ background: "#141414", borderBottom: "1px solid #232323" }}>
                          <span className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.4),transparent)" }} />
                          {categoryEmoji[p.category]}
                          {p.featured && (
                            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", color: "#fff" }}>
                              Nổi bật
                            </span>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="mb-1.5" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#3b82f6", fontWeight: 700 }}>
                            {PRODUCT_CATEGORY_LABELS[p.category]}
                          </div>
                          <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: "0.925rem" }}>{p.name}</h3>
                          <p className="mb-4 line-clamp-2" style={{ fontSize: "0.8rem", color: "#9a9a9a", lineHeight: 1.7 }}>{p.shortDesc}</p>
                          {/* Key specs */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {p.specs.slice(0, 3).map((spec) => (
                              <span key={spec.label} className="px-2 py-0.5 rounded" style={{ fontSize: "0.68rem", background: "#141414", border: "1px solid #2e2e2e", color: "#9a9a9a" }}>
                                {spec.value}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span style={{ fontSize: "0.82rem", color: "#60a5fa", fontWeight: 600 }}>Xem chi tiết →</span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(59,130,246,.1)", color: "#60a5fa", border: "1px solid rgba(59,130,246,.2)" }}>
                              Báo giá
                            </span>
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
              Cần báo giá <span className="gradient-text">chi tiết?</span>
            </h2>
            <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", maxWidth: "420px", lineHeight: 1.8 }}>
              Gửi yêu cầu báo giá, chúng tôi phản hồi trong vòng 24 giờ làm việc.
            </p>
            <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
              Yêu cầu báo giá →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

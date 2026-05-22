import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products, PRODUCT_CATEGORY_LABELS, type ProductCategory } from "@/lib/data"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { QuoteForm } from "./QuoteForm"

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

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} — Lavipco`,
    description: product.shortDesc,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ paddingTop: "5.5rem", paddingBottom: "0" }}>
        <div className="container-pad py-4">
          <nav className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>
            <Link href="/" style={{ color: "#4a4a4a" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#9a9a9a")} onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}>Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" style={{ color: "#4a4a4a" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#9a9a9a")} onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}>Sản phẩm</Link>
            <span>/</span>
            <span style={{ color: "#9a9a9a" }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-pad" style={{ paddingTop: "2rem" }}>
        <div className="container-pad">
          <div className="grid gap-12" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.prod-detail{grid-template-columns:1fr 1fr;gap:4rem;}}`}</style>
            <div className="grid gap-12 prod-detail" style={{ gridTemplateColumns: "1fr" }}>
              {/* Left: Image + gallery */}
              <ScrollReveal>
                <div>
                  <div className="rounded-2xl overflow-hidden mb-4 flex items-center justify-center" style={{ height: "400px", background: "#0d0d0d", border: "1px solid #232323", fontSize: "8rem" }}>
                    {categoryEmoji[product.category]}
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Info */}
              <ScrollReveal delay={0.1}>
                <div>
                  <div className="mb-3" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#3b82f6", fontWeight: 700 }}>
                    {PRODUCT_CATEGORY_LABELS[product.category]}
                  </div>
                  <h1 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                    {product.name}
                  </h1>
                  <p className="mb-8" style={{ fontSize: "1rem", color: "#9a9a9a", lineHeight: 1.8 }}>
                    {product.shortDesc}
                  </p>

                  {/* Specs table */}
                  <h3 className="font-bold mb-4" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>
                    Thông số kỹ thuật
                  </h3>
                  <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid #232323" }}>
                    {product.specs.map((spec, i) => (
                      <div key={spec.label} className="flex items-center justify-between px-4 py-3" style={{ borderBottom: i < product.specs.length - 1 ? "1px solid #1c1c1c" : "none", background: i % 2 === 0 ? "#0d0d0d" : "#141414" }}>
                        <span style={{ fontSize: "0.82rem", color: "#9a9a9a" }}>{spec.label}</span>
                        <span className="font-semibold" style={{ fontSize: "0.82rem", color: "#f8f8f8" }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col gap-3">
                    <a href="#quote-form" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                      Yêu cầu báo giá ngay
                    </a>
                    <a href="tel:0989725507" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-base font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                      📞 Gọi ngay: 0989 725 507
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-pad" style={{ background: "#0d0d0d", paddingTop: "2rem" }}>
        <div className="container-pad max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-bold mb-6" style={{ fontSize: "1.5rem" }}>Mô tả chi tiết</h2>
            <div style={{ color: "#9a9a9a", lineHeight: 1.9, fontSize: "0.95rem", whiteSpace: "pre-line" }}>
              {product.description}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="section-pad">
        <div className="container-pad max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-black mb-3" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>
                Yêu cầu <span className="gradient-text">báo giá</span>
              </h2>
              <p style={{ color: "#9a9a9a" }}>Điền thông tin, chúng tôi liên hệ trong 24 giờ làm việc.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <QuoteForm productName={product.name} />
          </ScrollReveal>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-pad" style={{ background: "#0d0d0d" }}>
          <div className="container-pad">
            <ScrollReveal>
              <h2 className="font-bold mb-8" style={{ fontSize: "1.5rem" }}>Sản phẩm liên quan</h2>
            </ScrollReveal>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.related-grid{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
              <div className="grid gap-4 related-grid" style={{ gridTemplateColumns: "1fr" }}>
                {related.map((p) => (
                  <ScrollReveal key={p.id}>
                    <Link href={`/san-pham/${p.slug}`} className="block rounded-2xl overflow-hidden transition-all" style={{ background: "#141414", border: "1px solid #232323" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,.4)"; e.currentTarget.style.transform = "translateY(-2px)" }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#232323"; e.currentTarget.style.transform = "none" }}>
                      <div className="h-36 flex items-center justify-center text-5xl" style={{ background: "#0d0d0d", borderBottom: "1px solid #232323" }}>
                        {categoryEmoji[p.category]}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1" style={{ fontSize: "0.875rem" }}>{p.name}</h3>
                        <p style={{ fontSize: "0.78rem", color: "#60a5fa", fontWeight: 600 }}>Xem chi tiết →</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

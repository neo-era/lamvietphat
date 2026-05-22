import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, PROJECT_CATEGORY_LABELS } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const gradients = [
  "linear-gradient(135deg,#0b1d3a 0%,#1e3a8a 60%,#0ea5e9 100%)",
  "linear-gradient(135deg,#1a0533 0%,#3730a3 60%,#6366f1 100%)",
  "linear-gradient(135deg,#052e16 0%,#166534 60%,#22c55e 100%)",
  "linear-gradient(135deg,#0c1a3a 0%,#0369a1 60%,#06b6d4 100%)",
  "linear-gradient(135deg,#1c1505 0%,#92400e 60%,#f59e0b 100%)",
  "linear-gradient(135deg,#2d1b69 0%,#553c9a 60%,#a78bfa 100%)",
]
const emojis = ["💡", "🏖️", "☀️", "🎡", "🏙️", "🏗️"]

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Lavipco`,
    description: project.shortDesc,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === slug)
  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  const infoRows = [
    { label: "Chủ đầu tư / Khách hàng", value: project.client },
    { label: "Địa điểm", value: project.location },
    { label: "Tỉnh / Thành phố", value: project.province },
    { label: "Năm thực hiện", value: String(project.year) },
    { label: "Lĩnh vực", value: PROJECT_CATEGORY_LABELS[project.category] },
    ...(project.contractValue ? [{ label: "Giá trị hợp đồng", value: formatPrice(project.contractValue) }] : []),
  ]

  return (
    <>
      <style>{`.breadcrumb-link{color:#4a4a4a;transition:color .2s}.breadcrumb-link:hover{color:#9a9a9a}.call-btn{background:transparent;transition:background .2s}.call-btn:hover{background:#141414}.related-proj-card{transition:transform .3s,box-shadow .3s}.related-proj-card:hover{transform:scale(1.02);box-shadow:0 16px 40px rgba(0,0,0,.5)}`}</style>
      {/* Breadcrumb */}
      <div style={{ paddingTop: "5.5rem" }}>
        <div className="container-pad py-4">
          <nav className="flex items-center gap-2 flex-wrap" style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>
            <Link href="/" className="breadcrumb-link">Trang chủ</Link>
            <span>/</span>
            <Link href="/du-an" className="breadcrumb-link">Dự án</Link>
            <span>/</span>
            <span style={{ color: "#9a9a9a" }}>{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero image */}
      <section style={{ paddingBottom: "0" }}>
        <div className="container-pad">
          <div className="rounded-2xl overflow-hidden flex items-center justify-center relative" style={{ height: "400px", background: gradients[idx % gradients.length], border: "1px solid #232323" }}>
            <span style={{ fontSize: "8rem", opacity: 0.12 }}>{emojis[idx % emojis.length]}</span>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(7,7,7,.5) 0%,transparent 60%)" }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.6),transparent)" }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad" style={{ paddingTop: "3rem" }}>
        <div className="container-pad">
          <div className="grid gap-12" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.proj-detail{grid-template-columns:1fr 380px;gap:4rem;}}`}</style>
            <div className="grid proj-detail" style={{ gridTemplateColumns: "1fr" }}>

              {/* Left: description */}
              <ScrollReveal>
                <div>
                  <div className="mb-3" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#06b6d4", fontWeight: 700 }}>
                    {PROJECT_CATEGORY_LABELS[project.category]} · {project.province} · {project.year}
                  </div>
                  <h1 className="font-black mb-6" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                    {project.title}
                  </h1>
                  <p className="mb-8" style={{ fontSize: "1rem", color: "#9a9a9a", lineHeight: 1.9 }}>
                    {project.shortDesc}
                  </p>

                  <h2 className="font-bold mb-4" style={{ fontSize: "1.1rem" }}>Mô tả dự án</h2>
                  <div style={{ color: "#9a9a9a", lineHeight: 1.9, fontSize: "0.95rem", whiteSpace: "pre-line" }}>
                    {project.description}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: info card */}
              <ScrollReveal delay={0.1}>
                <div>
                  <div className="rounded-2xl overflow-hidden sticky" style={{ top: "6rem", background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
                      <p className="font-bold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Thông tin dự án</p>
                    </div>
                    {infoRows.map((row, i) => (
                      <div key={row.label} className="flex flex-col gap-0.5 px-5 py-3.5" style={{ borderBottom: i < infoRows.length - 1 ? "1px solid #1c1c1c" : "none" }}>
                        <span style={{ fontSize: "0.72rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.label}</span>
                        <span className="font-semibold" style={{ fontSize: "0.88rem", color: "#f8f8f8" }}>{row.value}</span>
                      </div>
                    ))}

                    {project.contractValue && (
                      <div className="px-5 py-4" style={{ borderTop: "1px solid #1c1c1c" }}>
                        <div className="flex items-center justify-between">
                          <span style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>Giá trị hợp đồng</span>
                          <span className="font-black" style={{ fontSize: "1.2rem", background: "linear-gradient(90deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            {formatPrice(project.contractValue)}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="px-5 pb-5" style={{ paddingTop: project.contractValue ? "0" : "1rem" }}>
                      <Link
                        href="/lien-he"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all"
                      >
                        Liên hệ tư vấn dự án tương tự →
                      </Link>
                      <a
                        href="tel:0989725507"
                        className="call-btn flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold mt-2"
                        style={{ color: "#9a9a9a", border: "1px solid #232323" }}
                      >
                        📞 0989 725 507
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section-pad" style={{ background: "#0d0d0d" }}>
          <div className="container-pad">
            <ScrollReveal>
              <h2 className="font-bold mb-8" style={{ fontSize: "1.5rem" }}>Dự án liên quan</h2>
            </ScrollReveal>
            <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.related-proj{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
              <div className="grid gap-5 related-proj" style={{ gridTemplateColumns: "1fr" }}>
                {related.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 0.08}>
                    <Link
                      href={`/du-an/${p.slug}`}
                      className="related-proj-card block relative rounded-2xl overflow-hidden"
                      style={{ height: "200px", border: "1px solid #232323" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradients[(projects.findIndex(pr => pr.id === p.id)) % gradients.length], fontSize: "3rem" }}>
                        <span style={{ opacity: 0.15 }}>{emojis[(projects.findIndex(pr => pr.id === p.id)) % emojis.length]}</span>
                      </div>
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(7,7,7,.9) 0%,rgba(7,7,7,.2) 60%,rgba(7,7,7,0) 100%)" }} />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="mb-1" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#06b6d4", fontWeight: 700 }}>{p.province} · {p.year}</p>
                        <p className="font-bold leading-snug" style={{ fontSize: "0.875rem" }}>{p.title}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad text-center">
          <ScrollReveal>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>
              Bắt đầu <span className="gradient-text">dự án của bạn?</span>
            </h2>
            <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", maxWidth: "420px", lineHeight: 1.8 }}>
              Liên hệ để được khảo sát miễn phí và nhận báo giá chi tiết trong 24 giờ.
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

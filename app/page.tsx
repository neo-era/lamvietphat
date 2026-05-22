import type { Metadata } from "next"
import Link from "next/link"
import { products, projects, services, stats, companyInfo } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Lavipco | Đèn đường LED & Hệ thống chiếu sáng đô thị",
  description:
    "Lavipco — Chuyên thi công, tư vấn, cung cấp đèn đường LED, hệ thống chiếu sáng đô thị và tín hiệu giao thông. 11+ năm kinh nghiệm, phạm vi toàn quốc.",
}

const featuredProducts = products.filter((p) => p.featured).slice(0, 4)
const featuredProjects = projects.filter((p) => p.featured).slice(0, 5)
const mainServices = services.slice(0, 6)

const clients = [
  { icon: "🏭", name: "Becamex IDCP" },
  { icon: "🏗️", name: "Ban QLDA Q.Tân Bình" },
  { icon: "🏖️", name: "BQLDA Phú Quốc" },
  { icon: "🏙️", name: "Cty CP Khang Thông" },
  { icon: "⚡", name: "Cty XD Rạng Đông" },
  { icon: "🌿", name: "Nông Nghiệp Thành Công" },
]

const projectGradients = [
  "linear-gradient(135deg,#0b1d3a 0%,#1e3a8a 60%,#0ea5e9 100%)",
  "linear-gradient(135deg,#1a0533 0%,#3730a3 60%,#6366f1 100%)",
  "linear-gradient(135deg,#052e16 0%,#166534 60%,#22c55e 100%)",
  "linear-gradient(135deg,#0c1a3a 0%,#0369a1 60%,#06b6d4 100%)",
  "linear-gradient(135deg,#1c1505 0%,#92400e 60%,#f59e0b 100%)",
]

const projectEmoji = ["💡", "🏖️", "☀️", "🎡", "🏙️"]

const bento = [
  { colSpan: "span 7", minH: "320px" },
  { colSpan: "span 5", minH: "320px" },
  { colSpan: "span 4", minH: "260px" },
  { colSpan: "span 4", minH: "260px" },
  { colSpan: "span 4", minH: "260px" },
]

const whyItems = [
  { num: "01", title: "Kinh nghiệm thực chiến", desc: "Hơn 11 năm thi công công trình điện quy mô lớn tại TP.HCM và toàn quốc — đội ngũ đã qua thực tế." },
  { num: "02", title: "Tiêu chuẩn kỹ thuật cao", desc: "Mọi công trình tuân thủ nghiêm ngặt QCVN, TCVN và tiêu chuẩn IEC quốc tế — an toàn tuyệt đối." },
  { num: "03", title: "Cam kết tiến độ", desc: "Lập kế hoạch chi tiết, giám sát chặt từng hạng mục, báo cáo minh bạch — bàn giao đúng hẹn." },
  { num: "04", title: "Hậu mãi 24/7", desc: "Hỗ trợ kỹ thuật 24/7, bảo hành công trình, bảo trì định kỳ — đồng hành lâu dài sau bàn giao." },
]

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        id="hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "100svh", paddingTop: "5.5rem", paddingBottom: "3rem" }}
      >
        {/* Glows */}
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.22) 0%,transparent 65%)", width: "1100px", height: "700px", top: "-20%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(6,182,212,.14) 0%,transparent 65%)", width: "700px", height: "600px", top: "20%", right: "-15%" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />

        <div className="container-pad w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Pill */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full" style={{ background: "rgba(59,130,246,.08)", border: "1px solid rgba(59,130,246,.22)", fontSize: "0.75rem", fontWeight: 600, color: "#60a5fa" }}>
                <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#06b6d4" }} />
                Giải pháp chiếu sáng thông minh — Phục vụ toàn quốc
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1
                className="font-black"
                style={{ fontSize: "clamp(2.8rem,8vw,5.6rem)", lineHeight: 1.06, letterSpacing: "-0.035em", marginBottom: "1.4rem" }}
              >
                Lavipco —{" "}
                <span className="gradient-text">Chiếu sáng đô thị</span>
                <br />tận tâm &amp; chuyên nghiệp
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: "#9a9a9a", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
                Tư vấn thiết kế, thi công lắp đặt hệ thống chiếu sáng đô thị, đèn tín hiệu giao thông và sản xuất thiết bị điện, chiếu sáng, tủ điều khiển thông minh.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex gap-3.5 justify-center flex-wrap mb-16">
                <Link href="/san-pham" className="inline-flex items-center gap-1.5 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all duration-200" style={{ transform: "none" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
                  Xem sản phẩm
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/lien-he" className="inline-flex items-center gap-1.5 px-7 py-3 rounded-xl text-base font-semibold transition-all duration-200" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = "#3a3a3a" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#2e2e2e" }}>
                  Tư vấn miễn phí
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats card */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="py-7 px-5 text-center"
                      style={{ borderRight: i % 2 === 0 ? "1px solid #232323" : "none", borderBottom: i < 2 ? "1px solid #232323" : "none" }}
                    >
                      <div className="font-black leading-none" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", background: "linear-gradient(135deg,#60a5fa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {s.value}
                      </div>
                      <span className="block mt-1.5" style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "500px", background: "linear-gradient(90deg,transparent,#3b82f6,transparent)", filter: "blur(1px)" }} />
      </section>

      {/* ═══ CLIENTS BAR ═══ */}
      <div style={{ padding: "2.75rem 0", borderTop: "1px solid #232323", borderBottom: "1px solid #232323", background: "#0d0d0d" }}>
        <div className="container-pad">
          <p className="text-center mb-6" style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.14em" }}>
            Chủ đầu tư &amp; nhà thầu chính tiêu biểu
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            {clients.map((c) => (
              <div key={c.name} className="flex items-center gap-2" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#4a4a4a" }}>
                <span className="w-6.5 h-6.5 rounded-md flex items-center justify-center text-sm" style={{ background: "#141414", border: "1px solid #2e2e2e" }}>
                  {c.icon}
                </span>
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section-pad" id="services">
        <div className="container-pad">
          <div className="grid gap-8 mb-14 pb-14" style={{ borderBottom: "1px solid #232323" }}>
            <div className="grid gap-8" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:900px){.srv-head{grid-template-columns:1fr 1fr;align-items:end;}}`}</style>
              <div className="grid gap-8 srv-head">
                <div>
                  <ScrollReveal><div className="tag-label mb-5">Dịch vụ</div></ScrollReveal>
                  <ScrollReveal delay={0.05}>
                    <h2 className="font-black" style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      Giải pháp kỹ thuật<br /><span className="gradient-text">toàn diện cho bạn</span>
                    </h2>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={0.1}>
                  <div>
                    <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.8, maxWidth: "420px", marginBottom: "1rem" }}>
                      Thành lập năm 2014, Lavipco tập trung vào chiếu sáng đô thị, tín hiệu giao thông và sản xuất thiết bị điện — với kỹ sư có hơn 10 năm kinh nghiệm thực chiến.
                    </p>
                    <Link href="/lien-he" className="inline-flex items-center gap-1.5" style={{ color: "#60a5fa", fontSize: "0.875rem", fontWeight: 600, transition: "gap 0.2s" }}>
                      Liên hệ tư vấn miễn phí →
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <ScrollRevealGroup className="grid gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid #232323", gridTemplateColumns: "1fr" }}>
            <style>{`
              @media(min-width:640px){.srv-grid{grid-template-columns:repeat(2,1fr)!important;}}
              @media(min-width:1024px){.srv-grid{grid-template-columns:repeat(3,1fr)!important;}}
              .srv-card:nth-child(3n){border-right:none;}
            `}</style>
            <div className="grid gap-0 srv-grid" style={{ gridTemplateColumns: "1fr", background: "#232323", border: "1px solid #232323", borderRadius: "16px", overflow: "hidden" }}>
              {mainServices.map((s, i) => (
                <ScrollRevealItem key={s.id}>
                  <div
                    className="srv-card relative overflow-hidden group cursor-pointer"
                    style={{ background: "#0d0d0d", padding: "2.5rem 2.25rem", borderRight: "1px solid #232323", borderBottom: "1px solid #232323", transition: "background 0.25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                    <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-xl" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", boxShadow: "0 4px 16px rgba(59,130,246,.3)" }}>
                      {["💡", "🚦", "✨", "📷", "🧠", "📦"][i]}
                    </div>
                    <h3 className="font-bold mb-2" style={{ fontSize: "0.975rem" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#9a9a9a", lineHeight: 1.75 }}>{s.description}</p>
                    <Link href="/linh-vuc" className="inline-flex items-center gap-1.5 mt-4 transition-all" style={{ color: "#60a5fa", fontSize: "0.78rem", fontWeight: 600 }}>
                      Tìm hiểu thêm →
                    </Link>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4">Sản phẩm</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Sản phẩm <span className="gradient-text">nổi bật</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ color: "#9a9a9a", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.8 }}>
                Đèn đường LED, trụ đèn, tủ điều khiển chất lượng cao — bảo hành 3 năm chính hãng.
              </p>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.prod-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.prod-grid{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
              <div className="grid gap-4 prod-grid" style={{ gridTemplateColumns: "1fr" }}>
                {featuredProducts.map((p) => (
                  <ScrollRevealItem key={p.id}>
                    <Link href={`/san-pham/${p.slug}`} className="block group rounded-2xl overflow-hidden transition-all duration-300" style={{ background: "#0d0d0d", border: "1px solid #232323" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,.4)"; e.currentTarget.style.transform = "translateY(-3px)" }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#232323"; e.currentTarget.style.transform = "none" }}>
                      <div className="h-44 flex items-center justify-center text-5xl relative" style={{ background: "#141414", borderBottom: "1px solid #232323" }}>
                        {p.category === "DEN_DUONG_LED" ? "💡" : p.category === "DEN_PHA_LED" ? "🔦" : p.category === "TU_DIEU_KHIEN" ? "🖥️" : "🏮"}
                      </div>
                      <div className="p-5">
                        <div className="mb-1" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#3b82f6", fontWeight: 700 }}>
                          {p.specs[0]?.value}
                        </div>
                        <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: "0.9rem" }}>{p.name}</h3>
                        <p className="line-clamp-2 mb-4" style={{ fontSize: "0.8rem", color: "#9a9a9a", lineHeight: 1.7 }}>{p.shortDesc}</p>
                        <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#60a5fa" }}>
                          Xem chi tiết →
                        </div>
                      </div>
                    </Link>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Link href="/san-pham" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e", fontSize: "0.875rem" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                Xem tất cả sản phẩm →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ FEATURED PROJECTS — BENTO ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4">Portfolio</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Công trình <span className="gradient-text">đã thực hiện</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ color: "#9a9a9a", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.8 }}>
                Mỗi dự án là một cam kết — chất lượng kỹ thuật, đúng tiến độ, an toàn tuyệt đối.
              </p>
            </ScrollReveal>
          </div>

          {/* Bento grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:700px){.bento-grid{grid-template-columns:repeat(12,1fr)!important;}.b1{grid-column:span 7}.b2{grid-column:span 5}.b3,.b4,.b5{grid-column:span 4}}`}</style>
            <div className="grid gap-4 bento-grid" style={{ gridTemplateColumns: "1fr" }}>
              {featuredProjects.map((pr, i) => (
                <ScrollReveal key={pr.id} delay={i * 0.05} className={["b1", "b2", "b3", "b4", "b5"][i]}>
                  <Link
                    href={`/du-an/${pr.slug}`}
                    className="block relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ minHeight: i < 2 ? "320px" : "260px", border: "1px solid #232323", transition: "transform 0.3s, box-shadow 0.3s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.018)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,.6)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-15" style={{ background: projectGradients[i], fontSize: "5.5rem" }}>
                      {projectEmoji[i]}
                    </div>
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(7,7,7,.88) 0%,rgba(7,7,7,.25) 50%,rgba(7,7,7,0) 100%)" }} />
                    <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.5),transparent)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-7" style={{ paddingBottom: "1.75rem" }}>
                      <p className="mb-1" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#06b6d4", fontWeight: 700 }}>
                        {pr.category.replace(/_/g, " ")} · {pr.province} · {pr.year}
                      </p>
                      <p className="font-bold mb-1" style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>{pr.title}</p>
                      {pr.contractValue && (
                        <p style={{ fontSize: "0.8rem", color: "#9a9a9a" }}>{pr.client} · {formatPrice(pr.contractValue)}</p>
                      )}
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/du-an" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e", fontSize: "0.875rem" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                Xem tất cả dự án →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ WHY LAVIPCO ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-8 mb-14 pb-14" style={{ borderBottom: "1px solid #232323" }}>
            <div className="grid gap-8" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:900px){.why-head{grid-template-columns:1fr 1fr;align-items:end;}}`}</style>
              <div className="grid gap-8 why-head" style={{ gridTemplateColumns: "1fr" }}>
                <div>
                  <ScrollReveal><div className="tag-label mb-5">Tại sao chọn chúng tôi</div></ScrollReveal>
                  <ScrollReveal delay={0.05}>
                    <h2 className="font-black" style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      Lavipco —<br /><span className="gradient-text">khác biệt cốt lõi</span>
                    </h2>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={0.1}>
                  <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.8, maxWidth: "420px" }}>
                    Không chỉ là nhà thầu thi công — chúng tôi là đối tác kỹ thuật dài hạn, đồng hành cùng doanh nghiệp bạn từ khâu thiết kế đến vận hành và bảo trì.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <ScrollRevealGroup>
            <div className="grid gap-0 rounded-2xl overflow-hidden" style={{ background: "#232323", border: "1px solid #232323", gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.why-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.why-grid{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
              <div className="grid gap-0 why-grid" style={{ gridTemplateColumns: "1fr" }}>
                {whyItems.map((w) => (
                  <ScrollRevealItem key={w.num}>
                    <div
                      className="p-8 cursor-default transition-all"
                      style={{ background: "#0d0d0d", borderRight: "1px solid #232323", borderBottom: "1px solid #232323" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
                    >
                      <span className="block mb-4" style={{ fontSize: "0.68rem", color: "#3b82f6", fontWeight: 700, letterSpacing: "0.1em" }}>{w.num}</span>
                      <h3 className="font-bold mb-2" style={{ fontSize: "0.975rem" }}>{w.title}</h3>
                      <p style={{ fontSize: "0.845rem", color: "#9a9a9a", lineHeight: 1.75 }}>{w.desc}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ QUOTE / DIRECTOR MESSAGE ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <ScrollReveal>
            <div className="relative rounded-3xl text-center overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #2e2e2e", padding: "clamp(3rem,6vw,5rem)", boxShadow: "0 0 80px rgba(59,130,246,.06)" }}>
              <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
              <div className="absolute bottom-0 left-[25%] right-[25%] h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.3),transparent)" }} />
              <div className="mb-6 text-4xl opacity-30">❝</div>
              <p className="font-black mx-auto mb-8" style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)", lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "800px" }}>
                "Sự hài lòng của Đối tác<br />là <span className="gradient-text">hạnh phúc của Chúng tôi</span>."
              </p>
              <p style={{ fontSize: "0.875rem", color: "#4a4a4a" }}>
                <strong style={{ color: "#9a9a9a" }}>Nguyễn Kim Thúy Quỳnh</strong> — Giám đốc, Lavipco · Thành lập 22/05/2014
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ CTA SECTION ═══ */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(59,130,246,.07) 0%,transparent 70%)" }} />
        <div className="container-pad relative">
          <ScrollReveal>
            <div className="relative rounded-3xl text-center overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", padding: "clamp(3rem,7vw,5.5rem) clamp(1.5rem,5vw,4.5rem)" }}>
              <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
              <div className="tag-label mb-6 justify-center">Bắt đầu hợp tác</div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Dự án của bạn<br />xứng đáng với<br /><span className="gradient-text">đội ngũ tốt nhất</span>
              </h2>
              <p className="mx-auto mb-10" style={{ color: "#9a9a9a", maxWidth: "500px", fontSize: "0.975rem", lineHeight: 1.8 }}>
                Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong vòng 24 giờ làm việc.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                  📞 &nbsp;{companyInfo.phone}
                </a>
                <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                  Gửi yêu cầu báo giá
                </Link>
              </div>
              <div className="flex gap-10 justify-center flex-wrap mt-10 pt-10" style={{ borderTop: "1px solid #232323" }}>
                {[
                  { icon: "📍", text: companyInfo.address },
                  { icon: "✉️", text: companyInfo.email },
                  { icon: "🕐", text: "Thứ 2 – Thứ 7 · 7:00–17:30 · Hotline 24/7" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-2.5 text-left" style={{ fontSize: "0.85rem", color: "#9a9a9a" }}>
                    <div className="w-8.5 h-8.5 rounded-lg flex items-center justify-center shrink-0 text-sm" style={{ background: "#141414", border: "1px solid #2e2e2e" }}>{icon}</div>
                    <div>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <div className="text-center relative overflow-hidden" style={{ padding: "clamp(7rem,14vw,12rem) 0 clamp(5rem,10vw,8rem)", borderTop: "1px solid #232323" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center,rgba(59,130,246,.08) 0%,transparent 70%)" }} />
        <div className="container-pad relative">
          <ScrollReveal>
            <h2 className="font-black mb-6" style={{ fontSize: "clamp(3rem,9vw,7rem)", letterSpacing: "-0.045em", lineHeight: 1.02 }}>
              Chiếu sáng đô thị<br /><span className="gradient-text">Tận tâm. Chính trực.</span><br />Sẵn sàng phục vụ.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mb-10" style={{ color: "#9a9a9a", fontSize: "1.05rem" }}>Tư vấn miễn phí · Báo giá trong 24h · Thi công toàn quốc</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                Liên hệ ngay →
              </Link>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                📞 {companyInfo.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}

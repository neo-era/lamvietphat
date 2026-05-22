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

const whyItems = [
  { num: "01", title: "Kinh nghiệm thực chiến", desc: "Hơn 11 năm thi công công trình điện quy mô lớn tại TP.HCM và toàn quốc — đội ngũ đã qua thực tế." },
  { num: "02", title: "Tiêu chuẩn kỹ thuật cao", desc: "Mọi công trình tuân thủ nghiêm ngặt QCVN, TCVN và tiêu chuẩn IEC quốc tế — an toàn tuyệt đối." },
  { num: "03", title: "Cam kết tiến độ", desc: "Lập kế hoạch chi tiết, giám sát chặt từng hạng mục, báo cáo minh bạch — bàn giao đúng hẹn." },
  { num: "04", title: "Hậu mãi 24/7", desc: "Hỗ trợ kỹ thuật 24/7, bảo hành công trình, bảo trì định kỳ — đồng hành lâu dài sau bàn giao." },
]

const aboutRows = [
  { icon: "🏢", label: "Tên đầy đủ", value: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát" },
  { icon: "📅", label: "Thành lập", value: "22/05/2014" },
  { icon: "📍", label: "Địa chỉ", value: "63/23A, Liên Khu 16-18, P. Bình Trị Đông, TP.HCM" },
  { icon: "👔", label: "Giám đốc", value: "Nguyễn Kim Thúy Quỳnh" },
  { icon: "🔏", label: "MST", value: "1101748509" },
  { icon: "⚡", label: "Lĩnh vực", value: "Xây lắp, sản xuất thiết bị chiếu sáng" },
  { icon: "🌐", label: "Phạm vi", value: "Toàn quốc" },
]

const projectsHighlight = [
  { icon: "💡", title: "Chiếu sáng Mỹ Phước 3 — Bình Dương", badge: "✓ 3,2 tỷ · 2018" },
  { icon: "🏖️", title: "Mở rộng HTCS Phú Quốc — Kiên Giang", badge: "✓ 2,47 tỷ · 2017" },
  { icon: "🏙️", title: "Chiếu sáng đường Tân Bình, TP.HCM", badge: "✓ 2,37 tỷ · 2023" },
  { icon: "☀️", title: "Solar 557kWp — Hóc Môn, TP.HCM", badge: "✓ 1,54 tỷ · 2019" },
  { icon: "🎡", title: "Happyland Khu phức hợp — Long An", badge: "✓ 1,6 tỷ · 2019" },
]

const certificates = [
  { icon: "📋", name: "Giấy phép kinh doanh", desc: "MST 1101748509 — Sở KH&ĐT TP.HCM cấp · Hiệu lực vĩnh viễn" },
  { icon: "🏗️", name: "Chứng chỉ năng lực xây dựng", desc: "Thi công công trình điện dân dụng, công nghiệp & hạ tầng kỹ thuật" },
  { icon: "⚡", name: "Chứng chỉ hành nghề điện", desc: "Thiết kế, giám sát & thi công hệ thống điện, chiếu sáng & tín hiệu" },
  { icon: "☀️", name: "Nhà thầu điện mặt trời", desc: "Lắp đặt hệ thống solar hòa lưới điện lực quốc gia — đã triển khai hơn 1.200 kWp" },
]

const partners = [
  { icon: "🏭", name: "Becamex IDCP" },
  { icon: "🏗️", name: "Ban QLDA Q.Tân Bình" },
  { icon: "🏖️", name: "BQLDA Phú Quốc" },
  { icon: "🏙️", name: "Cty CP Khang Thông" },
  { icon: "⚡", name: "Cty XD Rạng Đông" },
  { icon: "🌿", name: "Nông Nghiệp Thành Công" },
  { icon: "🔧", name: "Cty XD-CN-VT Miền Nam" },
]

const bigStats = [
  { value: "11+", label: "Năm hoạt động", sub: "kể từ khi thành lập 2014" },
  { value: "50+", label: "Công trình lớn", sub: "đã hoàn thành trên toàn quốc" },
  { value: "15+", label: "Kỹ sư, kỹ thuật viên", sub: "và công nhân lành nghề" },
  { value: "10+", label: "Tỉnh thành", sub: "đã thi công" },
]

const processSteps = [
  { num: "01", title: "Tiếp nhận & Khảo sát", desc: "Khảo sát thực địa, đánh giá hiện trạng", tag: "Miễn phí", tagClass: "done" },
  { num: "02", title: "Thiết kế & Dự toán", desc: "Bản vẽ kỹ thuật, báo giá chi tiết", tag: "3–5 ngày", tagClass: "act" },
  { num: "03", title: "Thi công & Giám sát", desc: "Triển khai theo thiết kế, báo cáo định kỳ", tag: "Theo HĐ", tagClass: "act" },
  { num: "04", title: "Nghiệm thu & Bàn giao", desc: "Kiểm tra, thử nghiệm, hoàn thiện hồ sơ", tag: "Sau thi công", tagClass: "wait" },
  { num: "05", title: "Bảo hành & Hỗ trợ", desc: "Bảo hành công trình + hỗ trợ 24/7", tag: "Dài hạn", tagClass: "done" },
]

const tagStyles: Record<string, { bg: string; color: string }> = {
  done: { bg: "rgba(22,163,74,.15)", color: "#4ade80" },
  act: { bg: "rgba(59,130,246,.15)", color: "#60a5fa" },
  wait: { bg: "rgba(255,255,255,.05)", color: "#4a4a4a" },
}

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative overflow-hidden flex items-center" style={{ minHeight: "100svh", paddingTop: "5.5rem", paddingBottom: "3rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.22) 0%,transparent 65%)", width: "1100px", height: "700px", top: "-20%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(6,182,212,.14) 0%,transparent 65%)", width: "700px", height: "600px", top: "20%", right: "-15%" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />

        <div className="container-pad w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full" style={{ background: "rgba(59,130,246,.08)", border: "1px solid rgba(59,130,246,.22)", fontSize: "0.75rem", fontWeight: 600, color: "#60a5fa" }}>
                <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#06b6d4" }} />
                Giải pháp chiếu sáng thông minh — Phục vụ toàn quốc
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="font-black" style={{ fontSize: "clamp(2.8rem,8vw,5.6rem)", lineHeight: 1.06, letterSpacing: "-0.035em", marginBottom: "1.4rem" }}>
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
                <Link href="/san-pham" className="hero-btn-up inline-flex items-center gap-1.5 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all duration-200">
                  Xem sản phẩm
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/lien-he" className="btn-outline inline-flex items-center gap-1.5 px-7 py-3 rounded-xl text-base font-semibold">
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
                    <div key={i} className="py-7 px-5 text-center" style={{ borderRight: i % 2 === 0 ? "1px solid #232323" : "none", borderBottom: i < 2 ? "1px solid #232323" : "none" }}>
                      <div className="font-black leading-none" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", background: "linear-gradient(135deg,#60a5fa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {s.value}
                      </div>
                      <span className="block mt-1.5" style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.09em" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
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
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-sm" style={{ background: "#141414", border: "1px solid #2e2e2e" }}>{c.icon}</span>
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ ABOUT — HỒ SƠ CÔNG TY ═══ */}
      <section className="section-pad" id="about">
        <div className="container-pad">
          <style>{`@media(min-width:900px){.about-hl{grid-template-columns:1fr 1fr!important;gap:5rem!important;align-items:center}}`}</style>
          <div className="grid gap-12 about-hl" style={{ gridTemplateColumns: "1fr" }}>
            <ScrollReveal>
              <div className="tag-label mb-5">Về chúng tôi</div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Công ty TNHH<br /><span className="gradient-text">Kỹ Nghệ Lâm Việt Phát</span>
              </h2>
              <p className="mb-6" style={{ color: "#9a9a9a", fontSize: "0.975rem", lineHeight: 1.8 }}>
                Thành lập năm 2014, Lavipco là đơn vị chuyên tư vấn, thiết kế và thi công các công trình điện — chiếu sáng đô thị, đèn tín hiệu giao thông, điện năng lượng mặt trời — tại TP.HCM và nhiều tỉnh thành trên cả nước. Cung cấp giải pháp chiếu sáng thông minh.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7 list-none">
                {["Hơn 11 năm kinh nghiệm thi công điện quy mô lớn.", "15+ kỹ sư, kỹ thuật viên và công nhân lành nghề."].map((t) => (
                  <li key={t} className="flex items-start gap-2.5" style={{ fontSize: "0.875rem", color: "#9a9a9a" }}>
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full font-bold" style={{ background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.25)", color: "#60a5fa", fontSize: "0.65rem" }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="#chungchi" className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold">Xem chứng chỉ &amp; năng lực</Link>
                <Link href="/lien-he" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">Liên hệ ngay →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", minHeight: "320px" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-4" style={{ borderBottom: "1px solid #232323" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                    <span className="ml-2" style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>Hồ sơ công ty — Lavipco</span>
                  </div>
                  {aboutRows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg" style={{ background: "#141414", border: "1px solid #2e2e2e", fontSize: "0.78rem" }}>
                      <span style={{ color: "#9a9a9a" }}>{r.icon} {r.label}</span>
                      <span className="text-right shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)", color: "#60a5fa", fontSize: "0.7rem" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

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
                    <Link href="/lien-he" className="inline-flex items-center gap-1.5" style={{ color: "#60a5fa", fontSize: "0.875rem", fontWeight: 600 }}>
                      Liên hệ tư vấn miễn phí →
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <ScrollRevealGroup className="grid gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid #232323", gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.srv-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.srv-grid{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
            <div className="grid gap-0 srv-grid" style={{ gridTemplateColumns: "1fr", background: "#232323", border: "1px solid #232323", borderRadius: "16px", overflow: "hidden" }}>
              {mainServices.map((s, i) => (
                <ScrollRevealItem key={s.id}>
                  <div className="card-hover srv-card relative overflow-hidden group cursor-pointer" style={{ background: "#0d0d0d", padding: "2.5rem 2.25rem", borderRight: "1px solid #232323", borderBottom: "1px solid #232323" }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                    <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-xl" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", boxShadow: "0 4px 16px rgba(59,130,246,.3)" }}>
                      {["💡", "🚦", "✨", "📷", "🧠", "📦"][i]}
                    </div>
                    <h3 className="font-bold mb-2" style={{ fontSize: "0.975rem" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#9a9a9a", lineHeight: 1.75 }}>{s.description}</p>
                    <Link href="/linh-vuc" className="inline-flex items-center gap-1.5 mt-4" style={{ color: "#60a5fa", fontSize: "0.78rem", fontWeight: 600 }}>
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
                    <Link href={`/san-pham/${p.slug}`} className="prod-card-hover block group rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                      <div className="h-44 flex items-center justify-center text-5xl relative" style={{ background: "#141414", borderBottom: "1px solid #232323" }}>
                        {p.category === "DEN_DUONG_LED" ? "💡" : p.category === "DEN_PHA_LED" ? "🔦" : p.category === "TU_DIEU_KHIEN" ? "🖥️" : "🏮"}
                      </div>
                      <div className="p-5">
                        <div className="mb-1" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#3b82f6", fontWeight: 700 }}>{p.specs[0]?.value}</div>
                        <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: "0.9rem" }}>{p.name}</h3>
                        <p className="line-clamp-2 mb-4" style={{ fontSize: "0.8rem", color: "#9a9a9a", lineHeight: 1.7 }}>{p.shortDesc}</p>
                        <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#60a5fa" }}>Xem chi tiết →</div>
                      </div>
                    </Link>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Link href="/san-pham" className="call-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold" style={{ color: "#f8f8f8", border: "1px solid #2e2e2e", fontSize: "0.875rem" }}>
                Xem tất cả sản phẩm →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ PROJECTS HIGHLIGHT — TEXT + LIST CARD ═══ */}
      <section className="section-pad" id="projects">
        <div className="container-pad">
          <style>{`@media(min-width:900px){.proj-hl{grid-template-columns:1fr 1fr!important;gap:5rem!important;align-items:center}}`}</style>
          <div className="grid gap-12 proj-hl" style={{ gridTemplateColumns: "1fr" }}>
            <ScrollReveal>
              <div className="tag-label mb-5">Dự án tiêu biểu</div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Những công trình<br /><span className="gradient-text">chúng tôi tự hào</span>
              </h2>
              <p className="mb-6" style={{ color: "#9a9a9a", fontSize: "0.975rem", lineHeight: 1.8 }}>
                Từ 2014 đến nay, Lavipco đã hoàn thành hơn 30 công trình lớn trải dài từ TP.HCM đến Bình Dương, Long An, Kiên Giang, Bến Tre, Quảng Nam — tổng giá trị thi công hàng chục tỷ đồng.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7 list-none">
                {[
                  "Chiếu sáng đường phố, khu công nghiệp & khu đô thị mới",
                  "Điện năng lượng mặt trời hòa lưới công suất lớn",
                  "Đèn tín hiệu giao thông tại nhiều tỉnh thành",
                  "Hồ sơ nghiệm thu đầy đủ, bảo hành theo hợp đồng",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5" style={{ fontSize: "0.875rem", color: "#9a9a9a" }}>
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full font-bold" style={{ background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.25)", color: "#60a5fa", fontSize: "0.65rem" }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/du-an" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">Xem toàn bộ dự án →</Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", minHeight: "320px" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-4" style={{ borderBottom: "1px solid #232323" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                    <span className="ml-2" style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>Dự án tiêu biểu — 2024</span>
                  </div>
                  {projectsHighlight.map((p) => (
                    <div key={p.title} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg" style={{ background: "#141414", border: "1px solid #2e2e2e", fontSize: "0.78rem" }}>
                      <span style={{ color: "#9a9a9a" }}>{p.icon} {p.title}</span>
                      <span className="text-right shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)", color: "#60a5fa", fontSize: "0.7rem" }}>{p.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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

          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:700px){.bento-grid{grid-template-columns:repeat(12,1fr)!important;}.b1{grid-column:span 7}.b2{grid-column:span 5}.b3,.b4,.b5{grid-column:span 4}}`}</style>
            <div className="grid gap-4 bento-grid" style={{ gridTemplateColumns: "1fr" }}>
              {featuredProjects.map((pr, i) => (
                <ScrollReveal key={pr.id} delay={i * 0.05} className={["b1", "b2", "b3", "b4", "b5"][i]}>
                  <Link href={`/du-an/${pr.slug}`} className="proj-card-hover block relative rounded-2xl overflow-hidden cursor-pointer" style={{ minHeight: i < 2 ? "320px" : "260px", border: "1px solid #232323" }}>
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
              <Link href="/du-an" className="call-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold" style={{ color: "#f8f8f8", border: "1px solid #2e2e2e", fontSize: "0.875rem" }}>
                Xem tất cả dự án →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ CERTIFICATES + PARTNERS ═══ */}
      <section className="section-pad" id="chungchi">
        <div className="container-pad">
          <style>{`@media(min-width:900px){.cert-head{grid-template-columns:1fr 1fr!important;align-items:end}}@media(min-width:640px){.cert-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          <div className="grid gap-8 mb-14 pb-14 cert-head" style={{ gridTemplateColumns: "1fr", borderBottom: "1px solid #232323" }}>
            <div>
              <ScrollReveal><div className="tag-label mb-5">Năng lực pháp lý</div></ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="font-black" style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  Chứng chỉ &amp;<br /><span className="gradient-text">Đối tác tiêu biểu</span>
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.8, maxWidth: "420px" }}>
                Lavipco hoạt động với đầy đủ giấy phép kinh doanh, chứng chỉ năng lực xây dựng và chứng chỉ hành nghề theo quy định của Bộ Xây dựng — đảm bảo tính pháp lý tuyệt đối cho mọi công trình.
              </p>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup>
            <div className="grid gap-4 cert-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              {certificates.map((c) => (
                <ScrollRevealItem key={c.name}>
                  <div className="cert-card-hover relative rounded-2xl text-center overflow-hidden p-7 px-5 transition-all" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                    <div className="text-3xl mb-3.5">{c.icon}</div>
                    <div className="font-bold mb-1.5 leading-snug" style={{ fontSize: "0.875rem" }}>{c.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#4a4a4a", lineHeight: 1.65 }}>{c.desc}</div>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealGroup>

          <ScrollReveal delay={0.2}>
            <div className="flex gap-3 flex-wrap justify-center items-center mt-12 pt-12" style={{ borderTop: "1px solid #232323" }}>
              <p className="w-full text-center mb-2" style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                Chủ đầu tư &amp; nhà thầu chính đã hợp tác
              </p>
              {partners.map((p) => (
                <div key={p.name} className="partner-hover flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4a4a4a", background: "#0d0d0d", border: "1px solid #232323" }}>
                  <span className="text-base">{p.icon}</span>{p.name}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ BIG STATS ═══ */}
      <section className="section-pad" id="nang-luc">
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4">Năng lực</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Con số nói lên<br /><span className="gradient-text">tất cả</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup>
            <style>{`@media(min-width:768px){.bigstats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-12 bigstats-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              {bigStats.map((s) => (
                <ScrollRevealItem key={s.value}>
                  <div className="text-center">
                    <span className="block font-black leading-none" style={{ fontSize: "clamp(3rem,6.5vw,5rem)", background: "linear-gradient(135deg,#60a5fa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 20px rgba(96,165,250,.3))" }}>
                      {s.value}
                    </span>
                    <div className="mx-auto my-3 h-0.5 w-10" style={{ background: "linear-gradient(90deg,#1d4ed8,#06b6d4)" }} />
                    <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.5 }}>
                      {s.label}<br />{s.sub}
                    </p>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealGroup>
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
                    <div className="why-card p-8 cursor-default" style={{ background: "#0d0d0d", borderRight: "1px solid #232323", borderBottom: "1px solid #232323" }}>
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

      {/* ═══ PROCESS — 5 STEPS ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <style>{`@media(min-width:900px){.proc-hl{grid-template-columns:1fr 1fr!important;gap:5rem!important;align-items:center}}`}</style>
          <div className="grid gap-12 proc-hl" style={{ gridTemplateColumns: "1fr" }}>
            <ScrollReveal>
              <div className="tag-label mb-5">Quy trình làm việc</div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Từ ý tưởng đến<br /><span className="gradient-text">công trình hoàn chỉnh</span>
              </h2>
              <p className="mb-6" style={{ color: "#9a9a9a", fontSize: "0.975rem", lineHeight: 1.8 }}>
                Quy trình 5 bước minh bạch, chuyên nghiệp — khách hàng luôn nắm rõ tiến độ và chủ động trong từng quyết định.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7 list-none">
                {[
                  "Khảo sát thực địa miễn phí, không ràng buộc",
                  "Báo giá chi tiết, minh bạch từng hạng mục",
                  "Cập nhật tiến độ thi công hàng tuần",
                  "Bàn giao hồ sơ pháp lý đầy đủ, đúng quy định",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5" style={{ fontSize: "0.875rem", color: "#9a9a9a" }}>
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full font-bold" style={{ background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.25)", color: "#60a5fa", fontSize: "0.65rem" }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/lien-he" className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold">Bắt đầu dự án của bạn</Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                <div className="flex flex-col">
                  {processSteps.map((s, i) => (
                    <div key={s.num} className="proc-row-hover flex items-center gap-4 px-6 py-4 transition-all" style={{ borderBottom: i < processSteps.length - 1 ? "1px solid #232323" : "none" }}>
                      <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-extrabold text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", fontSize: "0.72rem" }}>
                        {s.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold leading-tight" style={{ fontSize: "0.85rem" }}>{s.title}</h4>
                        <p style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>{s.desc}</p>
                      </div>
                      <span className="ml-auto shrink-0 px-2.5 py-1 rounded-full font-bold uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.06em", background: tagStyles[s.tagClass].bg, color: tagStyles[s.tagClass].color }}>
                        {s.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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
                <Link href="/lien-he" className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold">
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
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm" style={{ background: "#141414", border: "1px solid #2e2e2e" }}>{icon}</div>
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
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold">
                📞 {companyInfo.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}

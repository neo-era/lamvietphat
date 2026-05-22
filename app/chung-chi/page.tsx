import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Chứng chỉ & Năng lực pháp lý — Lavipco",
  description:
    "Chứng chỉ năng lực xây dựng, chứng chỉ hành nghề điện, giấy phép kinh doanh của Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco).",
}

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

const capabilities = [
  { label: "Năm hoạt động", value: "11+", sub: "kể từ 2014" },
  { label: "Công trình", value: "50+", sub: "đã hoàn thành" },
  { label: "Kỹ sư & kỹ thuật", value: "15+", sub: "lành nghề" },
  { label: "Tỉnh thành", value: "10+", sub: "đã thi công" },
]

export default function ChungChiPage() {
  return (
    <>
      <section className="section-pad relative overflow-hidden" style={{ paddingTop: "9rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-25%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="tag-label mb-5">Năng lực pháp lý</div>
            <h1 className="font-black mb-5" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
              Chứng chỉ &amp;<br /><span className="gradient-text">Năng lực Lavipco</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="max-w-2xl" style={{ color: "#9a9a9a", fontSize: "1.05rem", lineHeight: 1.8 }}>
              Lavipco hoạt động với đầy đủ giấy phép kinh doanh, chứng chỉ năng lực xây dựng và chứng chỉ hành nghề theo quy định của Bộ Xây dựng — đảm bảo tính pháp lý tuyệt đối cho mọi công trình.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Certificates grid */}
      <section className="section-pad">
        <div className="container-pad">
          <ScrollRevealGroup>
            <style>{`@media(min-width:640px){.cert-page-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.cert-page-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-4 cert-page-grid" style={{ gridTemplateColumns: "1fr" }}>
              {certificates.map((c) => (
                <ScrollRevealItem key={c.name}>
                  <div className="cert-card-hover relative rounded-2xl text-center overflow-hidden p-8 transition-all" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                    <div className="text-4xl mb-4">{c.icon}</div>
                    <div className="font-bold mb-2 leading-snug" style={{ fontSize: "1rem" }}>{c.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#4a4a4a", lineHeight: 1.65 }}>{c.desc}</div>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Big capabilities */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4">Năng lực thực thi</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Con số nói lên<br /><span className="gradient-text">tất cả</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <style>{`@media(min-width:768px){.cap-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-12 cap-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              {capabilities.map((s) => (
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

      {/* Partners */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-10">
            <ScrollReveal><div className="tag-label mb-4">Đối tác tiêu biểu</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Chủ đầu tư &amp; <span className="gradient-text">nhà thầu đã hợp tác</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <div className="flex gap-3 flex-wrap justify-center items-center">
              {partners.map((p) => (
                <div key={p.name} className="partner-hover flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4a4a4a", background: "#0d0d0d", border: "1px solid #232323" }}>
                  <span className="text-base">{p.icon}</span>{p.name}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <ScrollReveal>
            <div className="relative rounded-3xl text-center overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", padding: "clamp(2.5rem,6vw,4.5rem)" }}>
              <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Cần hồ sơ năng lực <span className="gradient-text">chi tiết?</span>
              </h2>
              <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", fontSize: "0.975rem", lineHeight: 1.8, maxWidth: "520px" }}>
                Lavipco sẵn sàng cung cấp hồ sơ năng lực bản đầy đủ (PDF) cùng các chứng chỉ liên quan cho dự án của bạn.
              </p>
              <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                Yêu cầu hồ sơ năng lực →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

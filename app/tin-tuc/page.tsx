import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Tin tức & Cập nhật — Lavipco",
  description:
    "Tin tức ngành chiếu sáng đô thị, dự án mới, công nghệ LED và Smart Lighting từ Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco).",
}

const topics = [
  { icon: "💡", title: "Chiếu sáng đô thị", desc: "Xu hướng thiết kế chiếu sáng đường phố & cảnh quan hiện đại tại Việt Nam." },
  { icon: "☀️", title: "Điện mặt trời", desc: "Tin tức về solar hòa lưới — hiệu suất, chính sách & dự án mới." },
  { icon: "🚦", title: "Tín hiệu giao thông", desc: "Cập nhật tiêu chuẩn, công nghệ đèn LED cho hệ thống tín hiệu giao thông." },
  { icon: "🏗️", title: "Dự án Lavipco", desc: "Tiến độ và bàn giao các công trình mới của Lavipco trên toàn quốc." },
]

export default function TinTucPage() {
  return (
    <>
      <section className="section-pad relative overflow-hidden" style={{ paddingTop: "9rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-25%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="container-pad relative z-10 text-center">
          <ScrollReveal>
            <div className="tag-label mb-5 justify-center">Tin tức &amp; Cập nhật</div>
            <h1 className="font-black mb-5 mx-auto" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.06, maxWidth: "900px" }}>
              Tin tức &amp; Bài viết<br /><span className="gradient-text">đang được cập nhật</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto" style={{ color: "#9a9a9a", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "640px" }}>
              Chúng tôi đang chuẩn bị các bài viết về chiếu sáng đô thị, điện mặt trời, công nghệ LED và Smart Lighting. Quay lại sớm để theo dõi những cập nhật mới nhất.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Topics preview */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-12">
            <ScrollReveal><div className="tag-label mb-4">Chủ đề sắp ra mắt</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Các chủ đề <span className="gradient-text">chúng tôi sẽ chia sẻ</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <style>{`@media(min-width:640px){.tin-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.tin-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-4 tin-grid" style={{ gridTemplateColumns: "1fr" }}>
              {topics.map((t) => (
                <ScrollRevealItem key={t.title}>
                  <div className="cert-card-hover relative rounded-2xl overflow-hidden p-8 transition-all" style={{ background: "#0d0d0d", border: "1px solid #232323", minHeight: "200px" }}>
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                    <div className="text-4xl mb-4">{t.icon}</div>
                    <h3 className="font-bold mb-2" style={{ fontSize: "1rem" }}>{t.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#9a9a9a", lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <ScrollReveal>
            <div className="relative rounded-3xl text-center overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", padding: "clamp(2.5rem,6vw,4.5rem)" }}>
              <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
              <div className="text-5xl mb-5 opacity-40">📰</div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                Cần tư vấn <span className="gradient-text">ngay bây giờ?</span>
              </h2>
              <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", fontSize: "0.975rem", lineHeight: 1.8, maxWidth: "520px" }}>
                Đội ngũ kỹ sư Lavipco sẵn sàng tư vấn miễn phí về các giải pháp chiếu sáng và điện cho dự án của bạn — bất kỳ lúc nào.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                  Liên hệ tư vấn →
                </Link>
                <Link href="/du-an" className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold">
                  Xem dự án đã thực hiện
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

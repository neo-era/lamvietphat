import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/data"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Lĩnh vực thi công & Dịch vụ — Lavipco",
  description: "Lavipco cung cấp dịch vụ xây lắp, tư vấn và sản xuất trong lĩnh vực chiếu sáng đô thị, đèn tín hiệu giao thông, thiết bị điện tại Việt Nam.",
}

const thiCong = services.filter((s) => s.category === "thi-cong")
const tuVan = services.filter((s) => s.category === "tu-van")
const sanXuat = services.filter((s) => s.category === "san-xuat")

const steps = [
  { num: "01", title: "Tiếp nhận & Khảo sát", desc: "Tiếp nhận yêu cầu, khảo sát thực địa, đánh giá hiện trạng và nhu cầu chiếu sáng.", tag: "Miễn phí" },
  { num: "02", title: "Thiết kế & Dự toán", desc: "Lập bản vẽ thiết kế kỹ thuật, tính toán quang học, lập dự toán chi tiết minh bạch.", tag: "3–5 ngày" },
  { num: "03", title: "Thi công & Giám sát", desc: "Triển khai thi công theo đúng thiết kế, giám sát chặt chẽ và báo cáo tiến độ định kỳ.", tag: "Theo HĐ" },
  { num: "04", title: "Nghiệm thu & Bàn giao", desc: "Kiểm tra, thử nghiệm toàn bộ hệ thống, hoàn thiện hồ sơ pháp lý và bàn giao công trình.", tag: "Sau thi công" },
  { num: "05", title: "Bảo hành & Hỗ trợ", desc: "Bảo hành công trình theo hợp đồng, hỗ trợ kỹ thuật 24/7, bảo trì định kỳ.", tag: "Dài hạn" },
]

const equipment = [
  { name: "Xe cẩu gàu nâng người 12m", detail: "Phục vụ lắp đèn đường, trụ đèn cao" },
  { name: "Xe tải > 3,5 tấn", detail: "Vận chuyển vật liệu, thiết bị" },
  { name: "Xe đào 0.1m³", detail: "Đào mương cáp ngầm" },
  { name: "Máy trộn bê tông", detail: "Đổ móng trụ đèn" },
  { name: "Máy đo điện trở đất", detail: "Kiểm tra nối đất an toàn" },
  { name: "Máy đo cường độ sáng", detail: "Kiểm tra chất lượng chiếu sáng" },
  { name: "Kềm ép thủy lực (Đức)", detail: "Ép đầu cáp điện chất lượng cao" },
  { name: "Ampe kềm (Nhật)", detail: "Đo dòng điện không cần ngắt" },
]

const icons: Record<string, string> = {
  "thi-cong": ["💡", "🚦", "✨", "📷"][0],
}
const categoryIcons: Record<string, string[]> = {
  "thi-cong": ["💡", "🚦", "✨", "📷"],
  "tu-van": ["📐", "🧠", "📋"],
  "san-xuat": ["📦", "🖥️", "🏛️"],
}

export default function LinhVucPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "55vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto">
          <ScrollReveal><div className="tag-label mb-6 justify-center">Năng lực</div></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-black mb-6" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              Lĩnh vực thi công<br />&amp; <span className="gradient-text">Dịch vụ</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "1.1rem", color: "#9a9a9a", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              Ba mảng chuyên môn cốt lõi: Xây lắp thi công — Tư vấn giám sát — Sản xuất thương mại.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* MẢNG 1: XÂY LẮP THI CÔNG */}
      <section className="section-pad">
        <div className="container-pad">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 pb-8" style={{ borderBottom: "1px solid #232323" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>🔨</div>
              <div>
                <div className="tag-label mb-1">Mảng 01</div>
                <h2 className="font-black" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
                  Xây lắp <span className="gradient-text">thi công</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>
          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.srv-g2{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
              <div className="grid gap-4 srv-g2" style={{ gridTemplateColumns: "1fr" }}>
                {thiCong.map((s, i) => (
                  <ScrollRevealItem key={s.id}>
                    <div className="rounded-2xl p-7 h-full group relative overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", transition: "background 0.25s, border-color 0.25s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = "rgba(59,130,246,.3)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "#0d0d0d"; e.currentTarget.style.borderColor = "#232323" }}>
                      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                      <div className="text-3xl mb-5">{categoryIcons["thi-cong"][i] ?? "⚡"}</div>
                      <h3 className="font-bold mb-3" style={{ fontSize: "1rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.8 }}>{s.description}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* MẢNG 2: TƯ VẤN & GIÁM SÁT */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 pb-8" style={{ borderBottom: "1px solid #232323" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>📐</div>
              <div>
                <div className="tag-label mb-1">Mảng 02</div>
                <h2 className="font-black" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
                  Tư vấn &amp; <span className="gradient-text">Giám sát</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>
          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <div className="grid gap-4 srv-g2" style={{ gridTemplateColumns: "1fr" }}>
                {tuVan.map((s, i) => (
                  <ScrollRevealItem key={s.id}>
                    <div className="rounded-2xl p-7 h-full group relative overflow-hidden" style={{ background: "#141414", border: "1px solid #232323", transition: "background 0.25s, border-color 0.25s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.borderColor = "rgba(59,130,246,.3)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = "#232323" }}>
                      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                      <div className="text-3xl mb-5">{categoryIcons["tu-van"][i] ?? "📋"}</div>
                      <h3 className="font-bold mb-3" style={{ fontSize: "1rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.8 }}>{s.description}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* MẢNG 3: SẢN XUẤT & THƯƠNG MẠI */}
      <section className="section-pad">
        <div className="container-pad">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 pb-8" style={{ borderBottom: "1px solid #232323" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>🏭</div>
              <div>
                <div className="tag-label mb-1">Mảng 03</div>
                <h2 className="font-black" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
                  Sản xuất &amp; <span className="gradient-text">Thương mại</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>
          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <div className="grid gap-4 srv-g2" style={{ gridTemplateColumns: "1fr" }}>
                {sanXuat.map((s, i) => (
                  <ScrollRevealItem key={s.id}>
                    <div className="rounded-2xl p-7 h-full group relative overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323", transition: "background 0.25s, border-color 0.25s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = "rgba(59,130,246,.3)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "#0d0d0d"; e.currentTarget.style.borderColor = "#232323" }}>
                      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                      <div className="text-3xl mb-5">{categoryIcons["san-xuat"][i] ?? "🔧"}</div>
                      <h3 className="font-bold mb-3" style={{ fontSize: "1rem" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.8 }}>{s.description}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* QUY TRÌNH LÀM VIỆC */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Quy trình làm việc</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                5 bước <span className="gradient-text">chuyên nghiệp</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden" style={{ background: "#141414", border: "1px solid #232323" }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.07}>
                <div className="flex items-center gap-4 px-6 py-4 transition-colors" style={{ borderBottom: i < steps.length - 1 ? "1px solid #232323" : "none" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>{step.num}</div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-0.5" style={{ fontSize: "0.875rem" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.78rem", color: "#4a4a4a" }}>{step.desc}</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: step.tag === "Miễn phí" || step.tag === "Dài hạn" ? "rgba(22,163,74,.15)" : "rgba(59,130,246,.15)", color: step.tag === "Miễn phí" || step.tag === "Dài hạn" ? "#4ade80" : "#60a5fa" }}>
                    {step.tag}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* THIẾT BỊ THI CÔNG */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Thiết bị</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Máy móc &amp; <span className="gradient-text">năng lực</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <div className="grid gap-3" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.eq-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.eq-grid{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
              <div className="grid gap-3 eq-grid" style={{ gridTemplateColumns: "1fr" }}>
                {equipment.map((eq) => (
                  <ScrollRevealItem key={eq.name}>
                    <div className="rounded-xl p-5" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                      <h4 className="font-bold mb-1" style={{ fontSize: "0.875rem" }}>{eq.name}</h4>
                      <p style={{ fontSize: "0.78rem", color: "#4a4a4a" }}>{eq.detail}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad text-center">
          <ScrollReveal>
            <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
              Cần tư vấn <span className="gradient-text">miễn phí?</span>
            </h2>
            <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", maxWidth: "420px", lineHeight: 1.8 }}>
              Đội ngũ kỹ sư Lavipco sẵn sàng khảo sát thực địa và tư vấn giải pháp chiếu sáng phù hợp nhất cho công trình của bạn.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                Liên hệ tư vấn →
              </Link>
              <Link href="/san-pham" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold transition-all" style={{ background: "transparent", color: "#f8f8f8", border: "1px solid #2e2e2e" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                Xem sản phẩm
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

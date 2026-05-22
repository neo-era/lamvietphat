import type { Metadata } from "next"
import Link from "next/link"
import { companyInfo, team, timeline } from "@/lib/data"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Giới thiệu — Lavipco",
  description: "Tìm hiểu về Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) — thành lập 2014, chuyên chiếu sáng đô thị, tín hiệu giao thông, sản xuất thiết bị điện.",
}

const companyDetails = [
  { label: "Tên đầy đủ", value: companyInfo.name },
  { label: "Tên quốc tế", value: companyInfo.nameEn },
  { label: "Tên thương mại", value: companyInfo.brand },
  { label: "Mã số thuế", value: companyInfo.taxCode },
  { label: "Địa chỉ", value: companyInfo.address },
  { label: "Điện thoại", value: companyInfo.phone },
  { label: "Hotline", value: companyInfo.hotline },
  { label: "Email", value: companyInfo.email },
  { label: "Số tài khoản", value: companyInfo.bank },
  { label: "Giám đốc", value: companyInfo.director },
  { label: "Thành lập", value: companyInfo.founded },
  { label: "Phạm vi", value: "Toàn quốc" },
]

const legalBadges = [
  { icon: "📋", title: "Giấy phép kinh doanh", desc: "MST 1101748509 — Sở KH&ĐT TP.HCM · Hiệu lực vĩnh viễn" },
  { icon: "🏗️", title: "Chứng chỉ năng lực xây dựng", desc: "Thi công công trình điện dân dụng, công nghiệp & hạ tầng kỹ thuật" },
  { icon: "⚡", title: "Chứng chỉ hành nghề điện", desc: "Thiết kế, giám sát & thi công hệ thống điện, chiếu sáng & tín hiệu" },
  { icon: "📊", title: "Báo cáo tài chính", desc: "Minh bạch tài chính theo quy định — báo cáo các năm 2016, 2017, 2018" },
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

const equipment = [
  { name: "Xe tải > 3,5 tấn", origin: "Hàn Quốc", qty: 1 },
  { name: "Xe cẩu gàu nâng người 12m", origin: "Nhật Bản", qty: 1 },
  { name: "Xe đào 0.1", origin: "Nhật Bản", qty: 1 },
  { name: "Máy trộn bê tông", origin: "Việt Nam", qty: 1 },
  { name: "Máy đo điện trở đất", origin: "Nhật Bản", qty: 2 },
  { name: "Máy đo cường độ sáng", origin: "Đài Loan", qty: 1 },
  { name: "Ampe kềm", origin: "Nhật Bản", qty: 3 },
  { name: "Kềm ép thủy lực", origin: "Đức", qty: 3 },
  { name: "Máy phát điện", origin: "Nhật Bản", qty: 1 },
  { name: "Máy tiện", origin: "Nhật Bản", qty: 2 },
]

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "60vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="tag-label mb-6 justify-center">Về chúng tôi</div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-black mb-6" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              Công ty TNHH<br /><span className="gradient-text">Kỹ Nghệ Lâm Việt Phát</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "#9a9a9a", maxWidth: "580px", margin: "0 auto", lineHeight: 1.8 }}>
              {companyInfo.tagline} — Thành lập 2014, phục vụ chiếu sáng đô thị và tín hiệu giao thông trên toàn quốc.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ THƯ NGỎ GIÁM ĐỐC ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-12 items-center" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.about-hl{grid-template-columns:1fr 1fr;gap:5rem;}}`}</style>
            <div className="grid gap-12 items-center about-hl" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <ScrollReveal>
                  <div className="tag-label mb-6">Thư ngỏ Giám đốc</div>
                  <h2 className="font-black mb-6" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.12 }}>
                    Đồng hành cùng<br /><span className="gradient-text">ánh sáng cộng đồng</span>
                  </h2>
                  <blockquote className="mb-6" style={{ borderLeft: "3px solid #3b82f6", paddingLeft: "1.5rem", color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.8 }}>
                    "Công ty chúng tôi được thành lập với cam kết làm cho Sự hài lòng của cộng đồng là hạnh phúc của doanh nghiệp. Chúng tôi muốn đồng hành cùng Quý khách trong việc tạo thêm giá trị của chiếu sáng, đèn tín hiệu giao thông cho các công trình, kiến trúc, cảnh quan… phục vụ cộng đồng."
                  </blockquote>
                  <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    Với đội ngũ nhân viên nhiệt huyết, có kiến thức và kỹ năng chuyên môn; cùng sự liên kết chặt chẽ với các nhà cung cấp, đối tác và cơ quan quản lý nhà nước — chúng tôi tin tưởng sẽ mang lại hiệu quả và làm hài lòng Quý khách.
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#4a4a4a" }}>
                    <strong style={{ color: "#f8f8f8" }}>{companyInfo.director}</strong> — Giám đốc, Lavipco
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center gap-2 pb-4 mb-2" style={{ borderBottom: "1px solid #232323" }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                      <span className="ml-2" style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>Hồ sơ công ty — Lavipco</span>
                    </div>
                    {companyDetails.map(({ label, value }) => (
                      <div key={label} className="flex items-start justify-between gap-4 py-2.5 px-3.5 rounded-lg" style={{ background: "#141414", border: "1px solid #2e2e2e" }}>
                        <span style={{ fontSize: "0.78rem", color: "#9a9a9a", flexShrink: 0 }}>{label}</span>
                        <span className="text-right" style={{ fontSize: "0.72rem", color: "#60a5fa", fontWeight: 600, background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)", borderRadius: "100px", padding: "0.2rem 0.6rem" }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ TẦM NHÌN & SỨ MỆNH ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Giá trị cốt lõi</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Tầm nhìn &amp; <span className="gradient-text">Sứ mệnh</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:768px){.vm-grid{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
              <div className="grid gap-4 vm-grid" style={{ gridTemplateColumns: "1fr" }}>
                {[
                  { icon: "🎯", title: "Tận tâm", desc: "Đặt lợi ích và sự hài lòng của khách hàng lên trên hết. Mỗi công trình đều được thực hiện với tất cả tâm huyết và trách nhiệm." },
                  { icon: "🤝", title: "Chính trực", desc: "Minh bạch trong báo giá, trung thực trong thi công, tôn trọng cam kết hợp đồng — không thỏa hiệp với chất lượng." },
                  { icon: "✨", title: "Tối giản", desc: "Giải pháp đơn giản, hiệu quả, đúng trọng tâm. Không phức tạp hóa vấn đề — chỉ làm những gì thực sự mang lại giá trị." },
                ].map((v) => (
                  <ScrollRevealItem key={v.title}>
                    <div className="rounded-2xl p-8 h-full" style={{ background: "#141414", border: "1px solid #232323" }}>
                      <div className="text-4xl mb-5">{v.icon}</div>
                      <h3 className="font-bold mb-3" style={{ fontSize: "1.1rem" }}>{v.title}</h3>
                      <p style={{ fontSize: "0.9rem", color: "#9a9a9a", lineHeight: 1.8 }}>{v.desc}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ TIMELINE ═══ */}
      <section className="section-pad">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Lịch sử phát triển</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Cột mốc <span className="gradient-text">hành trình</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #3b82f6, transparent)" }} />
            <div className="flex flex-col gap-8">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 0.07}>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-black text-sm z-10" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", boxShadow: "0 0 0 4px #070707, 0 0 0 6px #232323" }}>
                      {t.year.replace("+", "")}
                    </div>
                    <div className="pb-2 pt-2">
                      <div className="mb-1" style={{ fontSize: "0.7rem", color: "#3b82f6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {t.year}
                      </div>
                      <h3 className="font-bold mb-2" style={{ fontSize: "1rem" }}>{t.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.75 }}>{t.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ SƠ ĐỒ TỔ CHỨC ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Tổ chức</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Sơ đồ <span className="gradient-text">tổ chức</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4">
              {/* Giám đốc */}
              <div className="px-8 py-4 rounded-xl font-bold text-center" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)", fontSize: "0.95rem", minWidth: "200px" }}>
                Giám đốc
              </div>
              <div className="w-px h-6" style={{ background: "#3b82f6" }} />
              {/* Phó GĐ */}
              <div className="px-6 py-3 rounded-xl font-semibold text-center" style={{ background: "#141414", border: "1px solid #232323", fontSize: "0.875rem", minWidth: "180px" }}>
                Phó Giám đốc
              </div>
              <div className="w-px h-6" style={{ background: "#232323" }} />
              {/* Phòng ban */}
              <div className="grid gap-3" style={{ gridTemplateColumns: "1fr" }}>
                <style>{`@media(min-width:640px){.dept-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.dept-grid{grid-template-columns:repeat(5,1fr)!important;}}`}</style>
                <div className="grid gap-3 dept-grid" style={{ gridTemplateColumns: "1fr" }}>
                  {["P. Tài chính – Kế toán", "P. Kinh doanh", "P. Kỹ thuật – Dự án", "Xưởng sản xuất", "Đội thi công"].map((dept) => (
                    <div key={dept} className="px-4 py-3 rounded-lg text-center" style={{ background: "#0d0d0d", border: "1px solid #232323", fontSize: "0.8rem", color: "#9a9a9a" }}>
                      {dept}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ ĐỘI NGŨ ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Nhân sự</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Đội ngũ <span className="gradient-text">chủ chốt</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.team-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.team-grid{grid-template-columns:repeat(3,1fr)!important;}}`}</style>
              <div className="grid gap-4 team-grid" style={{ gridTemplateColumns: "1fr" }}>
                {team.map((member) => (
                  <ScrollRevealItem key={member.name}>
                    <div className="rounded-2xl p-6" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                      <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-2xl font-black" style={{ background: "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>
                        {member.name.charAt(0)}
                      </div>
                      <h3 className="font-bold mb-1" style={{ fontSize: "0.975rem" }}>{member.name}</h3>
                      <p className="mb-1" style={{ fontSize: "0.8rem", color: "#60a5fa", fontWeight: 600 }}>{member.role}</p>
                      <p className="mb-2" style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>{member.dept}</p>
                      {member.exp && <p style={{ fontSize: "0.78rem", color: "#9a9a9a" }}>{member.exp}</p>}
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ HỒ SƠ PHÁP LÝ ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Năng lực pháp lý</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Chứng chỉ &amp; <span className="gradient-text">Đối tác</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollRevealGroup>
            <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: "1fr" }}>
              <style>{`@media(min-width:640px){.cert-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(min-width:1024px){.cert-grid{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
              <div className="grid gap-4 cert-grid" style={{ gridTemplateColumns: "1fr" }}>
                {legalBadges.map((b) => (
                  <ScrollRevealItem key={b.title}>
                    <div className="card-hover-dark rounded-2xl p-6 text-center relative overflow-hidden group" style={{ background: "#141414", border: "1px solid #232323" }}>
                      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
                      <div className="text-3xl mb-4">{b.icon}</div>
                      <h3 className="font-bold mb-2" style={{ fontSize: "0.875rem" }}>{b.title}</h3>
                      <p style={{ fontSize: "0.75rem", color: "#4a4a4a", lineHeight: 1.65 }}>{b.desc}</p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </ScrollRevealGroup>

          {/* Partners */}
          <ScrollReveal>
            <p className="text-center mb-6" style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Chủ đầu tư &amp; nhà thầu chính đã hợp tác
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              {partners.map((p) => (
                <div key={p.name} className="partner-chip flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                  <span>{p.icon}</span> {p.name}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* ═══ THIẾT BỊ THI CÔNG ═══ */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="text-center mb-14">
            <ScrollReveal><div className="tag-label mb-4 justify-center">Năng lực thi công</div></ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", letterSpacing: "-0.03em" }}>
                Máy móc &amp; <span className="gradient-text">Thiết bị</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
              <div className="grid px-6 py-3" style={{ background: "#141414", borderBottom: "1px solid #232323", gridTemplateColumns: "1fr auto auto" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Thiết bị</span>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Xuất xứ</span>
                <span className="text-right" style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>SL</span>
              </div>
              {equipment.map((eq, i) => (
                <div key={eq.name} className="table-row-hover grid px-6 py-3.5" style={{ gridTemplateColumns: "1fr auto auto", borderBottom: i < equipment.length - 1 ? "1px solid #1c1c1c" : "none", gap: "1rem" }}>
                  <span style={{ fontSize: "0.85rem" }}>{eq.name}</span>
                  <span style={{ fontSize: "0.8rem", color: "#9a9a9a" }}>{eq.origin}</span>
                  <span className="text-right" style={{ fontSize: "0.8rem", color: "#60a5fa", fontWeight: 600 }}>{eq.qty}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-pad" style={{ background: "#0d0d0d" }}>
        <div className="container-pad text-center">
          <ScrollReveal>
            <h2 className="font-black mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
              Hợp tác cùng <span className="gradient-text">Lavipco</span>
            </h2>
            <p className="mb-8 mx-auto" style={{ color: "#9a9a9a", maxWidth: "480px", lineHeight: 1.8 }}>
              Tư vấn miễn phí, báo giá trong 24h, thi công toàn quốc với đội ngũ kỹ sư chuyên nghiệp.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all">
                Liên hệ ngay →
              </Link>
              <Link href="/du-an" className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-xl text-base font-semibold">
                Xem dự án đã thực hiện
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Con người Lavipco — Đội ngũ & Văn hóa doanh nghiệp",
  description: "Đội ngũ kỹ sư, kỹ thuật viên và công nhân Lavipco — văn hóa làm việc và hành trình 11 năm cùng ngành chiếu sáng đô thị Việt Nam.",
}

const team = [
  { img: "https://placehold.co/400x500/003F7F/FFFFFF?text=Director", name: "Bà Nguyễn Kim Thúy Quỳnh", role: "Giám đốc — Founder" },
  { img: "https://placehold.co/400x500/0066CC/FFFFFF?text=Vice+Director", name: "KS. Mai Trung Hiếu", role: "Phó Giám đốc kỹ thuật" },
  { img: "https://placehold.co/400x500/1e40af/FFFFFF?text=Tech+Manager", name: "Ô. Phạm Văn Út Hậu", role: "Trưởng phòng kỹ thuật" },
  { img: "https://placehold.co/400x500/1d4ed8/FFFFFF?text=Workshop", name: "Đội xưởng sản xuất", role: "Quản lý sản xuất" },
]

const values = [
  { ic: "❤️", title: "Tận tâm", desc: "Đặt nhu cầu khách hàng làm trung tâm — từ tư vấn đến bàn giao và hỗ trợ dài hạn." },
  { ic: "🤝", title: "Chính trực", desc: "Minh bạch trong báo giá, hợp đồng và tiến độ — không thỏa hiệp với chất lượng." },
  { ic: "✨", title: "Tối giản", desc: "Giải pháp đơn giản, hiệu quả — tránh phức tạp hóa, tập trung vào giá trị cốt lõi." },
]

export default function ConNguoiPage() {
  return (
    <div style={{ background: "#fff", color: "#1a1a1a" }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "9rem", paddingBottom: "5rem", background: "linear-gradient(135deg,#003F7F,#0066CC)" }}>
        <div className="container-pad relative text-center">
          <h1 className="font-black text-white mb-5" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            Con người Lavipco
          </h1>
          <div className="mx-auto h-1 w-20 rounded mb-6" style={{ background: "#f97316" }} />
          <p className="max-w-2xl mx-auto" style={{ color: "#e0e7ff", fontSize: "1.1rem", lineHeight: 1.75 }}>
            Đội ngũ 15+ kỹ sư, kỹ thuật viên và công nhân lành nghề — gắn bó cùng Lavipco từ những ngày đầu thành lập đến nay.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
              Giá trị cốt lõi
            </h2>
            <div className="mx-auto h-1 w-16 rounded" style={{ background: "#f97316" }} />
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:768px){.values-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
            <div className="grid gap-6 values-grid" style={{ gridTemplateColumns: "1fr" }}>
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl p-8 text-center transition-all hover:shadow-xl hover:-translate-y-1" style={{ background: "#f8fafc", border: "1px solid #e5e7eb" }}>
                  <div className="text-4xl mb-4">{v.ic}</div>
                  <h3 className="font-bold mb-3" style={{ fontSize: "1.25rem", color: "#003F7F" }}>{v.title}</h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
              Đội ngũ chủ chốt
            </h2>
            <div className="mx-auto h-1 w-16 rounded" style={{ background: "#f97316" }} />
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.team-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.team-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-5 team-grid" style={{ gridTemplateColumns: "1fr" }}>
              {team.map((p) => (
                <div key={p.name} className="rounded-xl overflow-hidden bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1" style={{ border: "1px solid #e5e7eb" }}>
                  <img src={p.img} alt={p.name} className="w-full h-72 object-cover" />
                  <div className="p-5 text-center">
                    <h3 className="font-bold mb-1" style={{ fontSize: "1rem", color: "#003F7F" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container-pad text-center">
          <h2 className="font-black mb-5" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
            Cùng Lavipco xây dựng tương lai
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75 }}>
            Liên hệ ngay nếu bạn muốn hợp tác cùng đội ngũ Lavipco hoặc trở thành một phần của câu chuyện chúng tôi.
          </p>
          <Link href="/lien-he" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#ea580c,#f97316)", boxShadow: "0 4px 16px rgba(249,115,22,0.35)" }}>
            Liên hệ ngay →
          </Link>
        </div>
      </section>
    </div>
  )
}

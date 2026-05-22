import type { Metadata } from "next"
import Link from "next/link"
import HeroSlider from "@/components/sections/hapulico/HeroSlider"
import StatsCounter from "@/components/sections/hapulico/StatsCounter"
import Testimonials from "@/components/sections/hapulico/Testimonials"
import PartnersSlider from "@/components/sections/hapulico/PartnersSlider"
import FAQ from "@/components/sections/hapulico/FAQ"

export const metadata: Metadata = {
  title: "Lavipco | Tỏa sáng khắp mọi miền — Chiếu sáng đô thị & Tín hiệu giao thông",
  description:
    "Lavipco — Công ty TNHH Kỹ Nghệ Lâm Việt Phát. Chuyên thi công, tư vấn, sản xuất thiết bị chiếu sáng đô thị, tín hiệu giao thông trên toàn quốc từ 2014.",
}

const products = [
  { name: "Đèn chiếu sáng đường phố", img: "https://placehold.co/600x400/003F7F/FFFFFF?text=Street+Light" },
  { name: "Đèn pha, đèn công nghiệp", img: "https://placehold.co/600x400/0066CC/FFFFFF?text=Floodlight" },
  { name: "Đèn sân vườn, trang trí", img: "https://placehold.co/600x400/1e40af/FFFFFF?text=Garden+Light" },
  { name: "Cột đèn sân vườn", img: "https://placehold.co/600x400/1d4ed8/FFFFFF?text=Garden+Pole" },
  { name: "Cột thép chiếu sáng", img: "https://placehold.co/600x400/2563eb/FFFFFF?text=Steel+Pole" },
  { name: "Thiết bị đô thị, tủ điện", img: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Control+Cabinet" },
]

const projects = [
  { name: "Chiếu sáng đô thị", img: "https://placehold.co/600x400/003F7F/FFFFFF?text=Urban+Lighting" },
  { name: "Chiếu sáng công nghiệp", img: "https://placehold.co/600x400/0066CC/FFFFFF?text=Industrial+Lighting" },
  { name: "Chiếu sáng cảnh quan", img: "https://placehold.co/600x400/1e40af/FFFFFF?text=Landscape+Lighting" },
  { name: "Đèn tín hiệu giao thông", img: "https://placehold.co/600x400/1d4ed8/FFFFFF?text=Traffic+Signal" },
  { name: "Điện ngoại vi & hạ tầng", img: "https://placehold.co/600x400/2563eb/FFFFFF?text=Infrastructure" },
  { name: "Smart Lighting", img: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Smart+City" },
]

const newsBig = {
  img: "https://placehold.co/900x500/003F7F/FFFFFF?text=Featured+News",
  title: "Lavipco bàn giao công trình chiếu sáng KCN Mỹ Phước 3 — Bình Dương",
  date: "15/05/2025",
  excerpt: "Sau 6 tháng thi công, Lavipco đã hoàn thành và bàn giao hệ thống chiếu sáng đô thị tại Khu công nghiệp Mỹ Phước 3 với hơn 850 trụ đèn LED.",
}
const newsSmall = [
  { img: "https://placehold.co/300x200/0066CC/FFFFFF?text=News+1", title: "Khởi công dự án Smart Lighting Q.7 TP.HCM", date: "08/05/2025" },
  { img: "https://placehold.co/300x200/1e40af/FFFFFF?text=News+2", title: "Lavipco ra mắt dòng đèn đường LED 200W mới", date: "01/05/2025" },
  { img: "https://placehold.co/300x200/1d4ed8/FFFFFF?text=News+3", title: "Hợp tác chiến lược cùng Becamex IDCP 2025", date: "22/04/2025" },
]

const peopleBig = {
  img: "https://placehold.co/900x500/003F7F/FFFFFF?text=Lavipco+Team",
  title: "Hành trình 11 năm — Đội ngũ Lavipco vững vàng cùng khách hàng",
  date: "12/05/2025",
  excerpt: "Hơn 15 kỹ sư, kỹ thuật viên và công nhân lành nghề đã đồng hành cùng Lavipco từ những ngày đầu thành lập đến nay.",
}
const peopleSmall = [
  { img: "https://placehold.co/300x200/0066CC/FFFFFF?text=Engineer", title: "KS. Mai Trung Hiếu — Phó Giám đốc kỹ thuật", date: "Lãnh đạo" },
  { img: "https://placehold.co/300x200/1e40af/FFFFFF?text=Tech+Team", title: "Phạm Văn Út Hậu — TP. Kỹ thuật", date: "Quản lý" },
  { img: "https://placehold.co/300x200/1d4ed8/FFFFFF?text=Workshop", title: "Đội xưởng sản xuất Lavipco", date: "Vận hành" },
]

const partnerships = Array.from({ length: 12 }, (_, i) => ({
  img: `https://placehold.co/400x280/${["003F7F", "0066CC", "1e40af", "1d4ed8"][i % 4]}/FFFFFF?text=Event+${i + 1}`,
  title: ["Ký kết Becamex IDCP", "Hợp tác Phú Quốc", "Đối tác Khang Thông", "Cienco 4 JV", "Sở GTVT TPHCM", "Cienco SVG", "Ký KCN Bình Dương", "Hợp tác Rạng Đông", "Đại lý LED Quốc tế", "Liên doanh Smart City", "Hợp tác Sư Đoàn 5", "Ký Bến Tre 2024"][i],
}))

const capProduction = [
  "Nhà máy 40.000m² với dây chuyền hiện đại nhập khẩu",
  "Sản xuất tủ điện, trụ đèn, đèn LED tại chỗ",
  "Kiểm soát chất lượng QC 7 bước trước xuất xưởng",
]
const capOperation = [
  "Đội thi công 800+ kỹ sư và công nhân lành nghề",
  "Hệ thống quản lý ISO 9001:2015",
  "Phần mềm theo dõi tiến độ realtime cho khách",
  "Bảo hành tận nơi trên toàn quốc",
  "Hỗ trợ kỹ thuật 24/7 sau bàn giao",
]

const sectionTitle = (title: string, subtitle?: string) => (
  <div className="text-center mb-12 md:mb-14">
    <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
      {title}
    </h2>
    <div className="mx-auto h-1 w-16 rounded mb-4" style={{ background: "#f97316" }} />
    {subtitle && <p className="max-w-2xl mx-auto" style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.7 }}>{subtitle}</p>}
  </div>
)

export default function HomePage() {
  return (
    <div style={{ background: "#fff", color: "#1a1a1a" }}>
      {/* 2) Hero slider */}
      <HeroSlider />

      {/* 3) Tổng quan */}
      <section id="tong-quan" className="py-20 md:py-24">
        <div className="container-pad">
          {sectionTitle("Tổng quan về Lavipco")}
          <div className="grid gap-10 items-center" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.tongquan-grid{grid-template-columns:1fr 1fr!important;gap:4rem!important}}`}</style>
            <div className="grid gap-10 tongquan-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <h3 className="font-bold mb-4" style={{ fontSize: "1.5rem", color: "#003F7F" }}>
                  Đơn vị tiên phong trong ngành chiếu sáng đô thị Việt Nam
                </h3>
                <p className="mb-4" style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8 }}>
                  Thành lập năm 2014, Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) là một trong những đơn vị tiên phong trong lĩnh vực tư vấn, thiết kế và thi công các công trình chiếu sáng đô thị, tín hiệu giao thông và điện năng lượng mặt trời.
                </p>
                <p className="mb-6" style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8 }}>
                  Với hơn 11 năm kinh nghiệm thực chiến, đội ngũ 15+ kỹ sư và công nhân lành nghề, Lavipco đã hoàn thành hơn 50 công trình lớn trải dài từ TP.HCM đến Bình Dương, Long An, Kiên Giang, Quảng Nam...
                </p>
                <Link href="/ve-chung-toi" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all hover:scale-105" style={{ background: "#003F7F" }}>
                  Tìm hiểu thêm
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://placehold.co/800x600/003F7F/FFFFFF?text=Lavipco+Overview" alt="Lavipco" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Brand identity banner */}
      <section className="relative overflow-hidden" style={{ height: "clamp(280px,40vw,420px)" }}>
        <img src="https://placehold.co/1920x600/0066CC/FFFFFF?text=Brand+Identity" alt="Brand" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(0,63,127,0.85),rgba(0,102,204,0.65))" }} />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(1.75rem,4.5vw,3rem)", letterSpacing: "-0.02em", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
              Nhận diện thương hiệu Lavipco
            </h2>
            <p style={{ color: "#e0e7ff", fontSize: "clamp(0.95rem,1.5vw,1.1rem)", lineHeight: 1.7 }}>
              Tận tâm — Chính trực — Tối giản. Ba giá trị cốt lõi đồng hành cùng Lavipco từ 2014.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Stats counter */}
      <StatsCounter />

      {/* 6) Năng lực */}
      <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
        <div className="container-pad">
          {sectionTitle("Năng lực Lavipco", "Kết hợp năng lực sản xuất nội bộ và quản lý vận hành hiện đại — nền tảng cho mọi dự án thành công.")}
          <div className="grid gap-8" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.cap-grid{grid-template-columns:1fr 1fr!important}}`}</style>
            <div className="grid gap-8 cap-grid" style={{ gridTemplateColumns: "1fr" }}>
              {[
                { title: "Năng lực sản xuất", img: "https://placehold.co/800x400/003F7F/FFFFFF?text=Production", items: capProduction },
                { title: "Năng lực quản lý vận hành", img: "https://placehold.co/800x400/0066CC/FFFFFF?text=Operations", items: capOperation },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl overflow-hidden bg-white shadow-md transition-all hover:shadow-xl" style={{ border: "1px solid #e5e7eb" }}>
                  <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
                  <div className="p-7">
                    <h3 className="font-bold mb-4" style={{ fontSize: "1.25rem", color: "#003F7F" }}>{c.title}</h3>
                    <ul className="flex flex-col gap-2.5 list-none">
                      {c.items.map((t) => (
                        <li key={t} className="flex items-start gap-2.5" style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>
                          <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full mt-0.5 text-white font-bold" style={{ background: "#f97316", fontSize: "0.7rem" }}>✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7) Sản phẩm */}
      <section className="py-20 md:py-24">
        <div className="container-pad">
          {sectionTitle("Sản phẩm")}
          <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.prod-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.prod-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
            <div className="grid gap-5 prod-grid" style={{ gridTemplateColumns: "1fr" }}>
              {products.map((p) => (
                <Link key={p.name} href="/san-pham" className="block group rounded-xl overflow-hidden relative transition-transform hover:scale-[1.03]" style={{ border: "1px solid #e5e7eb" }}>
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 p-5" style={{ background: "linear-gradient(to top,rgba(0,63,127,0.95),transparent)" }}>
                    <h3 className="font-bold text-white" style={{ fontSize: "1rem" }}>{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8) Dự án tiêu biểu */}
      <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
        <div className="container-pad">
          {sectionTitle("Dự án tiêu biểu")}
          <div className="grid gap-5" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.proj-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.proj-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
            <div className="grid gap-5 proj-grid" style={{ gridTemplateColumns: "1fr" }}>
              {projects.map((p) => (
                <Link key={p.name} href="/du-an" className="block group rounded-xl overflow-hidden relative transition-transform hover:scale-[1.03]" style={{ border: "1px solid #e5e7eb" }}>
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 p-5" style={{ background: "linear-gradient(to top,rgba(0,63,127,0.95),transparent)" }}>
                    <h3 className="font-bold text-white" style={{ fontSize: "1rem" }}>{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9) Tin tức */}
      <section className="py-20 md:py-24">
        <div className="container-pad">
          {sectionTitle("Tin tức")}
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.news-grid{grid-template-columns:3fr 2fr!important}}`}</style>
            <div className="grid gap-6 news-grid" style={{ gridTemplateColumns: "1fr" }}>
              {/* Big */}
              <Link href="/tin-tuc" className="block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all group" style={{ border: "1px solid #e5e7eb" }}>
                <div className="overflow-hidden">
                  <img src={newsBig.img} alt={newsBig.title} className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#f97316" }}>{newsBig.date}</div>
                  <h3 className="font-bold mb-2" style={{ fontSize: "1.3rem", color: "#003F7F", lineHeight: 1.35 }}>{newsBig.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7 }}>{newsBig.excerpt}</p>
                </div>
              </Link>
              {/* Small list */}
              <div className="flex flex-col gap-4">
                {newsSmall.map((n) => (
                  <Link key={n.title} href="/tin-tuc" className="flex gap-4 group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all" style={{ border: "1px solid #e5e7eb" }}>
                    <div className="shrink-0 w-32 overflow-hidden">
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="py-3 pr-4 flex flex-col justify-center">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "#f97316" }}>{n.date}</div>
                      <h4 className="font-semibold leading-snug" style={{ fontSize: "0.9rem", color: "#003F7F" }}>{n.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10) Con người Lavipco */}
      <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
        <div className="container-pad">
          {sectionTitle("Con người Lavipco")}
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr" }}>
            <div className="grid gap-6 news-grid" style={{ gridTemplateColumns: "1fr" }}>
              <Link href="/con-nguoi" className="block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all group" style={{ border: "1px solid #e5e7eb" }}>
                <div className="overflow-hidden">
                  <img src={peopleBig.img} alt={peopleBig.title} className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#f97316" }}>{peopleBig.date}</div>
                  <h3 className="font-bold mb-2" style={{ fontSize: "1.3rem", color: "#003F7F", lineHeight: 1.35 }}>{peopleBig.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7 }}>{peopleBig.excerpt}</p>
                </div>
              </Link>
              <div className="flex flex-col gap-4">
                {peopleSmall.map((n) => (
                  <Link key={n.title} href="/con-nguoi" className="flex gap-4 group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all" style={{ border: "1px solid #e5e7eb" }}>
                    <div className="shrink-0 w-32 overflow-hidden">
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="py-3 pr-4 flex flex-col justify-center">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "#f97316" }}>{n.date}</div>
                      <h4 className="font-semibold leading-snug" style={{ fontSize: "0.9rem", color: "#003F7F" }}>{n.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11) Video */}
      <section className="py-20 md:py-24">
        <div className="container-pad">
          {sectionTitle("Video giới thiệu")}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
            <img src="https://placehold.co/1920x1080/003F7F/FFFFFF?text=Lavipco+Video" alt="Video" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
            <button className="absolute inset-0 flex items-center justify-center group" aria-label="Phát video">
              <span className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110" style={{ width: "96px", height: "96px", background: "rgba(249,115,22,0.95)", boxShadow: "0 10px 40px rgba(249,115,22,0.5)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 12) Testimonials */}
      <Testimonials />

      {/* 13) Ký kết hợp tác */}
      <section className="py-20 md:py-24">
        <div className="container-pad">
          {sectionTitle("Ký kết hợp tác")}
          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.ev-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:900px){.ev-grid{grid-template-columns:repeat(3,1fr)!important}}@media(min-width:1280px){.ev-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="grid gap-4 ev-grid" style={{ gridTemplateColumns: "1fr" }}>
              {partnerships.map((e, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md hover:scale-[1.02]" style={{ border: "1px solid #e5e7eb" }}>
                  <img src={e.img} alt={e.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold" style={{ fontSize: "0.875rem", color: "#003F7F", lineHeight: 1.45 }}>{e.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14) Partners slider */}
      <PartnersSlider />

      {/* 15) Hỗ trợ + FAQ */}
      <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
        <div className="container-pad">
          <div className="grid gap-10" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.support-grid{grid-template-columns:1fr 1.2fr!important;gap:4rem!important}}`}</style>
            <div className="grid gap-10 support-grid" style={{ gridTemplateColumns: "1fr" }}>
              {/* Contact info */}
              <div>
                <h2 className="font-black mb-3" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
                  Hỗ trợ trực tuyến
                </h2>
                <div className="h-1 w-16 rounded mb-6" style={{ background: "#f97316" }} />
                <p className="mb-6" style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.75 }}>
                  Đội ngũ Lavipco luôn sẵn sàng tư vấn — 24/7 cho dự án của bạn.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { ic: "📞", lbl: "Tổng đài", val: "0989 725 507" },
                    { ic: "🆘", lbl: "Hotline kỹ thuật", val: "0932 733 427" },
                    { ic: "✉️", lbl: "Email", val: "lavipco.co@gmail.com" },
                    { ic: "🏙️", lbl: "Miền Nam", val: "63/23A Liên Khu 16-18, Q.Bình Tân, TP.HCM" },
                    { ic: "🏛️", lbl: "Miền Trung", val: "Hỗ trợ qua điện thoại + đội cơ động" },
                    { ic: "🏯", lbl: "Miền Bắc", val: "Hỗ trợ qua đại lý + chi nhánh" },
                  ].map((c) => (
                    <div key={c.lbl} className="flex items-start gap-3 p-3.5 rounded-lg bg-white transition-all hover:shadow-md" style={{ border: "1px solid #e5e7eb" }}>
                      <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg text-lg" style={{ background: "#dbeafe" }}>{c.ic}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#f97316" }}>{c.lbl}</div>
                        <div style={{ fontSize: "0.9rem", color: "#1f2937" }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-black mb-3" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
                  Câu hỏi thường gặp
                </h2>
                <div className="h-1 w-16 rounded mb-6" style={{ background: "#f97316" }} />
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

const partners = [
  "Becamex IDCP", "Khang Thông", "Phú Quốc DA", "Rạng Đông", "Tân Bình QLDA",
  "Miền Nam XD-CN", "Nông Nghiệp TC", "Bảo Ngọc Co.", "ACB Bank", "Sở GTVT TPHCM",
  "Sư Đoàn 5", "Cienco 4",
]

export default function PartnersSlider() {
  // double for seamless marquee
  const all = [...partners, ...partners]

  return (
    <section className="py-16 md:py-20 overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
      <div className="container-pad mb-10 text-center">
        <h2 className="font-black mb-3" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
          Đối tác &amp; Khách hàng tiêu biểu
        </h2>
        <div className="mx-auto h-1 w-16 rounded" style={{ background: "#f97316" }} />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
          {all.map((name, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center px-8 py-4 rounded-lg transition-all hover:scale-105"
              style={{ background: "#f8fafc", border: "1px solid #e5e7eb", minWidth: "180px", height: "80px" }}
            >
              <span className="font-bold text-center" style={{ color: "#475569", fontSize: "0.9rem" }}>{name}</span>
            </div>
          ))}
        </div>
        {/* edge fade */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right,#fff,transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to left,#fff,transparent)" }} />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

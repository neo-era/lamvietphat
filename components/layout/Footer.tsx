import Image from "next/image"

const cols = [
  {
    title: "Trụ sở chính",
    items: [
      { ic: "📍", text: "63/23A, Liên Khu 16-18, P. Bình Trị Đông, Q. Bình Tân, TP.HCM" },
      { ic: "📞", text: "0989 725 507 · Hotline 0932 733 427" },
      { ic: "✉️", text: "lavipco.co@gmail.com" },
      { ic: "🌐", text: "lavipco.vercel.app" },
    ],
  },
  {
    title: "Các đơn vị trực thuộc",
    items: [
      { ic: "🏭", text: "Xưởng sản xuất trụ đèn & tủ điều khiển — TP.HCM" },
      { ic: "🚧", text: "Đội thi công công trình — phụ trách toàn miền Nam" },
      { ic: "🛠️", text: "Trung tâm bảo hành & dịch vụ kỹ thuật 24/7" },
    ],
  },
  {
    title: "Công ty con & liên doanh",
    items: [
      { ic: "🤝", text: "CTCP Chiếu sáng đô thị Lavipco Sài Gòn" },
      { ic: "⚡", text: "Liên doanh sản xuất đèn LED quốc tế" },
      { ic: "☀️", text: "Lavipco Solar — điện năng lượng mặt trời" },
      { ic: "🏗️", text: "Lavipco Engineering — tư vấn thiết kế" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "#003F7F", color: "#fff", padding: "4rem 0 2rem" }}>
      <div className="container-pad">
        {/* Brand row */}
        <div className="mb-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Lavipco" width={160} height={54} style={{ height: "48px", width: "auto" }} />
          </div>
          <p className="mt-4 max-w-2xl" style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.75 }}>
            Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) — Chuyên thi công, tư vấn, sản xuất thiết bị chiếu sáng đô thị, tín hiệu giao thông trên toàn quốc. Thành lập 22/05/2014 · MST: 1101748509.
          </p>
        </div>

        {/* 3 cols */}
        <div className="grid gap-10 mb-10" style={{ gridTemplateColumns: "1fr" }}>
          <style>{`@media(min-width:768px){.foot-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
          <div className="grid gap-10 foot-grid" style={{ gridTemplateColumns: "1fr" }}>
            {cols.map((c) => (
              <div key={c.title}>
                <h5 className="font-bold mb-5 pb-3" style={{ fontSize: "1rem", color: "#fff", borderBottom: "2px solid #f97316", display: "inline-block" }}>
                  {c.title}
                </h5>
                <ul className="flex flex-col gap-3 list-none">
                  {c.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2.5" style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: 1.7 }}>
                      <span className="shrink-0 mt-0.5" style={{ color: "#f97316" }}>{it.ic}</span>
                      <span>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
            © {year} Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) · MST 1101748509 · Thành lập 22/05/2014
          </p>
          <div className="flex gap-2">
            {[
              { label: "f", href: "#", title: "Facebook" },
              { label: "Z", href: "https://zalo.me/0989725507", title: "Zalo" },
              { label: "▶", href: "#", title: "YouTube" },
            ].map(({ label, href, title }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", fontSize: "0.85rem" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

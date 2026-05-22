import Link from "next/link"
import Image from "next/image"
import { companyInfo } from "@/lib/data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: "1px solid #232323", padding: "4rem 0 2rem", background: "#070707" }}>
      <div className="container-pad">
        <div
          className="grid gap-10 mb-12"
          style={{ gridTemplateColumns: "repeat(1,1fr)" }}
        >
          <style>{`
            @media(min-width:768px){
              .ft-grid { grid-template-columns: 1.8fr 1fr 1fr 1.5fr !important; gap: 2rem !important; }
            }
          `}</style>
          <div className="grid gap-10 mb-12 ft-grid" style={{ gridTemplateColumns: "1fr" }}>
            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="Lavipco"
                width={160}
                height={54}
                style={{ height: "54px", width: "auto", marginBottom: "0.85rem" }}
              />
              <p style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.75, maxWidth: "260px" }}>
                Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) — Chuyên chiếu sáng đô thị, tín hiệu giao thông và sản xuất thiết bị điện. Thành lập 2014 · TP.HCM.
              </p>
            </div>

            {/* Dịch vụ */}
            <div>
              <h5 style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#4a4a4a", fontWeight: 700, marginBottom: "1.1rem" }}>
                Dịch vụ
              </h5>
              <ul className="flex flex-col gap-2.5 list-none">
                {["Thi công đèn đường", "Tín hiệu giao thông", "Chiếu sáng cảnh quan", "Sản xuất trụ đèn", "Tư vấn thiết kế"].map((item) => (
                  <li key={item}>
                    <Link href="/linh-vuc" className="footer-link" style={{ fontSize: "0.865rem" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Công ty */}
            <div>
              <h5 style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#4a4a4a", fontWeight: 700, marginBottom: "1.1rem" }}>
                Công ty
              </h5>
              <ul className="flex flex-col gap-2.5 list-none">
                {[
                  { href: "/ve-chung-toi", label: "Giới thiệu" },
                  { href: "/san-pham", label: "Sản phẩm" },
                  { href: "/du-an", label: "Dự án" },
                  { href: "/lien-he", label: "Liên hệ" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footer-link" style={{ fontSize: "0.865rem" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liên hệ */}
            <div>
              <h5 style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#4a4a4a", fontWeight: 700, marginBottom: "1.1rem" }}>
                Liên hệ
              </h5>
              <div className="flex flex-col gap-2">
                {[
                  { icon: "📍", text: companyInfo.address },
                  { icon: "📞", text: `${companyInfo.phone} · Hotline: ${companyInfo.hotline}` },
                  { icon: "✉️", text: companyInfo.email },
                  { icon: "🔏", text: `MST: ${companyInfo.taxCode}` },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex gap-2" style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.55 }}>
                    <span style={{ color: "#3b82f6", flexShrink: 0 }}>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center flex-wrap gap-4"
          style={{ paddingTop: "2rem", borderTop: "1px solid #232323" }}
        >
          <p style={{ fontSize: "0.77rem", color: "#4a4a4a" }}>
            © {year} Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco) · MST {companyInfo.taxCode} · Thành lập {companyInfo.founded}
          </p>
          <div className="flex gap-2">
            {[
              { label: "f", href: "#" },
              { label: "Z", href: `https://zalo.me/${companyInfo.phone.replace(/\s/g, "")}` },
              { label: "▶", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
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

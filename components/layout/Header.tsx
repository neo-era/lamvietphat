"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-chung-toi", label: "Giới thiệu" },
  { href: "/linh-vuc", label: "Dịch vụ" },
  { href: "/du-an", label: "Dự án" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/chung-chi", label: "Chứng chỉ" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <style>{`
        .lvp-nav-hide-scrollbar::-webkit-scrollbar { display: none; }
        .lvp-cta-short { display: none; }
        @media (max-width: 480px) {
          .lvp-cta-full { display: none !important; }
          .lvp-cta-short { display: inline !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0.65rem 0",
          borderBottom: scrolled ? "1px solid #232323" : "1px solid transparent",
          background: scrolled ? "rgba(7,7,7,0.92)" : "rgba(7,7,7,0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="container-pad"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Lavipco"
              width={180}
              height={60}
              style={{ height: "38px", width: "auto" }}
              priority
            />
          </Link>

          {/* Nav — horizontal, scrolls if overflow */}
          <ul
            className="lvp-nav-hide-scrollbar"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "1.25rem",
              flex: "1 1 auto",
              minWidth: 0,
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href} style={{ flexShrink: 0 }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: pathname === link.href ? "#f8f8f8" : "#9a9a9a",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f8f8f8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#f8f8f8" : "#9a9a9a")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — only one label visible per screen size */}
          <Link
            href="/lien-he"
            className="gradient-blue glow-blue"
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fff",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span className="lvp-cta-full">Liên hệ ngay</span>
            <span className="lvp-cta-short">Liên hệ</span>
          </Link>
        </div>
      </nav>

      {/* Floating contact buttons */}
      <div style={{ position: "fixed", right: "1rem", bottom: "1.5rem", zIndex: 40, display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
        <a
          href="tel:0989725507"
          className="float-call-anim"
          style={{ width: "3rem", height: "3rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1rem", fontWeight: 700, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", boxShadow: "0 4px 24px rgba(0,0,0,0.55)" }}
          title="Gọi ngay: 0989 725 507"
        >
          📞
        </a>
        <a
          href="https://zalo.me/0989725507"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "3rem", height: "3rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.75rem", fontWeight: 700, background: "#0068ff", boxShadow: "0 4px 24px rgba(0,0,0,0.55)", transition: "transform 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          title="Zalo"
        >
          Zalo
        </a>
      </div>
    </>
  )
}

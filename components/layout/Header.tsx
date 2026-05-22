"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-chung-toi", label: "Giới thiệu" },
  { href: "/du-an", label: "Dự án" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/con-nguoi", label: "Con người Lavipco" },
  { href: "/lien-he", label: "Liên hệ" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          padding: "0.7rem 0",
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.9)",
          borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-pad flex items-center justify-between gap-4">
          {/* Logo LAVIPCO */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Lavipco"
              width={180}
              height={60}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav — lg+ (≥1024px) */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                  style={{ color: pathname === link.href ? "#003F7F" : "#374151" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#003F7F")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#003F7F" : "#374151")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: counter + flags */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "#f3f4f6", fontSize: "0.7rem", color: "#6b7280" }}>
              <span><strong style={{ color: "#003F7F" }}>12</strong> hôm nay</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span><strong style={{ color: "#003F7F" }}>84</strong> tuần</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span><strong style={{ color: "#003F7F" }}>25,431</strong> tổng</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              <button title="Tiếng Việt" className="w-7 h-7 rounded-md flex items-center justify-center text-base hover:scale-110 transition-transform" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>🇻🇳</button>
              <button title="English" className="w-7 h-7 rounded-md flex items-center justify-center text-base hover:scale-110 transition-transform opacity-60" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>🇬🇧</button>
            </div>

            {/* Hamburger — below lg */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer border-0 bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="block rounded-sm transition-all duration-300" style={{ background: "#1a1a1a", width: "22px", height: "2px", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span className="block rounded-sm transition-all duration-300" style={{ background: "#1a1a1a", width: "22px", height: "2px", opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }} />
              <span className="block rounded-sm transition-all duration-300" style={{ background: "#1a1a1a", width: "22px", height: "2px", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 transition-opacity duration-300"
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl font-bold transition-colors duration-200"
            style={{ color: pathname === link.href ? "#003F7F" : "#1a1a1a" }}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex items-center gap-2 mt-4">
          <button className="w-9 h-9 rounded-md flex items-center justify-center text-lg" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>🇻🇳</button>
          <button className="w-9 h-9 rounded-md flex items-center justify-center text-lg opacity-60" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>🇬🇧</button>
        </div>
      </div>

      {/* Floating buttons — 4 items */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-2.5 items-center">
        <a
          href="https://zalo.me/0989725507"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xl transition-transform hover:scale-110"
          style={{ background: "#0068ff", boxShadow: "0 4px 16px rgba(0,104,255,0.4)" }}
          title="Zalo"
        >
          Zalo
        </a>
        <a
          href="tel:0989725507"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl float-call-anim"
          style={{ background: "linear-gradient(135deg,#16a34a,#22c55e)", boxShadow: "0 4px 16px rgba(34,197,94,0.45)" }}
          title="Gọi: 0989 725 507"
        >
          📞
        </a>
        <Link
          href="/lien-he"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[0.6rem] font-bold shadow-xl text-center leading-tight transition-transform hover:scale-110"
          style={{ background: "linear-gradient(135deg,#ea580c,#f97316)", boxShadow: "0 4px 16px rgba(249,115,22,0.45)" }}
          title="Lavipco Smart"
        >
          Smart
        </Link>
        <Link
          href="/ve-chung-toi"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl transition-transform hover:scale-110"
          style={{ background: "linear-gradient(135deg,#003F7F,#0066CC)", boxShadow: "0 4px 16px rgba(0,63,127,0.45)" }}
          title="Thông tin"
        >
          ℹ
        </Link>
      </div>
    </>
  )
}

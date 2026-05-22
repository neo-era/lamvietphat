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
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          padding: "0.85rem 0",
          borderBottom: scrolled ? "1px solid #232323" : "1px solid transparent",
          background: scrolled ? "rgba(7,7,7,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        }}
      >
        <div className="container-pad flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Lavipco"
              width={180}
              height={60}
              style={{ height: "56px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: pathname === link.href ? "#f8f8f8" : "#9a9a9a",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f8f8f8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#f8f8f8" : "#9a9a9a")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/lien-he"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 gradient-blue glow-blue hover:opacity-90"
            >
              Liên hệ ngay
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer border-0 bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className="block w-5.5 h-0.5 rounded-sm transition-all duration-300"
                style={{
                  background: "#9a9a9a",
                  transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
                }}
              />
              <span
                className="block w-5.5 h-0.5 rounded-sm transition-all duration-300"
                style={{
                  background: "#9a9a9a",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block w-5.5 h-0.5 rounded-sm transition-all duration-300"
                style={{
                  background: "#9a9a9a",
                  transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300"
        style={{
          background: "rgba(7,7,7,0.97)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl font-black text-white transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f8f8")}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/lien-he"
          className="mt-2 px-7 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue"
        >
          Liên hệ ngay →
        </Link>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-2 items-center">
        <a
          href="tel:0989725507"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl float-call-anim"
          style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", boxShadow: "0 4px 24px rgba(0,0,0,0.55)" }}
          title="Gọi ngay: 0989 725 507"
        >
          📞
        </a>
        <a
          href="https://zalo.me/0989725507"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xl transition-transform hover:scale-110"
          style={{ background: "#0068ff", boxShadow: "0 4px 24px rgba(0,0,0,0.55)" }}
          title="Zalo"
        >
          Zalo
        </a>
      </div>
    </>
  )
}

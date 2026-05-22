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
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          padding: "0.65rem 0",
          borderBottom: scrolled ? "1px solid #232323" : "1px solid transparent",
          background: scrolled ? "rgba(7,7,7,0.88)" : "rgba(7,7,7,0.45)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="container-pad flex items-center gap-3 sm:gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Lavipco"
              width={180}
              height={60}
              style={{ height: "38px", width: "auto" }}
              priority
            />
          </Link>

          {/* Nav — always horizontal at top, scroll on mobile if overflow */}
          <ul
            className="flex items-center gap-x-4 sm:gap-x-5 lg:gap-x-7 list-none flex-1 min-w-0 overflow-x-auto no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
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

          {/* CTA — always visible, shrinks label on mobile */}
          <Link
            href="/lien-he"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all duration-200 gradient-blue glow-blue hover:opacity-90 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Liên hệ ngay</span>
            <span className="sm:hidden">Liên hệ</span>
          </Link>
        </div>
      </nav>

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

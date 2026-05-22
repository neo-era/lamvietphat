"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "🏠", exact: true },
  { href: "/admin/du-an", label: "Dự án", icon: "🏗️" },
  { href: "/admin/san-pham", label: "Sản phẩm", icon: "💡" },
  { href: "/admin/bao-gia", label: "Báo giá", icon: "📋" },
  { href: "/admin/lien-he", label: "Liên hệ", icon: "✉️" },
  { href: "/admin/cai-dat", label: "Cài đặt", icon: "⚙️" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  function isActive(item: typeof navItems[0]) {
    if (item.exact) return pathname === item.href
    return pathname.startsWith(item.href)
  }

  return (
    <aside className="flex flex-col" style={{ width: "240px", minHeight: "100vh", background: "#0d0d0d", borderRight: "1px solid #1c1c1c", position: "fixed", top: 0, left: 0, zIndex: 40 }}>
      {/* Logo */}
      <div className="px-6 py-5" style={{ borderBottom: "1px solid #1c1c1c" }}>
        <p className="font-black text-lg">Lavipco</p>
        <p style={{ fontSize: "0.7rem", color: "#4a4a4a", marginTop: "0.1rem" }}>Admin Panel</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all text-sm font-semibold"
            style={{
              background: isActive(item) ? "rgba(59,130,246,.12)" : "transparent",
              color: isActive(item) ? "#60a5fa" : "#9a9a9a",
              borderLeft: isActive(item) ? "2px solid #3b82f6" : "2px solid transparent",
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4" style={{ borderTop: "1px solid #1c1c1c" }}>
        <Link href="/" target="_blank" className="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all" style={{ color: "#4a4a4a" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#9a9a9a")} onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a4a")}>
          <span>🌐</span> Xem website
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-sm transition-all"
          style={{ color: "#ef4444", background: "transparent" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(239,68,68,.08)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
        >
          <span>🚪</span> Đăng xuất
        </button>
      </div>
    </aside>
  )
}

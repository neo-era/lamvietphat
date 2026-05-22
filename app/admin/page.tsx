import { prisma } from "@/lib/db"
import Link from "next/link"

async function getStats() {
  try {
    const [projects, products, unreadQuotes, unreadContacts, recentQuotes] = await Promise.all([
      prisma.project.count({ where: { published: true } }),
      prisma.product.count({ where: { published: true } }),
      prisma.quoteRequest.count({ where: { read: false } }),
      prisma.contactSubmission.count({ where: { read: false } }),
      prisma.quoteRequest.findMany({ take: 5, orderBy: { createdAt: "desc" } }),
    ])
    return { projects, products, unreadQuotes, unreadContacts, recentQuotes }
  } catch {
    return { projects: 0, products: 0, unreadQuotes: 0, unreadContacts: 0, recentQuotes: [] }
  }
}

const statusColors: Record<string, string> = {
  NEW: "#3b82f6",
  PROCESSING: "#f59e0b",
  QUOTED: "#22c55e",
  CLOSED: "#4a4a4a",
}

const statusLabels: Record<string, string> = {
  NEW: "Mới",
  PROCESSING: "Đang xử lý",
  QUOTED: "Đã báo giá",
  CLOSED: "Đóng",
}

export default async function AdminDashboard() {
  const { projects, products, unreadQuotes, unreadContacts, recentQuotes } = await getStats()

  const statCards = [
    { label: "Dự án đang hiển thị", value: projects, href: "/admin/du-an", icon: "🏗️" },
    { label: "Sản phẩm đang hiển thị", value: products, href: "/admin/san-pham", icon: "💡" },
    { label: "Báo giá chưa đọc", value: unreadQuotes, href: "/admin/bao-gia", icon: "📋", alert: unreadQuotes > 0 },
    { label: "Liên hệ chưa đọc", value: unreadContacts, href: "/admin/lien-he", icon: "✉️", alert: unreadContacts > 0 },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Dashboard</h1>
        <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>Tổng quan hệ thống</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))" }}>
        {statCards.map((card) => (
          <Link key={card.label} href={card.href} className="block rounded-xl p-5 transition-all" style={{ background: "#0d0d0d", border: `1px solid ${card.alert ? "rgba(59,130,246,.4)" : "#1c1c1c"}` }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,.4)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = card.alert ? "rgba(59,130,246,.4)" : "#1c1c1c")}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{card.icon}</span>
              {card.alert && <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />}
            </div>
            <p className="font-black text-3xl mb-1">{card.value}</p>
            <p style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>{card.label}</p>
          </Link>
        ))}
      </div>

      {/* Recent quotes */}
      <div className="rounded-xl overflow-hidden mb-8" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
          <h2 className="font-bold" style={{ fontSize: "0.9rem" }}>Yêu cầu báo giá gần đây</h2>
          <Link href="/admin/bao-gia" style={{ fontSize: "0.8rem", color: "#60a5fa" }}>Xem tất cả →</Link>
        </div>

        {recentQuotes.length === 0 ? (
          <div className="px-5 py-8 text-center" style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>Chưa có yêu cầu báo giá nào</div>
        ) : (
          <div>
            {recentQuotes.map((q, i) => (
              <div key={q.id} className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: i < recentQuotes.length - 1 ? "1px solid #141414" : "none" }}>
                <div>
                  <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{q.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>{q.productName} · {q.phone}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: `${statusColors[q.status]}18`, color: statusColors[q.status] }}>
                  {statusLabels[q.status]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="font-bold mb-4" style={{ fontSize: "0.9rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Thao tác nhanh</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/du-an/them" className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
            + Thêm dự án
          </Link>
          <Link href="/admin/san-pham/them" className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
            + Thêm sản phẩm
          </Link>
        </div>
      </div>
    </div>
  )
}

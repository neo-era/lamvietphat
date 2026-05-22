"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const STATUS_OPTIONS = [
  { value: "NEW", label: "Mới", color: "#3b82f6" },
  { value: "PROCESSING", label: "Đang xử lý", color: "#f59e0b" },
  { value: "QUOTED", label: "Đã báo giá", color: "#22c55e" },
  { value: "CLOSED", label: "Đóng", color: "#4a4a4a" },
]

interface Quote {
  id: string
  name: string
  phone: string
  email: string | null
  company: string | null
  productName: string
  message: string | null
  status: string
  read: boolean
  createdAt: Date
  product: { name: string } | null
}

export function QuoteTable({ quotes }: { quotes: Quote[] }) {
  const router = useRouter()
  const [selected, setSelected] = useState<Quote | null>(null)

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/quotes/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status, read: true }) })
    router.refresh()
  }

  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: selected ? "1fr 380px" : "1fr" }}>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
        {quotes.length === 0 ? (
          <div className="py-16 text-center" style={{ color: "#4a4a4a" }}>
            <p className="text-4xl mb-3">📋</p>
            <p className="text-sm">Chưa có yêu cầu báo giá nào</p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1c1c1c" }}>
                {["Khách hàng", "Sản phẩm", "Trạng thái", "Ngày", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4a4a4a", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {quotes.map((q, i) => {
                const statusOpt = STATUS_OPTIONS.find((s) => s.value === q.status) ?? STATUS_OPTIONS[0]
                return (
                  <tr
                    key={q.id}
                    onClick={() => { setSelected(q); updateStatus(q.id, q.status) }}
                    style={{ borderBottom: i < quotes.length - 1 ? "1px solid #141414" : "none", cursor: "pointer", background: selected?.id === q.id ? "#141414" : "transparent" }}
                    onMouseEnter={(e) => { if (selected?.id !== q.id) (e.currentTarget as HTMLTableRowElement).style.background = "#0d0d0d" }}
                    onMouseLeave={(e) => { if (selected?.id !== q.id) (e.currentTarget as HTMLTableRowElement).style.background = "transparent" }}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {!q.read && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />}
                        <div>
                          <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{q.name}</p>
                          <p style={{ fontSize: "0.72rem", color: "#4a4a4a" }}>{q.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3" style={{ fontSize: "0.82rem", color: "#9a9a9a", maxWidth: "200px" }}>
                      <p className="truncate">{q.productName}</p>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={q.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => updateStatus(q.id, e.target.value)}
                        className="px-2 py-0.5 rounded text-xs font-semibold cursor-pointer outline-none"
                        style={{ background: `${statusOpt.color}18`, color: statusOpt.color, border: `1px solid ${statusOpt.color}30` }}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3" style={{ fontSize: "0.75rem", color: "#4a4a4a", whiteSpace: "nowrap" }}>
                      {new Date(q.createdAt).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-4 py-3" style={{ fontSize: "0.75rem", color: "#60a5fa" }}>Xem →</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="rounded-xl overflow-hidden h-fit sticky" style={{ top: "2rem", background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
            <p className="font-bold text-sm">Chi tiết yêu cầu</p>
            <button onClick={() => setSelected(null)} style={{ color: "#4a4a4a", fontSize: "1.2rem", lineHeight: 1 }}>×</button>
          </div>
          <div className="px-5 py-4 flex flex-col gap-3">
            {[
              { label: "Họ tên", value: selected.name },
              { label: "Điện thoại", value: selected.phone },
              { label: "Email", value: selected.email ?? "—" },
              { label: "Công ty", value: selected.company ?? "—" },
              { label: "Sản phẩm", value: selected.productName },
              { label: "Ngày gửi", value: new Date(selected.createdAt).toLocaleString("vi-VN") },
            ].map((row) => (
              <div key={row.label}>
                <p style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{row.label}</p>
                <p style={{ fontSize: "0.875rem", color: "#f8f8f8" }}>{row.value}</p>
              </div>
            ))}
            {selected.message && (
              <div>
                <p style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Nội dung</p>
                <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.7, whiteSpace: "pre-line" }}>{selected.message}</p>
              </div>
            )}
          </div>
          <div className="px-5 pb-5">
            <a href={`tel:${selected.phone}`} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
              📞 Gọi {selected.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

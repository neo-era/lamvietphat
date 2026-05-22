"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Contact {
  id: string
  name: string
  phone: string
  email: string | null
  subject: string | null
  message: string
  read: boolean
  createdAt: Date
}

export function ContactTable({ contacts }: { contacts: Contact[] }) {
  const router = useRouter()
  const [selected, setSelected] = useState<Contact | null>(null)

  async function markRead(id: string) {
    await fetch(`/api/admin/contacts/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ read: true }) })
    router.refresh()
  }

  async function handleDelete(id: string) {
    if (!confirm("Xóa tin nhắn này?")) return
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" })
    if (selected?.id === id) setSelected(null)
    router.refresh()
  }

  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: selected ? "1fr 380px" : "1fr" }}>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
        {contacts.length === 0 ? (
          <div className="py-16 text-center" style={{ color: "#4a4a4a" }}>
            <p className="text-4xl mb-3">✉️</p>
            <p className="text-sm">Chưa có tin nhắn nào</p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1c1c1c" }}>
                {["Người gửi", "Chủ đề", "Ngày", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4a4a4a", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr
                  key={c.id}
                  onClick={() => { setSelected(c); markRead(c.id) }}
                  style={{ borderBottom: i < contacts.length - 1 ? "1px solid #141414" : "none", cursor: "pointer", background: selected?.id === c.id ? "#141414" : "transparent" }}
                  onMouseEnter={(e) => { if (selected?.id !== c.id) (e.currentTarget as HTMLTableRowElement).style.background = "#0d0d0d" }}
                  onMouseLeave={(e) => { if (selected?.id !== c.id) (e.currentTarget as HTMLTableRowElement).style.background = "transparent" }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {!c.read && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />}
                      <div>
                        <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{c.name}</p>
                        <p style={{ fontSize: "0.72rem", color: "#4a4a4a" }}>{c.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3" style={{ fontSize: "0.82rem", color: "#9a9a9a", maxWidth: "200px" }}>
                    <p className="truncate">{c.subject ?? c.message.slice(0, 50)}</p>
                  </td>
                  <td className="px-4 py-3" style={{ fontSize: "0.75rem", color: "#4a4a4a", whiteSpace: "nowrap" }}>
                    {new Date(c.createdAt).toLocaleDateString("vi-VN")}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(c.id) }}
                      className="px-2.5 py-1 rounded text-xs transition-all"
                      style={{ color: "#4a4a4a", border: "1px solid #1c1c1c" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(239,68,68,.3)" }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#4a4a4a"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1c1c1c" }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <div className="rounded-xl overflow-hidden h-fit sticky" style={{ top: "2rem", background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
            <p className="font-bold text-sm">Nội dung tin nhắn</p>
            <button onClick={() => setSelected(null)} style={{ color: "#4a4a4a", fontSize: "1.2rem", lineHeight: 1 }}>×</button>
          </div>
          <div className="px-5 py-4 flex flex-col gap-3">
            {[
              { label: "Họ tên", value: selected.name },
              { label: "Điện thoại", value: selected.phone },
              { label: "Email", value: selected.email ?? "—" },
              { label: "Chủ đề", value: selected.subject ?? "—" },
              { label: "Ngày gửi", value: new Date(selected.createdAt).toLocaleString("vi-VN") },
            ].map((row) => (
              <div key={row.label}>
                <p style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{row.label}</p>
                <p style={{ fontSize: "0.875rem", color: "#f8f8f8" }}>{row.value}</p>
              </div>
            ))}
            <div>
              <p style={{ fontSize: "0.68rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Nội dung</p>
              <p style={{ fontSize: "0.875rem", color: "#9a9a9a", lineHeight: 1.7, whiteSpace: "pre-line" }}>{selected.message}</p>
            </div>
          </div>
          <div className="px-5 pb-5 flex gap-2">
            <a href={`tel:${selected.phone}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
              📞 Gọi
            </a>
            {selected.email && (
              <a href={`mailto:${selected.email}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
                ✉️ Email
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

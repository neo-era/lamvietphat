"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Props {
  id: string
  endpoint: string
  label: string
}

export function AdminDeleteButton({ id, endpoint, label }: Props) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    setLoading(true)
    await fetch(`${endpoint}/${id}`, { method: "DELETE" })
    router.refresh()
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-1.5">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="px-3 py-1.5 rounded text-xs font-semibold transition-all disabled:opacity-50"
          style={{ background: "rgba(239,68,68,.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,.2)" }}
        >
          {loading ? "..." : "Xác nhận"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-3 py-1.5 rounded text-xs font-semibold"
          style={{ background: "transparent", color: "#4a4a4a" }}
        >
          Hủy
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      title={`Xóa "${label}"`}
      className="px-3 py-1.5 rounded text-xs font-semibold transition-all"
      style={{ background: "transparent", color: "#4a4a4a", border: "1px solid #1c1c1c" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#ef4444"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(239,68,68,.3)" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#4a4a4a"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1c1c1c" }}
    >
      Xóa
    </button>
  )
}

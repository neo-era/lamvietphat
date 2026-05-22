"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const form = e.currentTarget
    const username = (form.elements.namedItem("username") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value

    const res = await signIn("credentials", { username, password, redirect: false })
    if (res?.ok) {
      router.push("/admin")
      router.refresh()
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0a0a" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-black text-2xl mb-1">Lavipco</p>
          <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>Admin Panel</p>
        </div>

        <div className="rounded-2xl p-8" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
          <h1 className="font-bold text-lg mb-6">Đăng nhập</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Tên đăng nhập</label>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full px-4 py-2.5 rounded-lg outline-none transition-all"
                style={{ background: "#141414", border: "1px solid #2e2e2e", color: "#f8f8f8", fontSize: "0.9rem" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
              />
            </div>
            <div>
              <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Mật khẩu</label>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-2.5 rounded-lg outline-none transition-all"
                style={{ background: "#141414", border: "1px solid #2e2e2e", color: "#f8f8f8", fontSize: "0.9rem" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
              />
            </div>

            {error && <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-50"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

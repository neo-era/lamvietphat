"use client"

import { useState } from "react"

interface Props {
  productName: string
}

export function QuoteForm({ productName }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      productName,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    background: "#0d0d0d",
    border: "1px solid #2e2e2e",
    color: "#f8f8f8",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  }

  return (
    <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
      <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />

      {status === "success" ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-bold mb-2 text-lg">Gửi yêu cầu thành công!</h3>
          <p style={{ color: "#9a9a9a" }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ làm việc.</p>
          <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
            Gửi yêu cầu khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Product name (readonly) */}
          <div>
            <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Sản phẩm quan tâm</label>
            <input type="text" value={productName} readOnly style={{ ...inputStyle, color: "#60a5fa", background: "#141414" }} />
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:640px){.qf-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
            <div className="grid gap-4 qf-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Họ và tên *</label>
                <input name="name" type="text" required placeholder="Nguyễn Văn A" style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Số điện thoại *</label>
                <input name="phone" type="tel" required placeholder="0989 725 507" style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
              </div>
            </div>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
            <div className="grid gap-4 qf-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Email</label>
                <input name="email" type="email" placeholder="email@example.com" style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Công ty / Tổ chức</label>
                <input name="company" type="text" placeholder="Tên công ty" style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Nội dung yêu cầu</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Mô tả nhu cầu của bạn: số lượng cần, địa điểm lắp đặt, tiêu chuẩn kỹ thuật..."
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
            />
          </div>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#ef4444" }}>Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp 0989 725 507.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Đang gửi..." : "Gửi yêu cầu báo giá →"}
          </button>

          <p className="text-center" style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>
            Hoặc gọi trực tiếp: <a href="tel:0989725507" style={{ color: "#60a5fa" }}>0989 725 507</a>
          </p>
        </form>
      )}
    </div>
  )
}

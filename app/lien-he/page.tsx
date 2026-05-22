"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { companyInfo } from "@/lib/data"

export default function LienHePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  const inputStyle: React.CSSProperties = {
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

  const contacts = [
    { icon: "📞", label: "Điện thoại", value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
    { icon: "🔥", label: "Hotline", value: companyInfo.hotline, href: `tel:${companyInfo.hotline}` },
    { icon: "✉️", label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: "📍", label: "Địa chỉ", value: companyInfo.address, href: null },
    { icon: "🏢", label: "MST", value: companyInfo.taxCode, href: null },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "40vh", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="absolute pointer-events-none rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,.18) 0%,transparent 65%)", width: "900px", height: "600px", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto w-full">
          <ScrollReveal><div className="tag-label mb-6 justify-center">Liên hệ</div></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-black mb-6" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              Bắt đầu <span className="gradient-text">hợp tác</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "1.1rem", color: "#9a9a9a", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Khảo sát miễn phí · Báo giá trong 24 giờ · Tư vấn kỹ thuật trực tiếp
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-gradient" />

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-12" style={{ gridTemplateColumns: "1fr" }}>
            <style>{`@media(min-width:900px){.lh-grid{grid-template-columns:1fr 420px;gap:4rem;}}`}</style>
            <div className="grid lh-grid" style={{ gridTemplateColumns: "1fr" }}>

              {/* Left: form */}
              <ScrollReveal>
                <div>
                  <h2 className="font-black mb-2" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", letterSpacing: "-0.02em" }}>Gửi yêu cầu</h2>
                  <p className="mb-8" style={{ color: "#9a9a9a", lineHeight: 1.7 }}>Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.</p>

                  {status === "success" ? (
                    <div className="rounded-2xl p-8 text-center" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="font-bold mb-2 text-lg">Gửi thành công!</h3>
                      <p className="mb-6" style={{ color: "#9a9a9a" }}>Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ làm việc.</p>
                      <button onClick={() => setStatus("idle")} className="px-6 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr" }}>
                        <style>{`@media(min-width:640px){.lh-form-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
                        <div className="grid gap-4 lh-form-grid" style={{ gridTemplateColumns: "1fr" }}>
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
                      <div>
                        <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Email</label>
                        <input name="email" type="email" placeholder="email@example.com" style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Chủ đề / Nhu cầu</label>
                        <input name="subject" type="text" placeholder="Báo giá đèn đường LED, tư vấn thiết kế..." style={inputStyle} onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
                      </div>
                      <div>
                        <label className="block mb-1.5 text-sm font-semibold" style={{ color: "#9a9a9a" }}>Nội dung *</label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          placeholder="Mô tả yêu cầu của bạn: loại công trình, địa điểm, quy mô, tiêu chuẩn kỹ thuật cần đáp ứng..."
                          style={{ ...inputStyle, resize: "vertical" }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm" style={{ color: "#ef4444" }}>Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp {companyInfo.phone}.</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3.5 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all disabled:opacity-50"
                      >
                        {status === "loading" ? "Đang gửi..." : "Gửi yêu cầu →"}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Right: contact info */}
              <div>
                <ScrollReveal delay={0.1}>
                  <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
                      <p className="font-bold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Thông tin liên hệ</p>
                    </div>
                    {contacts.map((c, i) => (
                      <div key={c.label} className="flex gap-3 px-5 py-4" style={{ borderBottom: i < contacts.length - 1 ? "1px solid #1c1c1c" : "none" }}>
                        <span className="text-xl mt-0.5">{c.icon}</span>
                        <div>
                          <p style={{ fontSize: "0.72rem", color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{c.label}</p>
                          {c.href ? (
                            <a href={c.href} className="font-semibold transition-colors" style={{ fontSize: "0.9rem", color: "#60a5fa" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#93c5fd")} onMouseLeave={(e) => (e.currentTarget.style.color = "#60a5fa")}>
                              {c.value}
                            </a>
                          ) : (
                            <p className="font-semibold" style={{ fontSize: "0.875rem", color: "#f8f8f8", lineHeight: 1.5 }}>{c.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Working hours */}
                <ScrollReveal delay={0.15}>
                  <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
                      <p className="font-bold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Giờ làm việc</p>
                    </div>
                    {[
                      { day: "Thứ 2 — Thứ 6", hours: "07:30 — 17:00" },
                      { day: "Thứ 7", hours: "07:30 — 12:00" },
                      { day: "Chủ nhật", hours: "Nghỉ" },
                    ].map((row, i) => (
                      <div key={row.day} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: i < 2 ? "1px solid #1c1c1c" : "none" }}>
                        <span style={{ fontSize: "0.85rem", color: "#9a9a9a" }}>{row.day}</span>
                        <span className="font-semibold" style={{ fontSize: "0.85rem", color: row.hours === "Nghỉ" ? "#4a4a4a" : "#f8f8f8" }}>{row.hours}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Bank info */}
                <ScrollReveal delay={0.2}>
                  <div className="rounded-2xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #232323" }}>
                    <div className="px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
                      <p className="font-bold" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#4a4a4a" }}>Thông tin ngân hàng</p>
                    </div>
                    <div className="px-5 py-4">
                      <p style={{ fontSize: "0.8rem", color: "#4a4a4a", marginBottom: "0.5rem" }}>Thông tin TK</p>
                      <p className="font-semibold" style={{ color: "#60a5fa", lineHeight: 1.6 }}>{companyInfo.bank}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="container-pad" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden" style={{ height: "400px", border: "1px solid #232323" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.234!2d106.6!3d10.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzAwLjAiTiAxMDbCsDM2JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lavipco location"
              />
            </div>
          </ScrollReveal>
        </div>
        <div className="section-pad" />
      </section>
    </>
  )
}

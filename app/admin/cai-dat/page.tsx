"use client"

import { useState } from "react"

const defaultSettings = {
  company_name: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát",
  company_brand: "Lavipco",
  company_phone: "0989 725 507",
  company_hotline: "0932 733 427",
  company_email: "lavipco.co@gmail.com",
  company_address: "63/23A, Liên Khu 16-18, P. Bình Trị Đông, Q. Bình Tân, TP.HCM",
  company_tax: "1101748509",
  company_bank: "96968686868 — ACB, CN Châu Văn Liêm, Q.5, TP.HCM",
  hero_title: "Chiếu sáng đô thị — Chất lượng kỹ nghệ",
  hero_sub: "Lavipco — đơn vị chuyên thi công lắp đặt hệ thống chiếu sáng đường phố, tín hiệu giao thông và cảnh quan đô thị.",
  facebook_url: "",
  zalo_url: "",
  google_maps_embed: "",
}

type SettingKey = keyof typeof defaultSettings

const sections = [
  {
    title: "Thông tin công ty",
    fields: [
      { key: "company_name" as SettingKey, label: "Tên công ty" },
      { key: "company_brand" as SettingKey, label: "Thương hiệu" },
      { key: "company_phone" as SettingKey, label: "Điện thoại" },
      { key: "company_hotline" as SettingKey, label: "Hotline" },
      { key: "company_email" as SettingKey, label: "Email" },
      { key: "company_address" as SettingKey, label: "Địa chỉ" },
      { key: "company_tax" as SettingKey, label: "Mã số thuế" },
      { key: "company_bank" as SettingKey, label: "Ngân hàng / STK" },
    ],
  },
  {
    title: "Trang chủ",
    fields: [
      { key: "hero_title" as SettingKey, label: "Tiêu đề Hero" },
      { key: "hero_sub" as SettingKey, label: "Mô tả Hero" },
    ],
  },
  {
    title: "Mạng xã hội",
    fields: [
      { key: "facebook_url" as SettingKey, label: "Facebook URL" },
      { key: "zalo_url" as SettingKey, label: "Zalo URL" },
      { key: "google_maps_embed" as SettingKey, label: "Google Maps Embed URL" },
    ],
  },
]

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.65rem 0.85rem", borderRadius: "8px",
  background: "#141414", border: "1px solid #2e2e2e", color: "#f8f8f8",
  fontSize: "0.875rem", outline: "none", transition: "border-color 0.2s",
}

export default function AdminSettingsPage() {
  const [values, setValues] = useState(defaultSettings)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)
    try {
      await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1">Cài đặt</h1>
          <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>Thông tin công ty và cấu hình hệ thống</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-50"
          style={{ background: saved ? "rgba(34,197,94,.2)" : "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: saved ? "#22c55e" : "#fff", border: saved ? "1px solid rgba(34,197,94,.3)" : "none" }}
        >
          {saved ? "✓ Đã lưu" : loading ? "Đang lưu..." : "Lưu cài đặt"}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
            <div className="px-5 py-4" style={{ borderBottom: "1px solid #1c1c1c" }}>
              <p className="font-bold text-sm">{section.title}</p>
            </div>
            <div className="p-5 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>{field.label}</label>
                  <input
                    value={values[field.key]}
                    onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

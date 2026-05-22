"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const PROJECT_CATEGORIES = [
  { value: "DEN_DUONG", label: "Hệ thống đèn đường" },
  { value: "TIN_HIEU_GIAO_THONG", label: "Tín hiệu giao thông" },
  { value: "CANH_QUAN", label: "Chiếu sáng cảnh quan" },
  { value: "CAMERA_VMS", label: "Camera / VMS" },
  { value: "DIEN_NGOAI_VI", label: "Điện ngoại vi & Hạ tầng" },
]

interface DefaultValues {
  title?: string; slug?: string; category?: string; client?: string
  location?: string; province?: string; year?: string; contractValue?: string
  shortDesc?: string; description?: string; featured?: boolean; published?: boolean
}

interface Props {
  defaultValues?: DefaultValues
  projectId?: string
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.65rem 0.85rem", borderRadius: "8px",
  background: "#141414", border: "1px solid #2e2e2e", color: "#f8f8f8",
  fontSize: "0.875rem", outline: "none", transition: "border-color 0.2s",
}

export function ProjectForm({ defaultValues = {}, projectId }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function slugify(str: string) {
    return str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const form = e.currentTarget
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value ?? ""
    const getChecked = (name: string) => (form.elements.namedItem(name) as HTMLInputElement)?.checked ?? false

    const body = {
      title: get("title"), slug: get("slug"), category: get("category"),
      client: get("client"), location: get("location"), province: get("province"),
      year: parseInt(get("year")), contractValue: get("contractValue") ? BigInt(get("contractValue")) : null,
      shortDesc: get("shortDesc"), description: get("description"),
      featured: getChecked("featured"), published: getChecked("published"),
    }

    try {
      const res = await fetch(projectId ? `/api/admin/projects/${projectId}` : "/api/admin/projects", {
        method: projectId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body, (_, v) => typeof v === "bigint" ? v.toString() : v),
      })
      if (!res.ok) throw new Error(await res.text())
      router.push("/admin/du-an")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lỗi không xác định")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Tên dự án *</label>
          <input name="title" required defaultValue={defaultValues.title} style={inputStyle}
            onChange={(e) => { if (!projectId) { const s = e.currentTarget.form?.elements.namedItem("slug") as HTMLInputElement; if (s) s.value = slugify(e.target.value) } }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Slug *</label>
          <input name="slug" required defaultValue={defaultValues.slug} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Lĩnh vực *</label>
          <select name="category" required defaultValue={defaultValues.category ?? "DEN_DUONG"} style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}>
            {PROJECT_CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Năm *</label>
          <input name="year" type="number" required defaultValue={defaultValues.year ?? new Date().getFullYear()} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Giá trị HĐ (đồng)</label>
          <input name="contractValue" type="number" defaultValue={defaultValues.contractValue} placeholder="3204932209" style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Khách hàng *</label>
          <input name="client" required defaultValue={defaultValues.client} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Tỉnh / Thành phố *</label>
          <input name="province" required defaultValue={defaultValues.province} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Địa điểm cụ thể</label>
          <input name="location" defaultValue={defaultValues.location} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
      </div>

      <div>
        <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mô tả ngắn *</label>
        <input name="shortDesc" required defaultValue={defaultValues.shortDesc} style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
      </div>

      <div>
        <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mô tả chi tiết</label>
        <textarea name="description" rows={8} defaultValue={defaultValues.description} style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input name="featured" type="checkbox" defaultChecked={defaultValues.featured} style={{ accentColor: "#3b82f6" }} />
          <span style={{ color: "#9a9a9a" }}>Nổi bật (hiển thị trang chủ)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input name="published" type="checkbox" defaultChecked={defaultValues.published ?? true} style={{ accentColor: "#3b82f6" }} />
          <span style={{ color: "#9a9a9a" }}>Hiển thị</span>
        </label>
      </div>

      {error && <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-50" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
          {loading ? "Đang lưu..." : projectId ? "Cập nhật" : "Tạo dự án"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
          Hủy
        </button>
      </div>
    </form>
  )
}

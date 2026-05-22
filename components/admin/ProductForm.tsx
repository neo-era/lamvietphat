"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const PRODUCT_CATEGORIES = [
  { value: "DEN_DUONG_LED", label: "Đèn đường LED" },
  { value: "DEN_PHA_LED", label: "Đèn pha LED" },
  { value: "DEN_CONG_VIEN", label: "Đèn công viên LED" },
  { value: "TRU_DEN", label: "Trụ đèn & Cần đèn" },
  { value: "TU_DIEU_KHIEN", label: "Tủ điều khiển" },
  { value: "HE_THONG_DIEU_KHIEN", label: "Hệ thống điều khiển" },
  { value: "DEN_TIN_HIEU", label: "Đèn tín hiệu giao thông" },
  { value: "CAMERA_VMS", label: "Camera & Bảng VMS" },
  { value: "DEN_CANH_QUAN", label: "Đèn cảnh quan" },
]

interface DefaultValues {
  name?: string; slug?: string; category?: string; shortDesc?: string
  description?: string; tags?: string; featured?: boolean; published?: boolean
}

interface Props {
  defaultValues?: DefaultValues
  productId?: string
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.65rem 0.85rem", borderRadius: "8px",
  background: "#141414", border: "1px solid #2e2e2e", color: "#f8f8f8",
  fontSize: "0.875rem", outline: "none", transition: "border-color 0.2s",
}

export function ProductForm({ defaultValues = {}, productId }: Props) {
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

    const tags = get("tags").split(",").map((t) => t.trim()).filter(Boolean)
    const body = {
      name: get("name"), slug: get("slug"), category: get("category"),
      shortDesc: get("shortDesc"), description: get("description"),
      tags, featured: getChecked("featured"), published: getChecked("published"),
      specs: [], images: [],
    }

    try {
      const res = await fetch(productId ? `/api/admin/products/${productId}` : "/api/admin/products", {
        method: productId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error(await res.text())
      router.push("/admin/san-pham")
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
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Tên sản phẩm *</label>
          <input name="name" required defaultValue={defaultValues.name} style={inputStyle}
            onChange={(e) => { if (!productId) { const s = e.currentTarget.form?.elements.namedItem("slug") as HTMLInputElement; if (s) s.value = slugify(e.target.value) } }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
        <div>
          <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Slug *</label>
          <input name="slug" required defaultValue={defaultValues.slug} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
        </div>
      </div>

      <div>
        <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Danh mục *</label>
        <select name="category" required defaultValue={defaultValues.category ?? "DEN_DUONG_LED"} style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}>
          {PRODUCT_CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
      </div>

      <div>
        <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mô tả ngắn *</label>
        <input name="shortDesc" required defaultValue={defaultValues.shortDesc} style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")} onBlur={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")} />
      </div>

      <div>
        <label className="block mb-1.5 text-xs font-semibold" style={{ color: "#4a4a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Tags (phân cách bằng dấu phẩy)</label>
        <input name="tags" defaultValue={defaultValues.tags} placeholder="LED, IP65, 100W" style={inputStyle}
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
          <span style={{ color: "#9a9a9a" }}>Nổi bật</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input name="published" type="checkbox" defaultChecked={defaultValues.published ?? true} style={{ accentColor: "#3b82f6" }} />
          <span style={{ color: "#9a9a9a" }}>Hiển thị</span>
        </label>
      </div>

      {error && <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-50" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
          {loading ? "Đang lưu..." : productId ? "Cập nhật" : "Tạo sản phẩm"}
        </button>
        <button type="button" onClick={() => router.back()} className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
          Hủy
        </button>
      </div>
    </form>
  )
}

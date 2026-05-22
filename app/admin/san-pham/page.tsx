import { prisma } from "@/lib/db"
import Link from "next/link"
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton"

async function getProducts() {
  try {
    return await prisma.product.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] })
  } catch {
    return []
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  DEN_DUONG_LED: "Đèn đường LED", DEN_PHA_LED: "Đèn pha LED",
  DEN_CONG_VIEN: "Đèn công viên", TRU_DEN: "Trụ đèn",
  TU_DIEU_KHIEN: "Tủ điều khiển", HE_THONG_DIEU_KHIEN: "Hệ thống ĐK",
  DEN_TIN_HIEU: "Đèn tín hiệu", CAMERA_VMS: "Camera & VMS", DEN_CANH_QUAN: "Đèn cảnh quan",
}

export default async function AdminProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1">Sản phẩm</h1>
          <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{products.length} sản phẩm</p>
        </div>
        <Link href="/admin/san-pham/them" className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
          + Thêm sản phẩm
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
        {products.length === 0 ? (
          <div className="py-16 text-center" style={{ color: "#4a4a4a" }}>
            <p className="text-4xl mb-3">💡</p>
            <p className="text-sm">Chưa có sản phẩm nào. <Link href="/admin/san-pham/them" style={{ color: "#60a5fa" }}>Thêm ngay</Link></p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1c1c1c" }}>
                {["Tên sản phẩm", "Danh mục", "Nổi bật", "Trạng thái", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4a4a4a", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className="table-row-hover" style={{ borderBottom: i < products.length - 1 ? "1px solid #141414" : "none" }}>
                  <td className="px-4 py-3">
                    <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{p.name}</p>
                    <p className="truncate" style={{ fontSize: "0.72rem", color: "#4a4a4a", maxWidth: "280px" }}>{p.shortDesc}</p>
                  </td>
                  <td className="px-4 py-3" style={{ fontSize: "0.82rem", color: "#9a9a9a" }}>
                    {CATEGORY_LABELS[p.category] ?? p.category}
                  </td>
                  <td className="px-4 py-3">
                    <span style={{ fontSize: "0.85rem" }}>{p.featured ? "⭐" : "—"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ background: p.published ? "rgba(34,197,94,.12)" : "rgba(74,74,74,.2)", color: p.published ? "#22c55e" : "#4a4a4a" }}>
                      {p.published ? "Hiển thị" : "Ẩn"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/san-pham/${p.id}`} className="px-3 py-1.5 rounded text-xs font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
                        Sửa
                      </Link>
                      <AdminDeleteButton id={p.id} endpoint="/api/admin/products" label={p.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

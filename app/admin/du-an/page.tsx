import { prisma } from "@/lib/db"
import Link from "next/link"
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton"
import { formatPrice } from "@/lib/utils"

async function getProjects() {
  try {
    return await prisma.project.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] })
  } catch {
    return []
  }
}

export default async function AdminProjectsPage() {
  const projects = await getProjects()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1">Dự án</h1>
          <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{projects.length} dự án</p>
        </div>
        <Link href="/admin/du-an/them" className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}>
          + Thêm dự án
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: "#0d0d0d", border: "1px solid #1c1c1c" }}>
        {projects.length === 0 ? (
          <div className="py-16 text-center" style={{ color: "#4a4a4a" }}>
            <p className="text-4xl mb-3">🏗️</p>
            <p className="text-sm">Chưa có dự án nào. <Link href="/admin/du-an/them" style={{ color: "#60a5fa" }}>Thêm ngay</Link></p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1c1c1c" }}>
                {["Tên dự án", "Tỉnh", "Năm", "Giá trị", "Trạng thái", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4a4a4a", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i < projects.length - 1 ? "1px solid #141414" : "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = "#141414")} onMouseLeave={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = "transparent")}>
                  <td className="px-4 py-3">
                    <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{p.title}</p>
                    <p style={{ fontSize: "0.72rem", color: "#4a4a4a" }}>{p.client}</p>
                  </td>
                  <td className="px-4 py-3" style={{ fontSize: "0.85rem", color: "#9a9a9a" }}>{p.province}</td>
                  <td className="px-4 py-3" style={{ fontSize: "0.85rem", color: "#9a9a9a" }}>{p.year}</td>
                  <td className="px-4 py-3" style={{ fontSize: "0.85rem", color: "#9a9a9a" }}>
                    {p.contractValue ? formatPrice(Number(p.contractValue)) : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ background: p.published ? "rgba(34,197,94,.12)" : "rgba(74,74,74,.2)", color: p.published ? "#22c55e" : "#4a4a4a" }}>
                      {p.published ? "Hiển thị" : "Ẩn"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/du-an/${p.id}`} className="px-3 py-1.5 rounded text-xs font-semibold transition-all" style={{ background: "#141414", border: "1px solid #232323", color: "#9a9a9a" }}>
                        Sửa
                      </Link>
                      <AdminDeleteButton id={p.id} endpoint="/api/admin/projects" label={p.title} />
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

import type { Metadata } from "next"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/AdminSidebar"

export const metadata: Metadata = { title: { default: "Admin — Lavipco", template: "%s — Admin Lavipco" } }

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session) redirect("/admin/login")

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <AdminSidebar />
      <main style={{ marginLeft: "240px", minHeight: "100vh", padding: "2rem" }}>
        {children}
      </main>
    </div>
  )
}

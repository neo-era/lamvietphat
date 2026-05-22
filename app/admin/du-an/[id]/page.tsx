import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import { ProjectForm } from "@/components/admin/ProjectForm"

export default async function AdminEditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let project = null
  try {
    project = await prisma.project.findUnique({ where: { id } })
  } catch {
    // DB not connected
  }
  if (!project) notFound()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Sửa dự án</h1>
        <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{project.title}</p>
      </div>
      <ProjectForm
        defaultValues={{
          title: project.title,
          slug: project.slug,
          category: project.category,
          client: project.client,
          location: project.location,
          province: project.province,
          year: String(project.year),
          contractValue: project.contractValue ? String(project.contractValue) : "",
          shortDesc: project.shortDesc,
          description: project.description,
          featured: project.featured,
          published: project.published,
        }}
        projectId={project.id}
      />
    </div>
  )
}

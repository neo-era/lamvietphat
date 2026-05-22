import { ProjectForm } from "@/components/admin/ProjectForm"

export default function AdminAddProjectPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Thêm dự án mới</h1>
      </div>
      <ProjectForm />
    </div>
  )
}

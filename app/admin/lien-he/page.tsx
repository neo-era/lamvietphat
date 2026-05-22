import { prisma } from "@/lib/db"
import { ContactTable } from "@/components/admin/ContactTable"

async function getContacts() {
  try {
    return await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } })
  } catch {
    return []
  }
}

export default async function AdminContactPage() {
  const contacts = await getContacts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Tin nhắn liên hệ</h1>
        <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{contacts.length} tin nhắn</p>
      </div>
      <ContactTable contacts={contacts} />
    </div>
  )
}

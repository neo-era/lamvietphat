import { prisma } from "@/lib/db"
import { QuoteTable } from "@/components/admin/QuoteTable"

async function getQuotes() {
  try {
    return await prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" }, include: { product: { select: { name: true } } } })
  } catch {
    return []
  }
}

export default async function AdminQuotesPage() {
  const quotes = await getQuotes()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Yêu cầu báo giá</h1>
        <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{quotes.length} yêu cầu</p>
      </div>
      <QuoteTable quotes={quotes} />
    </div>
  )
}

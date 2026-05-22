import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import { ProductForm } from "@/components/admin/ProductForm"

export default async function AdminEditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let product = null
  try {
    product = await prisma.product.findUnique({ where: { id } })
  } catch {
    // DB not connected
  }
  if (!product) notFound()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Sửa sản phẩm</h1>
        <p style={{ color: "#4a4a4a", fontSize: "0.85rem" }}>{product.name}</p>
      </div>
      <ProductForm
        defaultValues={{
          name: product.name,
          slug: product.slug,
          category: product.category,
          shortDesc: product.shortDesc,
          description: product.description,
          tags: Array.isArray(product.tags) ? product.tags.join(", ") : "",
          featured: product.featured,
          published: product.published,
        }}
        productId={product.id}
      />
    </div>
  )
}

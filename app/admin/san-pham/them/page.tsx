import { ProductForm } from "@/components/admin/ProductForm"

export default function AdminAddProductPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1">Thêm sản phẩm mới</h1>
      </div>
      <ProductForm />
    </div>
  )
}

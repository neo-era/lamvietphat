import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: "80vh", paddingTop: "7rem" }}>
      <div className="text-8xl mb-6 opacity-30">404</div>
      <h1 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
        Trang không tồn tại
      </h1>
      <p className="mb-8" style={{ color: "#9a9a9a", maxWidth: "400px", lineHeight: 1.8 }}>
        Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white gradient-blue glow-blue hover:opacity-90 transition-all"
      >
        ← Về trang chủ
      </Link>
    </div>
  )
}

"use client"

import { useState } from "react"

const faqs = [
  { q: "Lavipco có thi công ngoài TP.HCM không?", a: "Có. Lavipco đã thi công tại 10+ tỉnh thành — Bình Dương, Kiên Giang, Long An, Tây Ninh, Bến Tre, Quảng Nam... Phạm vi phục vụ toàn quốc, đặc biệt là các tỉnh phía Nam." },
  { q: "Thời gian bảo hành công trình là bao lâu?", a: "Bảo hành tối thiểu 24 tháng theo hợp đồng, riêng đèn LED bảo hành 36 tháng. Lavipco hỗ trợ kỹ thuật 24/7 sau bàn giao." },
  { q: "Có hỗ trợ tư vấn thiết kế miễn phí không?", a: "Có. Đội ngũ kỹ sư của Lavipco sẽ khảo sát thực địa miễn phí, tư vấn giải pháp và lên báo giá chi tiết trong 3–5 ngày làm việc — không ràng buộc." },
  { q: "Lavipco có sản xuất theo yêu cầu không?", a: "Có. Lavipco sản xuất tủ điều khiển đèn đường, tủ tín hiệu giao thông, trụ đèn gang/nhôm... thiết kế theo yêu cầu cụ thể của dự án." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-xl overflow-hidden transition-all" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
            style={{ background: open === i ? "#f8fafc" : "#fff" }}
          >
            <span className="font-semibold" style={{ color: "#003F7F", fontSize: "0.95rem" }}>{f.q}</span>
            <span className="shrink-0 transition-transform" style={{ color: "#f97316", fontSize: "1.5rem", lineHeight: 1, transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          <div
            className="overflow-hidden transition-all"
            style={{ maxHeight: open === i ? "200px" : "0", opacity: open === i ? 1 : 0 }}
          >
            <p className="px-5 pb-5 pt-1" style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.75 }}>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

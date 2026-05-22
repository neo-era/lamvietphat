"use client"

import { useEffect, useState } from "react"

const items = [
  { quote: "Lavipco là đối tác chiếu sáng tin cậy nhất chúng tôi từng hợp tác — chất lượng kỹ thuật xuất sắc và tiến độ luôn đúng cam kết.", author: "Ô. Nguyễn Văn A", role: "Giám đốc DA — Becamex IDCP" },
  { quote: "Sản phẩm đèn LED của Lavipco có hiệu suất chiếu sáng cao, bền bỉ qua 5 năm vận hành mà chưa cần thay thế.", author: "B. Lê Thị B", role: "Ban QLDA Q.Tân Bình" },
  { quote: "Đội ngũ kỹ sư chuyên nghiệp, giải pháp Smart Lighting giúp chúng tôi tiết kiệm 35% chi phí điện vận hành.", author: "Ô. Phạm Văn C", role: "Trưởng phòng kỹ thuật — Khang Thông" },
  { quote: "Lavipco thi công đúng tiêu chuẩn QCVN, hồ sơ nghiệm thu đầy đủ, hỗ trợ 24/7 sau bàn giao.", author: "B. Trần Thị D", role: "Quản lý dự án — Phú Quốc" },
  { quote: "Một trong những đơn vị hiếm hoi tại Việt Nam có thể sản xuất tủ điều khiển đèn tín hiệu giao thông đạt chuẩn.", author: "Ô. Đặng Văn E", role: "Cố vấn kỹ thuật — Sở GTVT" },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-20 md:py-24" style={{ background: "#f8fafc" }}>
      <div className="container-pad">
        <div className="text-center mb-12">
          <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "#003F7F", letterSpacing: "-0.02em" }}>
            Khách hàng nói về Lavipco
          </h2>
          <div className="mx-auto h-1 w-16 rounded" style={{ background: "#f97316" }} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg p-8 md:p-14 text-center" style={{ border: "1px solid #e5e7eb", minHeight: "260px" }}>
            <div className="text-5xl mb-4 opacity-20" style={{ color: "#003F7F" }}>❝</div>
            {items.map((q, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  opacity: idx === i ? 1 : 0,
                  position: idx === i ? "relative" : "absolute",
                  left: idx === i ? "auto" : "50%",
                  width: idx === i ? "auto" : "0",
                  overflow: "hidden",
                }}
              >
                {idx === i && (
                  <>
                    <p className="mb-6 mx-auto" style={{ fontSize: "clamp(1rem,2vw,1.25rem)", lineHeight: 1.7, color: "#1f2937", maxWidth: "640px", fontStyle: "italic" }}>
                      "{q.quote}"
                    </p>
                    <div className="font-bold" style={{ color: "#003F7F", fontSize: "1rem" }}>{q.author}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>{q.role}</div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: idx === i ? "28px" : "10px",
                  height: "10px",
                  background: idx === i ? "#f97316" : "#cbd5e1",
                }}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

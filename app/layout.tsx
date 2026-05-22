import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Lavipco | Đèn đường LED & Hệ thống chiếu sáng",
    template: "%s | Lavipco",
  },
  description:
    "Lavipco — Chuyên thi công, tư vấn, cung cấp đèn đường LED, hệ thống chiếu sáng đô thị và tín hiệu giao thông. Kinh nghiệm 11+ năm, phạm vi toàn quốc.",
  keywords: ["đèn đường LED", "hệ thống chiếu sáng", "tín hiệu giao thông", "trụ đèn", "Lavipco", "thi công điện"],
  authors: [{ name: "Lavipco" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Lavipco",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Lavipco" }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Admin user
  const hashed = await bcrypt.hash("Lavipco@2025", 12)
  await prisma.adminUser.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", password: hashed, name: "Administrator" },
  })

  // Default settings
  const settings = [
    { key: "company_name", value: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát" },
    { key: "company_brand", value: "Lavipco" },
    { key: "company_phone", value: "0989 725 507" },
    { key: "company_hotline", value: "0932 733 427" },
    { key: "company_email", value: "lavipco.co@gmail.com" },
    { key: "company_address", value: "63/23A, Liên Khu 16-18, P. Bình Trị Đông, Q. Bình Tân, TP.HCM" },
    { key: "company_tax", value: "1101748509" },
    { key: "company_bank", value: "96968686868 — ACB, CN Châu Văn Liêm, Q.5, TP.HCM" },
  ]

  for (const s of settings) {
    await prisma.setting.upsert({ where: { key: s.key }, update: {}, create: s })
  }

  console.log("✅ Seed completed — remember to change admin password after first login!")
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())

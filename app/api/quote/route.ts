import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(20),
  email: z.string().email().optional().or(z.literal("")),
  company: z.string().max(200).optional(),
  productName: z.string().min(1).max(200),
  message: z.string().max(2000).optional(),
})

const rateMap = new Map<string, { count: number; reset: number }>()

function getRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60_000 })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (!getRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 })
  }

  try {
    const { prisma } = await import("@/lib/db")
    await prisma.quoteRequest.create({
      data: {
        name: result.data.name,
        phone: result.data.phone,
        email: result.data.email || null,
        company: result.data.company || null,
        productName: result.data.productName,
        message: result.data.message || null,
        status: "NEW",
      },
    })
  } catch {
    // DB not yet connected — log only
    console.log("[quote]", result.data)
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}

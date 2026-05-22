import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

async function checkAuth() {
  const session = await auth()
  return !!session
}

const schema = z.object({
  name: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  category: z.string().min(1),
  shortDesc: z.string().min(1).max(500),
  description: z.string().max(10000).optional().default(""),
  tags: z.array(z.string()).optional().default([]),
  specs: z.array(z.object({ label: z.string(), value: z.string() })).optional().default([]),
  images: z.array(z.string()).optional().default([]),
  featured: z.boolean().optional().default(false),
  published: z.boolean().optional().default(true),
})

export async function GET() {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const products = await prisma.product.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] })
  return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }) }
  const result = schema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  const product = await prisma.product.create({ data: { ...result.data, coverImage: "" } })
  return NextResponse.json(product, { status: 201 })
}

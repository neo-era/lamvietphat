import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

const schema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  category: z.string().min(1),
  client: z.string().min(1).max(300),
  location: z.string().max(300).optional().default(""),
  province: z.string().min(1).max(100),
  year: z.number().int().min(2000).max(2100),
  contractValue: z.string().nullable().optional(),
  shortDesc: z.string().min(1).max(500),
  description: z.string().max(10000).optional().default(""),
  featured: z.boolean().optional().default(false),
  published: z.boolean().optional().default(true),
})

async function checkAuth() {
  const session = await auth()
  if (!session) return false
  return true
}

export async function GET() {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const projects = await prisma.project.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] })
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }) }
  const result = schema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  const { contractValue, ...data } = result.data
  const project = await prisma.project.create({
    data: { ...data, contractValue: contractValue ? BigInt(contractValue) : null, images: [], coverImage: "" },
  })
  return NextResponse.json(project, { status: 201 })
}

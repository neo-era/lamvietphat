import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

async function checkAuth() {
  const session = await auth()
  return !!session
}

const updateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  slug: z.string().min(1).max(200).optional(),
  category: z.string().min(1).optional(),
  client: z.string().min(1).max(300).optional(),
  location: z.string().max(300).optional(),
  province: z.string().min(1).max(100).optional(),
  year: z.number().int().min(2000).max(2100).optional(),
  contractValue: z.string().nullable().optional(),
  shortDesc: z.string().min(1).max(500).optional(),
  description: z.string().max(10000).optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
})

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }) }
  const result = updateSchema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  const { contractValue, ...data } = result.data
  const project = await prisma.project.update({
    where: { id },
    data: { ...data, ...(contractValue !== undefined ? { contractValue: contractValue ? BigInt(contractValue) : null } : {}) },
  })
  return NextResponse.json(project)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  await prisma.project.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

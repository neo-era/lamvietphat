import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

async function checkAuth() {
  const session = await auth()
  return !!session
}

const patchSchema = z.object({
  status: z.enum(["NEW", "PROCESSING", "QUOTED", "CLOSED"]).optional(),
  read: z.boolean().optional(),
  note: z.string().optional(),
})

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }) }
  const result = patchSchema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  const updated = await prisma.quoteRequest.update({ where: { id }, data: result.data })
  return NextResponse.json(updated)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAuth()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params
  await prisma.quoteRequest.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

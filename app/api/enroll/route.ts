import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/storage";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, program, experience, motivation } = body;
    if (!name || !email || !phone || !program)
      return NextResponse.json({ error: "All fields required." }, { status: 400 });
    const record = db.enrollments.add({ name, email, phone, program, experience: experience || "", motivation: motivation || "" });
    return NextResponse.json({ success: true, id: record.id, record });
  } catch { return NextResponse.json({ error: "Server error." }, { status: 500 }); }
}
export async function GET() {
  return NextResponse.json({ enrollments: db.enrollments.getAll() });
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/storage";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, amount, cause, message } = body;
    if (!name || !email || !phone || !amount || !cause)
      return NextResponse.json({ error: "All fields required." }, { status: 400 });
    const record = db.donations.add({ name, email, phone, amount: Number(amount), cause, message });
    return NextResponse.json({ success: true, id: record.id, record });
  } catch { return NextResponse.json({ error: "Server error." }, { status: 500 }); }
}
export async function GET() {
  return NextResponse.json({ donations: db.donations.getAll() });
}

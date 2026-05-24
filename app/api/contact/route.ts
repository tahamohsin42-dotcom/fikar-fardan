import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/storage";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    if (!name || !email || !message)
      return NextResponse.json({ error: "All fields required." }, { status: 400 });
    const record = db.contacts.add({ name, email, subject: subject || "General Inquiry", message });
    return NextResponse.json({ success: true, id: record.id });
  } catch { return NextResponse.json({ error: "Server error." }, { status: 500 }); }
}

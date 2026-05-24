import { NextResponse } from "next/server";
import { db } from "@/lib/storage";
export async function GET() {
  return NextResponse.json({
    donations:   db.donations.getAll(),
    enrollments: db.enrollments.getAll(),
    volunteers:  db.volunteers.getAll(),
    contacts:    db.contacts.getAll(),
  });
}

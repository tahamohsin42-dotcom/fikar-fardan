import { NextResponse } from "next/server";

const PAGES = ["/","/about","/programs","/enroll","/donate","/volunteer","/impact","/contact","/lms"];
const BASE  = "https://fikr-fardan.vercel.app";
const KEY   = process.env.INDEXNOW_KEY ?? "REPLACE_WITH_INDEXNOW_KEY";

export async function POST() {
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "fikr-fardan.vercel.app",
        key:  KEY,
        keyLocation: `${BASE}/${KEY}.txt`,
        urlList: PAGES.map(p => `${BASE}${p}`),
      }),
    });
    return NextResponse.json({ ok: res.ok, status: res.status, submitted: PAGES.length });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

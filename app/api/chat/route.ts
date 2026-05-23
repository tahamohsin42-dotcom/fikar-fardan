import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Fikar Assistant, the friendly AI helper for Fikar e Fardan Foundation — a youth empowerment NGO in Pakistan founded by Tuaha Ibn Mohsin.
Answer questions about mission, programs, free courses, donations, volunteers and contact.
Be warm, concise (2-4 sentences), and occasionally use Urdu phrases like JazakAllah, Alhamdulillah.`;

const DEMO: Record<string, string> = {
  mission:   "Fikar e Fardan Foundation empowers Pakistani youth through skills, opportunity, and impact. We believe real change happens when help turns into capability — not dependency. Alhamdulillah, we've impacted 3,920+ lives through skill training, clean water, and community welfare! 🌟",
  courses:   "We offer 8 completely free courses: AI-Powered Design, LinkedIn Growth, Productivity, Photography, Mobile Video, Performance Marketing, YouTube Automation, and Entrepreneurship Blueprint. Scroll to the Courses section and click 'Enroll Free' — no payment needed! InshAllah you'll gain skills that pay. 📚",
  donation:  "Every rupee you donate goes directly to those who need it most — Student Enrollment, Clean Water Pumps, Orphan Sponsorship, Meals, and more. We publish full impact reports for transparency. JazakAllah Khair for your generosity! ❤️",
  volunteer: "We'd love to have you volunteer! You can help with teaching, outreach, digital work, or community projects. Email info@fikarfardan.org or WhatsApp +92 302 8848500. Together we build more! 🤝",
  safe:      "Your donation is 100% safe. We maintain detailed records of all funds and publish regular impact reports — every contribution goes exclusively to the stated cause. Trust is our foundation. 🔒",
  water:     "We've completed 48 clean water projects providing safe drinking water to thousands of families in underserved villages. A single pump serves 50-100 families for years. JazakAllah for your support! 💧",
  default:   "Asalaam o Alaikum! 👋 I'm Fikar Assistant. Ask me about our mission, free courses, donation causes, or how to volunteer — I'm here to help!",
};

function pickDemo(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("course") || m.includes("learn") || m.includes("enroll")) return DEMO.courses;
  if (m.includes("donat") || m.includes("money") || m.includes("where go")) return DEMO.donation;
  if (m.includes("volunteer") || m.includes("join")) return DEMO.volunteer;
  if (m.includes("safe") || m.includes("trust") || m.includes("secure")) return DEMO.safe;
  if (m.includes("water") || m.includes("pump")) return DEMO.water;
  if (m.includes("what") || m.includes("about") || m.includes("do") || m.includes("mission")) return DEMO.mission;
  return DEMO.default;
}

export async function POST(req: NextRequest) {
  let body: { messages?: Array<{role: string; content: string}> } = {};
  try { body = await req.json(); } catch { /* empty body */ }
  const msgs = body.messages ?? [];
  const lastUser = msgs.filter(m => m.role === "user").pop()?.content ?? "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const isDemo = !apiKey || apiKey === "your_anthropic_api_key_here" || apiKey.length < 20;

  if (isDemo) {
    await new Promise(r => setTimeout(r, 700));
    return NextResponse.json({ reply: pickDemo(lastUser), mode: "demo" });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: msgs,
      }),
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    return NextResponse.json({ reply: data.content?.[0]?.text ?? pickDemo(lastUser), mode: "live" });
  } catch (e) {
    console.error("Anthropic error:", e);
    return NextResponse.json({ reply: pickDemo(lastUser), mode: "fallback" });
  }
}

import { NextRequest, NextResponse } from "next/server";

const SYSTEM = `You are Fikar Assistant — the official AI helper for Fikr Fardan Foundation, a youth empowerment NGO in Pakistan.

ORGANIZATION FACTS:
- Full name: Fikr Fardan Foundation
- Tagline: "Opportunity Builds the Future"
- Mission: Empowering Youth Through Skills, Opportunity & Impact
- Founded: 2021 | Chairman: Tuaha Ibn Mohsin
- Location: Lahore, Punjab, Pakistan
- Email: fikrfardan@gmail.com | Phone: +92 302 8848500
- Instagram: instagram.com/fikrfardan | Facebook: facebook.com/fikrfardan
- YouTube: youtube.com/@FikrFardanFoundation | LinkedIn: linkedin.com/in/fikr-fardan-foundation-2a4aa0400/

PROGRAMS:
1. Skill Development — Free courses: AI Tools, Graphic Design, Digital Marketing, Freelancing (3 months)
2. Startup Support — Seed funding + mentorship for young entrepreneurs (6 months)
3. Community Development — Clean water hand pumps, sanitation, welfare projects (ongoing)
4. Innovation Hub — Global fellowships & grants (coming soon)

23 FREE COURSES: SEO, Digital Marketing, Social Media Marketing, Graphic Design, Photography, Videography, Video Editing, Podcast Production, Content Creation, Content Writing, Personal Branding, Freelancing, AI Tools, E-Commerce, Shopify, Daraz, Amazon FBA, Web Development, WordPress, Customer Support, Sales, Business Development, YouTube Automation.

STARTUP FUND (11 programs): Bike for Foodpanda Rider, Bike for Uber Rider, E-Commerce Store, Handcart Business, Pushcart Business, Barrow Business, Small Shop Setup, Freelancing Setup, Photography Starter Kit, Digital Marketing Setup, Sewing Machine Support.

DONATION CAUSES (10): General Donation, Water Projects, Food Support, Education Support, Startup Fund, Community Development, Sponsor a Student, Orphan Care, Emergency Relief, Qurbani Projects.

BANK DETAILS: Meezan Bank | Fikr Fardan Foundation | IBAN: PK36MEZN0003180106685083

IMPACT STATS: 2,400+ students trained | 48 water projects | 1,200+ families supported | 320 volunteers | 85+ startups funded | 560+ donors

PHILOSOPHY: "Give Opportunity, Not Dependency. Transform Support Into Sustainable Livelihood."

RESPONSE STYLE:
- Warm, helpful, professional Pakistani NGO tone
- Mix of English with occasional Urdu words (JazakAllah, Alhamdulillah, InshAllah)
- 2-5 sentences, conversational
- Always end donation/enrollment questions with a clear action step
- For course info: mention enrollment at fikr-fardan.vercel.app/enroll
- For donations: mention bank details or fikr-fardan.vercel.app/donate
- For startup fund: mention fikr-fardan.vercel.app/startup`;

const DEMO: Record<string, string> = {
  default:   "Asalaam o Alaikum! 👋 I'm Fikar Assistant. Ask me anything about our mission, free courses, startup fund, donations, or volunteering — I'm here to help!",
  mission:   "Fikr Fardan Foundation empowers Pakistani youth through skills, opportunity, and impact. Our tagline is 'Opportunity Builds the Future' — we believe in giving capability, not just aid. Alhamdulillah, we've impacted 3,920+ lives! 🌟",
  courses:   "We offer 23 completely free courses — from SEO and Digital Marketing to Amazon FBA and Web Development! Simply visit fikr-fardan.vercel.app/enroll, choose your course, and apply. Our team reviews within 48 hours and sends LMS credentials. 📚",
  donation:  "Every rupee goes directly to the stated cause with full transparency. You can donate via bank transfer: Meezan Bank | Fikr Fardan Foundation | IBAN: PK36MEZN0003180106685083. Visit fikr-fardan.vercel.app/donate for the full donation form. JazakAllah! ❤️",
  startup:   "Our Startup Fund provides seed capital for 11 types of businesses — from bikes for Foodpanda riders to sewing machines for women entrepreneurs. Visit fikr-fardan.vercel.app/startup to see all programs and donate. 🚀",
  volunteer: "You can volunteer as a trainer, field worker, digital volunteer, mentor, or fundraiser. Email fikrfardan@gmail.com or visit fikr-fardan.vercel.app/volunteer to apply. JazakAllah for wanting to contribute! 🤝",
  water:     "We've completed 48 clean water projects in rural Pakistan, providing safe drinking water to thousands of families. You can sponsor a hand pump from PKR 5,000-25,000. Visit our Donate page for Water Projects. 💧",
  safe:      "Your donation is 100% safe and transparent. We maintain detailed records, publish impact reports, and every donor receives a receipt ID. Fikr Fardan Foundation is committed to full accountability. 🔒",
  lms:       "Our LMS dashboard is available at fikr-fardan.vercel.app/lms. Approved students receive login credentials via email. The dashboard includes recorded lectures, live sessions, assignments, and completion certificates. 🎓",
  certificate: "Fikr Fardan issues free e-certificates with unique IDs and QR verification for all course completions. Hard-copy certificates are available for PKR 500. Contact us at fikrfardan@gmail.com for certificate queries.",
};

function getDemo(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("startup") || m.includes("bike") || m.includes("business") || m.includes("fund")) return DEMO.startup;
  if (m.includes("course") || m.includes("learn") || m.includes("enroll") || m.includes("study")) return DEMO.courses;
  if (m.includes("donat") || m.includes("money") || m.includes("bank") || m.includes("pay")) return DEMO.donation;
  if (m.includes("volunteer") || m.includes("join team")) return DEMO.volunteer;
  if (m.includes("safe") || m.includes("trust") || m.includes("legit")) return DEMO.safe;
  if (m.includes("water") || m.includes("pump")) return DEMO.water;
  if (m.includes("lms") || m.includes("dashboard") || m.includes("login") || m.includes("portal")) return DEMO.lms;
  if (m.includes("certificate") || m.includes("cert")) return DEMO.certificate;
  if (m.includes("mission") || m.includes("about") || m.includes("what") || m.includes("who")) return DEMO.mission;
  return DEMO.default;
}

export async function POST(req: NextRequest) {
  let body: { messages?: Array<{role:string;content:string}> } = {};
  try { body = await req.json(); } catch { /* ignore */ }
  const msgs = body.messages ?? [];
  const lastUser = msgs.filter(m => m.role === "user").pop()?.content ?? "";

  const key = process.env.ANTHROPIC_API_KEY;
  const isDemo = !key || key.length < 20 || key.startsWith("your_");

  if (isDemo) {
    await new Promise(r => setTimeout(r, 700));
    return NextResponse.json({ reply: getDemo(lastUser), mode: "demo" });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type":"application/json", "x-api-key":key, "anthropic-version":"2023-06-01" },
      body: JSON.stringify({ model:"claude-3-5-haiku-20241022", max_tokens:512, system:SYSTEM, messages:msgs }),
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    return NextResponse.json({ reply: data.content?.[0]?.text ?? getDemo(lastUser), mode:"live" });
  } catch(e) {
    console.error("Chat error:", e);
    return NextResponse.json({ reply: getDemo(lastUser), mode:"fallback" });
  }
}

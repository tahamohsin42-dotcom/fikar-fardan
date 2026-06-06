import { NextRequest, NextResponse } from "next/server";

const SYSTEM = `You are FikrBot, the official AI assistant of Fikr Fardan Foundation (FFF).

IDENTITY:
- Name: FikrBot
- Organization: Fikr Fardan Foundation (FFF)
- Mission: Empowering youth through skills, opportunity, education, entrepreneurship, social impact, community development, and sustainable support systems.
- Core Philosophy: "We do not believe in dependency. We believe in creating opportunities."
- Tagline: "Opportunity Builds the Future"
- Chairman: Tuaha Ibn Mohsin
- Location: Lahore, Punjab, Pakistan
- Email: fikrfardan@gmail.com | Phone: +92 302 8848500
- Website: https://fikar-fardan.vercel.app
- Instagram: instagram.com/fikrfardan | Facebook: facebook.com/fikrfardan
- YouTube: youtube.com/@FikrFardanFoundation

OFFICIAL DONATION BANK ACCOUNT:
Bank Name: Faysal Bank Limited
Account Title: Fikr Fardan
Branch Code: 4004
Account Number: 4004499000000561
IBAN: PK55FAYS4004499000000561

After donating: Send screenshot to WhatsApp +92 302 8848500 or email fikrfardan@gmail.com

DONATION CAUSES: General Donation, Water Projects (5k-25k PKR), Food Support, Education Support, Startup Fund, Community Development, Sponsor a Student, Orphan Care, Emergency Relief, Qurbani Projects.

PROGRAMS:
1. Skill Development (Active) — 23 free courses — 3 months
2. Startup Support (Active) — bike, shop, freelancing, sewing machine + 8 more programs
3. Community Development (Active) — water hand pumps, sanitation, welfare
4. Innovation Hub (Under Progress) — global fellowships, grants

23 FREE COURSES: SEO, Digital Marketing, Social Media Marketing, Graphic Design, Photography, Videography, Video Editing, Podcast Production, Content Creation, Content Writing, Personal Branding, Freelancing, AI Tools, E-Commerce, Shopify, Daraz, Amazon FBA, Web Development, WordPress, Customer Support, Sales, Business Development, YouTube Automation.

STARTUP FUND DONATION AMOUNTS:
- Bike for Foodpanda Rider: PKR 200,000
- Bike for Uber Rider: PKR 200,000
- Photography Kit: PKR 200,000
- Small Shop Setup: PKR 150,000
- E-Commerce Store: PKR 100,000
- Handcart Business: PKR 100,000
- Pushcart Business: PKR 100,000
- Barrow Business: PKR 100,000
- Freelancing Setup: PKR 100,000
- Digital Marketing Setup: PKR 100,000
- Sewing Machine: PKR 20,000

IMPACT STATS: 2,400+ students | 48 water projects | 1,200+ families | 320 volunteers | 85+ startups | 560+ donors

ENROLLMENT: Visit fikar-fardan.vercel.app/enroll — 23 free courses — form → review 48hrs → LMS login via email

COMMUNICATION RULES:
- Warm, professional, helpful, human-like
- Never say "As an AI language model..."
- Occasionally use: JazakAllah Khair, Alhamdulillah, InshAllah
- Support English, Urdu, Roman Urdu — reply in user's language
- Never invent facts`;

const DEMO: Record<string, string> = {
  default:
    "Asalaam o Alaikum! 👋 I'm FikrBot — official assistant of Fikr Fardan Foundation.\n\nAsk me about:\n• 23 Free Courses\n• Startup Fund (11 programs)\n• How to donate\n• Volunteer & internships\n• Community projects",

  donation:
    "JazakAllah for wanting to support us! 🤲\n\n🏦 Faysal Bank Limited\n👤 Fikr Fardan\n🏢 Branch Code: 4004\n💳 Account: 4004499000000561\n🌐 IBAN: PK55FAYS4004499000000561\n\nAfter donating, share your receipt on:\n📱 WhatsApp: +92 302 8848500\n📧 fikrfardan@gmail.com\n\nVisit fikar-fardan.vercel.app/donate for all causes ❤️",

  courses:
    "We offer 23 completely free courses — SEO, Digital Marketing, Graphic Design, AI Tools, Freelancing, Web Development, E-Commerce, YouTube Automation and more!\n\nSteps:\n1. Visit fikar-fardan.vercel.app/enroll\n2. Select your course\n3. Fill the form\n4. Team reviews in 48 hours\n5. Receive LMS login via email\n\nInshAllah, your new career starts here! 📚",

  startup:
    "Our Startup Fund gives people businesses, not just aid! 🚀\n\nPrograms delivered so far:\n• 14 Foodpanda bikes (PKR 200,000 each)\n• 9 Uber bikes (PKR 200,000 each)\n• 19 sewing machines (PKR 20,000 each)\n• 18 freelancing setups\n• 22 handcarts & more\n\nTo donate:\n🏦 Faysal Bank Limited\n💳 IBAN: PK55FAYS4004499000000561\n\nVisit fikar-fardan.vercel.app/startup",

  volunteer:
    "JazakAllah for wanting to volunteer! 🤝\n\nRoles available:\n• Digital Volunteer\n• Field Volunteer\n• Online Trainer\n• Startup Mentor\n• Fundraiser\n\nApply: fikar-fardan.vercel.app/volunteer\nEmail: fikrfardan@gmail.com",

  water:
    "Alhamdulillah! We've completed 48 clean water projects in rural Pakistan. 💧\n\nA hand pump costs PKR 5,000–25,000 and serves 50–100 families for years.\n\nDonate via:\n🏦 Faysal Bank Limited\n💳 IBAN: PK55FAYS4004499000000561\n\nVisit fikar-fardan.vercel.app/donate → Water Projects",

  bank:
    "Our official donation account:\n\n🏦 Bank: Faysal Bank Limited\n👤 Account Title: Fikr Fardan\n🏢 Branch Code: 4004\n💳 Account Number: 4004499000000561\n🌐 IBAN: PK55FAYS4004499000000561\n\nAfter transfer, send receipt to:\n📱 WhatsApp: +92 302 8848500\n📧 fikrfardan@gmail.com",

  mission:
    "Fikr Fardan Foundation empowers Pakistani youth through skills, opportunity, and impact. Our philosophy: 'We do not believe in dependency. We believe in creating opportunities.' Alhamdulillah, 3,920+ lives impacted! 🌟",

  certificate:
    "Free e-certificate with unique ID + QR verification on course completion. Hard-copy available for PKR 500 with courier. Contact fikrfardan@gmail.com for queries.",

  contact:
    "📧 Email: fikrfardan@gmail.com\n📞 WhatsApp: +92 302 8848500\n📍 Lahore, Punjab, Pakistan\n🌐 fikar-fardan.vercel.app\n\nWe respond within 24 hours InshAllah.",

  safe:
    "Your donation is 100% safe and transparent. We use Faysal Bank Limited with official account details. Every rupee goes to the stated cause. We publish impact reports regularly. 🔒",
};

function getDemo(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("bank") || m.includes("iban") || m.includes("account") || m.includes("transfer") || m.includes("faysal") || m.includes("meezan"))
    return DEMO.bank;
  if (m.includes("startup") || m.includes("bike") || m.includes("sewing") || m.includes("fund") || m.includes("shop"))
    return DEMO.startup;
  if (m.includes("donat") || m.includes("money") || m.includes("pay") || m.includes("rupee") || m.includes("sponsor"))
    return DEMO.donation;
  if (m.includes("course") || m.includes("learn") || m.includes("enroll") || m.includes("study"))
    return DEMO.courses;
  if (m.includes("volunteer") || m.includes("join team"))
    return DEMO.volunteer;
  if (m.includes("water") || m.includes("pump"))
    return DEMO.water;
  if (m.includes("safe") || m.includes("trust") || m.includes("legit") || m.includes("secure"))
    return DEMO.safe;
  if (m.includes("certificate") || m.includes("cert"))
    return DEMO.certificate;
  if (m.includes("contact") || m.includes("reach") || m.includes("email") || m.includes("phone"))
    return DEMO.contact;
  if (m.includes("mission") || m.includes("about") || m.includes("what") || m.includes("who"))
    return DEMO.mission;
  return DEMO.default;
}

export async function POST(req: NextRequest) {
  let body: { messages?: Array<{role:string;content:string}> } = {};
  try { body = await req.json(); } catch { /* empty */ }
  const msgs = body.messages ?? [];
  const lastUser = msgs.filter(m => m.role === "user").pop()?.content ?? "";

  const key = process.env.ANTHROPIC_API_KEY;
  const isDemo = !key || key.length < 20 || key.startsWith("your_");

  if (isDemo) {
    await new Promise(r => setTimeout(r, 650));
    return NextResponse.json({ reply: getDemo(lastUser), mode: "demo" });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type":"application/json", "x-api-key":key, "anthropic-version":"2023-06-01" },
      body: JSON.stringify({ model:"claude-3-5-haiku-20241022", max_tokens:600, system:SYSTEM, messages:msgs }),
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    return NextResponse.json({ reply: data.content?.[0]?.text ?? getDemo(lastUser), mode:"live" });
  } catch(e) {
    console.error("FikrBot error:", e);
    return NextResponse.json({ reply: getDemo(lastUser), mode:"fallback" });
  }
}

// ─── BRAND ──────────────────────────────────────────────────────────────────
export const BRAND = {
  name:        "Fikr Fardan",
  fullName:    "Fikr Fardan Foundation",
  tagline:     "Opportunity Builds the Future",
  mission:     "Empowering Youth Through Skills, Opportunity & Impact",
  email:       "fikrfardan@gmail.com",
  phone:       "+92 302 8848500",
  whatsapp:    "923028848500",
  address:     "Lahore, Punjab, Pakistan",
  bankName:    "Meezan Bank",
  bankAccount: "0318-0106685083",
  bankIBAN:    "PK36MEZN0003180106685083",
  bankTitle:   "Fikr Fardan Foundation",
  website:     "https://fikr-fardan.vercel.app",
  social: {
    instagram: "https://www.instagram.com/fikrfardan/",
    facebook:  "https://www.facebook.com/fikrfardan",
    youtube:   "https://www.youtube.com/@FikrFardanFoundation",
    linkedin:  "https://linkedin.com/in/fikr-fardan-foundation-2a4aa0400/",
    whatsapp:  "https://wa.me/923028848500",
  },
} as const;

// ─── STATS ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 2400, suffix: "+", label: "Students Trained",       icon: "🎓" },
  { value: 48,   suffix: "",  label: "Water Projects",          icon: "💧" },
  { value: 1200, suffix: "+", label: "Families Supported",      icon: "🏡" },
  { value: 320,  suffix: "",  label: "Volunteers",               icon: "🤝" },
  { value: 85,   suffix: "+", label: "Startup Funds Given",     icon: "🚀" },
  { value: 560,  suffix: "+", label: "Donors",                   icon: "❤️" },
] as const;

// ─── PROGRAMS ────────────────────────────────────────────────────────────────
export const PROGRAMS = [
  {
    id: "skill-dev",
    icon: "⚡",
    title: "Skill Development",
    shortDesc: "Free professional training in AI, design, marketing, and entrepreneurship.",
    fullDesc: "Our flagship program equips deserving youth with industry-relevant skills in AI tools, graphic design, digital marketing, and entrepreneurship. Participants gain hands-on experience through live projects and mentorship sessions, emerging with skills that create real income.",
    duration: "3 months",
    seats: 50,
    tag: "Active" as const,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    courses: ["AI Tools", "Graphic Design", "Digital Marketing", "Freelancing"],
  },
  {
    id: "startup",
    icon: "🚀",
    title: "Startup Support",
    shortDesc: "Mentorship, seed resources, and network access for young entrepreneurs.",
    fullDesc: "We provide deserving entrepreneurs with seed funding, mentorship from industry experts, and access to networks that open doors. From idea validation to first revenue — we walk with founders every step of the way.",
    duration: "6 months",
    seats: 20,
    tag: "Active" as const,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    courses: ["Business Plan", "Marketing", "Finance Basics", "Networking"],
  },
  {
    id: "water",
    icon: "🌊",
    title: "Community Development",
    shortDesc: "Clean water hand pumps, sanitation, and welfare projects for underserved communities.",
    fullDesc: "We install clean water hand pumps, sanitation systems, and run comprehensive welfare programs in some of Pakistan's most underserved villages. Every project is GPS-tracked with full transparency reporting to donors.",
    duration: "Ongoing",
    seats: 0,
    tag: "Active" as const,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    courses: ["Water Access", "Sanitation", "Community Welfare"],
  },
  {
    id: "innovation",
    icon: "🌐",
    title: "Innovation Hub",
    shortDesc: "Global fellowships, grants, and talent programs connecting Pakistani youth worldwide.",
    fullDesc: "Our upcoming Innovation Hub will connect talented Pakistani youth to global fellowships, international grants, and talent programs. We're building bridges between local potential and global opportunity.",
    duration: "TBD",
    seats: 30,
    tag: "Coming Soon" as const,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    courses: ["Fellowships", "International Grants", "Global Networking"],
  },
] as const;

// ─── COURSES ─────────────────────────────────────────────────────────────────
export const COURSES = [
  { id:"seo",          icon:"🔍", title:"SEO",                        desc:"Master search engine optimization to rank websites and drive organic traffic.",  students:280, duration:"6 weeks" },
  { id:"digmkt",       icon:"📊", title:"Digital Marketing",          desc:"Run full-funnel campaigns across Google, Meta, and email platforms.",           students:420, duration:"8 weeks" },
  { id:"smm",          icon:"📱", title:"Social Media Marketing",     desc:"Build brand presence and grow engaged audiences on all major platforms.",       students:380, duration:"6 weeks" },
  { id:"design",       icon:"🎨", title:"Graphic Design",             desc:"Create professional visuals using Canva, Adobe, and AI design tools.",          students:510, duration:"8 weeks" },
  { id:"photo",        icon:"📸", title:"Photography",                desc:"Master composition, lighting, and editing for professional photography.",       students:195, duration:"6 weeks" },
  { id:"video",        icon:"🎬", title:"Videography",                desc:"Film, direct, and produce professional-quality video content.",                 students:230, duration:"8 weeks" },
  { id:"editing",      icon:"✂️", title:"Video Editing",              desc:"Edit compelling videos using Premiere Pro, CapCut, and DaVinci Resolve.",       students:340, duration:"6 weeks" },
  { id:"podcast",      icon:"🎙️", title:"Podcast Production",         desc:"Launch, record, edit, and distribute a podcast that builds an audience.",       students:145, duration:"4 weeks" },
  { id:"content",      icon:"✍️", title:"Content Creation",           desc:"Create viral content strategies for YouTube, Instagram, and TikTok.",           students:460, duration:"6 weeks" },
  { id:"writing",      icon:"📝", title:"Content Writing",            desc:"Write compelling copy for blogs, ads, social media, and email campaigns.",      students:290, duration:"4 weeks" },
  { id:"branding",     icon:"💎", title:"Personal Branding",          desc:"Build a powerful personal brand that attracts clients and opportunities.",      students:320, duration:"4 weeks" },
  { id:"freelancing",  icon:"💼", title:"Freelancing",                desc:"Land clients on Upwork, Fiverr, and LinkedIn. Build a sustainable freelance career.", students:580, duration:"6 weeks" },
  { id:"ai",           icon:"🤖", title:"AI Tools",                   desc:"Master ChatGPT, Midjourney, and 20+ AI tools to 10x your productivity.",        students:720, duration:"4 weeks" },
  { id:"ecom",         icon:"🛒", title:"E-Commerce",                 desc:"Build and run profitable online stores from product sourcing to customer service.", students:310, duration:"8 weeks" },
  { id:"shopify",      icon:"🏪", title:"Shopify",                    desc:"Launch and scale a Shopify store with winning products and paid ads.",           students:265, duration:"6 weeks" },
  { id:"daraz",        icon:"📦", title:"Daraz Selling",              desc:"List, optimize, and grow a successful seller account on Daraz Pakistan.",        students:280, duration:"4 weeks" },
  { id:"amazon",       icon:"🌍", title:"Amazon FBA",                 desc:"Source products and build a passive income stream on Amazon marketplace.",      students:195, duration:"10 weeks" },
  { id:"webdev",       icon:"💻", title:"Web Development",            desc:"Build responsive websites using HTML, CSS, JavaScript, and React.",              students:380, duration:"12 weeks" },
  { id:"wordpress",    icon:"🌐", title:"WordPress",                  desc:"Create and manage professional websites without coding knowledge.",              students:290, duration:"4 weeks" },
  { id:"support",      icon:"🎧", title:"Customer Support",           desc:"Deliver world-class remote customer support for international clients.",         students:175, duration:"3 weeks" },
  { id:"sales",        icon:"📈", title:"Sales",                      desc:"Learn consultative selling, objection handling, and closing techniques.",        students:230, duration:"4 weeks" },
  { id:"bizdev",       icon:"🤝", title:"Business Development",       desc:"Build partnerships, expand markets, and develop sustainable revenue streams.",   students:185, duration:"6 weeks" },
  { id:"youtube",      icon:"▶️", title:"YouTube Automation",         desc:"Build a faceless YouTube channel that generates passive income 24/7.",           students:410, duration:"6 weeks" },
] as const;

// ─── DONATION CAUSES ─────────────────────────────────────────────────────────
export const DONATION_CAUSES = [
  { id:"general",    icon:"❤️",  title:"General Donation",           desc:"Flexible support directed to highest-impact needs.",            amounts:[500,1000,5000],   color:"#6B2D8F" },
  { id:"water",      icon:"💧",  title:"Water Projects",             desc:"Install clean drinking water hand pumps in rural villages.",    amounts:[5000,10000,25000], color:"#0e7fb0" },
  { id:"food",       icon:"🍲",  title:"Food Support",               desc:"Provide nutritious meals to families in need.",                 amounts:[500,1000,2500],   color:"#b08010" },
  { id:"education",  icon:"🎓",  title:"Education Support",          desc:"Fund a student's skill training and learning materials.",       amounts:[1000,2500,5000],  color:"#6B2D8F" },
  { id:"startup",    icon:"🚀",  title:"Startup Fund",               desc:"Help a deserving individual launch their first business.",      amounts:[5000,15000,25000], color:"#8B4DB8" },
  { id:"community",  icon:"🌍",  title:"Community Development",      desc:"Support sanitation, welfare, and infrastructure projects.",     amounts:[2500,10000,25000], color:"#0d9e6a" },
  { id:"student",    icon:"📚",  title:"Sponsor a Student",          desc:"Cover full course fees for a deserving student.",               amounts:[2000,5000,10000], color:"#5a2ba8" },
  { id:"orphan",     icon:"👶",  title:"Orphan Care",               desc:"Food, education, clothing, and care for an orphan child.",     amounts:[2000,5000,10000], color:"#d05a2b" },
  { id:"emergency",  icon:"🚨",  title:"Emergency Relief",           desc:"Rapid response to floods, disasters, and urgent family crises.", amounts:[1000,3000,10000], color:"#c0392b" },
  { id:"qurbani",    icon:"🐑",  title:"Qurbani Projects",           desc:"Share the blessings of Eid with deserving families.",          amounts:[15000,25000,50000], color:"#8B4DB8" },
] as const;

// ─── STARTUP FUND PROGRAMS ────────────────────────────────────────────────────
export const STARTUP_PROGRAMS = [
  { id:"foodpanda-bike",  icon:"🛵", title:"Bike for Foodpanda Rider",     desc:"Help a deserving individual start earning through food delivery — a sustainable, daily income source.",    goal:35000,  raised:28000, impact:["Sustainable income","Family support","Self-reliance"],  cta:"Sponsor a Rider",    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id:"uber-bike",       icon:"🏍️", title:"Bike for Uber Rider",          desc:"Provide a ride-hailing opportunity that creates daily earning power and long-term economic independence.",  goal:40000,  raised:15000, impact:["Ride-hailing job","Daily earnings","Independence"],       cta:"Donate a Bike",      image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80" },
  { id:"ecom-store",      icon:"🛒", title:"E-Commerce Store Startup",     desc:"Fund the setup of an online store — products, listing, and marketing — for a young digital entrepreneur.",   goal:25000,  raised:18000, impact:["Online business","Digital skills","Growth potential"],    cta:"Sponsor a Business", image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { id:"handcart",        icon:"🛒", title:"Handcart Business",            desc:"A simple handcart gives a street vendor dignity, daily income, and family support through honest work.",       goal:12000,  raised:9500,  impact:["Daily income","Self-employment","Dignified livelihood"],   cta:"Donate a Handcart",  image:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
  { id:"pushcart",        icon:"🧺", title:"Pushcart Business",            desc:"A pushcart business enables immediate earning, small business ownership, and stability for a family.",         goal:15000,  raised:7000,  impact:["Small business","Immediate earning","Family support"],     cta:"Sponsor a Pushcart", image:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80" },
  { id:"barrow",          icon:"⚒️", title:"Barrow Business",              desc:"Help a laborer increase daily productivity and income with the right tools to build a sustainable livelihood.", goal:10000,  raised:4200,  impact:["Better income","Productivity","Sustainability"],           cta:"Support a Worker",   image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { id:"shop",            icon:"🏪", title:"Small Shop Setup",             desc:"Establish a family-owned shop that generates recurring income and builds real economic roots in the community.", goal:50000,  raised:32000, impact:["Family business","Recurring income","Community growth"],   cta:"Sponsor a Shop",     image:"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80" },
  { id:"freelancing",     icon:"💻", title:"Freelancing Setup",            desc:"Laptop, internet, and training — everything a young freelancer needs to access global earning opportunities.",   goal:80000,  raised:55000, impact:["Global earning","Digital empowerment","Remote work"],      cta:"Empower a Freelancer",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
  { id:"photography",     icon:"📸", title:"Photography Starter Kit",      desc:"Camera, lenses, and editing tools to launch a creative photography career with real income potential.",          goal:45000,  raised:20000, impact:["Creative career","Professional skills","Earnings"],        cta:"Sponsor a Creator",  image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80" },
  { id:"digital-mkt",     icon:"📊", title:"Digital Marketing Setup",      desc:"Equip a young marketer with courses, tools, and a laptop to begin earning from high-demand digital skills.",    goal:60000,  raised:38000, impact:["High-demand skills","Freelancing","Employment"],           cta:"Support Digital Skills",image:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
  { id:"sewing",          icon:"🪡", title:"Sewing Machine Support",       desc:"A sewing machine empowers women to run home-based tailoring businesses and achieve financial independence.",     goal:20000,  raised:16000, impact:["Women's empowerment","Home business","Independence"],      cta:"Sponsor a Machine",  image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
] as const;

// ─── IMPACT STORIES ──────────────────────────────────────────────────────────
export const IMPACT_STORIES = [
  { name:"Bilal Ahmed",    city:"Lahore",     icon:"🎯", before:"Unemployed for 2 years", after:"Earning PKR 45k/month via freelancing",  story:"The AI Design course changed my life. Within 3 months I had my first international client. I now earn more than I ever imagined possible." },
  { name:"Sana Fatima",    city:"Faisalabad", icon:"💪", before:"No income, dependent",    after:"Running home tailoring business",          story:"The sewing machine from the Startup Fund helped me start my own tailoring business. Now I support my entire family from home." },
  { name:"Usman Tariq",    city:"Multan",     icon:"🌟", before:"Daily wage laborer",      after:"YouTube channel earning PKR 30k/month",   story:"I had no idea YouTube could be a real career. The automation course showed me exactly how. My channel now supports my family." },
  { name:"Amna Sheikh",    city:"Karachi",    icon:"🚀", before:"College dropout, lost",   after:"Shopify store owner, PKR 60k/month",       story:"Fikr Fardan gave me a laptop through the Startup Fund and trained me in e-commerce. I now run my own online business." },
  { name:"Hamza Malik",    city:"Rawalpindi", icon:"💡", before:"No technical skills",     after:"Junior web developer at local agency",     story:"The web development course was intense but worth every hour. I got hired within a week of completing my portfolio. Thank you Fikr Fardan." },
  { name:"Zara Khan",      city:"Islamabad",  icon:"🌺", before:"Struggling housewife",    after:"Social media manager earning PKR 35k",     story:"I never thought I could earn from home while raising my children. The SMM course gave me skills and the confidence to take clients." },
] as const;

// ─── VOLUNTEER ROLES ─────────────────────────────────────────────────────────
export const VOLUNTEER_ROLES = [
  { id:"trainer",    icon:"🏫", title:"Online Trainer",     desc:"Deliver live skill sessions online or in-person. Share expertise in your domain." },
  { id:"field",      icon:"🌍", title:"Field Volunteer",     desc:"Join water projects, community welfare drives, and on-ground distribution programs." },
  { id:"digital",    icon:"💻", title:"Digital Volunteer",   desc:"Support content creation, social media management, LMS, and email campaigns." },
  { id:"mentor",     icon:"🧭", title:"Startup Mentor",      desc:"Guide young entrepreneurs from idea to first revenue. Share your business expertise." },
  { id:"fundraiser", icon:"💰", title:"Fundraiser",          desc:"Help raise funds through events, donor outreach, and awareness campaigns." },
] as const;

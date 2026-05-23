export const STATS = [
  { value: 2400, suffix: "+", label: "Students Trained", icon: "🎓" },
  { value: 48,   suffix: "",  label: "Water Projects",   icon: "💧" },
  { value: 1200, suffix: "+", label: "Families Supported",icon: "🏡" },
  { value: 320,  suffix: "",  label: "Volunteers",        icon: "🤝" },
] as const;

export const PROGRAMS = [
  {
    icon: "⚡",
    title: "Skill Development",
    desc: "Free professional training in AI, design, marketing, and entrepreneurship — turning potential into paying careers.",
    tag: "Active" as const,
  },
  {
    icon: "🚀",
    title: "Startup Support",
    desc: "Mentorship, seed resources, and network access for young entrepreneurs ready to build something real.",
    tag: "Active" as const,
  },
  {
    icon: "🌊",
    title: "Community Development",
    desc: "Clean water hand pumps, sanitation infrastructure, and welfare projects reaching the most underserved communities.",
    tag: "Active" as const,
  },
  {
    icon: "🌐",
    title: "Innovation Hub",
    desc: "Global fellowships, grants, and talent programs connecting Pakistani youth to worldwide opportunities.",
    tag: "Coming Soon" as const,
  },
] as const;

export const COURSES = [
  { title: "AI-Powered Graphic Design Mastery",   desc: "Create professional visuals using AI tools. Build a portfolio that lands clients.",          icon: "🎨", students: 340 },
  { title: "LinkedIn Growth & Personal Branding", desc: "Build authority, attract opportunities, and grow your professional network.",                  icon: "💼", students: 280 },
  { title: "Psychology of Productivity",          desc: "Master your mind, habits, and energy to achieve more in less time.",                          icon: "🧠", students: 420 },
  { title: "Capture Like a Creator",              desc: "Photography and visual storytelling skills that make brands stop scrolling.",                  icon: "📸", students: 195 },
  { title: "Mobile Video Creation Mastery",       desc: "Produce high-quality video content from your phone. Go viral on purpose.",                    icon: "🎬", students: 510 },
  { title: "Performance Marketing Mastery",       desc: "Run profitable Facebook and Google ads. Learn what agencies charge thousands for.",            icon: "📊", students: 375 },
  { title: "YouTube Automation System",           desc: "Build a channel that earns while you sleep using systems and smart strategy.",                 icon: "▶️",  students: 290 },
  { title: "Entrepreneurship Blueprint",          desc: "From idea to income: validate, launch, and scale your first business.",                       icon: "🏗️", students: 460 },
] as const;

export const DONATION_CAUSES = [
  {
    icon: "🎓",
    title: "Student Enrollment Fund",
    desc: "Help deserving youth access life-changing skill training.",
    amounts: [500, 1000, 2500],
    color: "#6B2D8F",
  },
  {
    icon: "💧",
    title: "Clean Water Hand Pump",
    desc: "Install safe drinking water access for underserved villages.",
    amounts: [5000, 10000, 25000],
    color: "#0e7fb0",
  },
  {
    icon: "🌍",
    title: "Community Water Project",
    desc: "Large-scale water systems serving 200+ families.",
    amounts: [10000, 25000, 50000],
    color: "#0d9e6a",
  },
  {
    icon: "👶",
    title: "Sponsor Orphan Child",
    desc: "Cover food, education, clothing, and daily care.",
    amounts: [2000, 5000, 10000],
    color: "#d05a2b",
  },
  {
    icon: "🍲",
    title: "Donate a Meal",
    desc: "Feed a family today. No amount is too small.",
    amounts: [100, 250, 500],
    color: "#b08010",
  },
  {
    icon: "🏍️",
    title: "Donate Bike for Earning",
    desc: "Give a young person the means to earn a livelihood.",
    amounts: [3000, 7000, 15000],
    color: "#5a2ba8",
  },
  {
    icon: "❤️",
    title: "General Donation",
    desc: "Flexible support directed where it's needed most.",
    amounts: [500, 1000, 5000],
    color: "#b02020",
  },
] as const;

export const NAV_ITEMS = [
  { label: "About",    href: "#about"    },
  { label: "Programs", href: "#programs" },
  { label: "Courses",  href: "#courses"  },
  { label: "Donate",   href: "#donate"   },
  { label: "Contact",  href: "#contact"  },
] as const;

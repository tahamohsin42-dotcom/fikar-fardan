export const BRAND = {
  name:      "Fikr Fardan",
  tagline:   "Empowering Youth Through Skills, Opportunity & Impact",
  email:     "info@fikrfardan.org",
  phone:     "+92 302 8848500",
  whatsapp:  "923028848500",
  address:   "Lahore, Pakistan",
  bankName:  "Meezan Bank",
  bankAccount: "0318-0106685083",
  bankIBAN:  "PK36MEZN0003180106685083",
  bankTitle: "Fikr Fardan Foundation",
  website:   "https://fikr-fardan.vercel.app",
} as const;

export const STATS = [
  { value: 2400, suffix: "+", label: "Students Trained",   icon: "🎓" },
  { value: 48,   suffix: "",  label: "Water Projects",     icon: "💧" },
  { value: 1200, suffix: "+", label: "Families Supported", icon: "🏡" },
  { value: 320,  suffix: "",  label: "Volunteers",         icon: "🤝" },
] as const;

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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    courses: ["AI-Powered Design", "Digital Marketing", "Freelancing Mastery", "Entrepreneurship Blueprint"],
  },
  {
    id: "startup",
    icon: "🚀",
    title: "Startup Support",
    shortDesc: "Mentorship, seed resources, and network access for young entrepreneurs.",
    fullDesc: "We identify talented young entrepreneurs and connect them with mentors, seed resources, and a powerful network. From idea validation to market entry, our startup program walks alongside founders at every step.",
    duration: "6 months",
    seats: 20,
    tag: "Active" as const,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    courses: ["Business Model Canvas", "Pitch Deck Creation", "Financial Modeling", "Market Research"],
  },
  {
    id: "water",
    icon: "🌊",
    title: "Community Development",
    shortDesc: "Clean water hand pumps, sanitation, and welfare projects for underserved communities.",
    fullDesc: "Access to clean water is a fundamental right. Our community development program installs hand pumps, builds sanitation facilities, and supports welfare initiatives in rural areas of Pakistan where need is greatest.",
    duration: "Ongoing",
    seats: null,
    tag: "Active" as const,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    courses: [],
  },
  {
    id: "innovation",
    icon: "🌐",
    title: "Innovation Hub",
    shortDesc: "Global fellowships, grants, and talent programs connecting Pakistani youth to worldwide opportunities.",
    fullDesc: "Our Innovation Hub is being built to bridge talented Pakistani youth with global fellowships, international grants, and remote work opportunities. This program will create pathways to the world economy for deserving young people.",
    duration: "TBD",
    seats: 30,
    tag: "Coming Soon" as const,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    courses: [],
  },
] as const;

export const COURSES = [
  { id: "ai-design",    title: "AI-Powered Graphic Design Mastery",   desc: "Create professional visuals using AI tools. Build a portfolio that lands clients.",   icon: "🎨", students: 340, duration: "6 weeks" },
  { id: "linkedin",     title: "LinkedIn Growth & Personal Branding",  desc: "Build authority, attract opportunities, and grow your professional network.",          icon: "💼", students: 280, duration: "4 weeks" },
  { id: "productivity", title: "Psychology of Productivity",           desc: "Master your mind, habits, and energy to achieve more in less time.",                    icon: "🧠", students: 420, duration: "3 weeks" },
  { id: "photography",  title: "Capture Like a Creator",               desc: "Photography and visual storytelling skills that make brands stop scrolling.",           icon: "📸", students: 195, duration: "5 weeks" },
  { id: "video",        title: "Mobile Video Creation Mastery",        desc: "Produce high-quality video content from your phone. Go viral on purpose.",             icon: "🎬", students: 510, duration: "4 weeks" },
  { id: "marketing",    title: "Performance Marketing Mastery",        desc: "Run profitable Facebook and Google ads. Learn what agencies charge thousands for.",     icon: "📊", students: 375, duration: "8 weeks" },
  { id: "youtube",      title: "YouTube Automation System",            desc: "Build a channel that earns while you sleep using systems and smart strategy.",          icon: "▶️",  students: 290, duration: "6 weeks" },
  { id: "biz",          title: "Entrepreneurship Blueprint",           desc: "From idea to income: validate, launch, and scale your first business.",                 icon: "🏗️", students: 460, duration: "10 weeks" },
] as const;

export const DONATION_CAUSES = [
  { id: "student",   icon: "🎓", title: "Student Enrollment Fund",    desc: "Help deserving youth access life-changing skill training.",                   amounts: [500, 1000, 2500],    color: "#6B2D8F" },
  { id: "pump",      icon: "💧", title: "Clean Water Hand Pump",       desc: "Install safe drinking water access for underserved villages.",                amounts: [5000, 10000, 25000], color: "#0e7fb0" },
  { id: "water-com", icon: "🌍", title: "Community Water Project",     desc: "Large-scale water systems serving 200+ families.",                            amounts: [10000, 25000, 50000],color: "#0d9e6a" },
  { id: "orphan",    icon: "👶", title: "Sponsor Orphan Child",        desc: "Cover food, education, clothing, and daily care.",                            amounts: [2000, 5000, 10000],  color: "#d05a2b" },
  { id: "meal",      icon: "🍲", title: "Donate a Meal",               desc: "Feed a family today. No amount is too small.",                               amounts: [100, 250, 500],      color: "#b08010" },
  { id: "bike",      icon: "🏍️", title: "Donate Bike for Earning",    desc: "Give a young person the means to earn a livelihood.",                        amounts: [3000, 7000, 15000],  color: "#5a2ba8" },
  { id: "general",   icon: "❤️", title: "General Donation",           desc: "Flexible support directed where it's needed most.",                          amounts: [500, 1000, 5000],    color: "#b02020" },
] as const;

export const NAV_LINKS = [
  { label: "Home",      href: "/"         },
  { label: "About",     href: "/about"    },
  { label: "Programs",  href: "/programs" },
  { label: "Courses",   href: "/enroll"   },
  { label: "LMS",       href: "/lms"      },
  { label: "Donate",    href: "/donate"   },
  { label: "Impact",    href: "/impact"   },
  { label: "Volunteer", href: "/volunteer"},
  { label: "Contact",   href: "/contact"  },
] as const;

export const IMPACT_STORIES = [
  { name: "Sara Khan",    city: "Lahore",    story: "After completing the AI Design course, I landed 3 freelance clients and now earn PKR 80,000/month.",  icon: "🎨", before: "Unemployed graduate", after: "Freelance designer" },
  { name: "Ahmed Raza",   city: "Faisalabad",story: "The startup support program helped me turn my idea into a real business with 8 employees in 6 months.", icon: "🚀", before: "Street vendor",       after: "Startup founder" },
  { name: "Fatima Malik", city: "Karachi",   story: "I now teach digital marketing skills to other women in my community thanks to what I learned here.",    icon: "📊", before: "Homemaker",           after: "Marketing trainer" },
  { name: "Usman Ali",    city: "Multan",    story: "The clean water pump installed in our village changed everything. Children no longer get sick.",         icon: "💧", before: "No clean water",      after: "Safe water access" },
] as const;

export const LMS_COURSES = [
  {
    id: "ai-design",
    title: "AI-Powered Graphic Design",
    instructor: "Zain ul Abidin",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    lessons: [
      { id: 1, title: "Introduction to AI Design Tools", duration: "18 min", videoId: "dQw4w9WgXcQ", completed: true  },
      { id: 2, title: "Midjourney Prompt Mastery",       duration: "32 min", videoId: "dQw4w9WgXcQ", completed: true  },
      { id: 3, title: "Brand Identity with AI",          duration: "28 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 4, title: "Client Portfolio Setup",          duration: "22 min", videoId: "dQw4w9WgXcQ", completed: false },
    ],
    progress: 50,
    enrolled: 340,
    rating: 4.8,
  },
  {
    id: "marketing",
    title: "Performance Marketing Mastery",
    instructor: "Hira Baig",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    lessons: [
      { id: 1, title: "Facebook Ads Fundamentals",  duration: "25 min", videoId: "dQw4w9WgXcQ", completed: true  },
      { id: 2, title: "Audience Research Deep Dive",duration: "20 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 3, title: "Ad Copywriting That Converts",duration: "35 min", videoId: "dQw4w9WgXcQ", completed: false },
    ],
    progress: 33,
    enrolled: 375,
    rating: 4.9,
  },
  {
    id: "biz",
    title: "Entrepreneurship Blueprint",
    instructor: "Tuaha Ibn Mohsin",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    lessons: [
      { id: 1, title: "Finding Your Business Idea",    duration: "30 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 2, title: "Validating Before Building",    duration: "22 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 3, title: "First 10 Customers Playbook",  duration: "28 min", videoId: "dQw4w9WgXcQ", completed: false },
    ],
    progress: 0,
    enrolled: 460,
    rating: 4.7,
  },
  {
    id: "linkedin",
    title: "LinkedIn Growth & Personal Branding",
    instructor: "Sara Khan",
    thumbnail: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&q=80",
    lessons: [
      { id: 1, title: "Profile Optimisation 101",      duration: "20 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 2, title: "Content Strategy for LinkedIn",  duration: "28 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 3, title: "Growing to 5K Connections",     duration: "24 min", videoId: "dQw4w9WgXcQ", completed: false },
    ],
    progress: 0, enrolled: 280, rating: 4.8,
  },
  {
    id: "video",
    title: "Mobile Video Creation Mastery",
    instructor: "Usman Ali",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80",
    lessons: [
      { id: 1, title: "Smartphone Cinematography",     duration: "22 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 2, title: "Editing with CapCut",           duration: "30 min", videoId: "dQw4w9WgXcQ", completed: false },
      { id: 3, title: "Going Viral — The Algorithm",   duration: "18 min", videoId: "dQw4w9WgXcQ", completed: false },
    ],
    progress: 0, enrolled: 510, rating: 4.9,
  },
] as const;

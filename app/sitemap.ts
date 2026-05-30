import { MetadataRoute } from "next";
const BASE = "https://fikr-fardan.vercel.app";

const PAGES = [
  { url:"/",          priority:1.0,  freq:"weekly"  },
  { url:"/about",     priority:0.9,  freq:"monthly" },
  { url:"/programs",  priority:0.9,  freq:"weekly"  },
  { url:"/enroll",    priority:0.95, freq:"weekly"  },
  { url:"/donate",    priority:0.95, freq:"weekly"  },
  { url:"/startup",   priority:0.9,  freq:"weekly"  },
  { url:"/lms",       priority:0.85, freq:"weekly"  },
  { url:"/volunteer", priority:0.8,  freq:"monthly" },
  { url:"/impact",    priority:0.8,  freq:"monthly" },
  { url:"/contact",   priority:0.75, freq:"yearly"  },
  { url:"/faq",       priority:0.75, freq:"monthly" },
  { url:"/privacy",   priority:0.3,  freq:"yearly"  },
  { url:"/terms",     priority:0.3,  freq:"yearly"  },
  { url:"/refund",    priority:0.3,  freq:"yearly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(p => ({
    url: `${BASE}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));
}

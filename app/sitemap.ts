import { MetadataRoute } from "next";

const BASE = "https://fikr-fardan.vercel.app";

const PAGES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",           priority: 1.0,  changeFrequency: "weekly"  },
  { url: "/about",      priority: 0.9,  changeFrequency: "monthly" },
  { url: "/programs",   priority: 0.9,  changeFrequency: "weekly"  },
  { url: "/enroll",     priority: 0.95, changeFrequency: "weekly"  },
  { url: "/donate",     priority: 0.95, changeFrequency: "weekly"  },
  { url: "/lms",        priority: 0.85, changeFrequency: "weekly"  },
  { url: "/volunteer",  priority: 0.8,  changeFrequency: "monthly" },
  { url: "/impact",     priority: 0.8,  changeFrequency: "monthly" },
  { url: "/contact",    priority: 0.75, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(p => ({
    url: `${BASE}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}

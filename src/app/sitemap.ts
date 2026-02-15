import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getEducationModuleSlugs } from "@/content/educationModules";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/education"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/resources"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const moduleRoutes: MetadataRoute.Sitemap = getEducationModuleSlugs().map((slug) => ({
    url: absoluteUrl(`/education/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...moduleRoutes];
}


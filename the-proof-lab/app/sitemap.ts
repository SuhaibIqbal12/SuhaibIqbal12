import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://suhaib-the-proof-lab.suhaibiqbal961.chatgpt.site";
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${origin}/projects/${p.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

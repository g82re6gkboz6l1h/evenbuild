import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      default:
        return char;
    }
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evenbuild.com";

  const posts = getAllPosts();

  const postUrls = posts.map((post) => {
    // Clean the slug and create a proper URL-safe version
    const cleanSlug = post.slug.replace(/\.md$/, "");
    const url = `${baseUrl}/posts/${cleanSlug}`;

    return {
      url: escapeXml(url),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postUrls,
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/doctors", "/contact"].map(route => ({ url: site.url + route, changeFrequency: "monthly" as const, priority: route ? 0.8 : 1 })); }

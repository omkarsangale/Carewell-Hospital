import { ImageResponse } from "next/og";
import { site } from "@/data/site";
export const alt = site.name + " — " + site.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: "#eff7f5", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "70px", fontFamily: "sans-serif" }}><div style={{ display: "flex", color: "#167065", fontSize: 28 }}>{site.name} · Nashik</div><div style={{ display: "flex", marginTop: 65, fontSize: 80, color: "#183d37", fontWeight: 700 }}>Expert care.</div><div style={{ display: "flex", fontSize: 80, color: "#167065", fontWeight: 700 }}>A human touch.</div><div style={{ display: "flex", marginTop: 42, fontSize: 28, color: "#4d655f" }}>{site.tagline}</div></div>, size);
}

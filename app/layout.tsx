import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { MotionProvider } from "@/components/ui/motion";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name + " | Expert Care. A Human Touch.", template: "%s | " + site.name },
  description: site.description,
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, title: site.name, description: site.description },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}><a className="skip-link" href="#main-content">Skip to main content</a><MotionProvider><Navbar /><main id="main-content">{children}</main><Footer /><FloatingActions /></MotionProvider><noscript><style>{'main [style*="opacity:0"], main [style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }'}</style></noscript></body></html>;
}

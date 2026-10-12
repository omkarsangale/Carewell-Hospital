"use client";
import { ArrowUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 600); const frame = window.requestAnimationFrame(update); window.addEventListener("scroll", update, { passive: true }); return () => { window.cancelAnimationFrame(frame); window.removeEventListener("scroll", update); }; }, []);
  return <div className="floating-actions">{visible && <button className="back-to-top icon-button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp size={20} aria-hidden="true" /></button>}<a className="emergency-float" href={site.emergencyHref} aria-label={"Emergency call " + site.emergency}><Phone size={19} aria-hidden="true" /><span>Emergency Call</span></a></div>;
}

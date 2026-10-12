import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Telescope } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/safe-image";
export function About() {
  return <section id="about" className="section about-section"><div className="container about-grid">
    <Reveal className="about-visual"><div className="about-photo"><SafeImage src={site.about.image} alt={site.about.imageAlt} fill sizes="(max-width: 767px) 92vw, 43vw" className="object-cover" /></div><div className="about-note"><HeartHandshake size={27} aria-hidden="true" /><span>People first.<br /><strong>Always.</strong></span></div></Reveal>
    <Reveal className="about-copy"><p className="eyebrow"><span />{site.about.eyebrow}</p><h2>{site.about.title}<br /><span className="text-teal">{site.about.highlightedTitle}</span></h2>{site.about.paragraphs.map(p => <p key={p}>{p}</p>)}<div className="mission-grid"><div><HeartHandshake size={24} aria-hidden="true" /><h3>Our mission</h3><p>{site.about.mission}</p></div><div><Telescope size={24} aria-hidden="true" /><h3>Our vision</h3><p>{site.about.vision}</p></div></div><Link className="text-link" href="/contact">Get to know us <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal>
  </div></section>;
}

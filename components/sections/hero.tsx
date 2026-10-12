"use client";
import Link from "next/link";
import { ArrowUpRight, Check, Heart, Phone, ShieldCheck, Star } from "lucide-react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { SafeImage } from "@/components/ui/safe-image";
import { Reveal } from "@/components/ui/motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    const controls = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: latest => setDisplay(Math.round(latest)) });
    return () => controls.stop();
  }, [visible, reduced, value]);
  return <span ref={ref}><span aria-hidden="true">{display}{suffix}</span><span className="sr-only">{value}{suffix}</span></span>;
}
export function Hero() {
  const reduced = useReducedMotion();
  return <section className="hero" aria-labelledby="hero-title">
    <motion.div className="hero-orbit" aria-hidden="true" animate={reduced ? {} : { y: [0, 14, 0], rotate: [0, 4, 0] }} transition={{ duration: 9, repeat: Infinity }} />
    <div className="container hero-grid">
      <Reveal className="hero-copy">
        <p className="eyebrow"><span />{site.hero.eyebrow}</p>
        <h1 id="hero-title">{site.hero.title}<br /><em>{site.hero.highlightedTitle}</em></h1>
        <p className="hero-description">{site.hero.description}</p>
        <div className="button-row"><Link href="/#appointment" className="button button-primary">Book Appointment <ArrowUpRight size={19} aria-hidden="true" /></Link><a className="button button-secondary" href={site.phoneHref}><Phone size={18} aria-hidden="true" /> Call Now</a></div>
        <div className="hero-reassurance"><span><Check size={15} aria-hidden="true" /> Experienced specialists</span><span><Check size={15} aria-hidden="true" /> 24x7 emergency care</span></div>
        <div className="hero-community"><div className="avatar-stack" aria-hidden="true">{["A", "R", "M", "S"].map((initial, i) => <span key={initial} style={{ background: ["#dbeae7", "#ecdacf", "#c9dedf", "#e7e2ce"][i] }}>{initial}</span>)}</div><div><div className="mini-stars" aria-label="Illustrative 5 star rating">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={13} fill="currentColor" aria-hidden="true" />)}</div><p>Care that brings families together</p></div></div>
      </Reveal>
      <Reveal className="hero-visual" delay={0.15}>
        <div className="hero-photo"><SafeImage src={site.hero.image} alt={site.hero.imageAlt} fill sizes="(max-width: 767px) 92vw, 48vw" preload className="object-cover" /><div className="hero-photo-caption"><span className="live-dot" />A healthier tomorrow starts here.</div></div>
        <div className="hero-assurance"><span className="round-icon"><ShieldCheck size={25} aria-hidden="true" /></span><div><strong>{site.hero.imageBadge}</strong><small>{site.hero.imageBadgeDetail}</small></div><span className="assurance-check"><Check size={16} aria-hidden="true" /></span></div>
        <motion.div className="hero-heart" aria-hidden="true" animate={reduced ? {} : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}><Heart size={27} strokeWidth={1.5} /></motion.div>
        <span className="hero-dots" aria-hidden="true" />
      </Reveal>
    </div>
    <div className="container stats-wrap"><div className="stats">{site.stats.map(stat => <div className="stat" key={stat.label}><strong><Counter value={stat.value} suffix={stat.suffix} /></strong><p>{stat.label}</p></div>)}</div></div>
  </section>;
}

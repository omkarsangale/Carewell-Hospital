"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const reduced = useReducedMotion();
  // Automatic rotation stops during hover, keyboard interaction, or reduced motion.
  useEffect(() => {
    if (paused || interacting || reduced) return;
    const interval = window.setInterval(() => setIndex(current => (current + 1) % testimonials.length), 6500);
    return () => window.clearInterval(interval);
  }, [paused, interacting, reduced]);
  const review = testimonials[index];
  return <section id="testimonials" className="section testimonials-section"><div className="container testimonial-grid"><Reveal><SectionHeading eyebrow="STORIES THAT STAY WITH US" title="A little kindness. A lasting difference." description="Thoughtful care leaves an impression. Here are illustrative stories of the experience we aim to create." /><div className="testimonial-decoration"><Quote size={58} strokeWidth={1} aria-hidden="true" /><span>Every patient has a story.<br />We’re here to listen.</span></div></Reveal>
    <Reveal><div className="testimonial-carousel" role="region" aria-roledescription="carousel" aria-label="Example patient reviews" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInteracting(false); }} onKeyDown={e => { if (e.key === "ArrowRight") {e.preventDefault();setIndex((index + 1) % testimonials.length);} if (e.key === "ArrowLeft") {e.preventDefault();setIndex((index - 1 + testimonials.length) % testimonials.length);} }}>
      <div className="review-stage" aria-live={paused || interacting || reduced ? "polite" : "off"} aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.div key={index} role="group" aria-roledescription="slide" aria-label={(index + 1) + " of " + testimonials.length} initial={{ opacity: 0, x: reduced ? 0 : 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduced ? 0 : -12 }} transition={{ duration: reduced ? 0 : 0.25 }}><div className="review-stars" aria-label={review.rating + " out of 5 stars"}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}<span>EXAMPLE REVIEW</span></div><blockquote>“{review.quote}”</blockquote><div className="review-author"><span className="review-avatar" aria-hidden="true">{review.initials}</span><div><strong>{review.name}</strong><small>{review.context}</small></div><Quote className="review-quote" size={29} aria-hidden="true" /></div></motion.div></AnimatePresence></div>
      <div className="carousel-controls"><div className="carousel-dots">{testimonials.map((item, i) => <button key={item.name} className={index === i ? "active" : ""} aria-label={"Show example review " + (i + 1)} aria-pressed={index === i} onClick={() => { setIndex(i); setPaused(true); }} />)}</div><div className="carousel-buttons">{!reduced && <button className="icon-button" aria-label={paused ? "Resume review rotation" : "Pause review rotation"} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}<button className="icon-button" aria-label="Previous review" onClick={() => { setIndex((index - 1 + testimonials.length) % testimonials.length); setPaused(true); }}><ArrowLeft size={18} /></button><button className="icon-button" aria-label="Next review" onClick={() => { setIndex((index + 1) % testimonials.length); setPaused(true); }}><ArrowRight size={18} /></button></div></div>
    </div></Reveal>
  </div></section>;
}

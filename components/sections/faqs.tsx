"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return <section id="faqs" className="section faq-section"><div className="container faq-container"><Reveal><SectionHeading eyebrow="A LITTLE CLARITY" title="Questions? We’re here to help." description="A few helpful answers before your visit." centered /></Reveal><div className="faq-list">{faqs.map((faq, i) => <Reveal key={faq.question} delay={i * 0.03}><article className={"faq-item " + (open === i ? "is-open" : "")}><h3><button id={"faq-button-" + i} aria-expanded={open === i} aria-controls={"faq-answer-" + i} onClick={() => setOpen(open === i ? null : i)}>{faq.question}<span aria-hidden="true">{open === i ? <Minus size={19} /> : <Plus size={19} />}</span></button></h3><div id={"faq-answer-" + i} role="region" aria-labelledby={"faq-button-" + i} aria-hidden={open !== i}><AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }} className="faq-answer"><p>{faq.answer}</p></motion.div>}</AnimatePresence></div></article></Reveal>)}</div></div></section>;
}

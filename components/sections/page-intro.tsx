import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="container"><Reveal><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{description}</p><Link href="/#appointment" className="button button-primary">Book Appointment <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal></div></section>;
}

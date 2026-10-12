import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/motion";
import { ContentIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
export function Services({ detailed = false }: { detailed?: boolean }) {
  return <section id="services" className="section services-section"><div className="container">
    <Reveal className="section-top"><SectionHeading eyebrow="CARE FOR EVERY CHAPTER" title="Your health, in good hands." description="Specialised care, all under one roof. Find the support that’s right for you." />{!detailed && <Link href="/services" className="text-link">Explore all services <ArrowUpRight size={18} aria-hidden="true" /></Link>}</Reveal>
    <div className="services-grid">{services.map((service, i) => <Reveal key={service.id} delay={(i % 4) * 0.07}><article id={service.id} className="service-card hover-card"><span className={"service-icon tone-" + (i % 4)}><ContentIcon name={service.icon} size={28} /></span><h3>{service.name}</h3><p>{detailed ? service.detail : service.description}</p><Link href={detailed ? "/#appointment" : "/services#" + service.id} aria-label={(detailed ? "Book an appointment for " : "Learn about ") + service.name} className="card-link">{detailed ? "Book a visit" : "Explore care"}<ArrowUpRight size={17} aria-hidden="true" /></Link></article></Reveal>)}</div>
  </div></section>;
}

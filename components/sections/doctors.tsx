import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Reveal } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/safe-image";
import { SectionHeading } from "@/components/ui/section-heading";
export function Doctors() {
  return <section id="doctors" className="section doctors-section"><div className="container"><Reveal className="section-top"><SectionHeading eyebrow="THE PEOPLE BEHIND YOUR CARE" title="Expert hands. Kind hearts." description="Meet the specialists who take the time to understand you." /><Link href="/#appointment" className="text-link">Find your doctor <ArrowUpRight size={18} aria-hidden="true" /></Link></Reveal>
    <div className="doctors-grid">{doctors.map((doctor, i) => <Reveal key={doctor.id} delay={(i % 3) * 0.08}><article className="doctor-card hover-card"><div className="doctor-photo"><SafeImage src={doctor.image} alt={"Illustrative portrait for " + doctor.name} fill sizes="(max-width: 550px) 92vw, (max-width: 900px) 45vw, 30vw" className="object-cover" /><span className="doctor-specialty">{doctor.specialty}</span></div><div className="doctor-info"><p className="doctor-qualifications">{doctor.qualifications}</p><h3>{doctor.name}</h3><p className="experience"><BriefcaseBusiness size={15} aria-hidden="true" /> {doctor.experience} years of experience</p><Link href={"/?doctor=" + doctor.id + "#appointment"} className="doctor-booking">Book a consultation <ArrowUpRight size={18} aria-hidden="true" /></Link></div></article></Reveal>)}</div>
  </div></section>;
}

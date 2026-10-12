import { facilities } from "@/data/facilities";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentIcon } from "@/components/ui/icons";
export function Facilities() {
  return <section id="facilities" className="section facilities-section"><div className="container"><Reveal><SectionHeading eyebrow="COMFORT MEETS CAPABILITY" title="Built around your wellbeing." description="Thoughtfully equipped spaces. Support for you and the people by your side." centered /></Reveal><div className="facilities-grid">{facilities.map((facility, i) => <Reveal key={facility.name} delay={(i % 3) * 0.07}><article className="facility-card hover-card"><ContentIcon name={facility.icon} size={28} /><h3>{facility.name}</h3><p>{facility.description}</p></article></Reveal>)}</div></div></section>;
}

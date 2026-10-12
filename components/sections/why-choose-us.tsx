import { reasons } from "@/data/facilities";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentIcon } from "@/components/ui/icons";
export function WhyChooseUs() {
  return <section className="section why-section"><div className="container"><Reveal><SectionHeading eyebrow="THE CAREWELL DIFFERENCE" title="Because you deserve thoughtful care." description="The little things make a big difference. Here’s what matters to us." centered /></Reveal><div className="why-grid">{reasons.map((reason, i) => <Reveal key={reason.title} delay={(i % 3) * 0.07}><div className="why-item"><span className="why-icon"><ContentIcon name={reason.icon} size={27} /></span><div><h3>{reason.title}</h3><p>{reason.description}</p></div></div></Reveal>)}</div></div></section>;
}

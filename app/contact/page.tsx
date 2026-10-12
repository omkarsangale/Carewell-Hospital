import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Contact } from "@/components/sections/contact";
import { Appointment } from "@/components/sections/appointment";
import { FAQs } from "@/components/sections/faqs";
export const metadata: Metadata = { title: "Contact Us", description: "Find " + site.name + " in " + site.address + ". Contact reception, view visiting hours, or call our emergency helpline." };
export default function ContactPage() { return <><PageIntro eyebrow="WE’RE HERE TO HELP" title="Your next step starts here." description="Whether you’re planning a visit or looking for a little guidance, we’re just a call away." /><Contact /><Appointment /><FAQs /></>; }

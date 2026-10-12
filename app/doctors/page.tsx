import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Doctors } from "@/components/sections/doctors";
import { Appointment } from "@/components/sections/appointment";
export const metadata: Metadata = { title: "Our Doctors", description: "Meet the team of specialists at " + site.name + ". Explore specialties and choose your preferred doctor." };
export default function DoctorsPage() { return <><PageIntro eyebrow="MEET YOUR CARE TEAM" title="Good people. Exceptional care." description="Specialist knowledge and a personal approach. Get to know the people here to support you." /><Doctors /><Appointment /></>; }

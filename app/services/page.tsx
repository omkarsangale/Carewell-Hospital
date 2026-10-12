import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Services } from "@/components/sections/services";
import { Facilities } from "@/components/sections/facilities";
import { Appointment } from "@/components/sections/appointment";
export const metadata: Metadata = { title: "Our Services", description: "Explore eight care services and patient facilities at " + site.name + " in " + site.address + "." };
export default function ServicesPage() { return <><PageIntro eyebrow="COMPREHENSIVE CARE" title="The right care, close to home." description="From your first check-up to specialist support, explore services for every stage of life." /><Services detailed /><Facilities /><Appointment /></>; }

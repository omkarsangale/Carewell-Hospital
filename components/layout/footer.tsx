import Link from "next/link";
import { HeartPulse, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { site } from "@/data/site";
import { services } from "@/data/services";
const socialIcons = { facebook: FaFacebookF, instagram: FaInstagram, linkedin: FaLinkedinIn };
export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-about"><Link className="brand" href="/"><span className="brand-icon"><HeartPulse aria-hidden="true" /></span><strong>{site.name}</strong></Link><p>{site.tagline}. Compassionate, personalised healthcare for you and your family.</p><div className="social-links">{site.socialLinks.map(link => { const Icon = socialIcons[link.icon as keyof typeof socialIcons] || HeartPulse; return <a key={link.label} href={link.href} aria-label={link.label + " (placeholder profile)"} target="_blank" rel="noopener noreferrer"><Icon size={18} aria-hidden="true" /></a>; })}</div></div>
    <div><h3>Explore our hospital</h3>{site.navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/#appointment">Book an appointment</Link></div>
    <div><h3>Our services</h3>{services.map(service => <Link key={service.id} href={"/services#" + service.id}>{service.name}</Link>)}</div>
    <div><h3>We’re here for you</h3><p>{site.address}</p><a href={site.phoneHref}>{site.phone}</a><a href={"mailto:" + site.email}>{site.email}</a><p>OPD: {site.hours.opd}<br />Emergency: {site.hours.emergency}</p><a className="footer-emergency" href={site.emergencyHref}>Emergency helpline <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><a className="footer-credit" href="https://clarigence.in" target="_blank" rel="noopener noreferrer">Made by Clarigence.in</a></div><p className="demo-notice container">{site.demoNotice}</p></footer>;
}

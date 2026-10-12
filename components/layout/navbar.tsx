"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, HeartPulse, Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    const frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, []);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const elements = [toggleRef.current, ...Array.from(mobileRef.current?.querySelectorAll<HTMLAnchorElement>("a") || [])].filter(Boolean) as HTMLElement[];
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
    <div className="topbar"><div className="container topbar-inner"><span>Thoughtful care. Right here in Nashik.</span><a href={site.emergencyHref}><Phone size={12} aria-hidden="true" /> Emergency: {site.emergency}</a></div></div>
    <div className="container navbar">
      <Link href="/" className="brand" aria-label={site.name + " home"} onClick={() => setOpen(false)}>
        <span className="brand-icon"><HeartPulse size={26} strokeWidth={1.9} aria-hidden="true" /></span>
        <span><strong>{site.name}</strong><small>CARE WITH COMPASSION</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}</nav>
      <Link href="/#appointment" className="button button-primary nav-appointment">Book Appointment <ArrowUpRight size={17} aria-hidden="true" /></Link>
      <button ref={toggleRef} className="menu-toggle icon-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav ref={mobileRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{site.navigation.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="button button-primary" href="/#appointment" onClick={() => setOpen(false)}>Book Appointment <ArrowUpRight size={18} aria-hidden="true" /></Link></nav>}
  </header>;
}

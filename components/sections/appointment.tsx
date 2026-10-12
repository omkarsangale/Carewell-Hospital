"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3, Phone, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/motion";

// Dates use the visitor's local calendar, avoiding UTC date shifts.
function localToday() { const now = new Date(); return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-"); }
const schema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(80, "Please use 80 characters or fewer."),
  phone: z.string().trim().refine(value => /^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(value.replace(/[\s()-]/g, "")), "Enter a valid 10-digit Indian mobile number."),
  department: z.string().refine(value => services.some(service => service.id === value), "Please choose a department."),
  doctor: z.string(),
  date: z.string().refine(value => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value + "T00:00:00Z")) && new Date(value + "T00:00:00Z").toISOString().slice(0, 10) === value && value >= localToday(), "Please choose today or a future date."),
  message: z.string().trim().max(500, "Please use 500 characters or fewer."),
}).superRefine((values, ctx) => {
  if (values.doctor && !doctors.some(doctor => doctor.id === values.doctor && doctor.department === values.department)) {
    ctx.addIssue({ code: "custom", path: ["doctor"], message: "Please choose a doctor in this department." });
  }
});
type AppointmentValues = z.infer<typeof schema>;
function FieldError({ name, errors }: { name: keyof AppointmentValues; errors: FieldErrors<AppointmentValues> }) {
  return errors[name] ? <p className="field-error" id={name + "-error"} role="alert">{errors[name]?.message}</p> : null;
}
export function Appointment() {
  return <Suspense fallback={<section id="appointment" className="section appointment-section"><div className="container"><h2>Book an appointment</h2><p>Loading your appointment form…</p></div></section>}><AppointmentForm /></Suspense>;
}
function AppointmentForm() {
  const searchParams = useSearchParams();
  const selectedDoctor = searchParams.get("doctor");
  const [submitted, setSubmitted] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, control, setValue, reset, formState: { errors } } = useForm<AppointmentValues>({
    resolver: zodResolver(schema), defaultValues: { name: "", phone: "", department: "", doctor: "", date: "", message: "" },
  });
  const department = useWatch({ control, name: "department" });
  const availableDoctors = doctors.filter(doctor => doctor.department === department);
  useEffect(() => {
    const selected = doctors.find(doctor => doctor.id === selectedDoctor);
    if (selected) { setValue("department", selected.department); setValue("doctor", selected.id); }
  }, [setValue, selectedDoctor]);
  useEffect(() => { if (submitted) successRef.current?.focus(); }, [submitted]);
  function submit() {
    // Demo only: no patient details are persisted or sent to a server.
    setSubmitted(true); reset();
  }
  const describedBy = (name: keyof AppointmentValues) => errors[name] ? name + "-error" : undefined;
  return <section id="appointment" className="section appointment-section"><div className="container appointment-grid">
    <Reveal className="appointment-copy"><p className="eyebrow"><span />LET’S TAKE THE FIRST STEP</p><h2>A little time today.<br /><span>A healthier tomorrow.</span></h2><p>Tell us what you need, and take the first step towards care that’s right for you.</p><div className="appointment-features"><div><CalendarDays size={22} aria-hidden="true" /><span>Choose a day that works for you</span></div><div><Clock3 size={22} aria-hidden="true" /><span>OPD: {site.hours.opd}</span></div><div><ShieldCheck size={22} aria-hidden="true" /><span>Thoughtful support at every step</span></div></div><div className="appointment-call"><span>Prefer to speak with someone?</span><a href={site.phoneHref}><Phone size={20} aria-hidden="true" />{site.phone}</a></div><p className="appointment-demo">Demo form: your details are not sent or saved. Call reception to arrange an actual appointment.</p></Reveal>
    <Reveal className="appointment-panel" delay={0.1}>{submitted ? <div className="form-success" ref={successRef} tabIndex={-1} role="status"><CheckCircle2 size={56} aria-hidden="true" /><h3>You’re ready for the next step.</h3><p>Your demo form was completed successfully. No appointment has been booked and no details were sent.</p><a className="button button-primary" href={site.phoneHref}><Phone size={17} aria-hidden="true" /> Call to confirm a visit</a><button className="text-link" onClick={() => setSubmitted(false)}>Fill another form</button></div> : <form onSubmit={handleSubmit(submit)} noValidate>
      <h3>Book an appointment</h3><p className="form-intro">Let’s find the right care for you.</p>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="name">Full name <span>*</span></label><input id="name" autoComplete="name" placeholder="Your full name" maxLength={80} {...register("name")} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} required /><FieldError name="name" errors={errors} /></div>
        <div className="form-field"><label htmlFor="phone">Phone number <span>*</span></label><input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" {...register("phone")} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} required /><FieldError name="phone" errors={errors} /></div>
        <div className="form-field"><label htmlFor="department">Department <span>*</span></label><select id="department" {...register("department", { onChange: () => setValue("doctor", "") })} aria-invalid={!!errors.department} aria-describedby={describedBy("department")} required><option value="">Select a department</option>{services.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}</select><FieldError name="department" errors={errors} /></div>
        <div className="form-field"><label htmlFor="doctor">Preferred doctor</label><select id="doctor" {...register("doctor")} disabled={!department} aria-invalid={!!errors.doctor} aria-describedby={describedBy("doctor")}><option value="">{!department ? "Choose a department first" : "Any available doctor"}</option>{availableDoctors.map(doctor => <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)}</select><FieldError name="doctor" errors={errors} /></div>
        <div className="form-field full-width"><label htmlFor="date">Preferred date <span>*</span></label><input id="date" type="date" min={minimumDate || undefined} {...register("date")} aria-invalid={!!errors.date} aria-describedby={describedBy("date")} onFocus={() => setMinimumDate(localToday())} required /><FieldError name="date" errors={errors} /></div>
        <div className="form-field full-width"><label htmlFor="message">Anything you’d like us to know? <small>(optional)</small></label><textarea id="message" rows={3} maxLength={500} placeholder="A brief note about your visit. Avoid sensitive medical details." {...register("message")} aria-invalid={!!errors.message} aria-describedby={describedBy("message")} /><FieldError name="message" errors={errors} /></div>
      </div><button type="submit" className="button button-primary form-submit">Complete demo request <ArrowUpRight size={19} aria-hidden="true" /></button><p className="form-footnote">Required fields are marked *. This is a demonstration, not a confirmed booking.</p>
    </form>}</Reveal>
  </div></section>;
}

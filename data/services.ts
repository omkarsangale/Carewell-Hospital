export type ServiceIcon = "stethoscope" | "heart" | "bone" | "baby" | "flower" | "smile" | "microscope" | "pill";
export const services: { id: string; name: string; icon: ServiceIcon; description: string; detail: string }[] = [
  { id: "general-medicine", name: "General Medicine", icon: "stethoscope", description: "Everyday care for a healthier you.", detail: "Consultations, routine check-ups, preventive screenings, and support for ongoing health conditions." },
  { id: "cardiology", name: "Cardiology", icon: "heart", description: "Expert care, close to your heart.", detail: "Heart health consultations, diagnostic assessments, and personalised care planning." },
  { id: "orthopedics", name: "Orthopedics", icon: "bone", description: "Helping you move through life.", detail: "Assessment and treatment planning for bone, joint, and muscle concerns." },
  { id: "pediatrics", name: "Pediatrics", icon: "baby", description: "Little patients. Lots of care.", detail: "Child health consultations, growth monitoring, and guidance for parents." },
  { id: "gynecology", name: "Gynecology", icon: "flower", description: "Supporting every stage of womanhood.", detail: "Women's health consultations, routine screenings, and maternity care guidance." },
  { id: "dental-care", name: "Dental Care", icon: "smile", description: "More reasons to smile.", detail: "Dental check-ups, oral hygiene support, and treatment planning for healthy teeth and gums." },
  { id: "diagnostics", name: "Diagnostics & Lab", icon: "microscope", description: "Clarity for your next step.", detail: "Laboratory testing and diagnostic assessments to support your doctor's care decisions." },
  { id: "pharmacy", name: "Pharmacy", icon: "pill", description: "Your essentials, all in one place.", detail: "On-site access to prescribed medicines and guidance on their use." },
];

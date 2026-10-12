import { Activity, Ambulance, Baby, Bone, Clock3, Coffee, FlaskConical, Flower2, HandHeart, Heart, MapPin, Microscope, ParkingCircle, Pill, Scissors, ShieldCheck, Smile, Stethoscope, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope, heart: Heart, bone: Bone, baby: Baby, flower: Flower2, smile: Smile,
  microscope: Microscope, pill: Pill, activity: Activity, surgical: Scissors, ambulance: Ambulance,
  lab: FlaskConical, parking: ParkingCircle, coffee: Coffee, users: Users, clock: Clock3,
  shield: ShieldCheck, hand: HandHeart, map: MapPin,
};
export function ContentIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = icons[name] || Heart;
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}

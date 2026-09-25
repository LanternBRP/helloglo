/**
 * Staffing World Glo Up campaign data: a concise, human-confirmed meeting request
 * flow using conference-local times, delivered through Formspree.
 */

export const STAFFING_WORLD_LOGO = "/images/staffing-world-2026-logo_62ad502b.png";

export type StaffingWorldDate = {
  id: "2026-10-12" | "2026-10-13" | "2026-10-14";
  weekday: string;
  month: string;
  day: string;
  fullLabel: string;
};

export const STAFFING_WORLD_DATES: StaffingWorldDate[] = [
  { id: "2026-10-12", weekday: "Monday", month: "October", day: "12", fullLabel: "Monday, October 12, 2026" },
  { id: "2026-10-13", weekday: "Tuesday", month: "October", day: "13", fullLabel: "Tuesday, October 13, 2026" },
  { id: "2026-10-14", weekday: "Wednesday", month: "October", day: "14", fullLabel: "Wednesday, October 14, 2026" },
];

export const STAFFING_WORLD_TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
] as const;

export type StaffingWorldTime = (typeof STAFFING_WORLD_TIMES)[number];

export function gloUpSubject(date: StaffingWorldDate, time: StaffingWorldTime) {
  return `Staffing World Glo Up request — ${date.month} ${date.day} at ${time}`;
}

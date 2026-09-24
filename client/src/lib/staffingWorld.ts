/**
 * Staffing World Glo Up campaign data: a concise, human-confirmed meeting request
 * flow using conference-local times and an explicit email handoff.
 */

export const STAFFING_WORLD_LOGO = "/images/staffing-world-2026-logo_62ad502b.png";
export const GLO_UP_EMAIL = "hello@helloglo.com";

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

export type GloUpAttendee = {
  name: string;
  business: string;
  title: string;
  email: string;
};

export function buildGloUpEmail(
  date: StaffingWorldDate,
  time: StaffingWorldTime,
  attendee: GloUpAttendee,
) {
  const subject = `Staffing World Glo Up request — ${date.month} ${date.day} at ${time}`;
  const body = [
    "Hello Glo team,",
    "",
    "I would like to request a Glo Up meeting at Staffing World 2026.",
    "",
    `Requested date: ${date.fullLabel}`,
    `Requested time: ${time} (conference local time)`,
    "",
    `Name: ${attendee.name}`,
    `Business: ${attendee.business}`,
    `Title: ${attendee.title}`,
    `Email: ${attendee.email}`,
    "",
    "Please reply to confirm this requested time.",
  ].join("\n");

  return `mailto:${GLO_UP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

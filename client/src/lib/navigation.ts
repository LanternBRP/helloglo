/**
 * Operational Signal Desk navigation: route-aware orientation without eyebrow labels,
 * using the approved Cyn only for active location cues and Base 2 as the shared ground.
 */

export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationDivisionId = "platform" | "built-for" | "why-glo" | "resources" | "company" | "demo" | "event";

export type NavigationGroup = {
  id: Exclude<NavigationDivisionId, "resources" | "company" | "demo" | "event">;
  label: string;
  links: NavigationLink[];
};

export type NavigationContext = {
  divisionId: NavigationDivisionId;
  divisionLabel: string;
  pageLabel: string;
  siblingLinks: NavigationLink[];
};

const platformLinks: NavigationLink[] = [
  { label: "The Desk", href: "/recruiter-os/" },
  { label: "Client Room", href: "/client-portal/" },
  { label: "Candidate Room", href: "/candidate-portal/" },
  { label: "Glo Intelligence", href: "/intelligence/" },
  { label: "Integrations", href: "/platform/integrations/" },
];

const builtForLinks: NavigationLink[] = [
  { label: "Overview", href: "/who-we-serve/" },
  { label: "Light industrial", href: "/built-for/light-industrial-staffing/" },
  { label: "Healthcare", href: "/who-we-serve/healthcare-staffing/" },
  { label: "Professional", href: "/built-for/professional-staffing/" },
  { label: "IT & technology", href: "/built-for/technology-staffing/" },
  { label: "Executive search", href: "/built-for/executive-search-software/" },
];

const whyGloLinks: NavigationLink[] = [
  { label: "Staffing software", href: "/staffing-software/" },
  { label: "Staffing agency software", href: "/staffing-agency-software/" },
  { label: "Applicant tracking", href: "/applicant-tracking-system/" },
  { label: "Recruitment CRM", href: "/recruitment-crm/" },
  { label: "Candidate matching", href: "/candidate-matching/" },
];

const resourceLinks: NavigationLink[] = [
  { label: "Overview", href: "/resources/" },
  { label: "What is an ATS?", href: "/resources/what-is-an-ats/" },
  { label: "ATS vs. recruiting CRM", href: "/resources/ats-vs-recruiting-crm/" },
  { label: "AI in staffing", href: "/resources/ai-in-staffing/" },
];

const companyLinks: NavigationLink[] = [
  { label: "About Glo", href: "/about/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Security", href: "/security/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "Accessibility", href: "/accessibility/" },
];

export const navGroups: NavigationGroup[] = [
  { id: "platform", label: "Platform", links: platformLinks },
  { id: "built-for", label: "Built for", links: builtForLinks },
  { id: "why-glo", label: "Why Glo", links: whyGloLinks },
];

const routeContexts: Record<string, NavigationContext> = {};

function registerDivision(
  divisionId: NavigationDivisionId,
  divisionLabel: string,
  links: NavigationLink[],
) {
  links.forEach((link) => {
    routeContexts[link.href] = {
      divisionId,
      divisionLabel,
      pageLabel: link.label,
      siblingLinks: links,
    };
  });
}

registerDivision("platform", "Platform", platformLinks);
registerDivision("built-for", "Built for", builtForLinks);
registerDivision("why-glo", "Why Glo", whyGloLinks);
registerDivision("resources", "Resources", resourceLinks);
registerDivision("company", "Company", companyLinks);

routeContexts["/integrations/"] = routeContexts["/platform/integrations/"];
routeContexts["/built-for/"] = routeContexts["/who-we-serve/"];
routeContexts["/built-for/healthcare-staffing/"] = routeContexts["/who-we-serve/healthcare-staffing/"];
routeContexts["/recruiting-crm/"] = routeContexts["/recruitment-crm/"];

routeContexts["/book-a-demo/"] = {
  divisionId: "demo",
  divisionLabel: "Glo",
  pageLabel: "Book a demo",
  siblingLinks: [],
};

routeContexts["/staffing-world-glo-up/"] = {
  divisionId: "event",
  divisionLabel: "Staffing World",
  pageLabel: "Schedule a Glo Up",
  siblingLinks: [],
};

export function normalizeNavigationPath(location: string) {
  const cleanPath = location.split(/[?#]/)[0] || "/";
  if (cleanPath === "/") return cleanPath;
  return cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
}

export function getNavigationContext(location: string) {
  return routeContexts[normalizeNavigationPath(location)] ?? null;
}

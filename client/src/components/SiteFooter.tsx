/**
 * Operational Signal Desk footer: dense but legible navigation on charcoal,
 * with the approved mark, no promotional clutter, and one clear next move.
 */
import { Link } from "wouter";

const LOGO = "/images/glo-cyan-no-tm_09e4b011.svg";
const LANTERN_LOGO = "/images/lantern_logo_on_dark_2bbf7233.svg";

const columns = [
  {
    title: "Platform",
    links: [
      ["The Desk", "/recruiter-os/"], ["Client Room", "/client-portal/"],
      ["Candidate Room", "/candidate-portal/"], ["Glo Intelligence", "/intelligence/"],
      ["Integrations", "/platform/integrations/"],
    ],
  },
  {
    title: "Built for",
    links: [
      ["Overview", "/who-we-serve/"], ["Light industrial", "/built-for/light-industrial-staffing/"], ["Healthcare", "/who-we-serve/healthcare-staffing/"],
      ["Professional", "/built-for/professional-staffing/"], ["IT & technology", "/built-for/technology-staffing/"],
      ["Executive search", "/built-for/executive-search-software/"],
    ],
  },
  {
    title: "Why Glo",
    links: [
      ["Staffing software", "/staffing-software/"], ["Staffing agency software", "/staffing-agency-software/"],
      ["Applicant tracking", "/applicant-tracking-system/"], ["Recruitment CRM", "/recruitment-crm/"],
      ["Candidate matching", "/candidate-matching/"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Glo", "/about/"], ["Contact Us", "/contact/"], ["Resources", "/resources/"], ["Book a demo", "/book-a-demo/"],
      ["Privacy Policy", "/privacy/"], ["Security", "/security/"], ["Terms of Service", "/terms/"], ["Accessibility", "/accessibility/"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={LOGO} alt="Glo" />
            <p>AI-native staffing and recruiting software built to move the work, not just record it.</p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="footer-title">{column.title}</p>
              <div className="footer-links">
                {column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            <span>© {new Date().getFullYear()} Glo by</span>
            <img src={LANTERN_LOGO} alt="Lantern™" />
          </span>
          <span>From candidate to placement. Fewer blind spots in between.</span>
        </div>
      </div>
    </footer>
  );
}

/**
 * Operational Signal Desk content pages: route-specific sales copy sits inside
 * one reusable editorial system, preserving hierarchy without near-duplicate pages.
 */
import { Link, useLocation } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SignalRail from "@/components/SignalRail";
import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import OperationalProof, { type ProofKind } from "@/components/OperationalProof";
import TeamSection from "@/components/TeamSection";
import ProductNarrative from "@/components/ProductNarrative";
import MarketNarrative, { type MarketNarrativeKind } from "@/components/MarketNarrative";

type PageConfig = {
  title: string;
  metaTitle?: string;
  canonicalPath?: string;
  description: string;
  intro: string;
  introDetail?: string;
  heroEvidence?: {
    stat: string;
    copy: string;
    href: string;
    label: string;
  };
  thesis: string;
  features: Array<[string, string]>;
  steps?: string[];
  art?: string;
  links: Array<[string, string]>;
};

const recruiterArt = "/images/glo-recruiter-priority-window_7164fab7.png";
const portalsArt = "/images/glo-connected-portals_1c4fcb82.png";
const trustArt = "/images/glo-ai-guardrails_0df34c89.png";

const pages: Record<string, PageConfig> = {
  "/recruiter-os/": {
    title: "Welcome to The Desk.",
    description: "The Desk ranks the highest-impact staffing and recruiting work across candidates, jobs, clients, contracts, compliance, and revenue.",
    intro: "There’s the old way of managing a desk, and there’s The Desk. Instead of bouncing between systems, chasing updates, and deciding what deserves your attention, The Desk brings what matters into one prioritized view.",
    introDetail: "Revenue risk, fillability, candidate readiness, and client blockers are continuously evaluated and ranked, so you know what needs your attention now and what can wait. Work the highest-impact thing first. Every time.",
    thesis: "Your recruiters should not have to reconstruct the business context before every move.",
    features: [
      ["Highest-impact action ranking", "Bring revenue risk, fillability, candidate readiness, and client blockers into one ordered work view."],
      ["Management by exception", "Surface the moments that need judgment while routine work moves through repeatable workflows."],
      ["One front-office picture", "Connect candidates, clients, job orders, submissions, placements, compliance context, and growth pipeline."],
    ],
    art: recruiterArt,
    links: [["Glo Intelligence", "/intelligence/"], ["Recruitment CRM", "/recruitment-crm/"], ["Candidate matching", "/candidate-matching/"]],
  },
  "/client-portal/": {
    title: "Welcome to the Client Room.",
    metaTitle: "Client Room: Client Portal Software for Staffing Agencies | Glo",
    description: "Give staffing clients real visibility into candidates, placements, and open jobs, all in one live view. See the Client Room in a demo.",
    intro: "Client updates shouldn’t be another thing on your to-do list.",
    introDetail: "Open jobs. Candidate status. Placements. All live, all in one place and updated the moment something changes. Your clients don’t have to ask for updates. They already have them.",
    thesis: "Fewer status meetings. Better signals. Faster decisions.",
    features: [
      ["Candidate review that improves the next match", "Capture approvals, information requests, ratings, and preference signals in the workflow."],
      ["Open-demand visibility", "Give clients a focused view of jobs, candidates, placements, schedules, contracts, and relevant alerts."],
      ["One collaboration trail", "Keep messages, feedback, and recruiter follow-up connected to the work they affect."],
    ],
    art: portalsArt,
    links: [["Candidate Room", "/candidate-portal/"], ["Staffing software", "/staffing-software/"], ["Integrations", "/platform/integrations/"]],
  },
  "/candidate-portal/": {
    title: "Make the candidate part of the operation.",
    description: "Glo Candidate Room gives candidates a clear journey across profile, applications, documents, alerts, onboarding, and placement progress.",
    intro: "A candidate is not a record. Candidate Room gives every person a current profile, a visible next step, and one place for preferences, applications, documents, messages, and onboarding progress.",
    thesis: "When candidates know what is next, recruiters spend less time rebuilding momentum.",
    features: [
      ["A journey, not a status", "Show the next required step and the blocker standing between the candidate and placement."],
      ["A living profile", "Keep availability, preferences, applications, documents, and alerts connected to matching context."],
      ["Placement progression", "Carry the candidate through communication, onboarding, and the moments that protect readiness."],
    ],
    art: portalsArt,
    links: [["Candidate matching", "/candidate-matching/"], ["The Desk", "/recruiter-os/"], ["Healthcare staffing", "/who-we-serve/healthcare-staffing/"]],
  },
  "/intelligence/": {
    title: "AI that works the job.",
    metaTitle: "Glo Intelligence: AI Recruiting Software for Staffing | Glo",
    description: "AI-native staffing and recruiting software that observes operational signals, reasons through context, prioritizes the next move, and keeps people in control.",
    intro: "Glo watches the same signals your best recruiter watches: candidate readiness, job fillability, client health, contract risk, compliance, and revenue, then reasons through what they mean and puts the next move in front of the person it matters to.",
    introDetail: "From signal to action, instantly.",
    thesis: "AI-native means designing the intelligence and the guardrails together from the beginning.",
    features: [
      ["Reasoning with context", "Connect the recommendation to the operational signals and source context that make it relevant."],
      ["Controlled action", "Initiate or automate work where appropriate while keeping consequential decisions reviewable."],
      ["Observable behavior", "Keep recommendations, exceptions, outcomes, and quality visible so teams can investigate what changed."],
    ],
    steps: ["Observe", "Reason", "Prioritize", "Act", "Learn"],
    art: trustArt,
    links: [["The Desk", "/recruiter-os/"], ["Applicant tracking system", "/applicant-tracking-system/"], ["Candidate matching", "/candidate-matching/"]],
  },
  "/platform/integrations/": {
    title: "Connect Glo to the tools your business depends on.",
    metaTitle: "Staffing Software Integrations | Glo",
    canonicalPath: "/platform/integrations/",
    description: "Connect Glo with payroll, finance, CRM, communications, compliance, and the staffing systems your business depends on.",
    intro: "Glo brings the core staffing experience together in one AI-native platform and connects with the systems your business still depends on.",
    introDetail: "From payroll and finance to communications and compliance, Glo helps information move across your business without your teams moving it themselves.",
    thesis: "Connectivity should make the work more coherent—not produce another place to reconcile it.",
    features: [
      ["Migration with operating context", "Plan the move from legacy ATS and CRM structures around the workflows your teams actually run."],
      ["Category breadth", "Support the verified payroll, VMS, job-board, communications, background, and compliance connections your model requires."],
      ["Native workflow value", "Use connected signals inside prioritization and execution rather than treating integrations as a logo wall."],
    ],
    art: portalsArt,
    links: [["Staffing and recruiting software", "/staffing-software/"], ["The Desk", "/recruiter-os/"], ["Book a demo", "/book-a-demo/"]],
  },
  "/staffing-software/": {
    title: "Software that runs the operation.",
    description: "Compare fragmented staffing and recruiting software with Glo’s AI-native platform for recruiter, client, and candidate workflows.",
    intro: "Glo combines the front-office system, the participation portals, and the intelligence layer into one native platform built around placements.",
    thesis: "The fastest path from candidate to placement is a connected one.",
    features: [
      ["Recruiter execution", "Rank work by impact across job orders, candidates, clients, exceptions, and revenue."],
      ["Client and candidate participation", "Turn every approval, preference, document, and journey step into usable operating context."],
      ["Intelligence throughout", "Observe, reason, prioritize, and act inside the workflow rather than beside it."],
    ],
    art: recruiterArt,
    links: [["The Desk", "/recruiter-os/"], ["Applicant tracking system", "/applicant-tracking-system/"], ["Built for", "/who-we-serve/"]],
  },
  "/staffing-agency-software/": {
    title: "One operating platform from first conversation to placement.",
    description: "Glo connects agency growth, delivery, client collaboration, candidate experience, and operational intelligence in one staffing and recruiting platform.",
    intro: "Winning the job and filling the job should not happen in separate worlds. Glo connects growth pipeline, job orders, candidate delivery, client feedback, and placement progress.",
    thesis: "One system should understand both the relationship and the work it creates.",
    features: [
      ["Growth meets delivery", "Carry buyer contacts, opportunities, and client context directly into the job-order workflow."],
      ["One source of operating truth", "Align recruiters, sales, clients, and candidates around the same current picture."],
      ["Economics built for adoption", "Discuss a model designed around useful AI across the operation—not AI rationed as a novelty."],
    ],
    art: portalsArt,
    links: [["Recruitment CRM", "/recruitment-crm/"], ["Client Room", "/client-portal/"], ["Book a demo", "/book-a-demo/"]],
  },
  "/applicant-tracking-system/": {
    title: "An applicant tracking system that does more than track.",
    metaTitle: "Applicant Tracking System (ATS) for Staffing Agencies | Glo",
    description: "Glo’s AI-powered applicant tracking system tracks applicants and ranks the work, connecting clients, candidates, and the full desk in one place. See it in a demo.",
    intro: "Glo includes a full applicant tracking system: candidates, applications, and status, organized and searchable. Then it goes further, ranking the work by what needs attention and connecting clients and candidates into the same live picture.",
    thesis: "A record can tell you where the candidate is. An operating system should help move them.",
    features: [
      ["Beyond stage tracking", "Evaluate readiness, blockers, preferences, and next actions—not only movement between statuses."],
      ["Across the business", "Connect candidate records to clients, jobs, contracts, compliance context, and outcomes."],
      ["Built for staffing and recruiting work", "Prioritize the actions that protect fills, relationships, and revenue."],
    ],
    art: recruiterArt,
    links: [["Staffing and recruiting software", "/staffing-software/"], ["The Desk", "/recruiter-os/"], ["What is an ATS?", "/resources/what-is-an-ats/"]],
  },
  "/recruitment-crm/": {
    title: "Where new business turns into working job orders.",
    metaTitle: "Recruitment CRM Software for Staffing Agencies | Glo",
    canonicalPath: "/recruitment-crm/",
    description: "Recruitment CRM software that connects new business, client relationships, and job orders into one AI-native platform. See it in a demo.",
    intro: "A CRM for recruiting should do more than store contacts. Glo tracks prospects, opportunities, and client relationships, then carries the relevant context into delivery when a client opportunity closes.",
    thesis: "Business development and recruiting should operate from the same client truth.",
    features: [
      ["Relationship context", "Keep buyer contacts, opportunities, communication, and account signals connected."],
      ["Clean delivery handoff", "Move won demand into job orders without rebuilding the context in a second system."],
      ["Client-health visibility", "See the delivery and relationship signals that deserve attention before the account says so."],
    ],
    art: portalsArt,
    links: [["Client Room", "/client-portal/"], ["Staffing agency software", "/staffing-agency-software/"], ["The Desk", "/recruiter-os/"]],
  },
  "/candidate-matching/": {
    title: "Matches that make sense, and show their work.",
    metaTitle: "AI Candidate Matching Software | Glo by Lantern",
    description: "AI candidate matching that brings skills, availability, preferences, and client feedback into one reviewable fit picture. See it in a demo.",
    intro: "Glo’s AI candidate matching cuts through the candidate pool. It weighs skills, availability, preferences, and client feedback to surface the strongest matches and show exactly why they belong at the top.",
    thesis: "The best match is the one that can move.",
    features: [
      ["Readiness in context", "Bring availability, documentation, preferences, and journey blockers into the matching view."],
      ["Feedback that compounds", "Use client preference and candidate interaction signals to improve the next decision."],
      ["Recommendations people can evaluate", "Show the relevant context behind a recommendation where it helps judgment."],
    ],
    art: recruiterArt,
    links: [["Candidate Room", "/candidate-portal/"], ["Glo Intelligence", "/intelligence/"], ["Healthcare staffing", "/who-we-serve/healthcare-staffing/"]],
  },
  "/who-we-serve/": {
    title: "Built for how your desk actually works.",
    metaTitle: "Staffing & Recruiting Software Built for Your Business | Glo",
    canonicalPath: "/who-we-serve/",
    description: "See how Glo adapts to light industrial, healthcare, professional, IT, and executive search staffing operations. Built for how your desk actually works.",
    intro: "Light industrial, healthcare, professional, IT, or executive search: every staffing operation runs a little differently. Glo adapts to the one you’re running.",
    thesis: "The operating model changes. The need for better signal does not.",
    features: [
      ["High-volume operations", "Prioritize readiness, shift requirements, client demand, compliance context, and speed."],
      ["Credential-intensive staffing", "Keep documents, exceptions, facility demand, and submission readiness visible."],
      ["Relationship-led search", "Connect high-touch candidate and client work to pipeline clarity and next steps."],
    ],
    art: portalsArt,
    links: [["Light industrial", "/built-for/light-industrial-staffing/"], ["Healthcare", "/who-we-serve/healthcare-staffing/"], ["Professional", "/built-for/professional-staffing/"]],
  },
};

pages["/built-for/light-industrial-staffing/"] = {
  title: "Built for a desk that never slows down.",
  metaTitle: "Light Industrial Staffing Software | Glo by Lantern",
  description: "AI-native staffing software built for high-volume roles, fast turnaround, and shift-based fills. See how Glo keeps a light industrial desk moving.",
  intro: "Light industrial staffing moves shift by shift, role by role, and hour by hour. Glo identifies the jobs most at risk, what needs attention now, and keeps recruiters focused on the fills that matter most.",
  introDetail: "Speed comes from priority, not panic.",
  heroEvidence: {
    stat: "36%",
    copy: "of U.S. staffing employees work in industrial roles.",
    href: "https://americanstaffing.net/research/fact-sheets-analysis-staffing-industry-trends/staffing-industry-statistics/",
    label: "Source: American Staffing Association, Staffing Industry Statistics",
  },
  thesis: "High-volume work needs a live operating picture.",
  features: [], art: portalsArt, links: [],
};

pages["/who-we-serve/healthcare-staffing/"] = {
  title: "Built for how fast healthcare staffing moves.",
  metaTitle: "Healthcare Staffing Software | Glo by Lantern",
  canonicalPath: "/who-we-serve/healthcare-staffing/",
  description: "AI-native healthcare staffing software built for readiness, compliance context, and fast clinician assignment. See how Glo keeps a healthcare desk moving.",
  intro: "Healthcare staffing runs on two clocks at once: a facility that needs someone today, and a clinician whose readiness needs to be clear before the assignment moves. Glo keeps both moving in the same operating picture.",
  thesis: "Urgency and readiness belong in the same decision.",
  features: [], art: portalsArt, links: [],
};

pages["/built-for/professional-staffing/"] = {
  title: "Built for relationships that outlast one placement.",
  metaTitle: "Professional Staffing Software Built on Relationships | Glo",
  description: "AI-native staffing software built for professional and relationship-driven placements. See how Glo keeps client collaboration and candidate fit connected.",
  intro: "Professional staffing runs on trust built over years, not a single fast fill. Glo keeps that history visible instead of buried in a recruiter’s memory or an old email thread.",
  thesis: "Relationship depth is part of the operating picture.",
  features: [], art: portalsArt, links: [],
};

pages["/built-for/technology-staffing/"] = {
  title: "Built for talent pools that move fast and expect the same back.",
  metaTitle: "Technical Recruiting Software for IT Staffing | Glo by Lantern",
  description: "AI-native technical recruiting software built for skills-first matching and fast-moving IT and technology talent pools. See how Glo keeps pace.",
  intro: "IT and technology candidates juggle multiple offers at once, and clients need submissions before the best ones are gone. Glo keeps skills-based matching and submission speed moving together.",
  thesis: "Technical fit and timing belong in one priority view.",
  features: [], art: portalsArt, links: [],
};

pages["/built-for/executive-search-software/"] = {
  title: "Built for relationships that take longer to close.",
  metaTitle: "Executive Search Software for Retained Search Firms | Glo",
  description: "Executive search software that connects relationship context, candidate progress, client feedback, and next steps in one AI-native platform.",
  intro: "Retained search doesn’t move like contingency staffing. Glo keeps relationship context, candidate progress, client feedback, and next actions connected throughout the search.",
  thesis: "High-touch search needs high-visibility context.",
  features: [], art: portalsArt, links: [],
};

pages["/about/"] = {
  title: "Built by enterprise software people. Shaped by staffing and recruiting people.",
  description: "Glo by Lantern combines enterprise AI and software architecture with the operating perspective of staffing and recruiting leaders and advisors.",
  intro: "Glo is built by Lantern with a simple conviction: staffing and recruiting firms need software that understands the operation, not another layer that waits to be updated.",
  thesis: "The architecture starts with intelligence. The product direction stays grounded in staffing and recruiting work.",
  features: [["Enterprise software discipline", "Design the platform around secure, observable, connected systems rather than isolated features."], ["Staffing and recruiting perspective", "Shape workflows around the decisions, exceptions, and handoffs that determine placements."], ["A product built to be demonstrated", "Create curiosity on the site, then let the operating experience make the case."]],
  art: trustArt,
  links: [["Glo Intelligence", "/intelligence/"], ["Staffing and recruiting software", "/staffing-software/"], ["Book a demo", "/book-a-demo/"]],
};

pages["/resources/"] = {
  title: "Straight answers for buyers rebuilding the staffing and recruiting stack.",
  description: "Explore practical guidance on applicant tracking, recruiting CRM, AI in staffing and recruiting, and choosing staffing and recruiting software.",
  intro: "No content farm. Just useful answers to the questions staffing and recruiting leaders ask when the current system records more work than it helps move.",
  thesis: "Start with the operating question. Then go deeper where the decision requires it.",
  features: [["What is an ATS?", "A direct explanation of applicant tracking—and where its operating boundary ends."], ["ATS vs. recruiting CRM", "How candidate process and relationship management differ, overlap, and connect."], ["AI in staffing and recruiting", "Where embedded intelligence can improve prioritization, readiness, and exception handling."]],
  art: recruiterArt,
  links: [["What is an ATS?", "/resources/what-is-an-ats/"], ["ATS vs recruiting CRM", "/resources/ats-vs-recruiting-crm/"], ["AI in staffing", "/resources/ai-in-staffing/"]],
};

pages["/resources/what-is-an-ats/"] = {
  title: "What is an applicant tracking system?",
  description: "An ATS records candidates, applications, stages, activity, and hiring workflows. Learn what it does—and what staffing and recruiting operations require beyond tracking.",
  intro: "An applicant tracking system, or ATS, is software used to organize candidate records, applications, stages, communication, and hiring activity. In staffing and recruiting, that record is important—but it is only one part of the operation.",
  thesis: "Tracking tells you where the record is. Operational intelligence helps decide how to move the placement.",
  features: [["What an ATS does well", "Centralizes candidate data, applications, stage movement, notes, and process history."], ["Where staffing and recruiting extend beyond it", "Client health, fillability, contracts, revenue risk, compliance context, and candidate readiness affect the next move."], ["What to ask a vendor", "How does the system surface priorities, explain recommendations, connect participants, and manage exceptions?"]],
  art: recruiterArt,
  links: [["Applicant tracking system", "/applicant-tracking-system/"], ["Staffing and recruiting software", "/staffing-software/"], ["Book a demo", "/book-a-demo/"]],
};

pages["/resources/ats-vs-recruiting-crm/"] = {
  title: "ATS vs. recruiting CRM: different records, one operation.",
  description: "Understand the difference between applicant tracking systems and recruiting CRM software—and why staffing and recruiting firms need both contexts connected.",
  intro: "An ATS organizes candidate and hiring workflows. A recruiting CRM manages prospect, client, candidate, and relationship development. Staffing and recruiting firms need both—but not as two disconnected sources of truth.",
  thesis: "The relationship creates the work. The workflow delivers it. Glo keeps them connected.",
  features: [["ATS focus", "Applicants, candidates, jobs, stages, submissions, and placement progression."], ["Recruiting CRM focus", "Prospects, buyer contacts, opportunities, clients, outreach, and relationship history."], ["The connected model", "Carry client context into delivery and recruiter outcomes back into the relationship view."]],
  art: portalsArt,
  links: [["Recruitment CRM", "/recruitment-crm/"], ["Applicant tracking system", "/applicant-tracking-system/"], ["The Desk", "/recruiter-os/"]],
};

pages["/resources/ai-in-staffing/"] = {
  title: "AI in staffing and recruiting should improve the operation, not decorate it.",
  description: "Learn how AI can support staffing and recruiting through signal observation, reasoning, prioritization, controlled action, and learning from outcomes.",
  intro: "The useful question is not whether staffing and recruiting software has AI. It is whether the intelligence understands the workflow, sees the right context, and helps people move the work with appropriate control.",
  thesis: "A generated email is a feature. Better operational judgment is the category shift.",
  features: [["Observe more context", "Candidate, job, client, contract, compliance, and revenue signals belong in the same reasoning picture."], ["Prioritize impact", "Use urgency, readiness, risk, and business value to order the next actions."], ["Keep control visible", "Ground recommendations, respect permissions, review consequential actions, and monitor outcomes."]],
  steps: ["Observe", "Reason", "Prioritize", "Act", "Learn"],
  art: trustArt,
  links: [["Glo Intelligence", "/intelligence/"], ["The Desk", "/recruiter-os/"], ["Book a demo", "/book-a-demo/"]],
};

const policyPages: Record<string, [string, string]> = {
  "/accessibility/": ["Accessibility", "Glo is committed to an accessible website experience. The final accessibility statement and contact process will be supplied before public launch."],
};

Object.entries(policyPages).forEach(([path, [title, intro]]) => {
  pages[path] = {
    title,
    description: `${title} information for the Glo by Lantern website.`,
    intro,
    thesis: "This preview intentionally avoids inventing policy commitments that require legal approval.",
    features: [["Launch requirement", "Approved policy copy, effective date, organization details, and contact path should replace this preview shell."], ["Accessibility", "The implemented interface includes semantic headings, keyboard-visible focus, reduced-motion support, and responsive layouts."], ["Review", "Legal and platform owners should validate the final language before publication."]],
    links: [["About Glo", "/about/"], ["Book a demo", "/book-a-demo/"], ["Home", "/"]],
  };
});

export default function ContentPage() {
  const [location] = useLocation();
  const rawPath = location.split("?")[0];
  const path = rawPath === "/integrations/" ? "/platform/integrations/"
    : rawPath === "/built-for/" ? "/who-we-serve/"
    : rawPath === "/built-for/healthcare-staffing/" ? "/who-we-serve/healthcare-staffing/"
    : rawPath === "/recruiting-crm/" ? "/recruitment-crm/"
    : rawPath;
  const page = pages[path];
  const narrativeKind = path === "/recruiter-os/" ? "recruiter"
    : path === "/client-portal/" ? "client"
    : path === "/intelligence/" ? "intelligence"
    : path === "/platform/integrations/" ? "integrations"
    : null;
  const marketKind: MarketNarrativeKind | null = path === "/who-we-serve/" ? "overview"
    : path === "/built-for/light-industrial-staffing/" ? "light-industrial"
    : path === "/who-we-serve/healthcare-staffing/" ? "healthcare"
    : path === "/built-for/professional-staffing/" ? "professional"
    : path === "/built-for/technology-staffing/" ? "technology"
    : path === "/built-for/executive-search-software/" ? "executive"
    : path === "/applicant-tracking-system/" ? "ats"
    : path === "/recruitment-crm/" ? "crm"
    : path === "/candidate-matching/" ? "matching"
    : null;
  const proofKind: ProofKind = path.includes("healthcare") ? "healthcare"
    : path.includes("light-industrial") ? "industrial"
    : path.includes("technology") ? "technology"
    : path.includes("professional") ? "professional"
    : path.includes("executive") ? "executive"
    : path.includes("client-portal") ? "client"
    : path.includes("candidate-portal") ? "candidate"
    : path.includes("intelligence") || path.includes("ai-in-staffing") ? "intelligence"
    : path.includes("integrations") ? "integrations"
    : path.includes("candidate-matching") ? "matching"
    : path.includes("recruitment-crm") || path.includes("recruiting-crm") || path.includes("ats-vs-recruiting-crm") ? "crm"
    : path.includes("recruiter-os") || path.includes("applicant-tracking") || path.includes("what-is-an-ats") ? "recruiter"
    : path.includes("staffing") || path === "/who-we-serve/" ? "portals"
    : path === "/about/" ? "trust" : "generic";

  if (!page) {
    return (
      <div className="glo-site">
        <PageMeta title="Page not found | Glo by Lantern" description="The requested Glo page could not be found." path={path} />
        <SiteHeader />
        <main className="not-found-page container">
          <h1>This route did not make the work queue.</h1>
          <p>Return to the operating picture and choose the next move from there.</p>
          <Button asChild className="glo-button"><Link href="/"><span className="action-glyph">←</span> Back to Glo</Link></Button>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="glo-site">
      <PageMeta title={page.metaTitle ?? `${page.title} | Glo by Lantern`} description={page.description} path={page.canonicalPath ?? path} />
      <SiteHeader />
      <main>
        <section className={`content-hero${path === "/resources/" ? " content-hero-resources" : ""}`}>
          <div className="content-orbit" />
          <div className="container content-hero-grid">
            <div className="content-hero-copy">
              <h1>{page.title}</h1>
              {page.heroEvidence && (
                <div className="content-hero-evidence" aria-label={`${page.heroEvidence.stat} ${page.heroEvidence.copy}`}>
                  <strong>{page.heroEvidence.stat}</strong>
                  <span>{page.heroEvidence.copy}</span>
                  <a href={page.heroEvidence.href} target="_blank" rel="noreferrer">{page.heroEvidence.label} <i>↗</i></a>
                </div>
              )}
              <p>{page.intro}</p>
              {page.introDetail && <p className="content-hero-intro-detail">{page.introDetail}</p>}
              <div className="content-hero-actions">
                <Button asChild className="glo-button"><Link href="/book-a-demo/">Book a demo <span className="action-glyph">↗</span></Link></Button>
                <Link href="/" className="text-link text-link-dark">Back to the platform <span className="action-glyph">→</span></Link>
              </div>
              <SignalRail steps={page.steps} />
            </div>
            <div className="content-hero-art">
              <OperationalProof mode={proofKind} />
            </div>
          </div>
        </section>

        {narrativeKind ? <ProductNarrative kind={narrativeKind} /> : marketKind ? <MarketNarrative kind={marketKind} /> : <>
        <section className="content-thesis">
          <div className="container content-thesis-grid">
            <div className="content-thesis-body">
              <h2>{page.thesis}</h2>
              {path !== "/about/" && <SignalRail light steps={page.steps} />}
            </div>
          </div>
        </section>

        <section className="content-features">
          <div className="container">
            <div className="content-feature-head"><h2>What changes.</h2><span>Three ways the operating picture gets clearer.</span></div>
            <div className="content-feature-grid">
              {page.features.map(([title, copy], index) => (
                <article key={title} className="content-feature-card">
                  <div className="content-feature-number">0{index + 1} / {index === 0 ? "OBSERVED" : index === 1 ? "RESOLVED" : "MOVED"}</div>
                  <span className="content-feature-signal"><i /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {path === "/about/" && <TeamSection />}

        <section className="related-section">
          <div className="container related-grid">
            <div><h2>{path === "/about/" ? "See how the thinking becomes product." : "Go one level deeper."}</h2></div>
            <div className="related-links">
              {page.links.map(([label, href]) => <Link href={href} key={href}><span>{label}</span><span className="action-glyph">↗</span></Link>)}
            </div>
          </div>
        </section>
        </>}
      </main>
      <SiteFooter />
    </div>
  );
}

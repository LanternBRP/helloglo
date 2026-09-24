/**
 * Operational Signal Desk market narratives: concise routing for the overview,
 * then audience-specific editorial sections with approved Glo proof cues,
 * warm grounds, restrained accents, and no generic icon-card language.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export type MarketNarrativeKind =
  | "overview"
  | "light-industrial"
  | "healthcare"
  | "professional"
  | "technology"
  | "executive"
  | "ats"
  | "crm"
  | "matching";

type StoryLink = { label: string; href: string };
type StorySection = {
  title: string;
  copy: string[];
  link?: StoryLink;
  evidence?: {
    stat: string;
    copy: string;
    sourceLabel: string;
    sourceUrl: string;
  };
};

type StoryConfig = {
  sections: StorySection[];
  ctaTitle: string;
  ctaCopy: string;
};

type SignalProof = {
  label: string;
  rows: Array<[string, string]>;
  outcome: string;
};

const overviewCards = [
  ["Light Industrial Staffing", "High-volume roles, fast turnaround, and a pipeline that never stops moving.", "/built-for/light-industrial-staffing/"],
  ["Healthcare Staffing", "Credentialing, compliance, and clinicians who need to be placed fast and placed right.", "/who-we-serve/healthcare-staffing/"],
  ["Professional Staffing", "Relationship-driven placements where fit matters as much as fill speed.", "/built-for/professional-staffing/"],
  ["IT & Technology Staffing", "Skills-first matching for a candidate pool that moves fast and expects the same back.", "/built-for/technology-staffing/"],
  ["Executive Search", "High-touch, relationship-led search with the visibility both sides expect.", "/built-for/executive-search-software/"],
] as const;

const stories: Record<Exclude<MarketNarrativeKind, "overview">, StoryConfig> = {
  "light-industrial": {
    sections: [
      {
        title: "Volume breaks systems built for an n=1.",
        copy: ["Most staffing software assumes a handful of roles moving slowly. Light industrial desks move dozens of roles at once, with shift start times, certifications, and no-show risk changing by the hour."],
      },
      {
        title: "Prioritize the roles that can’t afford to wait.",
        copy: ["The Desk surfaces the roles closest to going unfilled first: shift start time, certification requirements, and candidate readiness all factor into what rises to the top, not just which job order came in first."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "Know who’s ready before the shift starts.",
        copy: ["Certifications, availability, and attendance history stay current in the Candidate Room, so a recruiter knows who’s actually available for tomorrow’s shift, not just who applied last month."],
        link: { label: "Explore Candidate Room", href: "/candidate-portal/" },
      },
      {
        title: "Clients see fill status without a spreadsheet update.",
        copy: ["Fast-moving roles mean fast-moving questions. The Client Room keeps clients current on every open shift without a recruiter having to compile a status report first."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
      {
        title: "Compliance keeps pace with the fill rate.",
        copy: ["Certification tracking and required documentation surface automatically, so speed and compliance move together instead of trading off against each other."],
        link: { label: "Explore connected systems", href: "/platform/integrations/" },
      },
    ],
    ctaTitle: "See how fast a high-volume desk can actually move.",
    ctaCopy: "Bring one shift-based role that’s hard to keep filled. We’ll show you what Glo surfaces first.",
  },
  healthcare: {
    sections: [
      {
        title: "Speed and compliance usually fight each other. They don’t have to.",
        copy: ["A fast assignment and a fully compliant one are often treated as a trade-off. Glo keeps assignment urgency, candidate readiness, required documentation, and client visibility in the same operating picture."],
      },
      {
        title: "Assignments ranked by urgency and readiness together.",
        copy: ["The Desk brings facility need, available candidate context, and the next action into one ordered view, so recruiters can focus on the assignments that are ready to move."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "Know a clinician is ready before you submit them.",
        copy: ["Candidate-supplied information and required documentation stay connected inside the Candidate Room, giving recruiters a clearer view of what is current and what needs follow-up before submission."],
        link: { label: "Explore Candidate Room", href: "/candidate-portal/" },
      },
      {
        title: "Facilities see fill status without a phone call.",
        copy: ["The Client Room keeps facility contacts current on assignment status and clinician readiness, reducing the check-in calls that eat into recruiter time."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
    ],
    ctaTitle: "See how Glo keeps speed and compliance moving together.",
    ctaCopy: "Bring one hard-to-fill clinical assignment. We’ll show you what Glo surfaces first.",
  },
  professional: {
    sections: [
      {
        title: "The best placements come from context.",
        copy: ["Professional staffing depends on knowing a client’s culture, a candidate’s preferences, and a relationship’s history. Glo keeps that detail connected as operating context instead of leaving it in a note field."],
      },
      {
        title: "Every relationship, with its history intact.",
        copy: ["Client preferences, past placements, and candidate context stay connected, so every conversation starts with the relationship rather than a blank record."],
        link: { label: "Explore Recruitment CRM", href: "/recruitment-crm/" },
      },
      {
        title: "Fit weighed alongside skills, not instead of them.",
        copy: ["Candidate matching brings career direction and preference into the same view as skills, helping recruiters evaluate the fit that can keep working beyond the first placement milestone."],
        link: { label: "Explore candidate matching", href: "/candidate-matching/" },
      },
      {
        title: "Feedback that builds the relationship.",
        copy: ["The Client Room turns client input into useful context for the next match, so collaboration carries forward instead of resetting on the next search."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
    ],
    ctaTitle: "See how Glo keeps relationship context working for you.",
    ctaCopy: "Bring one long-standing client relationship. We’ll show you how Glo keeps that history connected to the next search.",
  },
  technology: {
    sections: [
      {
        title: "Skills change faster than most candidate profiles get updated.",
        copy: ["Technical talent pools move fast. New stacks, certifications, and availability all shift between one search and the next. Software built around static resumes falls behind quickly. Glo keeps the recruiting picture moving."],
      },
      {
        title: "Submissions ranked by skills fit and speed together.",
        copy: ["The Desk weighs skills match against how fast a candidate needs to move, so the top of the queue is the submission most likely to land before a competing offer does. In technical recruiting, the right candidate won’t stay available forever. Glo shows you who needs attention before someone else moves first."],
        evidence: {
          stat: "77%",
          copy: "of technology candidates accept an offer, 12% below the global average.",
          sourceLabel: "Source: SmartRecruiters, Technology Benchmark Recruiting Metrics 2025",
          sourceUrl: "https://www.smartrecruiters.com/resources/article/technology-benchmark-recruiting-metrics/",
        },
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "Matching that reads skills.",
        copy: ["Glo’s candidate matching looks past keyword hits to the stack, skills, and experience behind them. Recruiters can review the technical fit in context, not just the words a resume shares with the search."],
        evidence: {
          stat: "63%",
          copy: "of global HR professionals say there is a mismatch between the skills job seekers have and the skills their organization needs.",
          sourceLabel: "Source: LinkedIn, More Applicants But Harder To Hire",
          sourceUrl: "https://news.linkedin.com/2025/talent-campaign-b2b-press-release",
        },
        link: { label: "Explore candidate matching", href: "/candidate-matching/" },
      },
      {
        title: "Skills and availability, kept current in the Candidate Room.",
        copy: ["Technical candidates can update profile details as skills and availability change, so recruiters aren’t chasing an outdated profile. They can review the candidate who exists today, not only the one who filled out a form months ago."],
        evidence: {
          stat: "52%",
          copy: "of technology professionals on LinkedIn who regularly update their skills do so every quarter.",
          sourceLabel: "Source: LinkedIn Learning, Closing the Tech Talent Gap",
          sourceUrl: "https://business.linkedin.com/learn/resources/learning-insights/closing-the-tech-talent-gap",
        },
        link: { label: "Explore Candidate Room", href: "/candidate-portal/" },
      },
    ],
    ctaTitle: "See how fast Glo can move on a technical search.",
    ctaCopy: "Bring one hard-to-fill technical role. We’ll show you who Glo shines a light on first.",
  },
  executive: {
    sections: [
      {
        title: "Build the relationship picture before the shortlist.",
        copy: ["Retained search starts with context. Glo keeps client history, candidate relationships, role requirements, and outreach connected as the search develops."],
        link: { label: "Explore Recruitment CRM", href: "/recruitment-crm/" },
      },
      {
        title: "Every search, with the next move visible.",
        copy: ["Candidate progress, client feedback, and the next required action stay in one operating picture, so the team can move a high-touch search without reconstructing the full history."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "Every decision-maker’s input, in one place.",
        copy: ["The Client Room keeps reviews, ratings, requests, and discussion attached to the candidate and role they affect, giving the search team one clear collaboration trail."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
      {
        title: "Sensitive search context, shared with intention.",
        copy: ["Glo’s permission-aware approach respects approved access boundaries, helping teams keep sensitive search context with the people who need it."],
        link: { label: "See Glo Intelligence", href: "/intelligence/" },
      },
      {
        title: "Billing context that stays connected.",
        copy: ["Billing and connected-system context stay visible alongside the search, so the operating picture does not end when the candidate reaches the final stage."],
        link: { label: "Explore integrations", href: "/platform/integrations/" },
      },
      {
        title: "Compensation questions stay with the search.",
        copy: ["Role requirements, candidate context, and the compensation conversation stay connected, so expectations can be addressed without rebuilding the history in another system."],
      },
    ],
    ctaTitle: "See how Glo runs a retained search end to end.",
    ctaCopy: "Bring one active search. We’ll show you how Glo keeps relationship context, candidate progress, feedback, and next steps connected.",
  },
  ats: {
    sections: [
      {
        title: "Applications, organized and searchable, as the foundation.",
        copy: ["Every application, resume, and candidate record lives in one searchable system. That’s the baseline every staffing desk needs. It’s built into Glo from the ground up, powered by AI rather than a static database."],
        evidence: {
          stat: "22%",
          copy: "of surveyed global HR professionals report spending 3 to 5 hours a day sifting through applications.",
          sourceLabel: "Source: LinkedIn, More Applicants But Harder To Hire",
          sourceUrl: "https://news.linkedin.com/2025/talent-campaign-b2b-press-release",
        },
      },
      {
        title: "Tracking applicants is the start. Running the desk is the point.",
        copy: ["An AI-powered applicant tracking system tells you who applied. The Desk brings urgency, fillability, client priority, and candidate context into the same operating picture, helping recruiters see which application deserves attention first."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "Applicant records that reach both sides of the placement.",
        copy: ["Application status connects to the Client Room and Candidate Room, so clients and candidates share a clearer current view without a recruiter maintaining three separate status systems."],
        link: { label: "See the complete staffing platform", href: "/staffing-software/" },
      },
      {
        title: "Applications ranked as the work changes.",
        copy: ["Skills, availability, and readiness come together with job context, helping the strongest current matches surface ahead of a queue sorted only by submission time. Recruiters can review the context behind each recommendation before deciding what moves next."],
        evidence: {
          stat: "93%",
          copy: "of talent acquisition professionals say accurately assessing a candidate’s skills is crucial to improving quality of hire.",
          sourceLabel: "Source: LinkedIn, The Future of Recruiting 2025",
          sourceUrl: "https://business.linkedin.com/hire/resources/future-of-recruiting",
        },
        link: { label: "Explore AI candidate matching", href: "/candidate-matching/" },
      },
    ],
    ctaTitle: "See what an ATS looks like when it’s built to run the desk.",
    ctaCopy: "Bring one open role. We’ll show you how applicants get tracked, ranked, and moved toward placement.",
  },
  crm: {
    sections: [
      {
        title: "A closed deal shouldn’t mean starting over.",
        copy: ["New business and delivery often live in separate systems, and momentum gets lost in the handoff. Glo connects the two, carrying the client, opportunity, and role context into delivery."],
        evidence: {
          stat: "29%",
          copy: "of enterprise applications are typically connected within organizations, on average.",
          sourceLabel: "Source: Salesforce, 2025 MuleSoft Connectivity Benchmark Report",
          sourceUrl: "https://www.salesforce.com/news/stories/connectivity-report-announcement-2025/",
        },
      },
      {
        title: "Every prospect and opportunity, tracked in one place.",
        copy: ["Contacts, outreach history, and deal stage stay organized and current, so a recruiter or business developer always knows where a relationship stands."],
      },
      {
        title: "Context that survives past the first placement.",
        copy: ["Every client interaction, preference, and past placement stays attached to the relationship, so the next conversation starts with context instead of a blank slate."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
      {
        title: "A closed opportunity carries its context into delivery.",
        copy: ["The Desk can pick up the client relationship, role requirements, and active demand from the same connected record, so recruiting does not have to rebuild the handoff from scratch."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
    ],
    ctaTitle: "See how fast a new client turns into active work.",
    ctaCopy: "Bring one recent client win. We’ll show you how Glo carries it into a working job order.",
  },
  matching: {
    sections: [
      {
        title: "Every factor that actually determines fit.",
        copy: ["Skills, certifications, availability, location, and compensation expectations can be reviewed together, so a match reflects the whole picture, not just keyword overlap between a resume and a job description."],
      },
      {
        title: "Every piece of feedback adds context to the next match.",
        copy: ["What clients say in the Client Room stays connected to the candidate and job context, so recruiters can use what the client requested, questioned, or passed on when evaluating who fits next."],
        link: { label: "Explore Client Room", href: "/client-portal/" },
      },
      {
        title: "Candidates get matched to what they actually want.",
        copy: ["A strong match works both ways. Location, schedule, pay, and role preferences from the Candidate Room stay visible with the candidate record, so recruiters can consider what the client needs and what the candidate actually wants."],
        link: { label: "Explore Candidate Room", href: "/candidate-portal/" },
      },
      {
        title: "The strongest fit, submitted first.",
        copy: ["Matching context follows the work into The Desk, helping recruiters decide which candidates to review or submit first without rebuilding the list themselves."],
        link: { label: "Explore The Desk", href: "/recruiter-os/" },
      },
      {
        title: "See why a match was made, not just that it was.",
        copy: ["Every recommendation keeps the relevant fit context visible. A recruiter can trust a match, question it, or adjust it, keeping a person in control of every submission."],
        link: { label: "See how Glo Intelligence works", href: "/intelligence/" },
      },
    ],
    ctaTitle: "See a match, and the reasoning behind it.",
    ctaCopy: "Bring one open role. We’ll show you which candidates surface first, and why.",
  },
};

const proofPatterns: Record<Exclude<MarketNarrativeKind, "overview">, SignalProof[]> = {
  "light-industrial": [
    { label: "Volume pressure", rows: [["Open roles", "Dozens"], ["Shift timing", "Hourly"], ["No-show risk", "Changing"]], outcome: "Operating pressure visible" },
    { label: "Shift priority", rows: [["Start window", "2 hours"], ["Ready workers", "9"], ["Documentation", "Current"]], outcome: "Fill risk surfaced" },
    { label: "Candidate readiness", rows: [["Availability", "Current"], ["Documentation", "Current"], ["Shift fit", "Ready"]], outcome: "Ready pool visible" },
    { label: "Client status", rows: [["Open shifts", "6"], ["Ready to confirm", "4"], ["Needs action", "2"]], outcome: "Update ready" },
    { label: "Compliance context", rows: [["Required records", "Connected"], ["Exceptions", "Visible"], ["Next follow-up", "Assigned"]], outcome: "Readiness clear" },
  ],
  healthcare: [
    { label: "Clinical operating picture", rows: [["Assignment urgency", "Visible"], ["Readiness", "Connected"], ["Client status", "Current"]], outcome: "Speed and compliance aligned" },
    { label: "Assignment readiness", rows: [["Facility need", "Today"], ["Candidate context", "Ready"], ["Next action", "Review"]], outcome: "Priority aligned" },
    { label: "Candidate readiness", rows: [["Profile context", "Current"], ["Documentation", "Visible"], ["Follow-up", "Clear"]], outcome: "Submission context ready" },
    { label: "Facility view", rows: [["Assignment", "In progress"], ["Requested decision", "1"], ["Status context", "Current"]], outcome: "Check-in reduced" },
  ],
  professional: [
    { label: "Placement context", rows: [["Client culture", "Connected"], ["Candidate preference", "Current"], ["Relationship history", "Visible"]], outcome: "Whole relationship retained" },
    { label: "Relationship context", rows: [["Past placements", "3"], ["Preferences", "Current"], ["Open demand", "1"]], outcome: "Conversation prepared" },
    { label: "Fit picture", rows: [["Skills", "Aligned"], ["Career direction", "Visible"], ["Preferences", "Current"]], outcome: "Fit evaluated in context" },
    { label: "Client feedback", rows: [["Review complete", "Yes"], ["Fit preference", "Updated"], ["Next search", "Informed"]], outcome: "Context retained" },
  ],
  technology: [
    { label: "Skills currency", rows: [["Technical stack", "Changing"], ["Certifications", "Current"], ["Availability", "Updated"]], outcome: "Talent picture current" },
    { label: "Technical submission", rows: [["Skills fit", "High"], ["Availability", "Current"], ["Timing", "Tight"]], outcome: "Submission prioritized" },
    { label: "Matching context", rows: [["Relevant stack", "Aligned"], ["Experience", "Visible"], ["Keyword overlap", "Not enough"]], outcome: "Whole fit considered" },
    { label: "Candidate profile", rows: [["Stack", "Updated"], ["Availability", "Open"], ["Role preference", "Confirmed"]], outcome: "Match context current" },
  ],
  executive: [
    { label: "Relationship picture", rows: [["Client history", "Connected"], ["Candidate relationships", "Current"], ["Role context", "Visible"]], outcome: "Search context assembled" },
    { label: "Search context", rows: [["Candidate progress", "Visible"], ["Client review", "3 waiting"], ["Next action", "Follow-up"]], outcome: "Search moving" },
    { label: "Decision trail", rows: [["Feedback", "Connected"], ["Relationship history", "Current"], ["Owner", "Assigned"]], outcome: "Context preserved" },
    { label: "Permission context", rows: [["Search access", "Approved"], ["Sensitive context", "Restricted"], ["Review", "Controlled"]], outcome: "Access boundaries visible" },
    { label: "Billing context", rows: [["Search activity", "Connected"], ["Billing status", "Visible"], ["System handoff", "Current"]], outcome: "Operating picture connected" },
    { label: "Compensation conversation", rows: [["Role expectations", "Visible"], ["Candidate context", "Connected"], ["Next discussion", "Clear"]], outcome: "Conversation prepared" },
  ],
  ats: [
    { label: "Applicant foundation", rows: [["Applications", "Searchable"], ["Resumes", "Connected"], ["Candidate records", "Current"]], outcome: "Foundation organized" },
    { label: "Applicant priority", rows: [["Applications", "42"], ["Ready now", "8"], ["Client priority", "3"]], outcome: "Attention ranked" },
    { label: "Connected status", rows: [["Client Room", "Current"], ["Candidate Room", "Current"], ["Duplicate updates", "Reduced"]], outcome: "One status picture" },
    { label: "Applicant to action", rows: [["Match context", "High"], ["Availability", "Current"], ["Next move", "Submit"]], outcome: "Record moved" },
  ],
  crm: [
    { label: "Closed-deal context", rows: [["Client relationship", "Connected"], ["Signed demand", "Visible"], ["Re-entry", "Avoided"]], outcome: "Work ready to activate" },
    { label: "Account signal", rows: [["Prospects", "18"], ["Active opportunity", "6"], ["New demand", "1"]], outcome: "Growth prioritized" },
    { label: "Relationship history", rows: [["Interactions", "Current"], ["Preferences", "Attached"], ["Placements", "Visible"]], outcome: "Next conversation prepared" },
    { label: "Delivery handoff", rows: [["Client context", "Attached"], ["Role requirements", "Current"], ["Desk owner", "Assigned"]], outcome: "Work activated" },
  ],
  matching: [
    { label: "Fit context", rows: [["Skills", "Aligned"], ["Availability", "Current"], ["Preferences", "Confirmed"]], outcome: "Match explained" },
    { label: "Client-informed fit", rows: [["Client feedback", "Applied"], ["Fit preference", "Specific"], ["Relationship context", "Current"]], outcome: "Next match sharpened" },
    { label: "Candidate intent", rows: [["Location", "Confirmed"], ["Schedule", "Current"], ["Role preference", "Visible"]], outcome: "Opportunity aligned" },
    { label: "Submission order", rows: [["Client feedback", "Applied"], ["Candidate intent", "Current"], ["Priority", "First"]], outcome: "Strongest fit surfaced" },
    { label: "Recommendation context", rows: [["Fit factors", "Visible"], ["Recruiter review", "Required"], ["Submission control", "Human"]], outcome: "Reasoning stays reviewable" },
  ],
};

function OperationalArtifact({ proof }: { proof: SignalProof }) {
  return (
    <aside className="market-story-proof" aria-label={proof.label}>
      <div className="market-story-proof-head"><span>{proof.label}</span><i>Observing</i></div>
      <div className="market-story-proof-rows">
        {proof.rows.map(([label, value], index) => <div key={label}><small>0{index + 1}</small><span>{label}</span><strong>{value}</strong></div>)}
      </div>
      <p>{proof.outcome}<span>↗</span></p>
    </aside>
  );
}

function OperationalSummary({ proof }: { proof: SignalProof }) {
  return (
    <aside className="market-story-summary" aria-label={`${proof.label}: ${proof.outcome}`}>
      <span>{proof.label}</span>
      <strong>{proof.outcome}</strong>
      <div>
        {proof.rows.map(([label, value]) => <p key={label}><small>{label}</small><b>{value}</b></p>)}
      </div>
    </aside>
  );
}

function FinalCTA({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="market-story-final">
      <div className="container market-story-final-grid">
        <div><h2>{title}</h2><p>{copy}</p></div>
        <Button asChild className="glo-button"><Link href="/book-a-demo/">Book a demo <span className="action-glyph">↗</span></Link></Button>
      </div>
    </section>
  );
}

function OverviewNarrative() {
  return (
    <div className="market-story market-story-overview">
      <section className="market-story-overview-section">
        <div className="container market-story-card-grid">
          {overviewCards.map(([title, copy, href], index) => (
            <Link className={`market-story-route-card market-story-route-card-${index + 1}`} href={href} key={href}>
              <h2>{title}</h2>
              <p>{copy}</p>
              <span>See how Glo fits <i>→</i></span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA title="See Glo built around your business." copy="Tell us how your desk runs. We’ll show you exactly where Glo fits." />
    </div>
  );
}

function DetailNarrative({ kind }: { kind: Exclude<MarketNarrativeKind, "overview"> }) {
  const story = stories[kind];
  return (
    <div className={`market-story market-story-${kind}`}>
      <div className="market-story-sections">
        {story.sections.map((section, index) => {
          const proof = proofPatterns[kind][index];
          const detailed = index % 2 === 1;
          return (
          <section className={`market-story-section market-story-section-${index % 3}${detailed ? " is-detailed" : " is-summary"}`} key={section.title}>
            <div className="container">
              <div className={`market-story-section-panel${detailed ? " has-proof" : " has-summary"}`}>
                <div className="market-story-section-copy">
                  <h2>{section.title}</h2>
                  {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.evidence && (
                    <div className="market-story-evidence" aria-label={`${section.evidence.stat} ${section.evidence.copy}`}>
                      <strong>{section.evidence.stat}</strong>
                      <span>{section.evidence.copy}</span>
                      <a href={section.evidence.sourceUrl} target="_blank" rel="noreferrer">{section.evidence.sourceLabel} <i>↗</i></a>
                    </div>
                  )}
                  {section.link && <Link className="market-story-link" href={section.link.href}>{section.link.label} <span>↗</span></Link>}
                </div>
                {detailed ? <OperationalArtifact proof={proof} /> : <OperationalSummary proof={proof} />}
              </div>
            </div>
          </section>
          );
        })}
      </div>
      <FinalCTA title={story.ctaTitle} copy={story.ctaCopy} />
    </div>
  );
}

export default function MarketNarrative({ kind }: { kind: MarketNarrativeKind }) {
  if (kind === "overview") return <OverviewNarrative />;
  return <DetailNarrative kind={kind} />;
}

/**
 * Operational Signal Desk product narratives: long-form product pages use
 * evidence-led sections, thin rules, asymmetric proof windows, and restrained
 * Glo color semantics instead of generic marketing-card stacks.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const G_MARK = "/images/glo-g-circle-authoritative_b31f5550.svg";
const GROWTH_PIPELINE = "https://helloglo.vinceorodazo.com/recruiter-os-crm-pipeline_1e711356.png";
const SUBMISSIONS_WORKFLOW = "/images/glo-client-room-submissions_ce7a6397.webp";
const BILLING_WORKFLOW = "https://helloglo.vinceorodazo.com/recruiter-os-billing-workflow_4eabdb12.png";

type NarrativeKind = "recruiter" | "client" | "intelligence" | "integrations";

function GMark() {
  return (
    <span className="product-story-g" aria-hidden="true">
      <img src={G_MARK} alt="" />
    </span>
  );
}

function StoryCTA({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="product-story-cta">
      <div className="container product-story-cta-grid">
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Button asChild size="lg" className="glo-button">
          <Link href="/book-a-demo/">Book a demo <span className="action-glyph">↗</span></Link>
        </Button>
      </div>
    </section>
  );
}

const recruiterSteps = [
  ["Observe", "New candidate reply, job urgency, client risk, or compliance exception"],
  ["Reason", "Readiness, probability, timing, relationship context, and revenue impact"],
  ["Prioritize", "Rank the move that protects the strongest business outcome"],
  ["Act", "Move repeatable work and route consequential decisions for review"],
  ["Learn", "Use the outcome to sharpen the next recommendation"],
];

function RecruiterOSNarrative() {
  return (
    <div className="product-story product-story-recruiter">
      <section className="product-story-section product-story-section-white product-story-recruiter-intro">
        <div className="container product-story-split product-story-split-impact">
          <div className="product-story-copy">
            <div className="product-story-section-label"><span>Observed</span><strong>Highest-impact action ranking</strong></div>
            <h2>One ranked queue replaces six open tabs.</h2>
            <p>Revenue risk, fillability, candidate readiness, and client blockers: one ordered work view, not a dashboard you have to interpret yourself.</p>
            <p>With Glo, revenue risk, fillability, candidate readiness, and client blockers are all in one ordered work view. No dashboard to interpret. No competing priorities to sort through. Just a clear view of what needs your attention now, what can wait, and where your next move can make the biggest impact.</p>
          </div>
          <div className="product-story-proof product-story-priority" aria-label="Example highest-impact action ranking">
            <div className="product-story-proof-head"><span>Priority window</span><strong>Highest-impact action first</strong></div>
            <ol>
              <li><span>01</span><div><strong>Protect the at-risk order</strong><small>Ready candidate, client urgency, and revenue exposure align.</small></div></li>
              <li><span>02</span><div><strong>Move the next submission</strong><small>Availability and job fit are current. The next step is clear.</small></div></li>
              <li><span>03</span><div><strong>Resolve the compliance exception</strong><small>One missing item is blocking placement progress.</small></div></li>
            </ol>
            <div className="product-story-outcome">One ranked desk. One move to make next.</div>
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-dark product-story-workflow-section">
        <div className="container product-story-split">
          <div className="product-story-copy product-story-copy-light">
            <div className="product-story-section-label product-story-section-label-dark"><strong>Workflow &amp; automation</strong></div>
            <h2>Automate the busywork. Keep the judgment calls.</h2>
            <p>The Desk handles the repetitive moves: status nudges, follow-ups, data entry, so recruiters spend their time on submissions and closes, not fields. Every automated step stays visible and reversible. Nothing runs behind your back.</p>
            <div className="product-story-evidence product-story-evidence-dark" aria-label="AI recruiting efficiency research">
              <strong>Nearly 9 in 10</strong>
              <span>HR professionals using AI in recruiting say it saves time or increases efficiency.</span>
            </div>
            <p>The Desk handles the repetitive moves: status nudges, follow-ups, and data entry, so recruiters can spend more time on submissions, closes, and the work that requires human judgment.</p>
            <p>Every automated step stays visible and reversible. Nothing runs behind your back.</p>
            <a className="product-story-source product-story-source-dark" href="https://www.shrm.org/labs/resources/the-evolving-role-of-ai-in-recruitment-and-retention" target="_blank" rel="noreferrer">Source: SHRM, The Evolving Role of AI in Recruitment and Retention ↗</a>
          </div>
          <div className="product-story-chain product-story-workflow-card" aria-label="Glo workflow progression">
            {[
              ["01", "Source and match", "Bring readiness and fit into one decision."],
              ["02", "Communicate", "Keep follow-up tied to the candidate and job."],
              ["03", "Submit and schedule", "Move the right people without rebuilding context."],
              ["04", "Onboard and redeploy", "Protect momentum beyond the first placement."],
            ].map(([number, title, copy]) => (
              <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-base product-story-connected-section">
        <div className="container">
          <div className="product-story-heading-row product-story-heading-row-connected">
            <div className="product-story-heading-block">
              <div className="product-story-section-label"><strong>Candidates, clients &amp; job orders</strong></div>
              <h2>Every candidate, client, and job order. One screen, always current.</h2>
            </div>
            <span className="product-story-heading-divider" aria-hidden="true" />
            <div className="product-story-heading-copy">
              <div className="product-story-evidence product-story-evidence-compact" aria-label="Application switching research">
                <strong>Nearly 4 hours</strong>
                <span>Workers lose every week just reorienting after switching between apps.</span>
              </div>
              <p>With Glo, there’s no tab-switching between your staffing CRM, your ATS, and a spreadsheet someone forgot to update. Submissions, client requirements, and candidate status stay in sync in real time because they live in one place instead of three.</p>
              <p className="product-story-coda">Glo is a current, single source of truth.</p>
              <a className="product-story-source" href="https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications" target="_blank" rel="noreferrer">Source: Harvard Business Review ↗</a>
            </div>
          </div>
          <div className="product-story-three product-story-connected-grid">
            <article><h3>Candidates</h3><p>Profiles, preferences, documents, applications, and next steps stay current in the Candidate Room.</p><Link href="/candidate-portal/">Explore Candidate Room <span>↗</span></Link></article>
            <article><h3>Clients</h3><p>Approvals, feedback, preferences, and open demand become live operating signal inside Client Room.</p><Link href="/client-portal/">Explore Client Room <span>↗</span></Link></article>
            <article><h3>Job orders and placements</h3><p>Demand, submissions, status, blockers, and placement movement stay connected to the same desk.</p><Link href="/candidate-matching/">Explore candidate matching <span>↗</span></Link></article>
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-white product-story-screenshot-section">
        <div className="container product-story-split product-story-split-media product-story-split-screenshot product-story-split-screenshot-forward">
          <div className="product-story-copy">
            <div className="product-story-section-label"><strong>Growth pipeline</strong></div>
            <h2>Growth and delivery, finally in the same system.</h2>
            <p>Prospects, opportunities, and job orders flow into the system recruiters already work from. A new client becomes a working job order in minutes. One continuous workstream, from win to fill, without any handoffs.</p>
            <Link className="text-link" href="/recruitment-crm/">Explore Recruitment CRM <span className="action-glyph">↗</span></Link>
          </div>
          <figure className="product-story-media"><img src={GROWTH_PIPELINE} alt="Glo CRM pipeline showing the visual sales funnel, stage values, forecast, and top opportunities" /></figure>
        </div>
      </section>

      <section className="product-story-section product-story-section-base product-story-screenshot-section">
        <div className="container product-story-split product-story-split-media product-story-split-media-reverse product-story-split-screenshot product-story-split-screenshot-reverse">
          <figure className="product-story-media"><img src={BILLING_WORKFLOW} alt="Glo billing workflow showing open payroll issues, sync activity, status, ownership, and actions" /></figure>
          <div className="product-story-copy">
            <div className="product-story-section-label"><strong>Placements, compliance &amp; billing</strong></div>
            <h2>Placements, compliance, and billing. No spreadsheet backup required.</h2>
            <p>Time and billing, payroll handoff, and compliance status live inside the same workflow, connected through Glo’s integrations. Everything stays updated, visible, and actionable.</p>
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-dark product-story-contract-section">
        <div className="container product-story-split">
          <div className="product-story-copy product-story-copy-light">
            <div className="product-story-section-label product-story-section-label-dark"><strong>Contract intelligence</strong></div>
            <h2>If it’s fine, you won’t hear about it. If it’s not, you will.</h2>
            <p>The Desk flags exceptions: expiring terms, at-risk margin, missing approvals. Compliant contracts stay quiet. Problems get your attention.</p>
          </div>
          <div className="product-story-contract" aria-label="Example contract intelligence">
            <div className="product-story-contract-head">
              <div><span>Contract watch</span><strong>Renewal decision</strong></div>
              <div className="product-story-contract-countdown"><span>Renewal window</span><strong>14</strong><small>days</small></div>
            </div>
            <div className="product-story-contract-signals">
              <article><span>Rate review</span><strong>Action required</strong><small>Review before renewal</small></article>
              <article><span>Compliance terms</span><strong>1 exception</strong><small>Resolve the open term</small></article>
            </div>
            <div className="product-story-contract-action"><span>Recommended move</span><strong>Review the rate and clear the exception</strong></div>
            <p>Glo brings the clause, current status, and recommended move into one reviewable moment.</p>
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-white product-story-analytics-section">
        <div className="container product-story-split">
          <div className="product-story-copy">
            <div className="product-story-section-label"><strong>Analytics</strong></div>
            <h2>Numbers that explain the desk, not just report on it.</h2>
            <p>Fill rates, time-to-submit, and revenue-at-risk, tied back to the actions that moved them. Know what to do differently, not just what happened last month.</p>
            <div className="product-story-evidence product-story-evidence-dual" aria-label="Quality-of-hire measurement research">
              <strong><span>89%</span><small>know the metric matters</small></strong>
              <strong><span>25%</span><small>are confident they can measure it</small></strong>
            </div>
            <p>Glo connects numbers to what actually moves them. Fill rates, time-to-submit, and revenue-at-risk, all tied back to the actions that created them. Know what to do differently, not just what happened last month.</p>
            <a className="product-story-source" href="https://business.linkedin.com/hire/resources/future-of-recruiting" target="_blank" rel="noreferrer">Source: LinkedIn, The Future of Recruiting 2025 ↗</a>
          </div>
          <div className="product-story-metrics" aria-label="Example connected operating metrics">
            <article className="product-story-metric-primary"><span>Fillability</span><strong>High</strong><small>Demand and ready talent align</small></article>
            <article className="product-story-metric-exposure"><span>Revenue exposure</span><strong>$73k</strong><small>Active demand at risk</small></article>
            <div className="product-story-metric-support">
              <article><span>Placement momentum</span><strong>+18%</strong><small>Priority actions completed</small></article>
              <article><span>Exceptions</span><strong>3</strong><small>Human review required</small></article>
            </div>
            <div className="product-story-metrics-action"><span>Priority read</span><strong>High fillability, with $73k of active demand exposed.</strong></div>
          </div>
        </div>
      </section>

      <section className="product-story-section product-story-section-base product-story-reasoning-section">
        <div className="container">
          <div className="product-story-heading-row product-story-heading-row-intelligence">
            <div className="product-story-heading-block">
              <h2>Meet Lucia.</h2>
            </div>
            <span className="product-story-heading-divider" aria-hidden="true" />
            <p>Ask Lucia what matters right now and she’ll tell you: the candidate ready to move, the job at risk, the client waiting on an answer. She reasons across the whole picture, ranks the work, and handles it herself when you give her the green light.</p>
          </div>
          <div className="product-story-reasoning">
            {recruiterSteps.map(([title, copy], index) => <article key={title}><span className="product-story-stage-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <Link className="text-link" href="/intelligence/">See Glo Intelligence <span className="action-glyph">↗</span></Link>
        </div>
      </section>

      <StoryCTA title="See your desk, ranked by what actually matters." copy="Bring one hard-to-fill job. We’ll show you what The Desk surfaces first, and why going back to a to-do list you wrote yourself won’t feel like an option." />
    </div>
  );
}

const clientCandidateVisibility = {
  title: "Every candidate, every stage, already on screen.",
  paragraphs: [
    "Clients get a clear view of every candidate at every stage of the pipeline: who’s in, who’s moving, and what happens next. When a candidate moves, the Client Room moves with them, so clients always see the latest status without waiting for an update.",
    "The answer to ‘where do we stand?’ is already there.",
  ],
};

const clientCollaborationSections = [
  {
    title: "Approve, request changes, or give feedback, right where the candidate lives.",
    paragraphs: [
      "Clients can review a submission and leave feedback without bouncing between tools. Every comment, question, and decision lives with the candidate it’s about. Say goodbye to digging through emails, chasing down notes, or trying to remember who said what.",
      "Everything stays together. The process keeps moving.",
    ],
  },
  {
    title: "Client feedback goes straight to work.",
    evidence: ["12%", "more likely to make a quality hire with the most skills-based searches"],
    source: ["Source: LinkedIn, The Future of Recruiting 2025 ↗", "https://business.linkedin.com/hire/resources/future-of-recruiting"],
    paragraphs: [
      "Glo learns what the client wants, what they pass on, and what they want to see more of, then puts that information to work on what comes next.",
      "Every rating and preference feeds directly back into candidate matching. The more a client tells Glo what works, the sharper the matching gets, and the stronger the next submission becomes.",
    ],
    link: ["Explore candidate matching", "/candidate-matching/"],
  },
  {
    title: "One job. One conversation. Everyone on the same page.",
    paragraphs: [
      "Messages between clients and recruiters live inside the Client Room, tied directly to the job order they’re actually about. Questions, answers, feedback, and follow-ups all happen in the same thread, with the full conversation right there for everyone who needs it.",
      "Your inbox, conversations, and collaborators? All connected, clear, and easy to follow.",
    ],
    link: ["Explore The Desk", "/recruiter-os/"],
  },
] as const;

const clientOperationsSections = [
  {
    title: "Contracts and alerts, always in view.",
    paragraphs: ["Renewal dates, terms, and status updates all in one place. Everything lives inside the Room, so nothing gets buried inside an inbox or lost in a separate system. Clients have a current view of what’s active, what’s changing, and what needs their attention next."],
    link: ["Explore connected systems", "/platform/integrations/"],
  },
  {
    title: "Scheduling done right.",
    evidence: ["45%", "of sales and marketing professionals cite back-and-forth scheduling as a major challenge"],
    source: ["Source: Zoho Bookings appointment scheduling survey ↗", "https://www.zoho.com/bookings/reports/appointment-scheduling-survey.html"],
    paragraphs: [
      "In the Room, clients see availability and confirm next steps in one place that both sides can trust. Everything stays current and easy to find, so there’s less back-and-forth and fewer missed updates.",
      "Both sides work from the same schedule, so the process stays on track.",
    ],
  },
] as const;

function ClientRoomNarrative() {
  return (
    <div className="product-story product-story-client">
      <section className="product-story-section product-story-section-white">
        <div className="container product-story-split product-story-split-media">
          <div className="product-story-copy">
            <h2>{clientCandidateVisibility.title}</h2>
            {clientCandidateVisibility.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <figure className="product-story-media"><img src={SUBMISSIONS_WORKFLOW} alt="Glo submissions view showing candidate stage, priority, recruiter, match, and next action" /></figure>
        </div>
      </section>
      <section className="product-story-section product-story-section-base">
        <div className="container product-story-room-grid">
          {clientCollaborationSections.map((section, index) => (
            <article key={section.title}>
              <span>0{index + 1}</span>
              <h2>{section.title}</h2>
              {"evidence" in section && section.evidence && <div className="product-story-card-evidence"><strong>{section.evidence[0]}</strong><small>{section.evidence[1]}</small></div>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {"source" in section && section.source && <a className="product-story-source" href={section.source[1]} target="_blank" rel="noreferrer">{section.source[0]}</a>}
              {"link" in section && section.link && <Link className="product-story-room-link" href={section.link[1]}>{section.link[0]} <span>↗</span></Link>}
            </article>
          ))}
        </div>
      </section>
      <section className="product-story-section product-story-section-dark">
        <div className="container product-story-room-flow">
          {clientOperationsSections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {"evidence" in section && section.evidence && <div className="product-story-card-evidence product-story-card-evidence-dark"><strong>{section.evidence[0]}</strong><small>{section.evidence[1]}</small></div>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {"source" in section && section.source && <a className="product-story-source product-story-source-dark" href={section.source[1]} target="_blank" rel="noreferrer">{section.source[0]}</a>}
              {"link" in section && section.link && <Link className="product-story-room-link" href={section.link[1]}>{section.link[0]} <span>↗</span></Link>}
            </article>
          ))}
        </div>
      </section>
      <section className="product-story-section product-story-section-white">
        <div className="container product-story-split">
          <div className="product-story-copy">
            <h2>A clearer read on workforce and compensation trends, when it’s useful.</h2>
            <div className="product-story-evidence"><strong>65%</strong><span>of organizations are confident in their market-pricing strategy</span></div>
            <p>Workforce trends, compensation benchmarks, and what’s happening in the market, all inside the Room. It’s a bonus layer of insight on top of the visibility they’re already there for.</p>
            <p>When questions around pay, talent availability, and market conditions pop up, Glo has the answers ready to go.</p>
            <a className="product-story-source" href="https://www.payscale.com/featured-content/cbpr" target="_blank" rel="noreferrer">Source: Payscale, Compensation Best Practices Report ↗</a>
          </div>
          <div className="product-story-workforce" aria-label="Example workforce intelligence context">
            <span>Workforce signal</span><strong>Compensation range shifting</strong><p>Current market context appears beside the live client relationship, where the team can use it.</p>
          </div>
        </div>
      </section>
      <StoryCTA title="Give your clients a reason to open the Room instead of the phone." copy="Bring one active client relationship. We’ll show you what they’d see the moment they logged in." />
    </div>
  );
}

const intelligenceStages = [
  {
    stage: "Observe",
    title: "Observe what matters… across the whole business.",
    copy: "Candidate, job, client, contract, compliance, and revenue signals, connected in one place to show your team what’s happening, what matters most, and where to move next.",
    evidence: {
      prefix: "Talent acquisition professionals using generative AI report an average",
      value: "20%",
      suffix: "reduction in workload.",
    },
    source: ["Source: LinkedIn, The Future of Recruiting 2025 ↗", "https://www.linkedin.com/business/talent/blog/talent-acquisition/future-of-recruiting-2025"],
  },
  {
    stage: "Reason",
    title: "Reasons through what the signal actually means.",
    copy: "Urgency, probability, readiness, and business impact, weighed together so recruiters understand exactly what it means and why it matters.",
  },
  {
    stage: "Prioritize",
    title: "Prioritizes the one move that matters most, right now.",
    copy: "Every signal gets ranked by business impact, so the top of the queue is always the best next move.",
  },
  {
    stage: "Act",
    title: "Acts where it counts, with a person still at the wheel.",
    copy: "Glo automates the repeatable steps and hands off anything consequential for a quick human call, keeping speed and control working together.",
  },
  {
    stage: "Learn",
    title: "Learns from every outcome.",
    copy: "Each placement, client response, and candidate interaction sharpens the next recommendation Glo makes. It all feeds directly back into candidate matching. The more you tell Glo what works, the sharper the matching gets, and the stronger the next submission becomes.",
    evidence: {
      prefix: "Organizations with the most skills-based searches are",
      value: "12%",
      suffix: "more likely to make a quality hire.",
    },
    source: ["Source: LinkedIn, The Future of Recruiting 2025 ↗", "https://business.linkedin.com/hire/resources/future-of-recruiting"],
  },
] as const;

function IntelligenceNarrative() {
  return (
    <div className="product-story product-story-intelligence">
      <section className="product-story-section product-story-section-base product-story-intelligence-stage-section">
        <div className="container product-story-intelligence-stages">
          {intelligenceStages.map((item) => (
            <article key={item.stage}>
              <span>{item.stage}</span>
              <h2>{item.title}</h2>
              {"evidence" in item && item.evidence && (
                <div className="product-story-stage-evidence">
                  <p>{item.evidence.prefix} <strong>{item.evidence.value}</strong> {item.evidence.suffix}</p>
                </div>
              )}
              <p>{item.copy}</p>
              {"source" in item && item.source && <a className="product-story-source" href={item.source[1]} target="_blank" rel="noreferrer">{item.source[0]}</a>}
            </article>
          ))}
        </div>
      </section>
      <section className="product-story-section product-story-section-base product-story-intelligence-experience-section">
        <div className="container">
          <div className="product-story-heading-row product-story-intelligence-heading"><h2>One intelligence layer, three experiences.</h2><span className="product-story-heading-divider" aria-hidden="true" /><p>Same intelligence, three ways to see it.</p></div>
          <div className="product-story-three product-story-intelligence-experiences">
            <article><h3>The Desk</h3><p>Ranks work by impact.</p><Link href="/recruiter-os/">Explore The Desk <span>↗</span></Link></article>
            <article><h3>Client Room</h3><p>Turns feedback into sharper matches.</p><Link href="/client-portal/">Explore Client Room <span>↗</span></Link></article>
            <article><h3>Candidate Room</h3><p>Keeps every candidate moving toward their next step.</p><Link href="/candidate-portal/">Explore Candidate Room <span>↗</span></Link></article>
          </div>
        </div>
      </section>
      <section className="product-story-section product-story-section-dark">
        <div className="container product-story-split">
          <div className="product-story-copy product-story-copy-light"><h2>Attention goes where it’s needed.</h2><p>Work that’s on track keeps moving. When a human decision matters, Glo brings it forward with the context needed to act fast.</p></div>
          <div className="product-story-exception"><span>Management by exception</span><strong>Human decision required</strong><p>Client urgency changed. Candidate readiness remains strong. Review the recommended move before it advances.</p></div>
        </div>
      </section>
      <section className="product-story-section product-story-section-base product-story-intelligence-trust-section">
        <div className="container">
          <div className="product-story-heading-row product-story-intelligence-heading"><h2>Built to earn the trust it asks for.</h2><span className="product-story-heading-divider" aria-hidden="true" /><p>AI you can trust with your work.</p></div>
          <div className="product-story-trust-grid">
            {[
              ["Grounded", "Recommendations tie back to approved operational data, not open-ended generation."],
              ["Permission-aware", "Glo respects the same access boundaries your team already works within."],
              ["Human-controlled", "Consequential actions get reviewed before they move, every time."],
              ["Observable", "Behavior, recommendations, and outcomes stay visible over time."],
              ["Auditable", "Inputs and actions stay traceable, so every recommendation can be checked."],
            ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <Link className="text-link" href="/book-a-demo/">Talk through how this works for your desk <span className="action-glyph">↗</span></Link>
        </div>
      </section>
      <StoryCTA title="See the reasoning, not just the result." copy="Bring one real scenario from your desk. We’ll show you what Glo observes, what it prioritizes, and why." />
    </div>
  );
}

const directIntegrations = ["ADP Workforce Now"];
const ecosystemIntegrations = [
  ["Finance / ERP", ["NetSuite", "Microsoft Dynamics 365 Business Central", "Acumatica", "Oracle E-Business Suite"]],
  ["CRM / Sales", ["Salesforce", "HubSpot", "Zoho CRM", "SugarCRM", "Copper"]],
  ["Communications", ["Microsoft Teams", "Slack"]],
  ["Forms / Workflow", ["Jotform"]],
  ["Marketing / Engagement", ["Mailchimp", "Dotdigital", "Klaviyo"]],
  ["AI / Enterprise Automation", ["OpenAI", "Moveworks"]],
] as const;
const discussIntegrations = [
  ["Job Boards / Sourcing", ["Indeed", "LinkedIn", "ZipRecruiter", "Dice", "Monster"]],
  ["VMS / Enterprise Workforce", ["SAP Fieldglass", "Beeline", "Workday / VNDLY"]],
  ["Background / Compliance", ["Checkr", "Accurate Background", "Asurint", "E-Verify / I-9 provider", "WOTC provider"]],
  ["Finance / ERP", ["QuickBooks", "Xero"]],
  ["Email / Calendar", ["Microsoft Outlook / Microsoft 365", "Gmail / Google Workspace"]],
  ["Communications", ["Zoom", "Aircall", "8x8", "Ringover"]],
] as const;

function IntegrationGroup({ title, names, status }: { title: string; names: readonly string[]; status: string }) {
  return <article className="integration-group"><div><h3>{title}</h3><span>{status}</span></div><ul>{names.map((name) => <li key={name}>{name}</li>)}</ul></article>;
}

function IntegrationsNarrative() {
  return (
    <div className="product-story product-story-integrations">
      <section className="product-story-section product-story-section-white">
        <div className="container product-story-split">
          <div className="product-story-copy"><h2>Built to work with the tools that work.</h2><p>Glo simply plugs into your existing tech stack. Stop babysitting duplicate data entries across three different platforms, and connect the tools you’re already using, from payroll to CRM. No integration projects, no “middleware” headaches. Just a cleaner stack that works the job.</p></div>
          <div className="integration-direct"><span>Direct Glo integration</span><strong>{directIntegrations[0]}</strong><p>Payroll and workforce data connect directly with Glo’s staffing operating picture.</p></div>
        </div>
      </section>
      <section className="product-story-section product-story-section-base">
        <div className="container">
          <div className="product-story-heading-row"><h2>More connections. Less custom integration work.</h2><p>Availability varies by system. Glo distinguishes direct integrations from broader ecosystem connections and discussion-required paths.</p></div>
          <div className="integration-status-key" aria-label="Integration status key"><span><i className="direct" /> Direct Glo integration</span><span><i className="ecosystem" /> Ecosystem connection</span><span><i className="discuss" /> Discuss availability</span></div>
          <div className="integration-groups">
            {ecosystemIntegrations.map(([title, names]) => <IntegrationGroup key={title} title={title} names={names} status="Ecosystem connection" />)}
            {discussIntegrations.map(([title, names]) => <IntegrationGroup key={`discuss-${title}`} title={title} names={names} status="Discuss availability" />)}
          </div>
        </div>
      </section>
      <section className="product-story-section product-story-section-dark integration-discussion-section">
        <div className="container product-story-split">
          <div className="product-story-copy product-story-copy-light"><h2>Need something we haven’t listed?</h2><p>Missing a tool? Tell us what you’re running, and we’ll help map the best path, whether that’s flipping on a native connector or building out a new one. Glo removes the blockers, not adds to them.</p></div>
          <Button asChild size="lg" className="glo-button integration-discussion-cta"><Link href="/book-a-demo/">Talk to us about integrating <span className="action-glyph">↗</span></Link></Button>
        </div>
      </section>
      <StoryCTA title="Simplify your stack by bringing in Glo." copy="Replace the fragmented tech that’s slowing your company down and connect the systems you depend on." />
    </div>
  );
}

export default function ProductNarrative({ kind }: { kind: NarrativeKind }) {
  if (kind === "recruiter") return <RecruiterOSNarrative />;
  if (kind === "client") return <ClientRoomNarrative />;
  if (kind === "intelligence") return <IntelligenceNarrative />;
  return <IntegrationsNarrative />;
}

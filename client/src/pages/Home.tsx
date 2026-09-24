/**
 * Operational Signal Desk homepage: a billboard-scale approved Glo wordmark leads
 * an asymmetric product specification and live signal-to-outcome workflow proof.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SignalRail from "@/components/SignalRail";
import PageMeta from "@/components/PageMeta";
import OperationalProof from "@/components/OperationalProof";
import HeroProductDemo from "@/components/HeroProductDemo";
import StaffingWorldCampaign from "@/components/StaffingWorldCampaign";

const GLO_LOGO = "/images/glo-cyan-no-tm_09e4b011.svg";

const experiences = [
  {
    number: "01",
    title: "The Desk",
    copy: "Ranks the work by business impact, flags blockers, and moves candidates toward placement, not just through fields.",
    href: "/recruiter-os/",
  },
  {
    number: "02",
    title: "Client Room",
    copy: "Turns approvals, feedback, and open demand into signal, not another status call.",
    href: "/client-portal/",
  },
  {
    number: "03",
    title: "Candidate Room",
    copy: "Gives every candidate a clear next step and keeps their profile current, automatically.",
    href: "/candidate-portal/",
  },
];

const trustItems = [
  ["Grounded", "Recommendations tie back to approved operational data"],
  ["Permission-aware", "Glo respects the same access boundaries your team does"],
  ["Human-controlled", "Consequential actions stay reviewable before they move"],
  ["Observable", "Inputs, recommendations, and outcomes stay visible"],
];

export default function Home() {
  return (
    <div className="glo-site">
      <PageMeta
        title="AI-Native Staffing & Recruiting Software | Glo by Lantern"
        description="Glo is AI-native staffing and recruiting software that turns candidate, job, client, contract, compliance, and revenue signals into the next best action."
        path="/"
      />
      <SiteHeader />

      <main>
        <section className="home-hero">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="container home-hero-grid">
            <div className="hero-copy">
              <div className="hero-brand-billboard">
                <img src={GLO_LOGO} alt="Glo" />
              </div>
              <h1 className="product-spec">Staffing software finally built for the <span className="hero-outcome">AI era.</span></h1>
              <p className="hero-lede">
                There’s the old way of running a desk, and there’s Glo. Glo goes beyond traditional staffing software, turning everything happening across your desk into clear action. Candidate, job, client, contract, compliance, and revenue signals are ranked to surface the move that matters right now.
              </p>
              <p className="hero-lede-close">Know what’s next and make moves, fast.</p>
            </div>

            <div className="hero-proof-column">
              <div className="hero-visual-wrap">
                <HeroProductDemo />
              </div>

              <div className="hero-actions">
                <Button asChild size="lg" className="glo-button">
                  <Link href="/book-a-demo/">Book a demo <span className="action-glyph">↗</span></Link>
                </Button>
                <Link href="/intelligence/" className="text-link text-link-dark">See how Glo thinks <span className="action-glyph">→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <StaffingWorldCampaign />

        <section className="category-section home-ats-comparison">
          <div className="container category-grid">
            <div className="category-copy">
              <h2>Your ATS tells you what happened. <em>Glo tells you what to do next.</em></h2>
              <p>
                Most staffing systems are very good at documenting yesterday. Glo evaluates live operating signals, weighs urgency and business impact, and brings the highest-value move to the front of the line.
              </p>
              <Link href="/applicant-tracking-system/" className="text-link">Why applicant tracking is not enough <span className="action-glyph">→</span></Link>
            </div>
            <div className="category-comparison" aria-label="Comparison between a traditional ATS and Glo">
              <div className="compare-column compare-old">
                <p className="compare-title">Traditional ATS</p>
                {[
                  "Stores candidate activity", "Reports open orders", "Waits for recruiter queries", "Counts work completed",
                ].map((item) => <div key={item}><span>—</span>{item}</div>)}
              </div>
              <div className="compare-column compare-glo">
                <p className="compare-title compare-title-glo"><img src={GLO_LOGO} alt="Glo" /></p>
                {[
                  "Evaluates candidate readiness", "Predicts job-order risk", "Surfaces the next move", "Prioritizes business impact",
                ].map((item) => <div key={item}><span>+</span>{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="experiences-section">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <h2>Three connected experiences.</h2>
              </div>
              <p className="section-intro">Recruiters, clients, and candidates work from one continuous operating picture. No bolt-on portals. No handoff fog.</p>
            </div>

            <div className="experiences-grid">
              {experiences.map((experience) => {
                return (
                  <Link href={experience.href} key={experience.title} className="experience-card">
                    <h3>{experience.title}</h3>
                    <p>{experience.copy}</p>
                    <span className="experience-link">Explore the experience <span className="action-glyph">↗</span></span>
                  </Link>
                );
              })}
            </div>

            <div className="portals-visual">
              <div className="portals-proof-shell"><OperationalProof mode="portals" /></div>
              <div className="portals-caption">
                <div className="portals-caption-intro">
                  <span>One signal changes the whole picture.</span>
                  <p>Candidate preference becomes better matching. Client feedback becomes smarter prioritization. Recruiter outcomes make the system more useful.</p>
                </div>
                <div className="portals-signal-story" aria-label="How participation changes recruiter priorities">
                  <div className="portals-signal-step">
                    <small>Candidate</small>
                    <strong>Preference updated</strong>
                  </div>
                  <i aria-hidden="true">↓</i>
                  <div className="portals-signal-step">
                    <small>Client</small>
                    <strong>Review completed</strong>
                  </div>
                  <i aria-hidden="true">↓</i>
                  <div className="portals-signal-step portals-signal-resolved">
                    <small>The Desk</small>
                    <strong>Work queue re-ranked</strong>
                  </div>
                </div>
                <p className="portals-signal-outcome">The next best match moves with the handoff removed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="intelligence-section">
          <div className="container intelligence-grid">
            <div className="intelligence-copy">
              <h2>AI that works the job, not just the prompt.</h2>
              <p>Glo’s AI recruiting intelligence lives inside the workflow: watching the same signals your best operator watches, then reasoning across all of them at once.</p>
            </div>

            <div className="intelligence-visual">
              <OperationalProof mode="recruiter" />
            </div>

            <div className="reasoning-list">
              {[
                ["Observes", "Candidate, job, client, contract, compliance, and revenue signals"],
                ["Reasons", "Urgency, readiness, probability, risk, business impact"],
                ["Acts", "Initiates or automates the next step, with human control where it matters"],
              ].map(([title, copy]) => (
                <div key={title} className="reasoning-row">
                  <span className="reasoning-g-frame" aria-hidden="true">
                    <img className="reasoning-g-mark" src="/images/glo-g-circle-authoritative_b31f5550.svg" alt="" />
                  </span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
            </div>

            <Link href="/intelligence/" className="text-link intelligence-link">Explore Glo Intelligence <span className="action-glyph">→</span></Link>
          </div>
        </section>

        <section className="execution-section">
          <div className="container execution-grid">
            <div className="execution-heading">
              <h2>Move candidates.<br />Fill jobs.<br /><span>Faster.</span></h2>
            </div>
            <div className="execution-board">
              <div className="product-shot product-shot-submissions">
                <img src="/images/glo-home-move-candidates_80a98294.webp" alt="Glo Candidates view showing candidate profiles, current stage, recruiter, ranking, and recommended action" />
              </div>
              <div className="product-shot-caption"><span>Live operating view</span><strong>Priority becomes the next move.</strong></div>
            </div>
            <div className="execution-copy">
              <p>The point is not more activity. It is more placements from the same attention.</p>
              <ul>
                <li><span>Prioritize jobs by fillability and business impact.</span></li>
                <li><span>Know who is ready before the deadline becomes the signal.</span></li>
                <li><span>Manage exceptions without managing every record.</span></li>
              </ul>
              <Link href="/recruiter-os/" className="text-link text-link-dark">See The Desk <span className="action-glyph">→</span></Link>
            </div>
          </div>
        </section>

        <section className="stack-section">
          <div className="container stack-grid">
            <div className="stack-copy">
              <h2>Replace the recruiting stack. Not just the login screen.</h2>
              <p>Your applicant tracking system (ATS), recruiting CRM, client and candidate portals, workflow, and compliance shouldn’t live across a patchwork of disconnected tools.</p>
              <p className="stack-copy-close">Glo brings the recruiting stack together in The Desk, connecting the data, workflows, and intelligence your team needs to run The Desk. <span>One operating picture. One native platform. Not five tabs pretending to talk to each other.</span></p>
            </div>
            <div className="stack-map">
              <svg className="stack-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <marker id="stack-arrow-in" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" /></marker>
                  <marker id="stack-arrow-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" /></marker>
                </defs>
                {[[18,13],[82,17],[10,50],[90,53],[22,86],[78,84]].map(([x,y], index) => (
                  <g key={index}>
                    <line className="stack-link-in" x1={x} y1={y} x2="48.8" y2="49.2" markerEnd="url(#stack-arrow-in)" />
                    <line className="stack-link-out" x1="51.2" y1="50.8" x2={x} y2={y} markerEnd="url(#stack-arrow-out)" />
                  </g>
                ))}
              </svg>
              <div className="stack-flow stack-flow-in">Context + signals in</div>
              <div className="stack-center"><img src={GLO_LOGO} alt="Glo" /></div>
              <div className="stack-center-caption">Resolve intelligence</div>
              <div className="stack-flow stack-flow-out">Prioritized action out</div>
              {[
                ["ATS", "stack-a"], ["Staffing CRM", "stack-b"], ["Client portal", "stack-c"],
                ["Candidate portal", "stack-d"], ["Workflow", "stack-e"], ["Compliance", "stack-f"],
              ].map(([label, cls]) => <div key={label} className={`stack-node ${cls}`}>{label}</div>)}
            </div>
          </div>
        </section>

        <section className="economics-section">
          <div className="container economics-grid">
            <div>
              <h2>Controller-friendly economics.</h2>
            </div>
            <div className="economics-copy">
              <p>AI should make the operating model better, not turn your invoice into a maze of seats and tokens. Glo is building fairer software economics around the work staffing firms actually do.</p>
              <p className="economics-note">Pricing is tailored to the operating model. We’ll talk through it in the demo.</p>
              <Link href="/book-a-demo/" className="text-link text-link-dark">Talk through your operation <span className="action-glyph">→</span></Link>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-grid">
            <div className="trust-visual">
              <OperationalProof mode="trust" />
              <div className="trust-stamp"><i className="trust-stamp-node" /><span>Review before consequence</span></div>
            </div>
            <div className="trust-copy">
              <h2>Trust is part of the architecture, not a footnote.</h2>
              <p>Useful intelligence needs constraints. Glo is designed so people can understand the recommendation, see the relevant context, and stay in control of consequential work.</p>
              <div className="trust-items">
                {trustItems.map(([title, copy]) => (
                  <div key={title}>
                    <strong className="trust-item-title">
                      <span className="trust-title-g-frame" aria-hidden="true">
                        <img src="/images/glo-g-circle-authoritative_b31f5550.svg" alt="" />
                      </span>
                      <span>{title}</span>
                    </strong>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
              <Link href="/intelligence/" className="text-link">See the intelligence approach <span className="action-glyph">→</span></Link>
            </div>
          </div>
        </section>

        <section className="close-section">
          <div className="container close-grid">
            <div>
              <h2>Ready to see Glo work?</h2>
              <p>Bring one hard-to-fill job. We’ll show you what Glo sees and what it moves next.</p>
            </div>
            <Button asChild size="lg" className="glo-button home-close-button">
              <Link href="/contact/">Contact Us <span className="action-glyph">↗</span></Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

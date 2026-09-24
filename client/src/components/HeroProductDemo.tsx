/**
 * Operational Signal Desk hero demo: product-first progressive disclosure that
 * lets buyers inspect three connected staffing scenarios without becoming a chatbot.
 */
import { useState } from "react";
import { Link } from "wouter";

const views: Array<{
  mode: "growth" | "delivery" | "finance";
  label: string;
  caption: string;
  href: string;
  image: string;
  alt: string;
  signal: string;
  reason: string;
  action: string;
  outcome: string;
}> = [
  {
    mode: "growth",
    label: "Growth pipeline",
    caption: "See where client demand, open opportunity, and placement value are building.",
    href: "/recruitment-crm/",
    image: "/images/glo-home-growth-pipeline_855cd35c.webp",
    alt: "Glo CRM pipeline showing growth priorities, a visual sales funnel, stage values, and pipeline forecast",
    signal: "Client opportunity reached active hiring",
    reason: "Open demand matches ready talent",
    action: "Move priority accounts to job order",
    outcome: "Revenue pipeline protected",
  },
  {
    mode: "delivery",
    label: "Submissions",
    caption: "Move recruiter submissions by readiness, risk, match, and the next action.",
    href: "/recruiter-os/",
    image: "/images/glo-home-submissions_ce4e98ee.webp",
    alt: "Glo submissions workflow showing candidate status, priority, recruiter, match score, and next action",
    signal: "Client silent after a high-match submission",
    reason: "Delay threatens the fill window",
    action: "Prompt recruiter follow-up",
    outcome: "Submission back in motion",
  },
  {
    mode: "finance",
    label: "Billing workflow",
    caption: "Keep delivery and finance in one operating picture from shift to invoice.",
    href: "/staffing-agency-software/",
    image: "/images/glo-home-billing-workflow_cfbc7ffc.webp",
    alt: "Glo billing workflow showing issue severity, type, affected record, assignee, status, date, and next action",
    signal: "Two shifts are waiting on approval",
    reason: "The exception is holding invoice readiness",
    action: "Route the approval blocker",
    outcome: "Billing cycle protected",
  },
];

export default function HeroProductDemo() {
  const [activeMode, setActiveMode] = useState<(typeof views)[number]["mode"]>("growth");
  const active = views.find((view) => view.mode === activeMode) ?? views[0];

  return (
    <div className="hero-product-demo">
      <p className="hero-demo-instruction">Choose a workflow to see how Glo prioritizes the work.</p>
      <div className="hero-demo-nav" role="tablist" aria-label="Explore Glo product experiences">
        {views.map((view, index) => {
          const selected = active.mode === view.mode;
          return (
            <button
              key={view.mode}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? "hero-demo-tab is-active" : "hero-demo-tab"}
              onClick={() => setActiveMode(view.mode)}
            >
              <span className="hero-demo-code">0{index + 1}</span>
              <span>{view.label}</span>
            </button>
          );
        })}
      </div>

      <div className="hero-demo-stage" role="tabpanel" aria-live="polite">
        <div className={`hero-demo-media hero-demo-media-${active.mode}`}>
          <img src={active.image} alt={active.alt} />
          <div className="hero-demo-decision">
            <strong>{active.signal}</strong>
            <div><span>01</span><p>{active.reason}</p></div>
            <div className="is-action"><span>02</span><p>{active.action}</p></div>
            <div className="is-outcome"><span>03</span><p>{active.outcome}</p></div>
          </div>
        </div>
      </div>

      <div className="hero-demo-caption">
        <p>{active.caption}</p>
        <Link href={active.href}>Open {active.label} <span className="action-glyph">↗</span></Link>
      </div>
    </div>
  );
}

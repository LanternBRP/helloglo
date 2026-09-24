/**
 * Operational Signal Desk proof system: deterministic, route-specific evidence
 * boards that show what Glo knows, how it reasons, what moves, and what improves.
 */
export type ProofKind =
  | "recruiter" | "client" | "candidate" | "intelligence" | "integrations"
  | "matching" | "crm" | "portals" | "trust" | "healthcare"
  | "industrial" | "technology" | "professional" | "executive" | "generic";

type ProofData = {
  code: string;
  title: string;
  decision: string;
  reason: string;
  rows: Array<[string, string, string]>;
  action: string;
  outcome: string;
};

const proof: Record<ProofKind, ProofData> = {
  recruiter: {
    code: "IMPACT QUEUE / LIVE",
    title: "Desk control",
    decision: "Protect the at-risk order",
    reason: "Two ready candidates. One client approval blocker. Highest revenue impact.",
    rows: [["Revenue risk", "Client approval waiting", "critical"], ["Fillability", "2 candidates ready", "high"], ["Compliance", "No open exception", "clear"]],
    action: "Escalate approval with context",
    outcome: "Fill protected",
  },
  client: {
    code: "CLIENT SIGNAL / 014",
    title: "Decision velocity",
    decision: "Move the stalled submission",
    reason: "Hiring-manager preference conflicts with the current review order.",
    rows: [["Open demand", "4 active orders", "live"], ["Decision queue", "2 reviews waiting", "attention"], ["Preference", "Shift experience weighted", "learned"]],
    action: "Request focused feedback",
    outcome: "Review moving",
  },
  candidate: {
    code: "CANDIDATE JOURNEY / 082",
    title: "Readiness picture",
    decision: "Clear the onboarding blocker",
    reason: "Candidate fit is strong. One document is stopping submission readiness.",
    rows: [["Availability", "Confirmed", "clear"], ["Preference", "Role aligned", "strong"], ["Briefcase", "1 item missing", "attention"]],
    action: "Prompt missing document",
    outcome: "Ready to submit",
  },
  intelligence: {
    code: "REASONING TRACE / 006",
    title: "Glo Intelligence",
    decision: "Move the highest-impact exception",
    reason: "Urgency, readiness, probability, and business impact resolve into one ranked move.",
    rows: [["Observe", "6 operating signals", "grounded"], ["Reason", "Impact outranks activity", "resolved"], ["Control", "Human review required", "permissioned"]],
    action: "Present recommendation",
    outcome: "Judgment focused",
  },
  integrations: {
    code: "CONNECTED CONTEXT / 019",
    title: "Ecosystem signal",
    decision: "Resolve the payroll exception",
    reason: "Placement is ready. A connected downstream status needs attention.",
    rows: [["VMS", "Order synchronized", "clear"], ["Background", "Complete", "clear"], ["Payroll", "Setup exception", "attention"]],
    action: "Route exception to owner",
    outcome: "Placement protected",
  },
  matching: {
    code: "MATCH CONTEXT / 031",
    title: "Candidate fit",
    decision: "Advance the candidate who can move",
    reason: "Skills fit is close. Readiness, preference, and timing break the tie.",
    rows: [["Skills", "Role fit verified", "strong"], ["Preference", "Schedule aligned", "strong"], ["Readiness", "Documents current", "clear"]],
    action: "Recommend first submission",
    outcome: "Match explainable",
  },
  crm: {
    code: "ACCOUNT SIGNAL / 027",
    title: "Growth to delivery",
    decision: "Follow the demand signal",
    reason: "A buyer conversation changed urgency on an active job order.",
    rows: [["Opportunity", "Expanded scope", "live"], ["Client health", "Engagement rising", "positive"], ["Delivery", "Capacity available", "clear"]],
    action: "Prioritize account follow-up",
    outcome: "Handoff intact",
  },
  portals: {
    code: "CONNECTED EXPERIENCES / 003",
    title: "One operating picture",
    decision: "Turn participation into signal",
    reason: "Candidate preference and client feedback change the recruiter priority in real time.",
    rows: [["Candidate", "Preference updated", "signal"], ["Client", "Review completed", "signal"], ["The Desk", "Work queue re-ranked", "resolved"]],
    action: "Move the next best match",
    outcome: "Handoff removed",
  },
  trust: {
    code: "CONTROL TRACE / 011",
    title: "Guardrail check",
    decision: "Hold action for review",
    reason: "Recommendation is grounded and permissioned. Consequence requires human approval.",
    rows: [["Source context", "Approved data only", "grounded"], ["Permission", "Access boundary passed", "clear"], ["Consequence", "Approval required", "review"]],
    action: "Present evidence to reviewer",
    outcome: "Action controlled",
  },
  healthcare: {
    code: "CREDENTIAL READINESS / 042",
    title: "Submission control",
    decision: "Resolve the credential exception",
    reason: "Facility demand is urgent. One renewal blocks an otherwise ready clinician.",
    rows: [["License", "Verified", "clear"], ["BLS", "Renewal due in 4d", "attention"], ["Facility fit", "Requirements aligned", "strong"]],
    action: "Route renewal task now",
    outcome: "Submission protected",
  },
  industrial: {
    code: "SHIFT READINESS / 064",
    title: "Volume control",
    decision: "Fill the shift with ready workers",
    reason: "Demand rose for tonight. Availability and certification narrow the move.",
    rows: [["Shift", "12 openings", "urgent"], ["Availability", "18 confirmed", "live"], ["Certification", "14 qualified", "resolved"]],
    action: "Advance qualified group",
    outcome: "Shift covered",
  },
  technology: {
    code: "SKILL + READINESS / 028",
    title: "Technical delivery",
    decision: "Advance the available specialist",
    reason: "Two skill matches. Start date and client environment break the tie.",
    rows: [["Core skills", "Both aligned", "strong"], ["Start date", "1 candidate ready", "resolved"], ["Environment", "Prior experience", "positive"]],
    action: "Recommend first submission",
    outcome: "Time saved",
  },
  professional: {
    code: "SEARCH MOMENTUM / 033",
    title: "Relationship control",
    decision: "Re-engage the priority candidate",
    reason: "Client interest is rising while candidate response momentum is cooling.",
    rows: [["Client signal", "Review reopened", "live"], ["Candidate", "Last touch 5d", "attention"], ["Fit", "Preference aligned", "strong"]],
    action: "Send contextual follow-up",
    outcome: "Momentum restored",
  },
  executive: {
    code: "SEARCH BRIEF / 017",
    title: "High-touch visibility",
    decision: "Prepare the client decision",
    reason: "Three finalists remain. Feedback gaps are slowing the slate review.",
    rows: [["Pipeline", "3 finalists", "live"], ["Feedback", "1 response missing", "attention"], ["Client meeting", "Tomorrow", "urgent"]],
    action: "Resolve feedback gap",
    outcome: "Decision prepared",
  },
  generic: {
    code: "OPERATING VIEW / 001",
    title: "Priority window",
    decision: "Move the work with the highest impact",
    reason: "Glo resolves live staffing context into one clear next move.",
    rows: [["Signal", "Context observed", "live"], ["Reason", "Impact evaluated", "resolved"], ["Action", "Owner identified", "ready"]],
    action: "Advance recommended move",
    outcome: "Work moving",
  },
};

export default function OperationalProof({ mode = "generic", compact = false }: { mode?: ProofKind; compact?: boolean }) {
  const data = proof[mode];
  const variant = ["client", "portals", "crm"].includes(mode)
    ? "shift"
    : ["candidate", "healthcare", "industrial", "technology", "professional", "executive"].includes(mode)
      ? "journey"
      : ["intelligence", "trust"].includes(mode)
        ? "trace"
        : "queue";
  return (
    <div className={`ops-proof ops-proof-${variant} ${compact ? "ops-proof-compact" : ""}`} data-proof-mode={mode}>
      <div className="ops-proof-head">
        <span>{data.code}</span>
        <span className="ops-proof-live"><i className="ops-live-dot" /> Observing</span>
      </div>
      <div className="ops-proof-title">
        <div><span>Resolved priority</span><strong>{data.title}</strong></div>
        <img className="ops-glo-mark" src="/images/glo-g-circle-authoritative_b31f5550.svg" alt="" aria-hidden="true" />
      </div>
      <div className="ops-proof-decision">
        <h3>{data.decision}</h3>
        <p>{data.reason}</p>
      </div>
      <div className="ops-proof-rows">
        {data.rows.map(([signal, reading, state], index) => (
          <div className="ops-proof-row" key={signal}>
            <span className="ops-proof-rank">0{index + 1}</span>
            <div><span>{signal}</span><strong>{reading}</strong></div>
            <span className={`ops-state ${state === "attention" || state === "critical" || state === "urgent" || state === "review" ? "ops-state-action" : ""}`}>{state}</span>
          </div>
        ))}
      </div>
      <div className="ops-proof-action">
        <div><i className="ops-action-node" /><span>{data.action}</span></div>
        <span className="ops-flow-line">→</span>
        <strong>{data.outcome}</strong>
        <span className="action-glyph">↗</span>
      </div>
    </div>
  );
}

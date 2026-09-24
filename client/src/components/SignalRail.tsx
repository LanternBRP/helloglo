/**
 * Operational Signal Desk motif: a compact observable reasoning rail that
 * turns Glo's AI story into a repeatable signal-to-outcome visual language.
 */
const defaultSteps = ["Signal", "Reason", "Priority", "Action", "Outcome"];

export default function SignalRail({ steps = defaultSteps, light = false }: { steps?: string[]; light?: boolean }) {
  return (
    <div className={`signal-rail ${light ? "signal-rail-light" : ""}`} aria-label={steps.join(" to ")}>
      {steps.map((step, index) => (
        <div key={step} className="contents">
          <div className="signal-step">
            <span className={`signal-node ${index === steps.length - 1 ? "signal-node-action" : ""}`} />
            <span>{step}</span>
          </div>
          {index < steps.length - 1 && <span className="signal-arrow" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

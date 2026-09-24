/** Approved standalone G mark used as the only section-corner brand symbol. */
const G_MARK = "/images/glo-g-circle-authoritative_b31f5550.svg";

export default function GloArc({ className = "" }: { className?: string }) {
  return <img src={G_MARK} className={`glo-corner-mark ${className}`} alt="" aria-hidden="true" />;
}

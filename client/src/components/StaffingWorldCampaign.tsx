/**
 * Operational Signal Desk event campaign: a compact dark conference proof plate
 * interrupts the homepage rhythm and routes one clear Glo Up conversion.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { STAFFING_WORLD_LOGO } from "@/lib/staffingWorld";

export default function StaffingWorldCampaign() {
  return (
    <section className="staffing-world-section" aria-labelledby="staffing-world-heading">
      <div className="container">
        <div className="staffing-world-campaign">
          <div className="staffing-world-logo-wrap">
            <img src={STAFFING_WORLD_LOGO} alt="Staffing World 2026" />
          </div>
          <div className="staffing-world-copy">
            <h2 id="staffing-world-heading">
              <span className="staffing-world-title-line staffing-world-title-line-primary">Attending Staffing</span>
              <span className="staffing-world-title-line staffing-world-title-line-accent">World? We are too.</span>
            </h2>
            <p>Make time for a focused look at how Glo turns live staffing signals into the next best action.</p>
          </div>
          <div className="staffing-world-action">
            <Button asChild size="lg" className="glo-button">
              <Link href="/staffing-world-glo-up/">Schedule a Glo Up <span className="action-glyph">↗</span></Link>
            </Button>
            <p>October 12–14, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

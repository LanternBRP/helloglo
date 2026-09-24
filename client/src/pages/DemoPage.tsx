/**
 * Operational Signal Desk conversion page: one focused qualification form,
 * direct value framing, and a polished customer-facing confirmation state.
 */
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageMeta from "@/components/PageMeta";
import SignalRail from "@/components/SignalRail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thanks. We’ll be in touch.");
  };

  return (
    <div className="glo-site demo-page">
      <PageMeta title="Book a Glo Demo | AI-Native Staffing & Recruiting Software" description="See how Glo turns candidate, job, client, contract, compliance, and revenue signals into the next best operational action for staffing and recruiting teams." path="/book-a-demo/" />
      <SiteHeader />
      <main className="demo-main">
        <div className="demo-orbit" />
        <div className="container demo-grid">
          <div className="demo-copy">
            <Link href="/" className="back-link"><span className="action-glyph">←</span> Back to Glo</Link>
            <h1>Bring one hard-to-fill job.</h1>
            <p className="demo-lede">We’ll show you what Glo sees, what it prioritizes, and how it moves the next best action forward.</p>
            <SignalRail />
            <div className="demo-expectations">
              <h2>What we’ll cover</h2>
              {[
                "How The Desk ranks work by business impact",
                "How client and candidate signals improve the operating picture",
                "How Glo Intelligence reasons across readiness, risk, and urgency",
                "How the platform can fit your staffing and recruiting model and existing ecosystem",
              ].map((item, index) => (
                <div key={item}>
                  <span className="demo-expectation-index">0{index + 1}</span>
                  <span className="demo-check-node" aria-hidden="true">
                    <img src="/images/glo-g-circle-authoritative_b31f5550.svg" alt="" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="demo-form-wrap">
            {submitted ? (
              <div className="demo-success" role="status">
                <span className="success-icon"><i className="success-mark"><span /></i></span>
                <h2>Thanks. We’ll be in touch.</h2>
                <p>We’ll review the context you shared and follow up to schedule the right conversation.</p>
                <div className="form-success-steps" aria-label="What happens next">
                  <div className="form-success-step"><span>01</span><div><strong>We review the request</strong><p>Your operating context helps us prepare a useful conversation.</p></div></div>
                  <div className="form-success-step"><span>02</span><div><strong>We follow up</strong><p>A member of the Glo team will reach out with the next step.</p></div></div>
                </div>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="demo-reset">Start a new request</Button>
              </div>
            ) : (
              <form onSubmit={submit} className="demo-form">
                <div className="form-head"><span>GLO / DEMO REQUEST</span><strong>Tell us about the operation.</strong></div>
                <div className="demo-form-progress" aria-label="Demo request routing steps">
                  <span className="is-current">Describe the signal</span><i className="progress-rule" /><span>Add context</span><i className="progress-rule" /><span>Route the conversation</span>
                </div>
                <div className="form-stage"><span>01</span><strong>Your operating context</strong><small>Qualify the fit</small></div>
                <div className="form-row">
                  <div className="form-field"><Label htmlFor="firstName">First name</Label><Input id="firstName" name="firstName" required autoComplete="given-name" /></div>
                  <div className="form-field"><Label htmlFor="lastName">Last name</Label><Input id="lastName" name="lastName" required autoComplete="family-name" /></div>
                </div>
                <div className="form-field"><Label htmlFor="email">Work email</Label><Input id="email" name="email" type="email" required autoComplete="email" /></div>
                <div className="form-field"><Label htmlFor="company">Company</Label><Input id="company" name="company" required autoComplete="organization" /></div>
                <div className="form-row">
                  <div className="form-field">
                    <Label htmlFor="firmType">Staffing and recruiting model</Label>
                    <select id="firmType" name="firmType" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Light industrial</option><option>Healthcare</option><option>Professional</option><option>IT & technology</option><option>Executive search</option><option>Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <Label htmlFor="teamSize">Recruiting team size</Label>
                    <select id="teamSize" name="teamSize" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>1–10</option><option>11–50</option><option>51–200</option><option>201+</option>
                    </select>
                  </div>
                </div>
                <div className="form-stage"><span>02</span><strong>The signal to resolve</strong><small>Frame the demo</small></div>
                <div className="form-field"><Label htmlFor="challenge">What work needs to move faster?</Label><Textarea id="challenge" name="challenge" rows={4} placeholder="A hard-to-fill order, a recruiter bottleneck, a client handoff…" /></div>
                <Button type="submit" className="glo-button w-full">Request the demo <span className="action-glyph">↗</span></Button>
                <div className="form-route-note"><span className="route-node" /><p>Only share the information needed for this request. Do not include sensitive personal or candidate data. <Link href="/privacy/">Review our Privacy Policy.</Link></p></div>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

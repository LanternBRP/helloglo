import { FormEvent, useMemo, useState } from "react";
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

const inquiryOptions = [
  ["general", "General question"],
  ["customer", "Current customer"],
  ["product", "Product and platform"],
  ["integration", "Integration"],
  ["partnership", "Partnership or media"],
  ["privacy", "Privacy"],
  ["security", "Security program"],
  ["vulnerability", "Responsible disclosure"],
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const inquiryLabel = useMemo(
    () => inquiryOptions.find(([value]) => value === inquiryType)?.[1] ?? "General",
    [inquiryType],
  );

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thanks for reaching out.");
  };

  const reset = () => {
    setInquiryType("");
    setSubmitted(false);
  };

  return (
    <div className="glo-site demo-page contact-page">
      <PageMeta
        title="Contact Us | Glo by Lantern"
        description="Contact the Glo by Lantern team about the product, integrations, an existing relationship, partnerships, privacy, or security."
        path="/contact/"
      />
      <SiteHeader />
      <main className="demo-main">
        <div className="demo-orbit" />
        <div className="container demo-grid">
          <div className="demo-copy contact-copy">
            <Link href="/" className="back-link"><span className="action-glyph">←</span> Back to Glo</Link>
            <h1>Let’s get you to the right team.</h1>
            <p className="demo-lede">Questions about Glo, an existing relationship, partnerships, privacy, or security? Tell us what you need and the right conversation can move forward.</p>
            <SignalRail steps={["Context", "Question", "Route", "Reply"]} />
            <div className="demo-expectations contact-expectations">
              <h2>What happens next</h2>
              {[
                "Your inquiry type stays attached to the message",
                "Your context helps us find the right response",
                "The right Glo team follows up from there",
              ].map((item, index) => (
                <div key={item}>
                  <span className="demo-expectation-index">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="demo-form-wrap contact-form-wrap">
            {submitted ? (
              <div className="demo-success contact-success" role="status">
                <span className="success-icon"><i className="success-mark"><span /></i></span>
                <h2>Thanks for reaching out.</h2>
                <p>We’ll review your {inquiryLabel.toLowerCase()} inquiry and make sure it reaches the right Glo team.</p>
                <div className="form-success-steps" aria-label="What happens next">
                  <div className="form-success-step"><span>01</span><div><strong>We review the message</strong><p>Your inquiry type and context stay together.</p></div></div>
                  <div className="form-success-step"><span>02</span><div><strong>The right team follows up</strong><p>We’ll continue the conversation from there.</p></div></div>
                </div>
                <Button onClick={reset} variant="outline" className="demo-reset">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={submit} className="demo-form contact-form">
                <div className="form-head"><span>GLO / CONTACT REQUEST</span><strong>Tell us how we can help.</strong></div>
                <div className="demo-form-progress" aria-label="Contact request routing steps">
                  <span className="is-current">Share context</span><i className="progress-rule" /><span>Choose the path</span><i className="progress-rule" /><span>Route the message</span>
                </div>

                <div className="form-stage"><span>01</span><strong>Your contact details</strong><small>Start the conversation</small></div>
                <div className="form-row">
                  <div className="form-field"><Label htmlFor="contactFirstName">First name</Label><Input id="contactFirstName" name="firstName" required autoComplete="given-name" /></div>
                  <div className="form-field"><Label htmlFor="contactLastName">Last name</Label><Input id="contactLastName" name="lastName" required autoComplete="family-name" /></div>
                </div>
                <div className="form-field"><Label htmlFor="contactEmail">Work email</Label><Input id="contactEmail" name="email" type="email" required autoComplete="email" /></div>
                <div className="form-row">
                  <div className="form-field"><Label htmlFor="contactCompany">Company <span className="field-optional">Optional</span></Label><Input id="contactCompany" name="company" autoComplete="organization" /></div>
                  <div className="form-field"><Label htmlFor="contactPhone">Phone <span className="field-optional">Optional</span></Label><Input id="contactPhone" name="phone" type="tel" autoComplete="tel" /></div>
                </div>

                <div className="form-stage"><span>02</span><strong>How can we help?</strong><small>Route the message</small></div>
                <div className="form-field">
                  <Label htmlFor="inquiryType">Inquiry type</Label>
                  <select id="inquiryType" name="inquiryType" required value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>
                    <option value="" disabled>Select one</option>
                    {inquiryOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                  </select>
                </div>
                <div className="form-field"><Label htmlFor="contactSubject">Subject</Label><Input id="contactSubject" name="subject" required /></div>
                <div className="form-field"><Label htmlFor="contactMessage">Message</Label><Textarea id="contactMessage" name="message" rows={5} required placeholder="Tell us what you need, what you’re trying to solve, or who you need to reach." /></div>
                <Button type="submit" className="glo-button w-full">Send message <span className="action-glyph">↗</span></Button>
                <div className="form-route-note contact-route-note">
                  <span className="route-node" />
                  <p>Only share the information needed for this request. Do not include sensitive personal or candidate data. <Link href="/privacy/">Review our Privacy Policy.</Link></p>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

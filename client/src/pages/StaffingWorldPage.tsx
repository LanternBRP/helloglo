/**
 * Operational Signal Desk event scheduler: an explicit three-stage request flow
 * with conference-local time selection and a transparent person-to-person handoff.
 */
import { FormEvent, useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  buildGloUpEmail,
  GLO_UP_EMAIL,
  STAFFING_WORLD_DATES,
  STAFFING_WORLD_LOGO,
  STAFFING_WORLD_TIMES,
  type StaffingWorldTime,
} from "@/lib/staffingWorld";

export default function StaffingWorldPage() {
  const [selectedDateId, setSelectedDateId] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<StaffingWorldTime | null>(null);
  const [requestLaunched, setRequestLaunched] = useState(false);
  const [emailRequestUrl, setEmailRequestUrl] = useState("");

  const selectedDate = useMemo(
    () => STAFFING_WORLD_DATES.find((date) => date.id === selectedDateId) ?? null,
    [selectedDateId],
  );

  const chooseDate = (dateId: string) => {
    setSelectedDateId(dateId);
    setSelectedTime(null);
    setRequestLaunched(false);
  };

  const chooseTime = (time: StaffingWorldTime) => {
    setSelectedTime(time);
    setRequestLaunched(false);
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const data = new FormData(event.currentTarget);
    const emailUrl = buildGloUpEmail(selectedDate, selectedTime, {
      name: String(data.get("name") ?? "").trim(),
      business: String(data.get("business") ?? "").trim(),
      title: String(data.get("title") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
    });

    setEmailRequestUrl(emailUrl);
    setRequestLaunched(true);
    window.location.href = emailUrl;
  };

  const resetRequest = () => {
    setRequestLaunched(false);
    setEmailRequestUrl("");
  };

  return (
    <div className="glo-site staffing-world-page">
      <PageMeta
        title="Schedule a Staffing World Glo Up | Glo by Lantern"
        description="Meet with Glo at Staffing World 2026. Request an October 12, 13, or 14 Glo Up conversation about AI-native staffing and recruiting software."
        path="/staffing-world-glo-up/"
      />
      <SiteHeader />
      <main className="staffing-world-main">
        <div className="container staffing-world-page-grid">
          <section className="staffing-world-intro" aria-labelledby="glo-up-title">
            <Link href="/" className="back-link"><span className="action-glyph">←</span> Back to Glo</Link>
            <img src={STAFFING_WORLD_LOGO} alt="Staffing World 2026" />
            <h1 id="glo-up-title">Attending? We are too!</h1>
            <p>Bring the staffing workflow you want to move faster. We’ll show you how Glo sees the live operating picture and prioritizes what happens next.</p>
            <div className="staffing-world-event-facts">
              <div><strong>October 12–14</strong><span>Three conference days</span></div>
              <div><strong>9:00 AM–5:00 PM</strong><span>Hourly start times</span></div>
              <div><strong>Personal confirmation</strong><span>Glo will reply directly</span></div>
            </div>
          </section>

          <section className="glo-up-scheduler" aria-labelledby="scheduler-title">
            <div className="glo-up-scheduler-head">
              <h2 id="scheduler-title">Request your meeting time.</h2>
              <p>Select a date and time. All times are shown in the conference’s local time.</p>
            </div>

            {!requestLaunched ? (
              <>
                <div className="glo-up-stage">
                  <div className="glo-up-stage-label"><span>01</span><strong>Choose a day</strong></div>
                  <div className="glo-up-date-options" role="group" aria-label="Choose a Staffing World date">
                    {STAFFING_WORLD_DATES.map((date) => (
                      <button
                        key={date.id}
                        type="button"
                        className={selectedDateId === date.id ? "is-selected" : ""}
                        onClick={() => chooseDate(date.id)}
                        aria-pressed={selectedDateId === date.id}
                      >
                        <span>{date.weekday}</span>
                        <strong>{date.day}</strong>
                        <small>{date.month}</small>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={`glo-up-stage${selectedDate ? " is-ready" : ""}`}>
                  <div className="glo-up-stage-label"><span>02</span><strong>Choose a time</strong></div>
                  {selectedDate ? (
                    <div className="glo-up-time-options" role="group" aria-label={`Choose a time on ${selectedDate.fullLabel}`}>
                      {STAFFING_WORLD_TIMES.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={selectedTime === time ? "is-selected" : ""}
                          onClick={() => chooseTime(time)}
                          aria-pressed={selectedTime === time}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="glo-up-awaiting">Choose a conference day to see the available hourly start times.</p>
                  )}
                </div>

                <div className={`glo-up-stage${selectedDate && selectedTime ? " is-ready" : ""}`}>
                  <div className="glo-up-stage-label"><span>03</span><strong>Add your information</strong></div>
                  {selectedDate && selectedTime ? (
                    <form className="glo-up-form" onSubmit={submitRequest}>
                      <div className="glo-up-selection" aria-live="polite">
                        <span>Requested time</span>
                        <strong>{selectedDate.fullLabel} at {selectedTime}</strong>
                      </div>
                      <div className="glo-up-form-grid">
                        <div className="form-field"><Label htmlFor="gloUpName">Name</Label><Input id="gloUpName" name="name" required autoComplete="name" /></div>
                        <div className="form-field"><Label htmlFor="gloUpBusiness">Business</Label><Input id="gloUpBusiness" name="business" required autoComplete="organization" /></div>
                        <div className="form-field"><Label htmlFor="gloUpTitle">Title</Label><Input id="gloUpTitle" name="title" required autoComplete="organization-title" /></div>
                        <div className="form-field"><Label htmlFor="gloUpEmail">Email</Label><Input id="gloUpEmail" name="email" type="email" required autoComplete="email" /></div>
                      </div>
                      <div className="glo-up-email-note">
                        <span aria-hidden="true" />
                        <p>Your email app will open with this request addressed to <strong>{GLO_UP_EMAIL}</strong>. Send the email, and Glo will reply personally to confirm the time.</p>
                      </div>
                      <Button type="submit" className="glo-button w-full">Request this time <span className="action-glyph">↗</span></Button>
                    </form>
                  ) : (
                    <p className="glo-up-awaiting">Select both a date and time before adding your information.</p>
                  )}
                </div>
              </>
            ) : (
              <div className="glo-up-response" role="status" aria-live="polite">
                <h2>We look forward to making your business Glo.</h2>
                <p>Your email request is ready to send. Once it reaches <strong>{GLO_UP_EMAIL}</strong>, someone from Glo will reply personally to confirm your requested time.</p>
                <div>
                  <Button asChild className="glo-button"><a href={emailRequestUrl}>Open the email again <span className="action-glyph">↗</span></a></Button>
                  <Button type="button" variant="outline" className="glo-up-reset" onClick={resetRequest}>Review the request</Button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

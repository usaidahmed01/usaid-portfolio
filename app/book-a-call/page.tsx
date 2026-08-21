import type { Metadata } from "next";
import { Footer, Header } from "../components/site-shell";
import BookingForm from "./booking-form";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Request a focused 30-minute discovery call with Usaid Ahmed about an AI product, intelligent workflow, or technical collaboration.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return <><Header /><main className="booking-page">
    <section className="booking-grid shell">
      <div className="booking-intro"><p className="kicker"><span>Book a call</span></p><h1>Thirty minutes to find the <em>right first move.</em></h1><p>Bring an AI idea, a difficult workflow, or a technical decision. We’ll clarify the useful outcome, the biggest unknown, and whether I’m the right person to help.</p><div className="call-specs"><div><span>Duration</span><strong>30 minutes</strong></div><div><span>Format</span><strong>Google Meet</strong></div><div><span>Availability</span><strong>Remote · Global</strong></div></div></div>
      <BookingForm />
    </section>
    <section className="call-agenda shell"><article><span>01</span><h2>Context</h2><p>What exists today, who the user is, and where the real friction lives.</p></article><article><span>02</span><h2>Direction</h2><p>The smallest intelligent workflow or product path worth validating first.</p></article><article><span>03</span><h2>Next move</h2><p>A clear recommendation—build, validate, narrow the scope, or involve another specialist.</p></article></section>
  </main><Footer /></>;
}

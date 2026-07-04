"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "./icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    setTimeout(() => {
      form.reset();
      setSent(false);
    }, 3200);
  };

  return (
    <form className="form-card reveal d1" onSubmit={onSubmit}>
      <h3>Leave us your details</h3>
      <p className="fs">Tell us about your requirement and our team will call you back within one working day.</p>
      <div className="f-row">
        <div className="field">
          <label htmlFor="f-name">Your Name *</label>
          <input id="f-name" name="name" type="text" placeholder="Full name" required />
        </div>
        <div className="field">
          <label htmlFor="f-org">Hospital / Company</label>
          <input id="f-org" name="organisation" type="text" placeholder="Organisation name" />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="f-phone">Phone *</label>
          <input id="f-phone" name="phone" type="tel" placeholder="+91" required />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email *</label>
          <input id="f-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="f-city">City</label>
          <input id="f-city" name="city" type="text" placeholder="City" />
        </div>
        <div className="field">
          <label htmlFor="f-req">Requirement</label>
          <select id="f-req" name="requirement">
            <option>PSA Oxygen Generator</option>
            <option>Nitrogen Generator</option>
            <option>Industrial VPSA Oxygen</option>
            <option>OxyRoom</option>
            <option>PURVECT AIR</option>
            <option>Hyperbaric Chamber</option>
            <option>Oxygen Booster</option>
            <option>Sterilizers</option>
            <option>Service / AMC / CMC</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Message</label>
        <textarea id="f-msg" name="message" placeholder="Capacity required, application, timeline…" />
      </div>
      <button type="submit" className={`btn btn-brand${sent ? " sent" : ""}`}>
        {sent ? "✓ Enquiry received — we will call you back" : <>Send Enquiry <Send /></>}
      </button>
      <p className="form-note">
        Or call our toll-free line — <b>08069068500</b>
      </p>
    </form>
  );
}

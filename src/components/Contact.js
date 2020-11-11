import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="contact-header">
        Ready to get started? Book your free fitness consultation today!
      </h2>
      <div className="contact-container">
        <div id="name-email">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            className="contact-input"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email*"
            className="contact-input"
            required
          />
        </div>
        <div id="text-input">
          <textarea
            rows="8"
            cols="120"
            id="contact-text"
            name="contact-text"
            placeholder="(Optional) Tell me more about your fitness goals"
            className="contact-input"
          />
        </div>
        <button type="submit" className="contact-input" id="submit-button">
          <strong>Submit</strong>
        </button>
      </div>
    </div>
  );
}

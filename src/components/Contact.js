import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="contact-header">
        Interested in taking the next step? Let's get connected!
      </h2>
      <div className="contact-container">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="contact-input"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="contact-input"
          required
        />
        <button type="submit" className="contact-input" id="submit-button">
          <strong>Submit</strong>
        </button>
      </div>
    </div>
  );
}

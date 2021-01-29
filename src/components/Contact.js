import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-header">
        <h2>
          Ready to get started? Book your free fitness consultation today!
        </h2>
      </div>
      <form>
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
        <textarea
          id="contact-text"
          name="contact-text"
          placeholder="(Optional) Tell me more about your fitness goals"
          className="contact-input"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

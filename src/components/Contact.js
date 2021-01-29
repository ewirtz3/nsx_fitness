import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-header">
        Ready to get started? Book your free fitness consultation today!
      </h2>
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
          rows="8"
          cols="120"
          id="contact-text"
          name="contact-text"
          placeholder="(Optional) Tell me more about your fitness goals"
          className="contact-input"
        ></textarea>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

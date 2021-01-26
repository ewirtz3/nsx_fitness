import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid">
      <div className="container">
        <h2 className="contact-header">
          Ready to get started? Book your free fitness consultation today!
        </h2>
        <form>
          <div className="form-group">
            <div id="name-email">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name*"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email*"
                className="form-control"
                required
              />
            </div>
            <div id="text-input" className="form-group">
              <textarea
                rows="8"
                cols="120"
                id="contact-text"
                name="contact-text"
                placeholder="(Optional) Tell me more about your fitness goals"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-danger" id="submit-button">
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

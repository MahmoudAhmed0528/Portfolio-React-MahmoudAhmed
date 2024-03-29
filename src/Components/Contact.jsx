import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="reach-out" className="contact">
      <div className="container">
        <div className="row">
          <h2 className="section-title mt-3">Reach Out</h2>
          {/* Contact Information  */}
          <div className="col-md-6 mt-3">
            <div className="contact-info text-left">
              <h3>Hello</h3>
              <p>Want to get into contact?</p>
              <address>
                Columbus, OH <br />
                Phone: <a href="tel:614.422.1474">614.822.1474</a>
                <br />
                Email:{" "}
                <a href="mailto:mahmoud.elbahe@gmail.com">
                  mahmoud.elbahe@gmail.com
                </a>
              </address>
              <p>
                <strong>I'd love to hear your feedback!</strong>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Contact Me</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import Navbar from "../components/navbar";

const Contact = () => {
  return (
    <div>
      <Navbar>
      <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="flex-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7236.937991021195!2d67.10471739999998!3d24.916088100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338d06a2db2b3%3A0x5171a94e1067c28d!2sBlock%2011%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1695672774368!5m2!1sen!2s"
            // width={400}
            // height={300}
            style={{ border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-fields">
          {/* Add your contact fields here */}
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
      </Navbar>
    </div>
  );
};

export default Contact;

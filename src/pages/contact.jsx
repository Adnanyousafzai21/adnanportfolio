import React from "react";
import Navbar from "../components/navbar";
import LabelInputContainer from "../components/ui/LabelInputContainer";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

const Contact = () => {
  return (
    <div>
      <Navbar>
        <div className="contact-container  bg-transparent relative z-10">
          <h2>Contact Us</h2>
          <div className="flex-container">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7236.937991021195!2d67.10471739999998!3d24.916088100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338d06a2db2b3%3A0x5171a94e1067c28d!2sBlock%2011%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1695672774368!5m2!1sen!2s"
                // width={400}
                // height={300}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <form
              className="my-8 contact-fields"
              action="https://formspree.io/f/xgeqogka"
              method="POST"
              autoComplete="off"
            >
              <LabelInputContainer className="mb-4">
                {/* <Label htmlFor="fullname">Full Name</Label> */}
                <Input
                  type="text"
                  className="focus:outline-none focus:ring-0 focus:border-transparent"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                {/* <Label htmlFor="email">Email Address</Label> */}
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                {/* <Label htmlFor="subject">Subject</Label> */}
                <Input
                  type="text"
                  className="focus:outline-none focus:ring-0 focus:border-transparent"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-8">
                {/* <Label htmlFor="message">Your Message</Label> */}
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="input" // Ensure styling is consistent for textareas
                ></textarea>
              </LabelInputContainer>

              <LabelInputContainer className="w-max">
                <Input
                  type="submit"
                  id="submit"
                  value="Send"
                  className="w-max px-20 py-2 rounded-5 bg-[#000000] text-[white]"
                   />
              </LabelInputContainer>

            </form>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Contact;

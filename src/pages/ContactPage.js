import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaLocationDot, FaWhatsapp, FaInstagram } from "react-icons/fa6";

import { FaRegClock } from "react-icons/fa";

function ContactPage() {
  const [message, setMessage] = useState("");

  const sendFeedback = () => {
    if (message.trim() === "") {
      alert("Please write your feedback first.");
      return;
    }

    alert("Thank you for your feedback!");
    setMessage("");
  };

  return (
    <>
      <Navbar />

      <div className="contact-title">
        <p>A LITTLE PAUSE. A LOT OF BLISS.</p>
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-box">
          <h2>Get In Touch</h2>

          <div className="contact-item">
            <FaLocationDot />
            <span>Location:</span> Tyre, near LIU
          </div>

          <div className="contact-item">
            <FaWhatsapp />
            <span>WhatsApp:</span> +961 70 000 000
          </div>

          <div className="contact-item">
            <FaInstagram />
            <span>Instagram:</span> @blisscafe.lb
          </div>

          <div className="contact-item">
            <FaRegClock />
            <span>Working Hours:</span>
            <p>Mon - Thu: 9:00am - 11:00 pm</p>
            <p>Fri - Sun: 10:00am - 12:00 am</p>
          </div>

          <div className="feedback">
            <h3>Send Us Your Feedback</h3>
            <p>Your opinion matters to us!</p>

            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="submit-btn" onClick={sendFeedback}>
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;

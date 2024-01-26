import React, { useRef } from "react";
import "./contact.css";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import emailjs from "@emailjs/browser";
import cuteEmoji from "../../assets/cuteEmoji.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vyves1a",
        "template_im3e5g3",
        form.current,
        "3Z_M0eMvun5FyRUCI"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section className="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">
            {" "}
            Contact Me <img src={cuteEmoji} alt="" className="contactImg" />
          </h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
            Thank you...
          </span>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="to_name"
              required
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
              required
            />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>

            <div className="links">
              <a href="https://github.com/queencyril" target="blank">
                {" "}
                <img src={github} alt="" className="link" />{" "}
              </a>
              <a href="https://www.instagram.com/_queencyril_/" target="blank">
                <img src={instagram} alt="" className="link" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076695634774"
                target="blank"
              >
                {" "}
                <img src={facebook} alt="" className="link" />{" "}
              </a>
              <a href="https://linkedin.com/in/queencyril" target="blank">
                <img src={linkedin} alt="" className="link" />
              </a>
              <a href="https://twitter.com/_queencyril" target="blank">
                <img src={twitter} alt="" className="link" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

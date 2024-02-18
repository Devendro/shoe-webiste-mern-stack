import React from "react";
import "./style.css";

export default function Contact() {
  const ulStyle = { border: "0" };
  return (
    <>
      <section id="page-header" className="contact-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <p>Office No 403, Linking Road, Bandra West, Mumbai - 400050</p>
            </li>
            <li>
              <i className="fal fa-envelope"></i>
              <p>contact@shoeniverse.com</p>
            </li>
            <li>
              <i className="fal fa-phone-alt"></i>
              <p>contact@shoeniverse.com</p>
            </li>
            <li>
              <i className="fal fa-clock"></i>
              <p>Monday to Saturday: 9:00 am to 10:00 pm </p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.6843953261!2d72.81210169001328!3d19.05447822034455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x437996b49a236a78!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642936157508!5m2!1sen!2sin"
            width="600"
            height="450"
            style={ulStyle}
            allowFullScreen=""
            loading="lazy"
            title="screen"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" />
            <p>
              <span>Janvi Mehta</span>Senior Marketing Manager <br /> Phone:
              +91 12345679895 <br />
              Email: jm@shoeniverse.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

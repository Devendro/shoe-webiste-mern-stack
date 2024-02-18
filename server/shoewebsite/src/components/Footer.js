import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.jpeg";
import "./style.css";

import pay from "./img/pay/pay.jpeg";

export default function Footer() {
  return (
    <>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters!</h4>
          <p>
            Get E-mail updates about our latest shop &{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src={logo} alt="" height="70px" width="70px" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> Shoeniverse Shoe Shop, Bandra West,
            Mumbai
          </p>
          <p>
            <strong>Phone: </strong> (+91) 9876543210 / 8765923401
          </p>
          <p>
            <strong>Hours: </strong> 9:00am - 10:pm Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow us!</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <Link to="#">About us</Link>
          <Link to="#">Delivery Information</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Contact Us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to="#">Sign In</Link>
          <Link to="#">View Cart</Link>
          <Link to="#">My Wishlist</Link>
          <Link to="#">Track My Order</Link>
          <Link to="#">Help</Link>
        </div>

        <div className="col install">
          
          <div className="row">
            
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay} alt="" height="80px" />
        </div>

        <div className="copyright">
          <p>&copy; 2022 - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import "./style.css";
import f1 from "./img/features/f1.jpeg";
import f2 from "./img/features/f2.jpeg";
import f3 from "./img/features/f3.jpeg";
import f4 from "./img/features/f4.jpeg";
import f6 from "./img/features/f6.jpeg";

export default function Feature() {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={f1} alt="" height="150px" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={f2} alt="" height="150px" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={f3} alt="" height="150px" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={f4} alt="" height="150px" />
        <h6>Promotions</h6>
      </div>

      <div className="fe-box">
        <img src={f6} alt="" height="150px" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
  );
}

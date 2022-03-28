import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import videos from "./img/about/1.mp4";
import a6 from "./img/about/a6.jpg";
import f1 from "./img/features/f1.jpeg";
import f2 from "./img/features/f2.jpeg";
import f3 from "./img/features/f3.jpeg";
import f4 from "./img/features/f4.jpeg";
import f6 from "./img/features/f6.jpeg";

export default function About() {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Get to Know Our Feature Products,We Provide High Quality Shoes!</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={a6} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Here at 'Shoeniverse.com', we realize that style and prosperity
            begin with the correct shoes. We likewise understand that
            effectively finding the size and style to meet your requirements is
            vital to your web-based shopping knowledge. Since beginning our
            web-based business website in 2021, We have been endeavoring to
            present to you that perfect shopping experience.
          </p>

          <abbr title="">
            let ‘Shoeniverse’.com enable you to make progress toward your
            objective.We take a stab at 100% consumer loyalty, offer a 105%
            value coordinate guarantee and additionally free delivery and
            returns.
          </abbr>

          <br />
          <br />
          {/* <div class="marquee">
            <div className="marqueetext">let ‘Shoeniverse’.com enable you to make progress toward your
            objective. We take a stab at 100% consumer loyalty, offer a 105%
            value coordinate guarantee and additionally free delivery and
            returns.</div>
          </div> */}
          {/* <marquee bgcolor="#5f9ea0" loop="-1" scrollamount="5" width="100%">
            let ‘Shoeniverse’.com enable you to make progress toward your
            objective. We take a stab at 100% consumer loyalty, offer a 105%
            value coordinate guarantee and additionally free delivery and
            returns.
          </marquee> */}
        </div>
      </section>

      <section id="about-app" className="section-p1s">
        <h1 style={{color:"#fff",border:"1px solid black",padding:"15px",margin:"0px 20rem",borderRadius:"5rem"}}>

          CHECKOUT OUR COLLECTION
        </h1>
        <div className="video">
          <video autoplay muted loop src={videos}></video>
        </div>
      </section>

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
    </div>
  );
}

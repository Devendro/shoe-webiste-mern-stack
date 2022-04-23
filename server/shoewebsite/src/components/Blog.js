import React from "react";
import { Link } from "react-router-dom";
import b1 from "./img/blog/b1.jpg";
import b2 from "./img/blog/b2.jpeg";
import b3 from "./img/blog/b3.jpeg";
import b4 from "./img/blog/b4.jpeg";
import b5 from "./img/blog/b5.jpeg";







export default function Blog() {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={b1} alt="" />
          </div>
          <div className="blog-details">
            <h4>SNIPES - NIKE Shoes.</h4>
            <p>
              A pair of Nike makes perfect flexibility. Nike shoes comes with a
              herringbone pattern and a solid rubber.
            </p>
            <Link to="#">CONTINUE READING</Link>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={b2} alt="" />
          </div>
          <div className="blog-details">
            <h4>Stylish High Heel Ankle Leather Boots.</h4>
            <p>
              Ankle boots were made of fragile materials such as silk and satin
              originally, although leather ankle boots were also becoming more
              fashionable.
            </p>
            <Link to="/blog">CONTINUE READING</Link>
          </div>
          <h1>12/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={b3} alt="" />
          </div>
          <div className="blog-details">
            <h4>CL Legacy AZ Reebok Shoes.</h4>
            <p>
              Complete Mesh PU Upper. Perforated PU panels at the forefoot for
              comfort and easy movement.
            </p>
            <Link to="#">CONTINUE READING</Link>
          </div>
          <h1>16/04</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={b4} alt="" />
          </div>
          <div className="blog-details">
            <h4> THE OLD SKOOL- Vans Sneakers.</h4>
            <p>
              {" "}
              THE OLD SKOOL APPEARED ON THE SCENE IN 1978, AND WAS THE FIRST
              SHOE TO FEATURE THE NOW ICONIC SIDESTRIPE. DRAWN BY COMPANY
              FOUNDER PAUL VAN DOREN AND ORIGINALLY DUBBED THE “JAZZ STRIPE,”
              THE SIDESTRIPE IS VANS’ MOST ENDURING EMBLEM OF CREATIVITY.
            </p>
            <Link to="#">CONTINUE READING</Link>
          </div>
          <h1>11/02</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={b5} alt="" />
          </div>
          <div className="blog-details">
            <h4>Truffle Collection Nude Wedge.</h4>
            <p>
              Truffle Presents to you Elegant and Quality Footwear Women's just
              like an Art.Made from best quality material which is duarable &
              comfortable to wear.
            </p>
            <Link to="#">CONTINUE READING</Link>
          </div>
          <h1>10/03</h1>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <Link to="#">1{''}</Link>

        <Link to="#">2</Link>
        
        <Link to="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </Link>
      </section>
    </div>
  );
}

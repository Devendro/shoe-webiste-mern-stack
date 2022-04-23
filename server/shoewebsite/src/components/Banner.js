import React from "react";
import "./style.css";

export default function Banner() {
  return (
    <section id="banner" className=".section-m1">
      <h4>Assured Products</h4>
      <h2>
        Up to <span>30% Off</span> - On All the Shoe Brands!
      </h2>
      <button className="normal">Explore More</button>
    </section>
  );
}

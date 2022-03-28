import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Products({ product }) {
  return (
    <div className="pro">
      <img src={product.img[0].url} alt="" height="200px" />
      <div className="des">
        <span>{product.brandName}</span>
        <h5>{product.productName}</h5>
        <h4>{product.price}</h4>
      </div>
      <Link to={`/product/${product._id}`}>
        <i className="fal fa-shopping-cart cart"></i>
      </Link>
    </div>
  );
}

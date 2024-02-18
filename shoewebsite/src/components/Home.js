import React, { useEffect } from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Feature from "./Feature";
import NewArrival from "./NewArrival";
import OtherBanner from "./OtherBanner";
import Products from "./Products";
import "./style.css";
import { getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { loading, error, products } = useSelector((state) => state.products);
  return (
    <div>
      <Hero />
      <Feature />

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Sports & Casual Shoes!</p>
        <div className="pro-container">
          {products &&
            products.map((product) =>
              <Products key={product._id} product={product} />
              // console.log(product)
            )}
        </div>
      </section>

      <Banner />
      <NewArrival />
      <OtherBanner />
    </div>
  );
}

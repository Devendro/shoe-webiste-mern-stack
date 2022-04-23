import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { loading, error, products } = useSelector((state) => state.products);
  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="pro-container">
          {products &&
            products.map(
              (product) => <Products key={product._id} product={product} />

              // console.log(product)
            )}
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </Link>
      </section>
    </>
  );
}

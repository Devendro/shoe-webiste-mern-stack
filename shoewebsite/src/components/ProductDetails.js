import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.css";
import { getProductDetails } from "../actions/productAction";
import { useParams, Link } from "react-router-dom";
import { addItemsToCart } from "../actions/cartAction";
import { $CombinedState } from "redux";

export default function ProductDetails() {
  const quantity = 1;
  const id = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id.id));
  }, [dispatch, id.id]);
  console.log(id.id);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id.id, quantity));
  };
  return (
    <>
      <div className="container">
        <div
          className="d-flex flex-row px-5 shadow-lg p-3 my-1 bg-body rounded"
          style={{  borderRadius: "10px" }}
        >
          <div class="images">
            {product.img && <img src={product.img[0].url} height="450" />}
          </div>
          <div class="slideshow-buttons">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="product">
            <p>{product.brandName}</p>
            <h1 style={{ paddingBottom: "15px", fontWeight: "bold" }}>
              {product.productName}
            </h1>
            <h2>Rs. {product.price} /-</h2>
            <p class="desc">{product.description}</p>
            <div class="buttons">
              <button class="add" onClick={addToCartHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

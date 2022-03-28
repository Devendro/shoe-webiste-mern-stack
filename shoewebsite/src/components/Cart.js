import React from "react";
import CartItem from "./CartItem";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const checkoutHandler = () => {
    console.log("working");
    navigate("/login?redirect=shipping");
  };
  return (
    <>
      <section id="page-header" className="cart-header">
        <h2>#cart</h2>
        <p>Add your coupon code & SAVE upto 70%!</p>
      </section>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>SUBTOTAL</td>
            </tr>

            {cartItems && cartItems.map((item) => <CartItem item={item} />)}
          </thead>
        </table>
        <button
          className="btn btn-success"
          style={{
            width: "300px",
            margin: "50px",
            float: "right",
            top: "-40px",
          }}
          onClick={checkoutHandler}
        >
          Check Out
        </button>
      </section>
    </>
  );
};

export default Cart;

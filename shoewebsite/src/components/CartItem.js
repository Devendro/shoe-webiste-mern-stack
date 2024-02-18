import React, { useState, useEffect } from "react";
import "./style.css";
import { removeItemsFromCart } from "../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [price, setprice] = useState(item.price);
  const [quantity, setquantity] = useState(1);

  const increment = () => {
    setquantity(quantity + 1);
  };
  const decrement = () => {
    setquantity(quantity - 1);
    if (quantity <= 0) {
      setquantity(0);
    }
  };
  useEffect(() => {
    setprice(quantity * item.price);
  }, [quantity]);

  const removeItem = (e) => {
    dispatch(removeItemsFromCart(e.currentTarget.id));
  };

  return (
    <>
      <tr>
        <td>
          <i
            id={item.product}
            className="far fa-times-circle"
            style={{ color: "blue" }}
            onClick={removeItem}
          ></i>
        </td>
        <td>
          <img src={item.image} alt="" />
        </td>
        <td>{item.name}</td>
        <td>Rs. {item.price}</td>
        <td>
          <button
            style={{
              color: "black",
              background: "none",
              fontSize: "19px",
              padding: "5px 20px 0px 25px",
            }}
            onClick={increment}
          >
            +
          </button>
          {quantity}
          <button
            style={{
              color: "black",
              background: "none",
              fontSize: "25px",
              padding: "0px 20px",
            }}
            onClick={decrement}
          >
            -
          </button>
        </td>
        <td id="total">{price}/-</td>
      </tr>
    </>
  );
}

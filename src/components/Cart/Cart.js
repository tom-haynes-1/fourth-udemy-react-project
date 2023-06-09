import React from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [
    {
      id: "1",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ].map((item) => <li>{ item.name }</li>);

  return (
    <Modal onCloseCart={ props.onCloseCart }>
      <ul className={ classes["cart-items"] }>
        { cartItems }
      </ul>
      <div className={ classes.total }>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={ classes.actions }>
        <button className={ classes["button--alt"] } onClick={ props.onCloseCart }>
            Close
        </button>
        <button className={ classes.button }>
            Place Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
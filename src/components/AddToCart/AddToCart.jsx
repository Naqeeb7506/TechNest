import React, { useState } from "react";
import "./addtocart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="add-to-cart">
      <div className="colors">
        <p>Colors :</p>
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ background: curColor }}
              className={color === curColor ? "active" : ""}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? "✓" : ""}
            </button>
          );
        })}
      </div>
      <div className="counter">
        <i class="fa-solid fa-minus" onClick={() => decrement()}></i>
        <span>{amount}</span>
        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
      </div>

      <Link
        className="add-to-cart-btn"
        to={"/cart"}
        onClick={() => addToCart(id, color, amount, product)}
      >
        Add To Cart
      </Link>
    </div>
  );
};

export default AddToCart;

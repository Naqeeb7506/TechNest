import React, { useState } from "react";
import "../../assets/css/cart.css";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../../Context/cartContext";

const CartItem = ({ id, name, image, color, price, amount, max }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <tr>
      <th scope="row ">
        <div className="item-image">
          <img src={image} alt={id} />
        </div>
        <div className="item-content">
          <p>{name}</p>
          <p className="d-flex align-items-center gap-2">
            Color: <span style={{ background: color }}></span>
          </p>
        </div>
      </th>
      <td className="price">
        <FormatPrice price={price} />
      </td>
      <td>
        <div className="counter">
          <i className="fa-solid fa-minus" onClick={() => setDecrease(id)}></i>
          <span>{amount}</span>
          <i className="fa-solid fa-plus" onClick={() => setIncrease(id)}></i>
        </div>
      </td>
      <td className="price">
        <FormatPrice price={price * amount} />
      </td>
      <td className="price">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeItem(id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

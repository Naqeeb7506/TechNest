import React from "react";
import { useCartContext } from "../Context/cartContext";
import "../assets/css/cart.css";
import CartItem from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import FormatPrice from "../components/Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="container text-center  no-item d-flex justify-content-center align-items-center">
        <h3>No Item In Cart</h3>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <div className="table-responsive mb-4">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((curElem) => {
                return <CartItem key={curElem.id} {...curElem} />;
              })}
            </tbody>
          </table>
        </div>

        <div className="btns">
          <Link to="/products" className="shopping btn btn-primary">
            Continue Shopping
          </Link>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="total-container">
          <div className="sub-total">
            <div className="total d-flex ">
              <p> Total:</p>
              <FormatPrice price={total_price} />
            </div>
            <div className="shipping d-flex py-2">
              <p>Shipping Fees:</p>
              <FormatPrice price={shipping_fee} />
            </div>
            <div className="all d-flex ">
              <p>Order Total:</p>
              <FormatPrice price={total_price + shipping_fee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

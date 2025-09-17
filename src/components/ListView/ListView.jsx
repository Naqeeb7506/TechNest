import React from "react";
import Product from "../Product/Product";
import "./list-view.css";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListView = ({ products }) => {
  return (
    <div className="list-view">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div className="list-products" key={id}>
            <div className="list-product-img">
              <img src={image} alt={name} />
            </div>
            <div className="list-product-details">
              <h3>{name}</h3>
              <p>{description.slice(0, 150)}...</p>
              <p className="price">
                <FormatPrice price={price} />
              </p>
              <Link to={`/singleproduct/${id}`}>
                <button className="add-btn">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;

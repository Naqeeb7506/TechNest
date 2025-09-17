import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (item) => {
  const { id, name, image, price, category } = item;

  // console.log(image);
  return (
    <Link to={`/singleproduct/${id}`} className="card-link">
      <div className="card-box">
        <div className="card-img">
          <img src={image} alt="name" />
          <span>{category}</span>
        </div>
        <div className="card-details">
          <p>{name}</p>
          <p className="price">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;

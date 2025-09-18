import React from "react";
import Product from "../Product/Product";
import "./gridview.css";
const GridView = ({ products }) => {
  // console.log(products);

  return (
    <div className="grid-view">
      {products.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </div>
  );
};

export default GridView;

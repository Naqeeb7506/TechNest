import React from "react";
import Filters from "../components/Filters/Filters";
import Sort from "../components/Sort/Sort";
import ProductList from "../components/ProductList/ProductList";
import "../assets/css/product.css";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="filters">
          <Filters />
        </div>
        <div className="productList">
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;

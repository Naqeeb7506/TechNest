import React from "react";
import "./sort.css";
import { useFilterContext } from "../../Context/filterContext";
const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();
  return (
    <div className="sort-section">
      <div className="sort-buttons ">
        <button className={grid_view ? "btn-active" : ""} onClick={setGridView}>
          <i className="fa-solid fa-grip"></i>
        </button>
        <button
          className={!grid_view ? "btn-active" : ""}
          onClick={setListView}
        >
          <i className="fa-solid fa-list"></i>
        </button>
      </div>
      <div className="product-avail">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>
      <div className="sort-dropdown">
        <form action="#">
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price (Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price (Highest)</option>
            <option value="#" disabled></option>
            <option value="aTOz">Products (a-z)</option>
            <option value="#" disabled></option>
            <option value="zTOa">Products (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;

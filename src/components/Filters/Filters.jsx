import React from "react";
import { useFilterContext } from "../../Context/filterContext";
import "./filter.css";
import FormatPrice from "../Helpers/FormatPrice";

const Filters = () => {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // to get unique data of categories
  const getUniqueData = (data, property) => {
    let newData = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      // return (newData = ["All", ...new Set([].concat(...newData))]);
      newData = newData.flat();
    }
    return (newData = ["all", ...new Set(newData)]);

    // console.log(newData);
  };
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log(colorsData);

  return (
    <div className="filters">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
            className="filter-search-input"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div className="filter-category-list">
          {categoryData.map((curElem, id) => {
            return (
              <button
                key={id}
                name="category"
                onClick={updateFilterValue}
                value={curElem}
                className={category === curElem ? "active" : ""}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company-select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, id) => {
              return (
                <option key={id} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          id="price"
          value={price}
          max={maxPrice}
          min={minPrice}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;

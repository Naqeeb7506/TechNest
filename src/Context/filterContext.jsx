import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import { filter } from "framer-motion/client";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initailState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: { text: "", category: "all", company: "all", color: "all" },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initailState);

  // grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "SORTING_PRODUCTS", payload: userValue });
  };

  // to clear filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // to filter products
  useEffect(() => {
    dispatch({ type: "UPDATE_PRODUCTS" });
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // update filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // console.log(name, value);

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

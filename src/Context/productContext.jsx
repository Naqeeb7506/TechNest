// STEP 1: Create a Context
// STEP 2: Create a Provider
// STEP 3: Create a Consumer (useContext Hook)

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContent = createContext();

const API_Url = "https://68ad6c85a0b85b2f2cf34885.mockapi.io/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products);

      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // single product function
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      // console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API_Url);
  }, []);
  return (
    <AppContent.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContent.Provider>
  );
};

// custom Hook
const useProductContext = () => {
  return useContext(AppContent);
};

export { AppProvider, AppContent, useProductContext };

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../Context/productContext";
import "../assets/css/singleproduct.css";
import FormatPrice from "../components/Helpers/FormatPrice";
import Star from "../components/stars/Star";
import AddToCart from "../components/AddToCart/AddToCart";

const API = "https://68ad6c85a0b85b2f2cf34885.mockapi.io/api/products";

const Singleproduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();

  // console.log(singleProduct);
  const { id } = useParams();
  // console.log(id);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    reviews,
    stars,
    stock,
    image,
  } = singleProduct;

  console.log(name);
  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="singleProduct">
      <div className="container">
        <div className="back-link py-5">
          <Link to="/">Home</Link>/{name}
        </div>
        <div className="single-product-details">
          <div className="img-box">
            <img src={image} alt={name} />
          </div>
          <div className="product-details">
            <h3>{name}</h3>
            <div className="stars d-flex align-items-center gap-3">
              <Star stars={stars} />
              <p>({reviews} reviews)</p>
            </div>
            <p>
              <b>
                MRP:{" "}
                <del>
                  <FormatPrice price={price + 2500000} />
                </del>
              </b>
            </p>
            <p style={{ color: "var(--blue)", fontWeight: "bold" }}>
              Deal of the Day: {<FormatPrice price={price} />}
            </p>
            <p style={{ fontSize: "14px" }}>{description}</p>
            <p>
              Brand: <b>{company}</b>
            </p>
            <p>
              Available: <b>{stock}</b>
            </p>
            <div className="facilities">
              <div className="delivery">
                <i class="fa-regular fa-truck"></i>
                <p>Free Delivery</p>
              </div>
              <div className="replace">
                <i class="fa-solid fa-arrows-rotate"></i>
                <p>30 Days Replacement</p>
              </div>
              <div className="waranty">
                <i class="fa-solid fa-shield-halved"></i>
                <p>2 Years Waranty</p>
              </div>
            </div>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;

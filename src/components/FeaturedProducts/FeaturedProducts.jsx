import { useProductContext } from "../../Context/productContext";
import Product from "../Product/Product";
import "./featuredProducts.css";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  console.log(featureProducts);

  if (isLoading) {
    return (
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="feature">
      <div className="container">
        <p>Check now!</p>
        <h3>Our Feature Products</h3>

        <div className="feature-products">
          {featureProducts.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

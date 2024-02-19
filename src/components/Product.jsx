import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [product, setProduct] = useState({
    name: "Product",
    price: 100,
    description: "This is a product",
  });
  const navigate = useNavigate();
  const onAddtoCart = () => {

   
    navigate("/cart", { state: {item:product} });
  };

  return (
    <div
      style={{
        width: "100wv",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          gap: "10px",
        }}
      >
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button
          onClick={() => {
            onAddtoCart();
          }}
          style={{
            borderRadius: "20px",
            padding: "5px",
            backgroundColor: "pink",
          }}
        >
          🛒 Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

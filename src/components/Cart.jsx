import React from "react";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();

  const { name, price, description } = location.state.item;
  console.log("this is loc", location.state);

  return (
    <div
      style={{
        width: "100vw",
        height: "300px",
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Cart 🛒</h1>
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <button
          onClick={() => {
            alert("Product has been added to the shipped");
          }}
          style={{
            borderRadius: "20px",
            padding: "5px",
            backgroundColor: "pink",
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import "./emptyCart.css";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img
        src="https://img.freepik.com/premium-vector/realistic-empty-supermarket-shopping-cart-isolated-white_53562-6809.jpg?w=2000"
        alt="empty-cart"
      />
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-arrow-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;

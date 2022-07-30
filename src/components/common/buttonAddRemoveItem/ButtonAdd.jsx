import React from "react";
import "./buttonAdd.css";
const ButtonAdd = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-positive">
          <i class="fa-solid fa-minus" onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i class="fa-solid fa-plus" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i class="fa-solid fa-plus"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAdd;

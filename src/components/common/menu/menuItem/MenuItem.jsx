import React from "react";
import ButtonAdd from "../../buttonAddRemoveItem/ButtonAdd";
import "./menuitem.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
} from "./../../../../redux/cart/cart.selector";
import { cartAddItem, cartRemoveItem } from "../../../../redux/cart/cartAction";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, name, info, price, img } = item;

  const handlerItemQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);

      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item_head_desc">
        <p className="head_desc_name">{name}</p>
        <p className="head_desc_info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item_food_desc">
        <span className="food_desc_price">
          <i class="fa-solid fa-indian-rupee-sign"></i> {price}
        </span>
        <ButtonAdd
          quantity={handlerItemQuantity()}
          handleAddItem={() => cartAddItem(item)}
          handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

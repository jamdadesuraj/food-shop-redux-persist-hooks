import React from "react";
import { createStructuredSelector } from "reselect";
import EmptyCart from "../../components/cart/emptyCart/EmptyCart";
import Footer from "../../components/common/footer/Footer";
import Logo from "../../components/common/logo/Logo";

import Menu from "../../components/common/menu/Menu";
import "./cart.css";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "./../../redux/cart/cart.selector";
import { connect } from "react-redux";

const Cart = ({ cartCount, cartList, cartTotal }) => (
  <>
    <div className="container">
      <div className="cart-header container">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders container">
          <h1 className="order-heading">Yours Orders Cart Items</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="order-totals">Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);

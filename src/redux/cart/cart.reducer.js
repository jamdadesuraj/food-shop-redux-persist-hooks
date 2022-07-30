import { cartActionsType } from "./cart.actionType";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionsType.CART_ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionsType.CART_REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;

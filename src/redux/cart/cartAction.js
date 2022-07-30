import { cartActionsType } from "./cart.actionType";

export const cartAddItem = (item) => ({
  type: cartActionsType.CART_ADD_ITEMS,
  payload: item,
});

export const cartRemoveItem = (item) => ({
  type: cartActionsType.CART_REMOVE_ITEMS,
  payload: item,
});

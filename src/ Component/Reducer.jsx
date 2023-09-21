import CartData from "../CartData";
import { INCREASE, DECREASE, RESET_CART, GET_TOTAL } from "../action";
const initialStore = {
  cartItemDetails: CartData,
  total: 0,
  cartItemCount: 3,
};

export const Reducer = (state = initialStore, action) => {
  if (action.type === RESET_CART) {
    console.log("call to reset cart");
    return { ...state, cartItemDetails: [], total: 0 };
  }

  if ((action.type = GET_TOTAL)) {
    let newTotal = 0;
    state.cartItemDetails.map((cartItem) => {
      newTotal += cartItem.quantity * cartItem.price;
    });
    const updatedTotal = parseFloat(newTotal.toFixed(2));
    return { ...state, total: updatedTotal };
  }

  if (action.type === INCREASE) {
    console.log("in increase we are");
    // const id = action.payload.id;
    // console.log("id from payload " + id);
    // let oldTotal = state.total;
    // const updatedCartItemDetails = state.map((cartItem) => {
    //   if (cartItem.id == id) {
    //     let updatedQuantity = cartItem.quantity + 1;
    //     oldTotal += cartItem.price;
    //     return { cartItem, quantity: updatedQuantity };
    //   }
    //   return cartItem;
    // });

    // return {
    //   ...state,
    //   cartItemDetails: updatedCartItemDetails,
    //   total: oldTotal,
    // };
    return state;
  }

  if (action.type === DECREASE) {
    console.log("call from decrease");
    return { ...state };
  }

  return state;
};

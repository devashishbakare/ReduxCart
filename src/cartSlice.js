import { createSlice } from "@reduxjs/toolkit";
import CartData from "./CartData";
const cartSlice = createSlice({
  name: "reduxCart",
  initialState: {
    cartDetails: CartData,
    total: 59.97,
    cartItemCount: 3,
  },
  reducers: {
    getTotal: (state, action) => {},
    getCartItemCount: (state, action) => {
      return state.cartItemCount;
    },
    increase: (state, action) => {
      console.log(action.payload + " payload");
      let id = action.payload;
      state.cartDetails.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      console.log("is it updated");
      state.cartDetails.map((cartItem) => {
        console.log(cartItem.quantity);
      });
    },
    decrease: (state, action) => {},
  },
});

export const { getTotal, getCartItemCount, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;

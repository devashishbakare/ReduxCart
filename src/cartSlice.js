import { createSlice } from "@reduxjs/toolkit";
import CartData from "./CartData";
import { BsUiChecksGrid } from "react-icons/bs";
const cartSlice = createSlice({
  name: "reduxCart",
  initialState: {
    cartDetails: CartData,
    total: 59.97,
    cartItemCount: 3,
  },
  reducers: {
    increase: (state, action) => {
      const id = action.payload;
      console.log(id + " id");
      let localId = 0,
        count = 0;
      state.cartDetails = state.cartDetails.map((item) => {
        if (item.id === id) {
          localId = count;
          return { ...item, quantity: item.quantity + 1 };
        }
        count++;
        return item;
      });

      let newTotal = state.total;
      console.log("price " + state.cartDetails[localId].price);
      newTotal += state.cartDetails[localId].price;
      state.total = parseFloat(newTotal.toFixed(2));
    },
    decrease: (state, action) => {
      let id = action.payload;
      let data = {};
      let cartItemObjectId = 0;
      state.cartDetails.map((item, index) => {
        if (item.id === id) {
          data = item;
          cartItemObjectId = index;
        }
        return item;
      });

      if (data.quantity === 1) {
        state.cartDetails = state.cartDetails.filter((item) => item.id !== id);
        let updateTotal = state.total - data.price * data.quantity;
        state.total = parseFloat(updateTotal.toFixed(2));
        state.cartItemCount = state.cartItemCount - 1;
      } else {
        data.quantity = data.quantity - 1;
        state.cartDetails = state.cartDetails.map((item) => {
          if (item.id === id) {
            return data;
          }
          return item;
        });
        let updateTotal = state.total - data.price;
        state.total = parseFloat(updateTotal.toFixed(2));
      }
    },
    removeAll: (state, action) => {
      state.cartDetails = {};
      state.total = 0;
      state.cartItemCount = 0;
    },
  },
});

export const { getTotal, increase, decrease, removeAll } = cartSlice.actions;
export default cartSlice.reducer;

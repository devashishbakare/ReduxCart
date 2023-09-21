import React from "react";

import CartItem from "./CartItem";
import { connect } from "react-redux";
import { RESET_CART, GET_TOTAL } from "../action";
import { useEffect } from "react";
const Cart = ({ cartItemDetails = [], total, dispatch }) => {
  console.log("cart data here " + cartItemDetails);
  useEffect(() => {
    const updateComponentState = () => {
      dispatch({ type: GET_TOTAL });
    };
    updateComponentState();
  }, [cartItemDetails, dispatch]);
  return (
    <>
      <div className="h-full w-full bg-[#e9ebe9] flex flex-col relative">
        <div className="h-[6%] min-h-[54px] w-full flex">
          <span className="h-full w-[70%] flex items-center pl-[5%] font-semibold">
            Shopping Cart
          </span>
          <span className="h-full w-[30%] centerDiv text-[15px] ">
            <span
              className="border-2 border-b-red-400 text-[#dc3a3a]"
              onClick={() => dispatch({ type: RESET_CART })}
            >
              Remove All
            </span>
          </span>
        </div>
        <div className="h-auto w-auto max-w-[600px] centerDiv flex-col sm:ml-5">
          <>
            {cartItemDetails.map((cartSingleItem) => (
              <>
                <CartItem
                  cartItemData={cartSingleItem}
                  key={cartSingleItem.id}
                />
              </>
            ))}
          </>
        </div>
        <div className="absolute bottom-[1%] h-[7%] w-full min-h-[63px] flex">
          <div className="h-full w-[55%] flex items-center pl-[5%]">
            Total : $ {total}
          </div>
          <div className="h-full w-[45%] flex flex-row-reverse items-center">
            <button className="h-[80%] w-[100px] bg-black rounded-[15px] text-white mr-2 md:mr-[10%]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (store) => {
  const { cartItemDetails, total } = store;
  // console.log("from mapstate " + cartItemDetails.id);
  console.log(cartItemDetails[0].id + " parent Component " + total);
  return { cartItemDetails, total };
};
export default connect(mapStateToProps)(Cart);

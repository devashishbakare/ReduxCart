import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
export const Navbar = () => {
  const cartCount = useSelector((state) => state.reduxCart.cartItemCount);

  return (
    <>
      <div className="h-full w-full bg-[#e9ebe9] flex">
        <div className="h-full w-[75%] centerDiv pl-[15%] font-semibold text-[1.2rem]">
          ReduxCart
        </div>
        <div className="h-full w-[25%] border-2 flex flex-row-reverse">
          <div className="h-full w-[80px] mr-2 centerDiv relative">
            <BsCart className="text-[25px]" />
            <div className="absolute top-[15%] right-[20%] h-[22px] w-[22px] rounded-[50%] bg-black text-white centerDiv">
              {cartCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

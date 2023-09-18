import React from "react";
import { BsCart } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <div className="h-full w-full bg-[#e9ebe9] flex">
        <div className="h-full w-[75%] border-2 border-red-700 centerDiv pl-[15%] font-semibold text-[1.2rem]">
          ReduxCart
        </div>
        <div className="h-full w-[25%] border-2 flex flex-row-reverse">
          <div className="h-full w-[80px] border-2 border-red-700 mr-2 centerDiv relative">
            <BsCart className="text-[25px]" />
            <div className="absolute top-[15%] right-[20%] h-[22px] w-[22px] rounded-[50%] bg-black text-white centerDiv">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

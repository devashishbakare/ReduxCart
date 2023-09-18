import React from "react";

export const Cart = () => {
  return (
    <>
      <div className="h-full w-full bg-[#e9ebe9] flex flex-col relative">
        <div className="h-[6%] min-h-[54px] w-full border-2 border-red-800 flex">
          <span className="h-full w-[70%] border-2 border-red-700 flex items-center pl-[5%] font-semibold">
            Shopping Cart
          </span>
          <span className="h-full w-[30%] border-2 border-red-700 centerDiv text-[15px] ">
            <span className="border-2 border-b-red-400 text-[#dc3a3a]">
              Remove All
            </span>
          </span>
        </div>
        <div className="absolute bottom-[1%] h-[7%] w-full min-h-[63px] border-2 border-red-800 flex">
          <div className="h-full w-[55%] border-2 border-red-700 flex items-center pl-[5%]">
            Total : $ 0
          </div>
          <div className="h-full w-[45%] border-2 border-red-700 flex flex-row-reverse items-center">
            <button className="h-[80%] w-[100px] bg-black rounded-[15px] text-white mr-1 md:mr-[10%]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

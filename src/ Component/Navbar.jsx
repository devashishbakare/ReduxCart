import React from "react";
import { BsCart } from "react-icons/bs";
import { connect } from "react-redux";

const Navbar = ({ cartItemCount }) => {
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
              {cartItemCount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (store) => {
  const cartItemCount = store.cartItemCount;

  return { cartItemCount };
};

export default connect(mapStateToProps)(Navbar);

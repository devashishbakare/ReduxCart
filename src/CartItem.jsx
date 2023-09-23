import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { increase, decrease } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const CartItem = ({ cartItemData }) => {
  const { id, title, price, img } = cartItemData;

  console.log("rendered.." + id);
  const [quantity, setQuantity] = useState(cartItemData.quantity);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increase(id));
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    dispatch(decrease(id));
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="h-[150px] w-[95vw] flex mt-2 border-2 border-gray-400 max-w-[700px]">
        <div className="h-full w-[50%] centerDiv">
          <img
            src={img}
            alt="cartItemImage"
            className="h-full min-w-[150px] object-cover"
          />
        </div>
        <div className="h-full w-[50%]  centerDiv flex-col sm:flex-row">
          <div className="h-[65%] w-full sm:h-full sm:w-[60%] flex flex-col">
            <span className="h-[40%] w-full flex items-center pl-2 font-semibold">
              {title}
            </span>
            <span className="h-[60%] w-full flex items-center pl-2">
              <AiOutlineMinusCircle
                className="text-[1.7rem]"
                onClick={handleDecrease}
              />
              <span className="ml-5 mr-5">{quantity}</span>
              <AiOutlinePlusCircle
                className="text-[1.7rem]"
                onClick={handleIncreaseQuantity}
              />
            </span>
          </div>
          <div className="h-[35%] w-full flex items-center pl-2 sm:h-full sm:w-[40%] sm:flex-col sm:justify-center">
            <span className="">Price : </span>
            <span className="">&nbsp;{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

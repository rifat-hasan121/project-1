import React from "react";
import { GoArrowRight } from "react-icons/go";
import CouponCards from "./CouponCards";

const PopularCoupons = () => {
  return (
    <div className="bg-[#f3faff] pb-20">
      <div className="w-11/12 mx-auto py-12 flex justify-between">
        <h3 className="text-4xl font-medium">
          Popular <span className="text-primary">Coupons</span>
        </h3>
        <button className="text-lg text-blue-500 font-medium flex items-center gap-3 cursor-pointer       ">
          See All Coupons <GoArrowRight />
        </button>
      </div>
      <div>
        <CouponCards></CouponCards>
      </div>
    </div>
  );
};

export default PopularCoupons;

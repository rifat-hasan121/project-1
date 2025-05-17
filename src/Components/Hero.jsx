import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="md:flex md:justify-between w-11/12 mx-auto gap-8 bg-[#f5ebe2] rounded-xl py-12 px-2">
      {/* text div */}
      <div>
        <h3 className=" text-4xl md:text-6xl font-semibold my-6">
          Discover The Best <br /> Affiliate
          <span className="text-[#FF943D]">Coupons</span>
        </h3>
        <p className="text-[16px] mb-6">
          We understand that finding the right Coupons can be a daunting task.
          That's why we've designed our platform.
        </p>
        <div className="min-h-16 mb-6 rounded-4xl w-full mx-auto bg-white flex justify-center items-center gap-4 ">
          <div className="ml-6">
            <button className=" font-semibold flex gap-2 items-center border-r-2 border-slate-300 pr-4">
              Category <IoIosArrowDown />
            </button>
          </div>
          <div className="flex items-center text-center">
            <div>
              <input className="w-full" type="text" placeholder="Search here" />
            </div>
            <div className="mr-4 bg-[#FF943D] px-4 py-2 rounded-2xl">
              <IoSearchOutline size={20} style={{ color: "white" }} />
            </div>
          </div>
        </div>

        {/* outline btn */}
        <div className="flex gap-4 flex-wrap my-6">
          <button className="btn btn-outline btn-warning rounded-2xl">
            Browse Coupons
          </button>
          <button className="btn btn-outline btn-warning rounded-2xl">
            Top Coupons
          </button>
          <button className="btn btn-outline btn-warning rounded-2xl">
            Featured Discount
          </button>
          <button className="btn btn-outline btn-warning rounded-2xl">
            Trending Deals
          </button>
          <button className="btn btn-outline btn-warning rounded-2xl">
            Best Deals
          </button>
          <button className="btn btn-outline btn-warning rounded-2xl">
            Exclusive Offers
          </button>
        </div>
      </div>
      {/* img div */}
      <div className="flex gap-2 items-end relative">
        <div className="">
          <img
            className="rounded-tl-4xl"
            src="src/assets/banner-index-1.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-tr-4xl"
            src="src/assets/banner-index-2.webp"
            alt=""
          />
        </div>
      </div>

      <div class="flex items-center gap-3 absolute bg-white p-2 rounded-xl shadow-md w-fit -mt-64">
        <div class="bg-green-500 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m6-14h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M9 12h6"
            />
          </svg>
        </div>
        <div>
          <p class="text-gray-500 text-[14px]">Total Categories</p>
          <p class="text-xl font-semibold text-gray-800">500+</p>
        </div>
      </div>
      {/* review card */}
      <div class=" absolute flex items-center gap-3 bg-white shadow-md rounded-xl px-3 py-2 -mt-48 ml-36 w-max">
        <div class="bg-orange-400 rounded-full w-10 h-10 flex items-center justify-center">
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.443a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.538 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.783.57-1.838-.197-1.538-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.075 9.374c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.947z"
            />
          </svg>
        </div>
        <div class="text-gray-800">
          <div class="font-semibold text-lg">
            4.9<span class="text-gray-500 text-base">(8.6K)</span>
          </div>
          <div class="text-sm text-gray-500">AVG Reviews</div>
        </div>
      </div>
      {/* coupon card */}
      <div class="absolute flex items-center gap-2 bg-white shadow-md rounded-xl px-2 py-2 ml-36 -mt-20 md:-mt-52  w-max">
        <div class="bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center">
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 7l10 10M7 17L17 7M5 13l4-4m6 6l4-4"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 7h.01M17 17h.01M9 7h6v2H9z"
            />
          </svg>
        </div>
        <div class="text-gray-800">
          <div class="font-semibold text-sm">20% OFF</div>
          <div class="text-[16px] text-gray-500">For All Coupons</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

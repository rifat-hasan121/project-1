import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLockOpenOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          {/* microsoft */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/microsoft.webp" alt="" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 25 December 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $10% Off on Orders Above $100
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>20020</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>25</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>480</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* amazon */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/amzon.webp" alt="Amazon" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 2 December 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $15% Off on Orders Above $200
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>20020</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>25</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>480</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* aJhuda */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/ajhuda.webp" alt="ajhuda" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 2 November 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $5% Off on Orders Above $50
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>2020</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>20</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>440</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* LinkedIn */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/linkedin.webp" alt="Linkedin" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 21 February 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $17% Off on Orders Above $250
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>21120</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>2012</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>870</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* aws */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/aws.webp" alt="AWS" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 14 April 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $7% Off on Orders Above $100
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>1120</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>1112</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>230</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* feedEx */}
          <div className=" w-[392px] bg-white p-2 rounded-sm mx-auto my-12">
            {/* img div */}
            <div className="bg-[#ffefe2] ">
              <img src="src/assets/fedx.webp" alt="FeedEx" />
            </div>
            {/* div status */}
            <div className="flex justify-between gap-4 my-4">
              <button className="border border-blue-400 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[16px] font-medium">
                Special Date
              </button>
              <button className=" flex justify-between items-center gap-2 border border-amber-400 text-yellow-500 bg-yellow-50 px-2 py-1 rounded text-[16px] font-medium">
                <CiCalendarDate />
                <h2> 29 September 2025</h2>
              </button>
            </div>
            <h3 className="text-2xl font-bold my-6">
              Flat $12% Off on Orders Above $120
            </h3>
            <hr className="border border-slate-200" />
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <IoLockOpenOutline />
                <h2>1120</h2>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <BiMessageDetail />
                    <h2>1652</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <GoShareAndroid />
                    <h2>450</h2>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-200" />

            <div className="relative">
              {/* show coupon */}
              <button className=" absolute top-6  right-0 btn bg-white border border-dashed border-blue-400 rounded-full">
                95AF
              </button>
              {/* hide coupon */}
              <button className=" btn z-50 w-full my-6  rounded-full bg-[#1CA2FC] text-white delay-200 hover:scale-x-[.84] origin-left transition-transform duration-300">
                Show Coupon
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

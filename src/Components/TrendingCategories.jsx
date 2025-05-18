import React from 'react';
import { CiDesktopMouse1 } from 'react-icons/ci';
import { GiMailShirt } from 'react-icons/gi';
import { GoArrowRight } from 'react-icons/go';
import { PiMountains } from 'react-icons/pi';
import { RiFunctionLine } from 'react-icons/ri';

const TrendingCategories = () => {
    return (
      <div className="w-11/12 mx-auto  bg-[#fff4eb] py-12 rounded-sm border border-amber-200 px-8">
        <div className=" py-12 flex justify-between">
          <h3 className="text-4xl font-medium">
            Trending <span className="text-primary">Categories</span>
          </h3>
          <div className="bg-white h-16 flex justify-center rounded-full space-x-6">
            <button className="text-lg px-4  font-medium flex items-center gap-3 cursor-pointer hover:bg-[#FF943D] hover:text-white rounded-full     ">
              <RiFunctionLine /> <h2>Accessories</h2>
            </button>
            <button className="text-lg px-4  font-medium flex items-center gap-3 cursor-pointer hover:bg-[#FF943D] hover:text-white rounded-full     ">
              <GiMailShirt /> <h2>Clothing</h2>
            </button>
            <button className="text-lg px-4  font-medium flex items-center gap-3 cursor-pointer hover:bg-[#FF943D] hover:text-white rounded-full     ">
              <CiDesktopMouse1 /> <h2>Electronics</h2>
            </button>
            <button className="text-lg px-4  font-medium flex items-center gap-3 cursor-pointer hover:bg-[#FF943D] hover:text-white rounded-full     ">
              <PiMountains /> <h2>Others</h2>
            </button>
          </div>
        </div>
      </div>
    );
};

export default TrendingCategories;
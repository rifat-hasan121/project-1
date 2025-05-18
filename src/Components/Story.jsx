import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Story = () => {
    return (
      <div className="w-11/12 mx-auto py-12">
        <div className=" py-12 flex justify-between">
          <h3 className="text-4xl font-medium">
            Top <span className="text-primary">Stores</span>
          </h3>
          <button className="text-lg text-blue-500 font-medium flex items-center gap-3 cursor-pointer       ">
            See All Coupons <GoArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className=" col-span-2 row-span-2 mr-6 ">
            <div className="bg-blue-50 pb-6 border border-blue-200 flex flex-col justify-center items-center px-4 py-5 rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/AmazonStory.webp" alt="" />
              </div>
              <h3 className="text-2xl font-medium mb-6">Amazon Trade Groups</h3>
              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% Voucher Rewards</p>
              </button>
            </div>
          </div>

          {/* small card */}
          <div className="w-[180px]">
            <div className="bg-blue-50 flex flex-col justify-center items-center pb-4 px-2 border border-blue-200 rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/ajhuaStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/canonStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/electicStroy.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/feedexStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/philipStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/alibabaStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/mricrosoftStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/seminStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/LinkdinStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
          <div className="w-[180px]">
            <div className="bg-blue-50 pb-4 px-2 border border-blue-200 flex flex-col justify-center items-center rounded-md">
              {/* img div */}
              <div className="my-4">
                <img src="src/assets/metaStory.webp" alt="" />
              </div>

              <button className="btn btn-wide font-bold text-[14px]">
                <img className="w-6 h-5" src="src/assets/logo1.webp" alt="" />
                <p className=" text-blue-500 ">Upto 58% </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Story;
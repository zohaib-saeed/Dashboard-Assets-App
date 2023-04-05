import React, { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const AddAsset = ({ view, setView }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDrawerHandler = () => {
    setView("dashboard");
  };

  return (
    <Drawer
      open={view === "add-asset" && true}
      onClose={closeDrawerHandler}
      direction="right"
      className="hide-scrollbar h-screen !w-full  sm:!w-[500px]  lg:!w-[600px] pb-[85px] xs:pb-[90px] sm:pb-[95px] mdl:pb-[100px] mt-[85px] xs:mt-[90px] sm:mt-[95px] mdl:mt-[100px] !bg-onyx rounded-lg lg:rounded-xl overflow-y-scroll"
    >
      <div className="flex flex-col items-center justify-start gap-2 sm:gap-3 lg:gap-4 p-2 xs:p-3 lg:p-5 bg-onyx ">
        <div className="w-full flex items-center justify-start gap-4">
          <ChevronDoubleRightIcon className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] text-white cursor-pointer" />
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-[15px] mdl:w-[17px] h-[15px] mdl:h-[17px] "
          >
            <path
              d="M0.75 0.75V5.25M0.75 0.75H5.25M0.75 0.75L6 6M17.25 17.25H12.75M17.25 17.25V12.75M17.25 17.25L12 12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="w-full   flex flex-col items-center justify-start gap-7  p-3">
          {/* Add asset heading + phrase  */}
          <div className="w-full flex flex-col items-start justify-center gap-2 mdl:gap-4">
            <h2 className="text-white text-[20px] mdl:text-[25px] font-medium w-full text-left">
              Add Asset
            </h2>
            <p className="text-sm text-dustyGrey text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
          {/* Select team  */}
          <div className="w-full h-auto   flex flex-col items-center justify-start gap-4 mdl:gap-6">
            <h2 className="text-white text-[18px] mdl:text-[20px]  font-medium w-full text-left">
              Asset information
            </h2>
            {/* Assets  */}
            <div className="w-full flex flex-col items-center justify-start gap-3 ">
              <input
                placeholder="Add asset name"
                className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-dustyGrey text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
              />
              <input
                placeholder="Add IMEI number"
                className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-dustyGrey text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
              />
              <input
                placeholder="Name point of interest"
                className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-dustyGrey text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
              />
            </div>
            <h3 className="my-1 text-white text-[18px] mdl:text-[20px] font-normal w-full text-left">
              Select team
            </h3>
            {/* Teams  */}
            <div className="w-full flex flex-col items-center justify-start gap-3 ">
              {[0, 1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full px-3 py-2 mdl:py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-[12px] ">
                    <div className="w-[49px] h-[49px] bg-onyx rounded-lg mdl:rounded-[10px]"></div>
                    <div className="text-sm mdl:text-[15px] font-medium text-white">
                      Team Name
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AddAsset;

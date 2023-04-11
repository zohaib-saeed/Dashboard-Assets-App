import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowsPointingOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const AssetPage = ({ isOpen, setIsOpen }) => {
  const [expandPage, setExpandPage] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(false);
    setExpandPage(false);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className={`hide-scrollbar h-screen !w-full  ${
        expandPage
          ? "sm:!w-[95%] "
          : "sm:!w-[500px]  lg:!w-[600px] rounded-lg lg:rounded-xl"
      } pb-[85px] xs:pb-[90px] sm:pb-[95px] mdl:pb-[100px] mt-[85px] xs:mt-[90px] sm:mt-[95px] mdl:mt-[100px] !bg-onyx  overflow-y-scroll`}
    >
      <div
        className={` ${
          expandPage
            ? "grid grid-cols-[0.9fr_1.1fr]"
            : "flex flex-col items-center justify-start"
        }  gap-4 sm:gap-4 lg:gap-5  bg-onyx `}
      >
        {!expandPage && (
          <div className="w-full flex items-center justify-start gap-4 px-2 xs:px-3 lg:px-5">
            <ChevronDoubleRightIcon
              onClick={toggleDrawer}
              className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] text-white cursor-pointer"
            />
            <div
              onClick={() => setExpandPage(true)}
              className="w-[17px] h-[17px] hidden lg:flex items-center justify-center relative cursor-pointer"
            >
              <Image
                src="/icons/expand.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
        {/* Map  */}
        <div
          className={`${
            expandPage ? "order-last sticky top-0 h-full" : "h-[250px]"
          } w-full bg-iceberg`}
        ></div>
        <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-4 lg:gap-5 ">
          {expandPage && (
            <div className="w-full flex items-center justify-start px-2 xs:px-3 lg:px-5">
              <ChevronLeftIcon
                onClick={() => setExpandPage(false)}
                className="text-white w-[23px] h-[23px] cursor-pointer"
              />
            </div>
          )}
          {/* Asset Details  => Name + Team + Time (Wishlist + Edit Icon if expanded) */}
          <div className="w-full flex flex-col items-start justify-between gap-3 px-2 xs:px-3 lg:px-5 ">
            <div className="px-4 py-1 uppercase border-2 border-solid border-cadetGrey rounded-full text-cadetGrey font-medium text-[9px]">
              Lorem Team
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="text-[22px] mdl:text-[25px] text-white font-medium">
                Asset Name
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="text-[12px] font-medium text-dustyGrey">
                  15 mins ago
                </div>
                {expandPage && (
                  <div className="flex items-center justify-end gap-3">
                    <div className="bg-mirage rounded-full p-[6px] mdl:p-2">
                      <HeartIcon className="text-white w-[20px] mdl:w-[23px] h-[20px] mdl:h-[23px] cursor-pointer" />
                    </div>
                    <div className="bg-mirage rounded-full p-[6px] mdl:p-2">
                      <PencilIcon className="text-white w-[18px] mdl:w-[20px] h-[18px] mdl:h-[20px] cursor-pointer" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Speed + Direction + Satellites  */}
          <div className="w-full grid grid-cols-2 vsm:grid-cols-3 gap-2 sm:gap-3 mdl:gap-4 px-2 xs:px-3 lg:px-5">
            {/* Speed  */}
            <div className="w-full flex flex-col items-start justify-between gap-5 mdl:gap-7 p-3 rounded-lg mdl:rounded-xl bg-mirage">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-dustyGrey">Speed</div>
                <div className=" p-[6px] mdl:p-2 rounded-full bg-onyx ">
                  <ArrowsPointingOutIcon className="text-white w-[20px] mdl:w-[23px] h-[20px] mdl:h-[23px] cursor-pointer" />
                </div>
              </div>
              <div className="font-medium text-white  text-[25px] mdl:text-[30px]">
                XYZ
              </div>
            </div>
            {/* Direction  */}
            <div className="w-full flex flex-col items-start justify-between gap-5 mdl:gap-7 p-3 rounded-lg mdl:rounded-xl bg-mirage">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-dustyGrey">Direction</div>
                <div className=" p-[6px] mdl:p-2 rounded-full bg-onyx ">
                  <ArrowsPointingOutIcon className="text-white w-[20px] mdl:w-[23px] h-[20px] mdl:h-[23px]  cursor-pointer" />
                </div>
              </div>
              <div className="font-medium text-white text-[25px] mdl:text-[30px]">
                XYZ
              </div>
            </div>
            {/* Satellites  */}
            <div className="col-span-2 vsm:col-span-1 w-full flex flex-col items-start justify-between gap-5 mdl:gap-7 p-3 rounded-lg mdl:rounded-xl bg-mirage">
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-dustyGrey">Satellites</div>
                <div className=" p-[6px] mdl:p-2 rounded-full bg-onyx ">
                  <ArrowsPointingOutIcon className="text-white w-[20px] mdl:w-[23px] h-[20px] mdl:h-[23px] cursor-pointer" />
                </div>
              </div>
              <div className="font-medium text-white text-[25px] mdl:text-[30px]">
                XYZ
              </div>
            </div>
          </div>
          {/* Assets Updates  */}
          <div className="w-full flex flex-col items-start justify-start gap-3 lg:gap-5 mt-2 px-2 xs:px-3 lg:px-5">
            <div className="text-white  font-medium text-xl ">Updates</div>
            {[0, 1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="w-full px-3 py-2 mdl:py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
              >
                <div className="flex items-center justify-start gap-[10px] ">
                  <div className="w-[49px] h-[49px] bg-onyx rounded-lg mdl:rounded-[10px]"></div>
                  <div className="flex flex-col items-start justify-center gap-[3px] mdl:gap-[4px] ">
                    <div className="text-sm mdl:text-[15px] font-medium text-white">
                      Asset Name
                    </div>
                    <div className="text-[12px] font-medium text-dustyGrey uppercase">
                      Lorem ipsum . 500M AWAY
                    </div>
                  </div>
                </div>
                <ChevronRightIcon className="w-[21px] h-[21px] text-white " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AssetPage;

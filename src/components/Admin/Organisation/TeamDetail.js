import React, { useState } from "react";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const TeamDetail = ({ showDetail, setShowDetail }) => {
  const closeDrawerHandler = () => {
    setShowDetail(false);
  };
  return (
    <Drawer
      open={showDetail}
      onClose={closeDrawerHandler}
      direction="right"
      className="hide-scrollbar h-screen !w-full  sm:!w-[500px]  pb-[85px] xs:pb-[90px] sm:pb-[95px] mdl:pb-[100px] mt-[85px] xs:mt-[90px] sm:mt-[95px] mdl:mt-[100px] !bg-onyx rounded-lg lg:rounded-xl overflow-y-scroll"
    >
      <div className="flex h-full flex-col items-center justify-between gap-2 sm:gap-3 lg:gap-4 p-2 xs:p-3 lg:p-5 bg-onyx ">
        <div className="w-full flex flex-col items-center justify-start gap-7">
          <div className="w-full flex items-center justify-start">
            <ChevronDoubleRightIcon
              onClick={closeDrawerHandler}
              className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] text-white cursor-pointer"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-7">
            <div className="w-full flex items-center justify-between mt-12">
              <div className="flex items-center justify-start gap-[6px] md:gap-3">
                {/* Avatar */}
                <div className="w-[40px] xs:w-[45px] md:w-[50px] lg:w-[65px] h-[40px] xs:h-[45px] md:h-[50px] lg:h-[65px] rounded-full flex items-center justify-center bg-iceberg leading-[0px] text-[18px] xs:text-[20px] sm:text-[22px] md:text-[25px] font-medium ">
                  JD
                </div>
                <div className="flex flex-col items-start justify-between gap-[0px] xs:gap-[2px]">
                  <h3 className="text-white font-medium text-[15px]">
                    Best Kotek
                  </h3>
                  <div className="text-dustyGrey uppercase font-medium text-[12px]">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <PencilIcon className="text-white w-[20px] h-[20px] cursor-pointer " />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <div className="font-medium text-[20px] text-white">Teams</div>
              <div className="w-full flex items-center justify-start gap-2">
                <div className="py-[5px] px-[14px] font-medium text-xs border-2 border-solid border-cadetGrey text-cadetGrey rounded-full  uppercase">
                  Team Name
                </div>
                <div className="py-[5px] px-[14px] font-medium text-xs border-2 border-solid border-iceerg text-iceberg rounded-full  uppercase">
                  Team Name 2
                </div>
                <PlusCircleIcon className="text-white w-[27px] h-[27px] cursor-pointer" />
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <div className="font-medium text-xl text-white">Contacts</div>
              <div className="text-sm text-dustyGrey ">+1 234 567 8980</div>
              <div className="text-sm text-dustyGrey ">best@kotek.com</div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start">
          <button className="text-sm font-medium bg-opacity-0 border-2 border-solid border-iceberg rounded-full py-[8px] px-7 text-iceberg cursor-pointer">
            Remove Team
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default TeamDetail;

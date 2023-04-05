import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const AllAssets = ({ view, setView }) => {
  const [isSearched, setIsSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    searchValue.length >= 1 && setIsSearched(true);
  };

  const clearSearchHandler = () => {
    setIsSearched(false);
    setSearchValue("");
  };

  const closeDrawerHandler = () => {
    setView("dashboard");
  };

  return (
    <Drawer
      open={view === "assets-page" && true}
      onClose={closeDrawerHandler}
      direction="right"
      className="hide-scrollbar h-screen !w-full  sm:!w-[500px]  lg:!w-[600px] pb-[85px] xs:pb-[90px] sm:pb-[95px] mdl:pb-[100px] mt-[85px] xs:mt-[90px] sm:mt-[95px] mdl:mt-[100px] !bg-onyx rounded-lg lg:rounded-xl overflow-y-scroll"
    >
      <div className="w-full flex flex-col items-center justify-start gap-2 sm:gap-3 lg:gap-4 p-2 xs:p-3 lg:p-5">
        <div className="w-full flex items-center justify-start">
          <ChevronDoubleRightIcon
            onClick={closeDrawerHandler}
            className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] text-white cursor-pointer"
          />
        </div>
        <div className="w-full   flex flex-col items-center justify-start gap-5  p-3">
          {/* Seach assets input  */}
          <div className="w-full flex items-center justify-start gap-[10px] bg-mirage rounded-lg py-3 px-3">
            <MagnifyingGlassIcon className="w-[21px] h-[21px] cursor-pointer text-white" />
            <input
              value={searchValue}
              onChange={(e) => searchHandler(e)}
              type="text"
              placeholder="Search assets by location, IMEI or xyz"
              className="bg-mirage outline-none focus:border-none border-0 flex-1 text-white text-sm placeholder:text-dustyGrey"
            />
            {isSearched && (
              <XMarkIcon
                onClick={clearSearchHandler}
                className="w-[21px] h-[21px] text-white cursor-pointer"
              />
            )}
          </div>
          {!isSearched ? (
            <div className="w-full h-auto   flex flex-col items-center justify-start gap-4">
              <h2 className="text-white text-[20px] mdl:text-[25px] font-medium w-full text-left">
                Browse all
              </h2>
              <div className="w-full flex flex-col items-center justify-start gap-3 ">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="w-full px-3 py-2 mdl:py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
                    >
                      <div className="flex items-center justify-start gap-[10px] ">
                        <div className="w-[49px] h-[49px] bg-onyx rounded-lg mdl:rounded-[10px]"></div>
                        <div className="flex flex-col items-start justify-center gap-[3px] mdl:gap-[4px] ">
                          <div className="text-sm mdl:text-[15px] font-medium text-white">
                            Asset Name {index + 1}
                          </div>
                          <div className="text-[12px] font-medium text-dustyGrey uppercase">
                            Lorem ipsum . 500M AWAY
                          </div>
                        </div>
                      </div>
                      <ChevronRightIcon className="w-[21px] h-[21px] text-white " />
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="w-full h-auto   flex flex-col items-center justify-start gap-4 mdl:gap-6">
              <h2 className="text-white text-[20px] mdl:text-[25px] font-medium w-full text-left">
                Search results
              </h2>
              <h3 className="my-1 text-white text-[16px] mdl:text-[18px] font-normal w-full text-left">
                Assets
              </h3>
              {/* Assets  */}
              <div className="w-full flex flex-col items-center justify-start gap-3 ">
                {[0, 1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="w-full px-3 py-2 mdl:py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
                  >
                    <div className="flex items-center justify-start gap-[10px] ">
                      <div className="w-[49px] h-[49px] bg-onyx rounded-lg mdl:rounded-[10px]"></div>
                      <div className="flex flex-col items-start justify-center gap-[3px] mdl:gap-[4px] ">
                        <div className="text-sm mdl:text-[15px] font-medium text-white">
                          Asset Name {index + 1}
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
              <h3 className="my-1 text-white text-[16px] mdl:text-[18px] font-normal w-full text-left">
                Teams
              </h3>
              {/* Teams  */}
              <div className="w-full flex flex-col items-center justify-start gap-3 ">
                {[0, 1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="w-full px-3 py-2 mdl:py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
                  >
                    <div className="flex items-center justify-start gap-[10px] ">
                      <div className="w-[49px] h-[49px] bg-onyx rounded-lg mdl:rounded-[10px]"></div>
                      <div className="flex flex-col items-start justify-center gap-[3px] mdl:gap-[4px] ">
                        <div className="text-sm mdl:text-[15px] font-medium text-white">
                          Team Name {index + 1}
                        </div>
                      </div>
                    </div>
                    <ChevronRightIcon className="w-[21px] h-[21px] text-white " />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default AllAssets;

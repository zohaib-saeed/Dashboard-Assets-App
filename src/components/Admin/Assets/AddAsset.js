import React, { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Image from "next/image";

const AddAsset = ({ view, setView }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDrawerHandler = () => {
    setView("dashboard");
  };

  const [assetInfo, setAssetInfo] = useState({
    name: "",
    imeiNumber: "",
    pointOfInterestName: "",
  });

  const handleInputChange = (identifier, event) => {
    setAssetInfo({
      ...assetInfo,
      [identifier]: event.target.value,
    });
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
          <ChevronDoubleRightIcon
            onClick={closeDrawerHandler}
            className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] text-white cursor-pointer"
          />
          <div className="w-[17px] h-[17px] flex items-center justify-center relative cursor-pointer">
            <Image
              src="/icons/expand.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
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
                onChange={(e) => handleInputChange("name", e)}
                placeholder="Add asset name"
                className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-dustyGrey text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
              />
              <input
                onChange={(e) => handleInputChange("imeiNumber", e)}
                placeholder="Add IMEI number"
                className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-dustyGrey text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
              />
              <input
                value={assetInfo.pointOfInterestName}
                onChange={(e) => handleInputChange("pointOfInterestName", e)}
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

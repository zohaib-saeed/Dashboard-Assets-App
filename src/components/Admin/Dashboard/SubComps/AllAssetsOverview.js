import React, { useState } from "react";
import {
  ArrowsPointingOutIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import AssetPage from "../../Assets/AssetPage";

const AllAssetsOverview = () => {
  const [openAssetPage, setOpenAssetPage] = useState(false);
  const toggleAssetPageHandler = () => {
    setOpenAssetPage((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div className="w-full grid grid-cols-1 sm:grid-cols-[0.7fr_1.3fr] mdl:grid-cols-[1fr_1.5fr] sxl:grid-cols-[3fr_4.5fr_4.5fr] gap-x-[10px] sm:gap-x-3 lg:gap-x-4  gap-y-[10px] sm:gap-y-3 lg:gap-y-5">
        {/* Col 1 */}
        <div className="w-full min-h-[140px] p-5 bg-mirage flex flex-col items-start justify-between rounded-xl mdl:rounded-2xl">
          <div className="text-dustyGrey text-[15px] font-light">
            Team asset
          </div>
          <div className="text-2xl mdl:text-3xl text-white font-medium">
            XYZ
          </div>
        </div>
        {/* Col 2 */}
        <div className="w-full min-h-[250px] grid grid-cols-3 grid-rows-2 gap-x-[10px] sm:gap-x-3 lg:gap-x-4 gap-y-[10px] sm:gap-y-3 lg:gap-y-5">
          {/* Row 1 => Col 1 */}
          <div className="w-full rounded-xl mdl:rounded-2xl bg-mirage p-[10px] lg:p-3 flex flex-col items-start justify-between gap-2 lg:gap-3">
            <div className="text-dustyGrey text-[15px] font-light">
              Organisation Assets
            </div>
            <div className="text-2xl mdl:text-3xl text-white font-medium">
              XYZ
            </div>
          </div>
          {/* Row 1 => Col 2 */}
          <div className="w-full col-span-2 flex justify-between items-end rounded-xl mdl:rounded-2xl bg-iceberg p-[10px] lg:p-3 ">
            <div className="w-[88%] text-2xl mdl:text-3xl text-onyx font-medium">
              Change Permissions
            </div>
            <div className="w-[30px] h-[30px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
              <ChevronRightIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
            </div>
          </div>
          {/* Row 2 => Col 1 */}
          <div className="w-full col-span-2 flex justify-between items-end rounded-xl mdl:rounded-2xl bg-cadetGrey  p-[10px] lg:p-3 ">
            <div className="w-[88%] text-2xl mdl:text-3xl text-onyx font-medium">
              Add team member
            </div>
            <div className="w-[30px] h-[30px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
              <ChevronRightIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
            </div>
          </div>
          {/* Row 2 => Col 2 */}
          <div className="w-full rounded-xl mdl:rounded-2xl bg-mirage p-3 flex flex-col items-start justify-between gap-2 lg:gap-3">
            <div className="text-dustyGrey text-[15px] font-light">
              Organisation Assets
            </div>
            <div className="text-2xl mdl:text-3xl text-white font-medium">
              XYZ
            </div>
          </div>
        </div>
        {/* Col 3 */}
        <div className="w-full grid sm:col-span-2 sxl:col-span-1 grid-rows-4 gap-y-3 lg:gap-y-5">
          {[0, 1, 2, 3].map((item, index) => (
            <div
              key={index}
              onClick={toggleAssetPageHandler}
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
      <AssetPage isOpen={openAssetPage} setIsOpen={setOpenAssetPage} />
    </React.Fragment>
  );
};

export default AllAssetsOverview;

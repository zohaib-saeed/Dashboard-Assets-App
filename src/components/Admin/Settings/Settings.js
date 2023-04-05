import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import Topbar from "../Layout/Topbar";
import MyDetails from "./MyDetials/MyDetails";
import Notifications from "./Notifications/Notifications";
import Members from "./Members/Members";

const Settings = () => {
  return (
    <div className="w-full flex items-start justify-center bg-onyx py-1 pb-12 min-h-[750px]">
      <div className="w-full flex flex-col items-center justify-start max-w-[1350px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
        <Topbar />
        <div className="w-full flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12  mt-7 mdl:mt-9 lg:mt-12">
          <div className="w-full flex items-center justify-between mdl:justify-start">
            <ChevronLeftIcon className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] text-white cursor-pointer" />
            <div className="flex mdl:hidden items-center justify-end gap-2">
              <div className="text-white text-[17px] font-medium">Settings</div>
              <AdjustmentsHorizontalIcon className="text-white w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mdl:grid-cols-[0.4fr_1.6fr] gap-6">
            {/* Col 1  */}
            <div className="w-full hidden mdl:flex flex-col items-start justify-start gap-5 pt-10">
              <div className="font-medium text-[15px] text-white cursor-pointer">
                My Details
              </div>
              <div className="font-medium text-[15px] text-white cursor-pointer">
                Notifications
              </div>
              <div className="font-medium text-[15px] text-white cursor-pointer">
                Members
              </div>
              <div className="font-medium text-[15px] text-white cursor-pointer">
                Billing
              </div>
            </div>
            {/* Col 2  */}
            {/* <MyDetails /> */}
            {/* <Notifications /> */}
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

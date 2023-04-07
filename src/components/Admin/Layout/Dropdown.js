import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const Dropdown = ({ showDropdown, view, setView, setShowDropdown }) => {
  const settingViewHandler = () => {
    setView("settings");
    setShowDropdown(false);
  };
  return (
    <div
      className={`${
        showDropdown && "dropdown"
      } 22 w-full absolute top-[68px] mdl:top-20 left-0 hidden flex-col items-start justify-start gap-[10px] mdl:gap-[12px] bg-mirage px-3 mdl:px-4 py-4 mdl:py-6 rounded-xl mdl:rounded-2xl transition-all duration-[10ms] z-[99]`}
    >
      <div className="text-xs font-medium text-dustyGrey uppercase">
        My teams
      </div>
      <div className="text-sm mdl:text-[15px] font-medium text-white">
        Team Name
      </div>
      <div className="text-sm mdl:text-[15px] font-medium text-white">
        Team Name
      </div>
      <div className="w-full h-[1px] bg-dustyGrey rounded-full my-[2px]"></div>
      <div
        onClick={settingViewHandler}
        className="flex items-center justify-start gap-3 cursor-pointer"
      >
        <Cog6ToothIcon className="text-white w-[24px] h-[24px]" />
        <div className="text-sm mdl:text-[15px] font-medium text-white">
          Settings
        </div>
      </div>
      <div className="text-sm mdl:text-[15px] font-medium text-white">
        Log out
      </div>
    </div>
  );
};

export default Dropdown;

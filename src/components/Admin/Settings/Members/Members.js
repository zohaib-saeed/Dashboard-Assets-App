import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Members = () => {
  return (
    <div className="w-full min-h-[700px] flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12 mt-5 sm:mt-6 mdl:mt-9 lg:mt-12">
      <div className="w-full flex items-center justify-start">
        <ChevronLeftIcon className="w-[23px] h-[23px] text-white cursor-pointer" />
      </div>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-[0.6fr_1.5fr] sxl:grid-cols-[0.5fr_1.5fr] gap-6"></div>
    </div>
  );
};

export default Members;

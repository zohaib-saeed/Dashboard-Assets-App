import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const MyDetails = () => {
  return (
    <div className="w-full min-h-[700px] flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12 mt-5 sm:mt-6 mdl:mt-9 lg:mt-12">
      <div className="w-full flex items-center justify-start">
        <ChevronLeftIcon className="w-[23px] h-[23px] text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default MyDetails;

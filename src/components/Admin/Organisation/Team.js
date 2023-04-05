import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const Team = ({ teamView, setTeamView }) => {
  const teamViewHandler = () => {
    setTeamView("all-teams");
  };
  return (
    <div className="w-full min-h-[700px] flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12 mt-5 sm:mt-6 mdl:mt-9 lg:mt-12">
      <div className="w-full flex items-center justify-start">
        <ChevronLeftIcon
          onClick={teamViewHandler}
          className="w-[23px] h-[23px] text-white cursor-pointer"
        />
      </div>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-[0.6fr_1.5fr] sxl:grid-cols-[0.5fr_1.5fr] gap-6">
        {/* Col 1 */}
        <div className="w-full max-w-[80%] sm:max-w-[50%] md:max-w-[40%] mdl:max-w-none flex flex-col items-center justify-start py-5 gap-3 sxl:gap-5">
          <div className="w-full flex flex-col items-center justify-start gap-3">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-white text-[24px] sxl:text-[30px] font-medium">
                Team Name
              </h2>
              <PencilIcon className="w-[20px] sxl:w-[23px] h-[20px] sxl:h-[23px] text-white cursor-pointer" />
            </div>
            <p className="w-full text-dustyGrey text-sm text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
          {/* Add team member  */}
          <div className="w-full flex items-center justify-between mt-6 sxl:mt-9">
            <div className="text-sm sxl:text-[15px] text-white font-medium">
              Add team member
            </div>
            <ChevronRightIcon className="w-[19px] h-[19px] text-white cursor-pointer" />
          </div>
          {/* Remove member  */}
          <div className="w-full flex items-center justify-between ">
            <div className="text-sm sxl:text-[15px] text-white font-medium">
              Remove member
            </div>
            <ChevronRightIcon className="w-[19px] h-[19px] text-white cursor-pointer" />
          </div>
        </div>
        {/* Col 2 */}
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full grid grid-cols-2 sxl:grid-cols-3 gap-y-3 gap-2 md:gap-3 sxl:gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="w-full h-auto bg-mirage rounded-xl md:rounded-2xl sxl:rounded-3xl px-3 sm:px-5 py-3 sm:py-5 flex flex-col items-center justify-start gap-6 sm:gap-9 sxl:gap-7"
              >
                <div className="w-full flex items-start justify-between">
                  <div className="flex items-center justify-start gap-[6px] md:gap-3">
                    {/* Avatar */}
                    <div className="w-[40px] xs:w-[45px] md:w-[50px] h-[40px] xs:h-[45px] md:h-[50px] rounded-full flex items-center justify-center bg-iceberg leading-[0px] text-[18px] xs:text-[20px] sm:text-[22px] md:text-[25px] font-medium ">
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
                  <EllipsisHorizontalIcon className="text-white w-[25px] h-[25px] " />
                </div>
                <div className="w-full max-w-[95%] xs:max-w-none grid grid-cols-1 xs:grid-cols-2 gap-[6px] md:gap-3">
                  <div className="w-full text-center border-2 border-solid border-cadetGrey text-cadetGrey py-[6px] px-2 text-[11px] md:text-xs font-medium rounded-full flex items-center justify-center">
                    TEAM NAME
                  </div>
                  <div className="w-full text-center border-2 border-solid border-iceberg text-iceberg py-[6px] px-2 text-[11px] md:text-xs font-medium rounded-full flex items-center justify-center">
                    TEAM NAME 2
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

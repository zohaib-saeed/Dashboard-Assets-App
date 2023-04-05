import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const AllTeams = ({ view, setView, teamView, setTeamView }) => {
  const teamPageHandler = () => {
    setTeamView("team");
  };
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12 mt-9 lg:mt-12 pb-20">
      <div className="w-full flex items-center justify-start">
        <ChevronLeftIcon
          onClick={() => setView("dashboard")}
          className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] text-white cursor-pointer"
        />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] sxl:grid-cols-[0.4fr_1.6fr] gap-3 sxl:gap-5">
        {/* Col 1 */}
        <div className="w-full grid grid-cols-2 lg:flex flex-col items-center justify-start gap-1 xs:gap-2 md:gap-4">
          {/* Add team  */}
          <div className="w-full h-[130px] xs:h-[150px] md:h-[180px] lg:h-[150px] flex justify-between items-end rounded-xl mdl:rounded-2xl bg-iceberg  p-[10px] lg:p-3 ">
            <div className="w-[88%] text-2xl mdl:text-3xl text-onyx font-medium">
              Add team
            </div>
            <div className="w-[30px] h-[30px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
              <ChevronRightIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
            </div>
          </div>
          {/* Add team member  */}
          <div className="w-full h-[130px] xs:h-[150px] md:h-[180px] lg:h-[150px] flex justify-between items-end rounded-xl mdl:rounded-2xl bg-cadetGrey  p-[10px] lg:p-3 ">
            <div className="w-[88%] text-2xl mdl:text-3xl text-onyx font-medium">
              Add team member
            </div>
            <div className="w-[30px] h-[30px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
              <ChevronRightIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
            </div>
          </div>
        </div>
        {/* Col 2 */}
        <div className="w-full flex flex-col items-center justify-start gap-3 sm:gap-4">
          {[0, 1, 2].map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-mirage px-5 sm:px-8 py-7 sm:py-8 rounded-xl"
            >
              <div className="w-full flex flex-col items-start justify-center gap-3">
                <h2 className="text-lg mdl:text-xl text-white font-semibold">
                  Team Name
                </h2>
                <div className="flex items-center justify-start gap-[6px] xs:gap-2 sm:gap-3">
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <div
                      key={index}
                      className="text-onyx bg-iceberg rounded-full w-[27px] h-[27px] font-semibold text-[13px] flex items-center justify-center leading-[0px]"
                    >
                      JD
                    </div>
                  ))}
                </div>
              </div>
              <ChevronRightIcon
                onClick={teamPageHandler}
                className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] text-white cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTeams;

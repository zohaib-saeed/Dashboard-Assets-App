import React from "react";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

const Members = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start ">
      <div className="w-full flex flex-col items-start justify-start gap-6 sm:gap-9 overflow-x-hidden">
        <h2 className="w-full text-left text-white font-medium text-[20px] sm:text-[22px] lg:text-[25px] ">
          Members settings
        </h2>
        <div className="w-full grid grid-cols-1 sxl:grid-cols-[0.7fr_1.3fr] gap-10 sxl:gap-24 ">
          {/* Col 1 */}
          <div className="w-full flex flex-col items-start justify-start gap-2 pt-4">
            <h3 className="font-medium text-[15px] text-white">
              Administrators
            </h3>
            <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <button className="text-white border-2 border-solid border-white text-[15px] sm:text-sm font-medium bg-opacity-0 rounded-full px-6 py-3 mt-1">
              Invite an administrator
            </button>
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-start justify-start gap-3 overflow-x-scroll">
            <div className="w-full grid grid-cols-[0.8fr_0.5fr_0.5fr_0.2fr] gap-4 px-3 min-w-[530px] vsm:min-w-none ">
              <div className="font-medium text-xs text-dustyGrey">NAME</div>
              <div className="font-medium text-xs text-dustyGrey">
                Date Added
              </div>
              <div className="font-medium text-xs text-dustyGrey">
                Last Active
              </div>
              <div></div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3">
              {[0, 1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full items-center grid grid-cols-[0.8fr_0.5fr_0.5fr_0.2fr] gap-4 py-3 px-3 min-w-[530px] vsm:min-w-none  bg-mirage rounded-xl "
                >
                  {/* Col 1 */}
                  <div className="flex items-center justify-start gap-[10px]">
                    <div className="w-[50px] h-[50px] flex items-center justify-center relative bg-iceberg rounded-full overflow-hidden text-[25px] text-black font-medium">
                      JD
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <div className="text-[15px] text-white font-medium">
                        John Doe
                      </div>
                      <div className="text-[12px] text-dustyGrey font-medium uppercase">
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                  {/* Col 2 */}
                  <div className="text-dustyGrey text-sm">01.01.2023</div>
                  {/* Col 3 */}
                  <div className="text-dustyGrey text-sm">01.01.2023</div>
                  {/* Col 4 */}
                  <div className="w-full flex item justify-end">
                    <TrashIcon className="text-white text-[20px] h-[22px] cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[0.3px] bg-opacity-30 bg-dustyGrey "></div>
        <div className="w-full grid grid-cols-1 sxl:grid-cols-[0.7fr_1.3fr]  gap-10 sxl:gap-24">
          {/* Col 1 */}
          <div className="w-full flex flex-col items-start justify-start gap-2 pt-4">
            <h3 className="font-medium text-[15px] text-white">
              Pending Invites
            </h3>
            <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-start justify-start gap-3  overflow-x-scroll">
            <div className="w-full grid grid-cols-[0.8fr_0.4fr_0.6fr_0.2fr] gap-4 px-3 min-w-[530px] vsm:min-w-none overflow-x-scroll">
              <div className="font-medium text-xs text-dustyGrey">NAME</div>
              <div className="font-medium text-xs text-dustyGrey">
                Date Added
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3 min-w-[530px] vsm:min-w-none overflow-x-scroll">
              {[0, 1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full items-center grid grid-cols-[0.8fr_0.4fr_0.6fr_0.2fr] gap-4 py-3 px-3 bg-mirage rounded-xl "
                >
                  {/* Col 1 */}
                  <div className="flex items-center justify-start gap-[10px]">
                    <div className="w-[50px] h-[50px] flex items-center justify-center relative bg-iceberg rounded-full overflow-hidden text-[25px] text-black font-medium">
                      JD
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <div className="text-[15px] text-white font-medium">
                        John Doe
                      </div>
                      <div className="text-[12px] text-dustyGrey font-medium uppercase">
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                  {/* Col 2 */}
                  <div className="text-dustyGrey text-sm">01.01.2023</div>
                  {/* Col 3 */}
                  <div className="rounded-full py-[4px] px-5 bg-iceberg font-medium text-xs uppercase text-mirage">
                    Resend Invites
                  </div>
                  {/* Col 4 */}
                  <div className="w-full flex item justify-end">
                    <TrashIcon className="text-white text-[20px] h-[22px] cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

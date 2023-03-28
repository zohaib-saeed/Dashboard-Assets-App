import React, { Fragment } from "react";
import {
  ArrowsPointingOutIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

const UserDashboard = () => {
  return (
    <div className="w-full flex items-start justify-center bg-onyx py-1 pb-4">
      <div className="w-full flex flex-col items-center justify-start max-w-[1350px] px-6">
        {/* Top bar  */}
        <div className="w-full flex items-center justify-between py-[14px]">
          {/*=> Left  */}
          <div className="flex items-end justify-start gap-7">
            {/* User name + avatar + nav dropdown button*/}
            <div className="flex items-center justify-between gap-16 bg-mirage rounded-2xl p-2">
              <div className="flex items-center justify-start gap-[10px]">
                <div className="w-[55px] h-[55px] flex items-center justify-center relative bg-iceberg rounded-full overflow-hidden text-[25px] text-black font-medium">
                  JD
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="text-[15px] text-white font-medium">
                    John Doe
                  </div>
                  <div className="text-[12px] text-dustyGrey font-medium uppercase">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="w-[38px] h-[38px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                <ChevronDownIcon className="w-[20px] h-[20px] text-white" />
              </div>
            </div>
            {/* Tabs  */}
            <div className="flex items-end justify-start gap-7">
              <div
                className={`text-white text-[15px] font-medium pb-5 px-2 border-b-[3px] border-solid border-iceberg transition-all transition-duration-300 cursor-pointer`}
              >
                Dashboard
              </div>
              <div
                className={`text-white text-[15px] font-medium pb-5 px-2 border-b-[3px] border-solid border-onyx cursor-pointer`}
              >
                Assets
              </div>
            </div>
          </div>
          {/* => Right  */}
          <div className="flex justify-end items-center gap-5">
            {/* Search  */}
            <MagnifyingGlassIcon className="w-[25px] h-[25px] text-white cursor-pointer" />
            {/* Notification  */}
            <BellIcon className="w-[21px] h-[21px] text-white cursor-pointer" />
            {/* Add Asset Button  */}
            <div className="flex items-center justify-center gap-2 rounded-full bg-iceberg px-8 py-[14px] cursor-pointer">
              <div className="bg-onyx p-1 rounded-full flex items-center justify-center">
                <PlusIcon className="w-[13px] h-[13px] text-iceberg " />
              </div>
              <div className="text-sm font-medium text-onyx ">Add Asset</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-12 mt-12">
          {/* Welcome */}
          <div className="w-full py-6 px-4 rounded-2xl flex items-start flex-col justify-center gap-[10px] bg-[url('/images/welcome-bg.png')] bg-cover bg-center bg-no-repeat">
            <h1 className="text-[25px] font-medium text-onyx">
              Welcome, John Doe
            </h1>
            <p className="text-sm text-onyx">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
          {/* Team Assets + Organization assets + Assets list   */}
          <div className="w-full grid grid-cols-[0.7fr_1.3fr] mdl:grid-cols-[1fr_1.5fr] sxl:grid-cols-[3fr_4.5fr_4.5fr] gap-x-4 gap-y-5">
            {/* Col 1 */}
            <div className="w-full p-5 bg-mirage flex flex-col items-start justify-between rounded-2xl">
              <div className="text-dustyGrey text-[15px] font-light">
                Team asset
              </div>
              <div className="text-3xl text-white font-medium">XYZ</div>
            </div>
            {/* Col 2 */}
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-5">
              {/* Row 1 => Col 1 */}
              <div className="w-full rounded-2xl bg-mirage p-3 flex flex-col items-start justify-between gap-3">
                <div className="text-dustyGrey text-[15px] font-light">
                  Organisation Assets
                </div>
                <div className="text-3xl text-white font-medium">XYZ</div>
              </div>
              {/* Row 1 => Col 2 */}
              <div className="w-full col-span-2 flex justify-between items-start rounded-2xl bg-mirage p-3">
                <div className="h-full flex flex-col items-start justify-between gap-2">
                  <div className="text-dustyGrey text-[15px] font-light">
                    Organisation assets
                  </div>
                  <div className="text-3xl text-white font-medium">XYZ</div>
                </div>
                <div className="p-[6px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                  <ArrowsPointingOutIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
                </div>
              </div>
              {/* Row 2 => Col 1 */}
              <div className="w-full col-span-2 flex justify-between items-start rounded-2xl bg-mirage p-3">
                <div className="h-full flex flex-col items-start justify-between gap-2">
                  <div className="text-dustyGrey text-[15px] font-light">
                    Organisation assets
                  </div>
                  <div className="text-3xl text-white font-medium">XYZ</div>
                </div>
                <div className="p-[6px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                  <ArrowsPointingOutIcon className="w-[16px] h-[16px] cursor-pointer text-white" />
                </div>
              </div>
              {/* Row 2 => Col 2 */}
              <div className="w-full rounded-2xl bg-mirage p-3 flex flex-col items-start justify-between gap-3">
                <div className="text-dustyGrey text-[15px] font-light">
                  Organisation Assets
                </div>
                <div className="text-3xl text-white font-medium">XYZ</div>
              </div>
            </div>
            {/* Col 3 */}
            <div className="w-full grid col-span-2 sxl:col-span-1 grid-rows-4 gap-y-5">
              {[0, 1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full px-3 py-[6px] flex items-center justify-between gap-3 rounded-xl bg-mirage cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-[10px] ">
                    <div className="w-[49px] h-[49px] bg-onyx rounded-[10px]"></div>
                    <div className="flex flex-col items-start justify-center gap-[4px] ">
                      <div className="text-[15px] font-medium text-white">
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
          {/* Favourite assets */}
          <div className="w-full gap-5 rounded-2xl p-5 overflow-x-hidden flex items-end justify-start bg-mirage">
            <div className="min-w-[280px] flex flex-col items-start justify-end gap-5">
              <h2 className="text-white font-medium text-[25px] ">
                Favourite assets
              </h2>
              <p className="text-[14px] text-left text-dustyGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-onyx rounded-2xl p-4 gap-16 flex flex-col items-center justify-between"
              >
                {/* Row 1 => Asset name + time + Wishlist Icon  */}
                <div className="w-full flex justify-between items-center gap-5">
                  <div className="flex flex-col items-start justify-center gap-[2px] ">
                    <div className="text-white font-medium text-[15px]">
                      Asset name
                    </div>
                    <div className="text-xs text-dustyGrey font-medium">
                      18 MINUTES AGO
                    </div>
                  </div>
                  <HeartIcon className="w-[22px] h-[22px] text-white cursor-pointer" />
                </div>
                {/* Row 2  */}
                <div className="w-full flex justify-between items-center gap-10">
                  <div className="flex flex-col items-start justify-center gap-[2px] ">
                    <div className="text-white font-medium text-[15px]">
                      Tesco
                    </div>
                    <div className="text-xs text-dustyGrey font-medium">
                      Lorem ipsum Dolar
                    </div>
                  </div>
                  <div className="text-white font-medium text-[30px] ">55M</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

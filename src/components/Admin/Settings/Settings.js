import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import MyDetails from "./MyDetials/MyDetails";
import Notifications from "./Notifications/Notifications";
import Members from "./Members/Members";
import Billing from "./Billing/Billing";
import SettingsMenuDrawer from "./SettingsMenuDrawer/SettingsMenuDrawer";

const Settings = ({ view, setView }) => {
  const [settingsView, setSettingsView] = useState("my-details");
  const [settingsMenu, setSettingsMenu] = useState(false);
  return (
    <React.Fragment>
      <div className="w-full min-h-[700px] flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12  mt-7 mdl:mt-9 lg:mt-12">
        <div className="w-full flex items-center justify-between mdl:justify-start">
          <ChevronLeftIcon
            onClick={() => setView("dashboard")}
            className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] text-white cursor-pointer"
          />
          <div className="flex mdl:hidden items-center justify-end gap-2">
            <div className="text-white text-[17px] font-medium">Settings</div>
            <AdjustmentsHorizontalIcon
              onClick={() => setSettingsMenu(true)}
              className="text-white w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 mdl:grid-cols-[0.4fr_1.6fr] gap-6">
          {/* Col 1  */}
          <div className="w-full hidden mdl:flex flex-col items-start justify-start gap-5 pt-10">
            <div
              onClick={() => setSettingsView("my-details")}
              className={`font-medium text-[15px] ${
                settingsView === "my-details"
                  ? "text-iceberg active-setting-view"
                  : "text-white"
              } cursor-pointer  relative`}
            >
              My Details
            </div>
            <div
              onClick={() => setSettingsView("notifications")}
              className={`font-medium text-[15px] ${
                settingsView === "notifications"
                  ? "text-iceberg active-setting-view"
                  : "text-white"
              } cursor-pointer  relative`}
            >
              Notifications
            </div>
            <div
              onClick={() => setSettingsView("members")}
              className={`font-medium text-[15px] ${
                settingsView === "members"
                  ? "text-iceberg active-setting-view"
                  : "text-white"
              } cursor-pointer  relative`}
            >
              Members
            </div>
            <div
              onClick={() => setSettingsView("billing")}
              className={`font-medium text-[15px] ${
                settingsView === "billing"
                  ? "text-iceberg active-setting-view"
                  : "text-white"
              } cursor-pointer  relative`}
            >
              Billing
            </div>
          </div>
          {/* Col 2  */}
          {settingsView === "my-details" && <MyDetails />}
          {settingsView === "notifications" && <Notifications />}
          {settingsView === "members" && <Members />}
          {settingsView === "billing" && <Billing />}
        </div>
      </div>
      <SettingsMenuDrawer
        settingsView={settingsView}
        setSettingsView={setSettingsView}
        settingsMenu={settingsMenu}
        setSettingsMenu={setSettingsMenu}
      />
    </React.Fragment>
  );
};

export default Settings;

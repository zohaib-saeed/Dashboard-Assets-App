import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

const SettingsMenuDrawer = ({
  settingsMenu,
  setSettingsMenu,
  settingsView,
  setSettingsView,
}) => {
  const toggleSettingsDrawer = () => {
    setSettingsMenu((prevState) => !prevState);
  };
  const settingsViewHandler = (view) => {
    setSettingsView(view);
    setSettingsMenu(false);
  };
  return (
    <Drawer
      direction="bottom"
      open={settingsMenu}
      onClose={toggleSettingsDrawer}
      className="!w-full !min-h-[300px] !bg-iceberg rounded-t-3xl"
    >
      <div className="w-full h-full flex flex-col items-center justify-center rounded-t-3xl">
        <div className="w-full flex flex-col items-center justify-center gap-3 ">
          <div
            className={`text-base font-medium ${
              settingsView === "my-details"
                ? "text-cadetGrey underline underline-offset-4"
                : "text-onyx"
            }`}
            onClick={() => settingsViewHandler("my-details")}
          >
            My Details
          </div>
          <div
            className={`text-base font-medium ${
              settingsView === "notifications"
                ? "text-cadetGrey underline underline-offset 4"
                : "text-onyx"
            }`}
            onClick={() => settingsViewHandler("notifications")}
          >
            Notifications
          </div>
          <div
            className={`text-base font-medium ${
              settingsView === "members"
                ? "text-cadetGrey underline underline-offset-4"
                : "text-onyx"
            }`}
            onClick={() => settingsViewHandler("members")}
          >
            Members
          </div>
          <div
            className={`text-base font-medium ${
              settingsView === "billing"
                ? "text-cadetGrey underline underline-offset-4"
                : "text-onyx"
            }`}
            onClick={() => settingsViewHandler("billing")}
          >
            Billing
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SettingsMenuDrawer;

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

const MenuDrawer = ({ openMenuDrawer, setOpenMenuDrawer, view, setView }) => {
  const toggleMenuDrawer = () => {
    setOpenMenuDrawer(false);
  };

  const viewHandler = (view) => {
    setOpenMenuDrawer(false);
    setView(view);
  };

  return (
    <Drawer
      open={openMenuDrawer}
      onClose={toggleMenuDrawer}
      direction="left"
      className="!w-[70%]  "
    >
      <div className="w-full h-full flex flex-col items-center justify-start py-3 px-4 bg-iceberg">
        <div className="w-full flex items-center justify-end">
          <XMarkIcon
            onClick={() => setOpenMenuDrawer(false)}
            className="text-onyx w-[23px] h-[23px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-3 mt-16">
          <div
            onClick={() => viewHandler("dashboard")}
            className="text-onyx text-base font-medium"
          >
            Dashboard
          </div>
          <div
            onClick={() => viewHandler("assets-page")}
            className="text-onyx text-base font-medium"
          >
            Assets
          </div>
          <div
            onClick={() => viewHandler("organisation")}
            className="text-onyx text-base font-medium"
          >
            Organization
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;

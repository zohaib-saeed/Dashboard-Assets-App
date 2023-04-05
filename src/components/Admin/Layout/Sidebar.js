import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Sidebar = ({ openDrawer, setOpenDrawer }) => {
  const toggleDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="bla bla bla"
    >
      <div className="w-full h-screen bg-iceberg  flex flex-col items-center justify-start py-5 px-4 ">
        <div className="flex items-center justify-end">
          <XMarkIcon className="w-[24px] h-[24px] cursor-pointer text-onyx" />
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;

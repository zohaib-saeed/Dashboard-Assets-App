import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="!w-full"
    >
      <div className="w-full h-screen min-h-[400p] flex items-center justify-start flex-col"></div>
    </Drawer>
  );
};

export default Sidebar;

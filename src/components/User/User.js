import React from "react";
import UserDashboard from "./Dashboard/Dashboard";
import Topbar from "./Layout/Topbar";

const User = () => {
  return (
    <div className="w-full flex items-start justify-center bg-onyx py-1 pb-12">
      <div className="w-full flex flex-col items-center justify-start max-w-[1350px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
        <Topbar />
        <UserDashboard />
      </div>
    </div>
  );
};

export default User;

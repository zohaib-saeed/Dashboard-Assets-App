import React, { useState } from "react";

import Dashoard from "./Dashboard/Dashboard";
import Topbar from "./Layout/Topbar";
import Organisation from "./Organisation/Organisation";
import Settings from "./Settings/Settings";
import AllAssets from "./Assets/AllAssets";
import AddAsset from "./Assets/AddAsset";

const Admin = () => {
  const [view, setView] = useState("dashboard");

  return (
    // <div className="w-full flex items-start justify-center bg-onyx py-1 pb-12">
    //   <div className="w-full flex flex-col items-center justify-start max-w-[1350px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
    //     <Topbar view={view} setView={setView} />
    //     {(view === "dashboard" || view === "assets-page") && <Dashoard />}
    //     <AddAsset view={view} setView={setView} />
    //     <AllAssets view={view} setView={setView} />
    //     {view === "organisation" && (
    //       <Organisation view={view} setView={setView} />
    //     )}
    //   </div>
    // </div>
    <>
      <Settings />
    </>
  );
};

export default Admin;

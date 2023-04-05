import React from "react";

import Welcome from "./SubComps/Welcome";
import FavouriteAssets from "./SubComps/FavouriteAssets";
import AllAssetsOverview from "./SubComps/AllAssetsOverview";

const UserDashboard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5 sm:gap-6 mdl:gap-9 lg:gap-12 mt-5 sm:mt-6 mdl:mt-9 lg:mt-12">
      {/* Welcome */}
      <Welcome />
      {/* Team Assets + Organization assets + Assets list   */}
      <AllAssetsOverview />
      {/* Favourite assets */}
      <FavouriteAssets />
    </div>
  );
};

export default UserDashboard;

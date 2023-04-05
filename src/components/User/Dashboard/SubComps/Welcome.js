import React from "react";

const Welcome = () => {
  return (
    <div className="w-full py-4 sm:py-5 mdl:py-6 px-3 mdl:px-4 rounded-xl mdl:rounded-2xl flex items-start flex-col justify-center gap-[6px] sm:gap-2 mdl:gap-[10px] bg-cadetGrey md:bg-[url('/images/welcome-bg.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-[20px] mdl:text-[25px] font-medium text-onyx">
        Welcome, John Doe
      </h1>
      <p className="text-[13px] mdl:text-sm text-onyx">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </p>
    </div>
  );
};

export default Welcome;

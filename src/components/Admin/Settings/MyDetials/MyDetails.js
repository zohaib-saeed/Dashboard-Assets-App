import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const MyDetails = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (identifier, e) => {
    setPersonalInfo({
      ...personalInfo,
      [identifier]: e.target.value,
    });
    console.log(personalInfo.firstName);
  };
  return (
    <div className="w-full flex flex-col items-start justify-start ">
      <h2 className="text-white font-medium text-[20px] sm:text-[22px] lg:text-[25px] mb-5 sm:mb-6 mdl:mb-9">
        Personal Information
      </h2>
      <div className="w-full grid items-start grid-cols-1 sm:grid-cols-[0.5fr_1.5fr] sxl:grid-cols-[0.7fr_1.3fr] gap-4">
        <div className="w-full flex flex-col items-start justify-start">
          <h3 className="font-medium text-[15px] text-white">
            Personal Details
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          {/* First Name  */}
          <div className="w-full flex flex-col items-start justify-start gap-[4px]">
            <div className="font-medium text-xs text-dustyGrey">FIRST NAME</div>
            <input
              type="text"
              placeholder="Best"
              onChange={(e) => handleInputChange("firstName", e)}
              className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-white text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
            />
          </div>
          {/* Last Name  */}
          <div className="w-full flex flex-col items-start justify-start gap-[4px]">
            <div className="font-medium text-xs text-dustyGrey">LAST NAME</div>
            <input
              type="text"
              placeholder="Kotek"
              onChange={(e) => handleInputChange("lastName", e)}
              className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-white text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.3px] bg-opacity-30 bg-dustyGrey my-5"></div>

      <div className="w-full grid items-start grid-cols-1 sm:grid-cols-[0.5fr_1.5fr] sxl:grid-cols-[0.7fr_1.3fr] gap-4">
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <h3 className="font-medium text-[15px] text-white">
            Contact Details
          </h3>
          <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
            Lorem ipsum dolar
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          {/* Contact Details   */}
          <div className="w-full flex flex-col items-start justify-start gap-[4px]">
            <div className="font-medium text-xs text-dustyGrey">EMAIL</div>
            <input
              placeholder="best@kotek.com"
              type="email"
              onChange={(e) => handleInputChange("email", e)}
              className="w-full py-3 mdl:py-4 px-3 sm:px-4 bg-mirage placeholder:text-white text-dustyGrey text-sm focus:border-none focus:outline-none font-medium rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;

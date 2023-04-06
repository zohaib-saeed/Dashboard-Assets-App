import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

const PaymentMethods = ({ addMethod, setAddMethod }) => {
  const [mothlyPlan, setMonthlyPlan] = useState(true);
  const [updatePlan, setUpdatePlan] = useState(false);

  const handleMonthlyPlan = (plan) => {
    setMonthlyPlan(true);
    setUpdatePlan(false);
  };

  const handleUpdatePlan = () => {
    setMonthlyPlan(false);
    setUpdatePlan(true);
  };
  return (
    <div className="w-full flex flex-col items-start justify-start ">
      <div className="w-full flex flex-col items-start justify-start gap-8 md:gap-9 mdl:gap-12">
        {/* Payment Plan  */}
        <div className="w-full flex flex-col items-start justify-start gap-5 md:gap-7 mdl:gap-9">
          <h3 className="font-medium text-[22px] sm:text-[25px] text-white">
            Payment plan
          </h3>
          <div className="w-full max-w-[90%] xs:max-w-[75%] vsm:max-w-[60%] sm:max-w-none grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[10px] mdl:gap-4 sxl:gap-7">
            {/* Col 1  */}
            <div
              onClick={handleMonthlyPlan}
              className={`w-full grid grid-cols-[1.6fr_0.4fr] gap-5 py-3 sm:py-4 px-3 sm:px-5 ${
                mothlyPlan ? "bg-cadetGrey" : "bg-mirage"
              } rounded-2xl cursor-pointer`}
            >
              <div className="w-full flex flex-col items-start justify-between gap-3 sm:gap-6">
                <div
                  className={`font-medium text-[22px] sm:text-[25px] ${
                    mothlyPlan ? "text-onyx" : "text-dustyGrey"
                  }`}
                >
                  €200/month
                </div>
                <p
                  className={`text-sm font-regular ${
                    mothlyPlan ? "text-onyx" : "text-dustyGrey"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>

              <div className="w-full flex items-start justify-end">
                {mothlyPlan ? (
                  <CheckCircleIcon className="text-onyx w-[23px] mdl:w-[28px] h-[23px] mdl:h-[28px]" />
                ) : (
                  <svg
                    fill="#969696"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[19px] mdl:w-[22px] h-[19px] mdl:h-[22px] text-dustyGrey"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  </svg>
                )}
              </div>
            </div>
            {/* Col 2  */}
            <div
              onClick={handleUpdatePlan}
              className={`w-full grid grid-cols-[1.6fr_0.4fr] gap-5 py-3 sm:py-4 px-3 sm:px-5 ${
                updatePlan ? "bg-cadetGrey" : "bg-mirage"
              } rounded-2xl cursor-pointer`}
            >
              <div className="w-full flex flex-col items-start justify-between gap-3 sm:gap-6">
                <div
                  className={`font-medium text-[22px] sm:text-[25px] ${
                    updatePlan ? "text-onyx" : "text-dustyGrey"
                  }`}
                >
                  €15/update
                </div>
                <p
                  className={`text-sm font-regular ${
                    updatePlan ? "text-onyx" : "text-dustyGrey"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
              <div className="w-full flex items-start justify-end">
                {updatePlan ? (
                  <CheckCircleIcon className="text-onyx w-[23px] mdl:w-[28px] h-[23px] mdl:h-[28px]" />
                ) : (
                  <svg
                    fill="#969696"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[19px] mdl:w-[22px] h-[19px] mdl:h-[22px] text-dustyGrey"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Payment method  */}
        <div className="w-full flex flex-col items-start justify-start gap-5">
          <h3 className="font-medium text-[22px] sm:text-[25px] text-white">
            Payment method
          </h3>
          <div className="w-full max-w-[90%] xs:max-w-[75%] vsm:max-w-[60%] sm:max-w-none grid grid-cols-1 sm:grid-cols-2 sxl:grid-cols-3 gap-4 sm:gap-[10px] mdl:gap-4 sxl:gap-7">
            <div className="rounded-2xl bg-iceberg py-3 px-3 flex flex-col items-start justify-between gap-4">
              <div className="w-full flex items-center justify-between gap-4">
                <div className="text-sm text-onyx">Credit Card</div>
                <CheckCircleIcon className="w-[20px] mdl:w-[23px] h-[20px] mdl:h-[23px]" />
              </div>
              <div className="w-full flex items-center justify-start gap-2">
                <div className="w-[24px] h-[15px] flex items-center justify-center relative">
                  <Image
                    src="/icons/mastercard.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-medium text-[14px] flex items-center justify-start">
                  **** **** **** 1234
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <MinusCircleIcon className="text-dustyGrey w-[21px] mdl:w-[24px] h-[21px] mdl:h-[24px]" />
              </div>
            </div>
            <div
              onClick={() => setAddMethod(true)}
              className="w-full flex flex-col items-center justify-center bg-mirage rounded-2xl py-3 px-3"
            >
              <PlusCircleIcon className="text-dustyGrey w-[60px] h-[70px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;

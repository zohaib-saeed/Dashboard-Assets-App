import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Notifications = () => {
  const [notifications1, setNotifications1] = useState(false);
  const [notifications2, setNotifications2] = useState(false);
  const [notifications3, setNotifications3] = useState(false);
  const [notifications4, setNotifications4] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="w-full flex flex-col items-start justify-start min-h-[650px] ">
      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="w-full flex flex-col items-center justify-start gap-6 sm:gap-9 ">
          <h2 className="w-full text-left text-white font-medium text-[20px] sm:text-[22px] lg:text-[25px] ">
            Notification Settings
          </h2>
          <div className="w-full grid  grid-cols-1 vsm:grid-cols-[0.8fr_1.2fr]  gap-6 vsm:gap-10 sm:gap-24">
            {/* Col 1 */}
            <div className="w-full flex flex-col items-start justify-start gap-1">
              <h3 className="font-medium text-[15px] text-white">
                Email notifications
              </h3>
              <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            {/* Col 2  */}
            <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-6">
              <div className="w-full flex items-center justify-start gap-[9px]">
                <Switch
                  checked={notifications1}
                  onChange={() => setNotifications1((prevState) => !prevState)}
                  className={`${
                    notifications1
                      ? "bg-iceberg border-iceberg h-[26px] w-[48px] border-2 border-solid "
                      : "bg-onyx border-2 border-solid border-dustyGrey h-[26px] w-[48px]"
                  } relative inline-flex  items-center rounded-full `}
                >
                  <span
                    className={`${
                      notifications1
                        ? "translate-x-6 bg-black"
                        : "translate-x-1 bg-dustyGrey"
                    } inline-block h-5 w-5 transform rounded-full  transition`}
                  />
                </Switch>
                <div className=" flex flex-col items-start justify-start gap-1">
                  <h3 className="font-medium text-[15px] text-white">
                    Notifications
                  </h3>
                  <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start gap-[9px]">
                <Switch
                  checked={notifications2}
                  onChange={() => setNotifications2((prevState) => !prevState)}
                  className={`${
                    notifications2
                      ? "bg-iceberg border-iceberg h-[26px] w-[48px] border-2 border-solid "
                      : "bg-onyx border-2 border-solid border-dustyGrey h-[26px] w-[48px]"
                  } relative inline-flex  items-center rounded-full `}
                >
                  <span
                    className={`${
                      notifications2
                        ? "translate-x-6 bg-black"
                        : "translate-x-1 bg-dustyGrey"
                    } inline-block h-5 w-5 transform rounded-full  transition`}
                  />
                </Switch>
                <div className=" flex flex-col items-start justify-start gap-1">
                  <h3 className="font-medium text-[15px] text-white">
                    Notifications
                  </h3>
                  <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[0.3px] bg-opacity-30 bg-dustyGrey "></div>
          <div className="w-full grid grid-cols-1 vsm:grid-cols-[0.8fr_1.2fr] gap-6 vsm:gap-10 sm:gap-24">
            {/* Col 1 */}
            <div className="w-full flex flex-col items-start justify-start gap-1">
              <h3 className="font-medium text-[15px] text-white">
                Push notifications
              </h3>
              <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
            </div>
            {/* Col 2  */}
            <div className="w-full flex flex-col items-start justify-start gap-6">
              <div className="w-full flex items-center justify-start gap-[9px]">
                <Switch
                  checked={pushNotifications}
                  onChange={() =>
                    setPushNotifications((prevState) => !prevState)
                  }
                  className={`${
                    pushNotifications
                      ? "bg-iceberg border-iceberg h-[26px] w-[48px] border-2 border-solid "
                      : "bg-onyx border-2 border-solid border-dustyGrey h-[26px] w-[48px]"
                  } relative inline-flex  items-center rounded-full `}
                >
                  <span
                    className={`${
                      pushNotifications
                        ? "translate-x-6 bg-black"
                        : "translate-x-1 bg-dustyGrey"
                    } inline-block h-5 w-5 transform rounded-full  transition`}
                  />
                </Switch>
                <div className=" flex flex-col items-start justify-start gap-1">
                  <h3 className="font-medium text-[15px] text-white">
                    Push notifications
                  </h3>
                  <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start gap-[9px]">
                <Switch
                  checked={notifications4}
                  onChange={() => setNotifications4((prevState) => !prevState)}
                  className={`${
                    notifications4
                      ? "bg-iceberg border-iceberg h-[26px] w-[48px] border-2 border-solid "
                      : "bg-onyx border-2 border-solid border-dustyGrey h-[26px] w-[48px]"
                  } relative inline-flex  items-center rounded-full `}
                >
                  <span
                    className={`${
                      notifications4
                        ? "translate-x-6 bg-black"
                        : "translate-x-1 bg-dustyGrey"
                    } inline-block h-5 w-5 transform rounded-full  transition`}
                  />
                </Switch>
                <div className=" flex flex-col items-start justify-start gap-1">
                  <h3 className="font-medium text-[15px] text-white">
                    Notifications
                  </h3>
                  <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-start gap-[9px]">
                <Switch
                  checked={notifications3}
                  onChange={() => setNotifications3((prevState) => !prevState)}
                  className={`${
                    notifications3
                      ? "bg-iceberg border-iceberg h-[26px] w-[48px] border-2 border-solid "
                      : "bg-onyx border-2 border-solid border-dustyGrey h-[26px] w-[48px]"
                  } relative inline-flex  items-center rounded-full `}
                >
                  <span
                    className={`${
                      notifications3
                        ? "translate-x-6 bg-black"
                        : "translate-x-1 bg-dustyGrey"
                    } inline-block h-5 w-5 transform rounded-full  transition`}
                  />
                </Switch>
                <div className=" flex flex-col items-start justify-start gap-1">
                  <h3 className="font-medium text-[15px] text-white">
                    Notifications
                  </h3>
                  <p className="text-[13px] mdl:text-sm font-normal text-dustyGrey">
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="text-white border-2 border-solid border-white text-sm font-medium bg-opacity-0 rounded-full px-6 md:px-8 py-3 md:py-4">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Notifications;

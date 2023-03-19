import React, { useState } from "react";
import CodeVerification from "./SubComps/CodeVerification";
import Login from "./SubComps/Login";

const Index = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [view, setView] = useState("email-login");

  function handleChange(event) {
    const { value } = event.target;
    setEmail(value);

    // Validate email using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  }

  return (
    <div className="w-screen h-screen min-h-[700px] flex flex-col items-center justify-center bg-[url('/images/auth-bg.png')] bg-center bg-cover bg-no-repeat">
      <div className="w-full max-w-[13350px] flex items-center lg:items-end justify-center flex-col px-5 xxs:px-8 xs:px-12 py-4 ">
        {view === "email-login" ? (
          <Login
            isValidEmail={isValidEmail}
            setIsValidEmail={setIsValidEmail}
            setView={setView}
          />
        ) : (
          <CodeVerification />
        )}
      </div>
    </div>
  );
};

export default Index;

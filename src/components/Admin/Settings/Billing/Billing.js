import React, { useState } from "react";
import PaymentMethods from "./PaymentMethods";
import AddPaymentMethod from "./AddPaymentMethod";

const Billing = () => {
  const [addMethod, setAddMethod] = useState(false);
  return (
    <>
      {addMethod ? (
        <AddPaymentMethod />
      ) : (
        <PaymentMethods addMethod={addMethod} setAddMethod={setAddMethod} />
      )}
    </>
  );
};

export default Billing;

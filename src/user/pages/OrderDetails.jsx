import React from "react";
import AddressCard from "../components/Card/AddressCard/AddressCard";
import OrderTracker from "../components/Order/OrderTracker";
import OrderDetailsCard from "../components/Card/OrderDetailsCard/OrderDetailsCard";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <div className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <OrderDetailsCard />
        ))}
      </div>
    </div>
  );
};
export default OrderDetails;

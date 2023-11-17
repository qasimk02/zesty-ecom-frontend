import React, { useEffect } from "react";
import AddressCard from "../components/Card/AddressCard/AddressCard";
import OrderTracker from "../components/Order/OrderTracker";
import OrderDetailsCard from "../components/Card/OrderDetailsCard/OrderDetailsCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../state/Order/action";
import { Box, CircularProgress } from "@mui/material";

const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const orderId = params.orderId;
    dispatch(getOrderById(orderId));
  }, [params.orderId]);

  const activeStep = {
    PLACED: 1,
    CONFIRMED: 2,
    SHIPPED: 3,
    OUTFORDELIVERY: 4,
    DELIVERED: 5,
  };

  const getActiveStep = (status) => {
    if (activeStep.hasOwnProperty(status)) {
      return activeStep[status];
    }
    return null;
  };
  return (
    <div>
      {order?.loading ? (
        <div className="flex items-center justify-center">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size={70} />
          </Box>
        </div>
      ) : (
        <div className="px-5 lg:px-20">
          <div>
            <h1 className="font-bold text-xl py-7">Delivery Address</h1>
            <AddressCard address={order?.order?.shippingAddress} />
          </div>
          <div className="py-20 text-center">
            {order?.order?.orderStatus === "CANCELLED" ? (
              <div className="text-white bg-red-700">Order Cancelled</div>
            ) : (
              <OrderTracker
                activeStep={getActiveStep(order?.order?.orderStatus)}
              />
            )}
          </div>
          <div className="space-y-5">
            {order?.orderItems?.map((item) => (
              <OrderDetailsCard
                key={item.orderItemId}
                item={item}
                status={order?.order?.orderStatus}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default OrderDetails;

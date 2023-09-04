import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderTracker from "../Order/OrderTracker";
import OrderDetailsCard from "../Card/OrderDetailsCard/OrderDetailsCard";
import { updatePayment } from "../../state/Payment/action";
import { getOrderById } from "../../state/Order/action";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState("");
  const [paymentLinkId, setPaymentLinkId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  // const [referenceId, setReferenceId] = useState("");
  // const [razorpaySignature,setRazorpaySignature] = useState("");
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const paymentId = urlParam.get("razorpay_payment_id");
    const paymentLinkId = urlParam.get("razorpay_payment_link_id");
    const paymentStatus = urlParam.get("razorpay_payment_link_status");

    const data = {
      paymentId: paymentId,
      paymentLinkId: paymentLinkId,
      paymentStatus: paymentStatus,
      orderId: orderId,
    };

    console.log(paymentId);
    dispatch(updatePayment(data));
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, mt: 2, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order get Placed Successfully
        </Alert>
      </div>
      <OrderTracker activeStep={1} />
      <div className="space-y-5 mt-5">
        {order?.orderItems?.map((item) => (
          <OrderDetailsCard item={item} key={item?.orderItemId} />
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccess;

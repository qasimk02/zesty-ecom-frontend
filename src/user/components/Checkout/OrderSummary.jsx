import React, { useEffect } from "react";
import AddressCard from "../Card/AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getOrderById } from "../../state/Order/action";
import { createPayment } from "../../state/Payment/action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const { order } = useSelector((store) => store);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const orderId = searchParams.get("order_id");

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order?.order?.shippingAddress} />
      </div>
      <div className="mt-5">
        <div className="lg:grid lg:grid-cols-3 relative">
          <div className="col-span-2 space-y-1">
            {order?.orderItems.map((item) => (
              <CartItem key={item.orderItemId} item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-2 h-[100vh] mt-5 lg:mt-0">
            <div className="border rounded-md p-3">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    $
                    {order.order?.totalPrice -
                      order.order?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Deleviry Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ${order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                onClick={handleCheckout}
                sx={{ px: "2.5rem", py: "0.rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;

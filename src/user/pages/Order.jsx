import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "../components/Card/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../state/Order/action";

const orderStatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  return (
    <div className="p-8">
      {order?.loading ? (
        <div className="flex items-center justify-center">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size={70} />
          </Box>
        </div>
      ) : (
        <Grid container sx={{ justifyContent: "space-between" }}>
          {/* Filter */}
          <Grid item xs={2.5}>
            <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
              <h1 className="font-bold text-lg">Filter</h1>
              <div className="space-y-4 mt-10">
                <h1 className="font-semibold uppercase">Order status</h1>
                {orderStatus.map((option) => (
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      defaultValue={Option.value}
                      type="checkbox"
                    />
                    <label
                      className="ml-3 text-sm text-gray-600"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="space-y-5">
              {order?.orderHistory.map((item, index) => (
                <OrderCard item={item} key={index} />
              ))}
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default Order;

import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://tse3.mm.bing.net/th?id=OIP.FgEuC3-oXlwR7QiNiHUImgHaJo&pid=Api&P=0&h=180"
              alt="shirt"
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Mild Black Shirt</p>
              <p className="opacity-50 text-sm font-semibold">Size: M</p>
              <p className="opacity-50 text-sm font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$2345</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">Your Order has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default OrderCard;

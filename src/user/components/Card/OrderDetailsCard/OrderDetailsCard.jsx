import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const OrderDetailsCard = ({ item }) => {
  return (
    <div>
      <Grid
        container
        className="shadow-xl rounded-md p-5 border"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item>
          <div className="flex items-center space-x-4">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={
                item?.product?.imageName
                  ? item?.product?.imageName
                  : "https://tse3.mm.bing.net/th?id=OIP.FgEuC3-oXlwR7QiNiHUImgHaJo&pid=Api&P=0&h=180"
              }
              alt="Men's Shirts"
            />
            <div className="space-y-2 ml-5">
              <p className="">
                {item?.product?.title
                  ? item?.product?.title
                  : "Men Slim Mid Rise Balck Shirt"}
              </p>
              <p className="space-x-5 opacity-50 text-xs font-semibold">
                <span>
                  Color: {item?.product?.color ? item?.product?.color : "Black"}
                </span>{" "}
                <span>Size: {item?.size ? item?.size.toUpperCase() : "M"}</span>
              </p>
              <p className="opacity-50 text-sm font-semibold">
                Seller: {item?.product?.brand ? item?.product?.brand : "Zesty"}
              </p>
              <p className="opacity-50 text-sm font-semibold">
                $
                {item?.totalDiscountedPrice
                  ? item?.totalDiscountedPrice
                  : "4533"}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item className="cursor-pointer">
          <Box sx={{ color: deepPurple[500] }}>
            <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
            <span>Rate & Review Product</span>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default OrderDetailsCard;

import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const OrderDetailsCard = () => {
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
              src="https://tse3.mm.bing.net/th?id=OIP.FgEuC3-oXlwR7QiNiHUImgHaJo&pid=Api&P=0&h=180"
              alt="Men's Shirts"
            />
            <div className="space-y-2 ml-5">
              <p className="">Men Slim Mid Rise Balck Shirt</p>
              <p className="space-x-5 opacity-50 text-xs font-semibold">
                <span>Color: Black</span> <span>Size: M</span>
              </p>
              <p className="opacity-50 text-sm font-semibold">Seller: Zesty</p>
              <p className="opacity-50 text-sm font-semibold">$1099</p>
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

import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { ResponsiveImages } from "../../../utilities/responsiveImage";
import { useNavigate } from "react-router-dom";

const OrderDetailsCard = ({ item, status }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        className="shadow-xl rounded-md p-5 border"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        {console.log(item)}
        <Grid item>
          <div className="flex items-center space-x-4">
            <ResponsiveImages
              imageName={item?.product?.images[0]?.imageName}
              id={item?.product?.productId}
              classess={"w-[5rem] h-[5rem] object-cover object-top"}
            />
            <div className="space-y-2 ml-5">
              <p className="">{item?.product?.name}</p>
              <p className="space-x-5 opacity-50 text-xs font-semibold">
                <span>Color: {item?.product?.color}</span>
                <span>Size: {item?.size.toUpperCase()}</span>
              </p>
              <p className="opacity-50 text-sm font-semibold">
                Seller: {item?.product?.brand}
              </p>
              <p className="opacity-50 text-sm font-semibold">
                ${item?.totalDiscountedPrice}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item className="cursor-pointer">
          <Box sx={{ color: deepPurple[500] }}>
            {status === "DELIVERED" ? (
              <p>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span
                  onClick={() =>
                    navigate(`/product/${item?.product?.productId}`)
                  }
                >
                  Rate & Review Product
                </span>
              </p>
            ) : status === "CANCELLED" ? (
              <span className="line-through">Order Cancelled</span>
            ) : (
              <span>Expected Delivery On March 03</span>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default OrderDetailsCard;

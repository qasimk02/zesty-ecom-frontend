import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
import { ResponsiveImages } from "../../../utilities/responsiveImage";

const OrderCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${item?.orderId}`)}
      className="p-5 shadow-md hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <ResponsiveImages
              imageName={item?.orderItems[0]?.product?.images[0]?.imageName}
              id={item?.orderItems[0]?.product?.productId}
              classess={"w-[5rem] h-[5rem] object-cover object-top"}
            />
            <div className="ml-5 space-y-2">
              <p className="">{item?.orderItems[0]?.product?.name}</p>
              <p className="opacity-50 text-sm font-semibold">
                Size: {item?.orderItems[0]?.size.toUpperCase()}
              </p>
              <p className="opacity-50 text-sm font-semibold">
                Color: {item?.orderItems[0]?.product?.color}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>${item?.totalDiscountedPrice}</p>
        </Grid>
        <Grid item xs={4}>
          {item?.orderStatus === "DELIVERED" && (
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
          {item?.orderStatus !== "DELIVERED" && (
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

import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";
import profile from "./qasim.png";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={12}>
          <div className="flex items-center space-x-3">
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: "56", height: "56", bgcolor: "#9155fd" }}
              >
                <img src={profile} alt="profile" />
              </Avatar>
            </Box>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-lg">Qasim</p>
                <p className="opacity-70">April 5, 2023</p>
              </div>
              <Rating value={3.5} precision={0.5} name="half-rating" readOnly />
            </div>
          </div>
          <p className="text-justify opacity-80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis magni accusantium sequi, odit cupiditate iusto cumque
            maiores unde! Id dolorem totam asperiores consectetur? Minus, velit.
            Atque tenetur possimus voluptas tempore?
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCard;

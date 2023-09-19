import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";
import profile from "./qasim.png";

const ProductReviewCard = ({ review }) => {
  const formatDate = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const formattedDate = `${monthNames[date[1] - 1]} ${date[2]}, ${date[0]}`;

    return formattedDate;
  };
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
                {review?.user?.firstName[0].toUpperCase()}
                {/* <img src={profile} alt="profile" /> */}
              </Avatar>
            </Box>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-lg">
                  {review?.user?.firstName} {review?.user?.lastName}
                </p>
                <p className="opacity-70">{formatDate(review?.createdAt)}</p>
              </div>
              <Rating
                value={review?.rating?.star}
                precision={0.5}
                name="half-rating"
                readOnly
              />
            </div>
          </div>
          <h3 className="font-bold">{review?.subject}</h3>
          <p className="text-justify opacity-80">{review?.content}</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCard;

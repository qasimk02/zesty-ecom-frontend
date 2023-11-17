import React from "react";
import { Grid, Skeleton } from "@mui/material";

const ProductDetailsPageLoader = () => {
  return (
    <Grid
      container
      sx={{ width: "100vw", display: "flex", justifyContent: "center" }}
    >
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Skeleton
          animation="wave"
          variant="rect"
          width={300}
          height={400}
          sx={{ borderRadius: 2, marginBottom: 1 }}
        />
        <div className="flex space-x-1 justify-center items-center">
          <Skeleton
            animation="wave"
            variant="rect"
            width={50}
            height={50}
            sx={{ borderRadius: 2 }}
          />
          <Skeleton
            animation="wave"
            variant="rect"
            width={50}
            height={50}
            sx={{ borderRadius: 2 }}
          />
        </div>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton animation="wave" variant="text" width={100} />
            <Skeleton animation="wave" variant="text" width={50} />
            <Skeleton animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={160} />
            <Skeleton animation="wave" variant="rect" width={70} height={50} />
            <Skeleton animation="wave" variant="rect" width={100} height={40} />
          </div>
          <div className="space-y-2">
            <Skeleton animation="wave" variant="text" width={400} />
            <Skeleton animation="wave" variant="text" width={400} />
            <Skeleton animation="wave" variant="text" width={400} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductDetailsPageLoader;

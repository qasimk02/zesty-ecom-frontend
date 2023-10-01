import { Grid, Skeleton } from "@mui/material";
import ProductCardLoader from "./ProductCardLoader";

const ProductPageLoader = () => {
  return (
    <div className="p-3 mt-5">
      <Grid container spacing={5}>
        {/* filter grids */}
        <Grid
          item
          sm={3}
          container
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"100%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"70%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"80%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"60%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"80%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"90%"} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="text" width={"60%"} />
          </Grid>
          <div className="mt-4 space-y-2">
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" variant="text" width={"100%"} />
            </Grid>
          </div>
        </Grid>
        {/* product grids */}
        <Grid item sm={9} container>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
          <Grid item xs={6} sm={4} lg={3} sx={{ marginBottom: 3 }}>
            <ProductCardLoader />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPageLoader;

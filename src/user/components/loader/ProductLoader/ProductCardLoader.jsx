import { Grid, Skeleton } from "@mui/material";

const ProductCardLoader = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Skeleton
          animation="wave"
          variant="rectangle"
          width={150}
          height={200}
        />
      </Grid>
      <Grid item xs={12}>
        <Skeleton animation="wave" variant="text" width={50} />
      </Grid>
      <Grid item xs={12}>
        <Skeleton animation="wave" variant="text" width={150} />
      </Grid>
    </Grid>
  );
};
export default ProductCardLoader;

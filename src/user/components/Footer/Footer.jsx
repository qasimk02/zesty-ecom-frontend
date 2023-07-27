import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h5">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Career
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Partners
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Press
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h5">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h5">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h5">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h5">
              Terms & Conditions
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Zesty. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Qasim.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Github Links &nbsp;
            <Link
              href="https://github.com/qasimk02/zesty-ecom-backend"
              color="inherit"
              underline="always"
              target="_blank"
            >
              Backend
            </Link>
            &nbsp;
            <Link
              href="https://github.com/qasimk02/zesty-ecom-frontend"
              color="inherit"
              underline="always"
              target="_blank"
            >
              Frontend
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;

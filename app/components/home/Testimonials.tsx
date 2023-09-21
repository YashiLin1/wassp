//section of testimonials

import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box
      sx={{
        pb: {
          xs: 7.5,
          md: 15,
        },
        pt: {
          xs: 15,
          md: 30,
        },
      }}
    >
      <Grid container sx={{}}>
        <Grid
          item
          xs={2}
          md={1}
          sx={{
            pb: 4,
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Typography variant="h6">04</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h5">TESTIMONIALS</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              pb: 4,
            }}
          >
            “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING
            ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
          </Typography>
          <Typography variant="body1">Dominique Faou </Typography>
          <Typography variant="body1">Owner/Skipper, France</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;

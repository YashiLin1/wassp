import React from "react";
import { Grid, Box, Stack, Typography, Link, Button } from "@mui/material";
import { animated } from "@react-spring/web";

const Navbar = () => {
  return (
    // No animation now. Struggling with useScroll, maybe due to the Parallaxlayer. Will add navbar style animation on scroll.
    <animated.nav
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.7819502801120448) 0%, rgba(0,0,0,0) 48%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#000000',GradientType=1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          p: {
            xs: 2,
            md: 5,
          },
          flexGrow: 1,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Box
              sx={{
                width: {
                  xs: 103,
                  md: 201,
                },
              }}
            >
              <img src="logo.svg" style={{ width: "100%" }} alt="Logo" />
            </Box>
          </Grid>
          <Grid item>
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 2, md: 4 }}
            >
              <Button sx={{ textDecoration: "none", p: 0 }}>
                <Typography variant="h5">SEARCH</Typography>
              </Button>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant="h5">LOGIN</Typography>
              </Link>
              <Link sx={{ textDecoration: "none" }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                  }}
                >
                  <Typography variant="h5">EN</Typography>
                </Stack>
              </Link>
              <Button
                sx={{
                  p: 0,
                  width: {
                    xs: 18,
                    md: 31,
                  },
                  minWidth: 0,
                }}
              >
                <img src="Menu.svg" alt="menu" />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </animated.nav>
  );
};

export default Navbar;

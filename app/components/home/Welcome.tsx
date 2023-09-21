//Second section of homepage

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavBtn from "../ui/NavBtn";
import styles from "./home.module.css";
import { useInView } from "@react-spring/web";
import FadeInUp from "../animation/FadeInUp";

const Welcome = () => {
  const buttonText = "Our Story";

  const [ref, inView] = useInView();

  return (
    <section>
      <Box
        sx={{
          height: "90vh",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          position: "relative",
          px: {
            md: 6,
            xs: 2,
          },
          py: {
            xs: 20,
            md: 30,
          },
        }}
        className={styles.welcomeBackground}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url('/Layers.svg')`,
            right: 0,
            bottom: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              xs: "0% 15%",
              lg: "0% 0%",
            },
            backgroundSize: {
              xs: "120%",
              lg: "60%",
            },
          }}
        ></Box>
        <Box>
          <Grid
            container
            sx={{
              pb: {
                xs: 3,
                lg: 4,
              },
            }}
          >
            <Grid item md={0} lg={4}></Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">
                welcome to the world of wassp multibeam
              </Typography>
            </Grid>
          </Grid>
          <Grid container ref={ref}>
            <Grid item md={0} lg={4}></Grid>
            <Grid
              item
              xs={2}
              md={1}
              sx={{
                pb: {
                  xs: 3.6,
                },
              }}
            >
              <FadeInUp isVisible={inView} delay={100}>
                <Typography variant="h6">01</Typography>
              </FadeInUp>
            </Grid>
            <Grid item xs={6} md={2} sx={{ pb: 4 }}>
              <FadeInUp isVisible={inView} delay={300}>
                <Typography variant="h5">ABOUT WASSP</Typography>
              </FadeInUp>
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
              <FadeInUp isVisible={inView} delay={500}>
                <Typography variant="body1" sx={{ pb: { xs: 3.8 } }}>
                  WASSP, a powerful multi-beam sounder with 120-degree coverage
                  and models for deep exploration, offers unparalleled accuracy,
                  detail, and versatility. Target fish with steerable sounders,
                  generate real-time 3D charts, map fish in water, and make
                  better decisions with the user-friendly advanced mode.
                </Typography>
              </FadeInUp>
              <FadeInUp isVisible={inView} delay={700}>
                <NavBtn text={buttonText} />
              </FadeInUp>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Welcome;

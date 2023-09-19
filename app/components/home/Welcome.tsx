//Second section of homepage

import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import NavBtn from '../ui/NavBtn';
import styles from './home.module.css';

const Welcome = () => {
  const buttonText = "Our Story";
  return (
    <section>
      <Box
        sx={{
          flexGrow: 1,
           
          display: 'flex',
          alignItems: 'center',
          px: {
            md: 6,
            xs: 2
          },
          py:{
            xs:30,
 
          },
        }} className={styles.welcomeBackground}
      >
        <Box>
          <Grid container sx={{
            pb: {
              xs: 2,
              lg: 4,
            }
          }}>
            <Grid item md={0} lg={4}></Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">
                welcome to the world of wassp multibeam
              </Typography>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={0} lg={4} ></Grid>
            <Grid item xs={2} md={1} sx={{
              pb: {
                xs: 4,
              }
            }}>
              <Typography variant="h5">
                01
              </Typography>
            </Grid>
            <Grid item xs={6} md={2} sx={{ pb: 4 }}>
              <Typography variant="h6">
                ABOUT WASSP
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} lg={3} >
              <Typography variant="body1" sx={{ pb: { xs: 3.8 } }}>
                  WASSP, a powerful multi-beam sounder with 120-degree coverage and
                  models for deep exploration, offers unparalleled accuracy, detail,
                  and versatility. Target fish with steerable sounders, generate
                  real-time 3D charts, map fish in water, and make better decisions
                  with the user-friendly advanced mode.
              </Typography>
              <NavBtn text={buttonText} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Welcome
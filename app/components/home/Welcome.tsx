import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import NavBtn from '../ui/button';
import styles from './home.module.css';

const Welcome = () => {
  const buttonText = "Our Story";
  return (
    <section>
      <Box sx={{ flexGrow: 1 }} className={styles.section}>
        <Grid container sx={{
            pt:{
              xs:5,
              lg:30,
            },
            pb: {
              xs: 5,
              lg: 5,
            }
          }}>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1">
              welcome to the world of wassp multibeam
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={6} md={1}>
            <Typography variant="h6">
              01
            </Typography>
          </Grid>
          <Grid item xs={6} md={1}>

            <Typography variant="h6">
              ABOUT WASSP
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <p>WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</p>
            <NavBtn text={buttonText} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Welcome
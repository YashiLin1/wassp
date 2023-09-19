//First section of homepage

import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import NavBtn from '../ui/NavBtn';
import styles from './home.module.css';

const Hero = () => {
  const buttonText = "Contact Us";
  return (
    <Box className={styles.section}
      sx={{
        height: '100vh',
        px: {
          xs: 2,
          md: 4,
        },
      }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          zIndex: 2, position: 'relative',
          height: '100%',
        }} >
        <Grid container
          sx={{
            pt: {
              xs: 15,
              sm: 30,
              lg: '25vh',
            }
          }}>
          <Grid item xs={11} md={9} lg={6} >
            <Typography variant="h5" 
            sx={{
              fontSize: {
                xs: '16px',
                md: '24px',
                xl: '36px'
              },
              mb:1
            }}>
              SEA IT ALL
            </Typography>
            <Typography variant="h1" sx={{
            }}>
              MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end"
          sx={{
            zIndex: 2,
            position: 'relative',
            pb: {
              xs: 6,
              lg: 10,
              xl:12
            }
          }}>
          <Grid item md={0} lg={4} xl={4}></Grid>
          <Grid item xs={8} md={7} lg={2} xl={2}
            sx={{
              pb: {
                xs: 4,
                lg: 0,
              }
            }}>
            <Typography variant="body1" sx={{
            }}>
              WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.
            </Typography>
          </Grid>
          <Grid item xs={0} md={0} lg={4}></Grid>
          <Grid item xs={12} lg={2} sx={{
            justifyItems: "end"
          }}>
            <NavBtn text={buttonText} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
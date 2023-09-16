import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import NavBtn from '../ui/button';
import styles from './home.module.css';

const Hero = () => {
  const buttonText = "Contact Us";

  return (
    <Box className={styles.section}
      sx={{
        backgroundImage: 'url(/01.jpg)',
        height: '100vh',
        px: {
          md: 6,
          xs: 2
        }
      }}>
      <div className={styles.overlay}></div>
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
              xs: 10,
              sm: 30,
              lg: '20vh',
            }
          }}>
          <Grid item xs={12} md={11} lg={9} xl={6}>
            <Typography variant="h4">SEA IT ALL</Typography>
            <Typography variant="h1" sx={{
            }}>
              multibeam sonar products & solutions.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end"
          sx={{
            zIndex: 2,
            position: 'relative',
            pb: {
              xs: 5,
              lg: 10,
            }
          }}>
          <Grid item md={0} lg={3} xl={4}></Grid>
          <Grid item xs={12} md={10} lg={3} xl={2}
            sx={{
              pb: {
                xs: 6,
                lg: 0,
              }
            }}>
            <Typography variant="body1" sx={{
            }}>
              WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.
            </Typography>
          </Grid>
          <Grid item xs={0} md={0} lg={3} xl={4}></Grid>
          <Grid item md={12} lg={2}>
            <NavBtn text={buttonText} />
          </Grid>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Hero
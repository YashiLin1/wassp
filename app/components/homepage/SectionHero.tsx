import React from 'react'
import Stack from '@mui/material/Box';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBtn from '../ui/button';
import styles from './homepage.module.css';

const SectionHero = () => {
  const buttonText = "Contact Us";

  return (
    <Stack className={styles.section}
      sx={{
        backgroundImage: 'url(/01.jpg)',
        height: '100vh',
        px: 6,
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
              lg: 50,
            }
          }}>
          <Grid item xs={12} md={11} lg={8} xl={6}>
            <h4>SEA IT ALL</h4>
            <h1>multibeam sonar products & solutions.</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" alignItems="flex-end"
          sx={{
            zIndex: 2,
            position: 'relative',
            pb: {
              xs: 5,
              lg: 10,
            }
          }}>
          <Grid item xs={12} md={2}>
            <p>WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.</p>
          </Grid>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={12} md={2} >
            <NavBtn text={buttonText} />
          </Grid>
        </Grid>
      </Grid>

    </Stack>
  )
}

export default SectionHero
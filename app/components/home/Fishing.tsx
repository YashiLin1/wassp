//Section of fishing

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './home.module.css';
import LinkBtnA from '../ui/LinkBtnA';
import ProgressBar from '../ui/ProgressBar';
import { useInView } from '@react-spring/web';
import FadeInUp from '../animation/FadeInUp';


const Fishing = () => {
  const number = 30; //progress persentage of the progress bar 
  const [ref, inView] = useInView();

  const linkText = "Explore Now";
  return (
    <Box sx={{
      flexGrow: 1,
      height: '100vh',
      px: {
        xs: 2,
        md: 4,
      },
    }} className={styles.section} >
      {/* <div className={styles.fishingBackground}></div> */}
      {/* background already written in parallax layer */}
      <Grid container
        justifyContent="space-between"
        sx={{
          height: '100vh',
          display: 'flex',
          zIndex: 2,
          position: 'relative',
          alignItems: {
            lg: 'flex-end',
          },
          alignContent: {
            xs: 'space-between',
            lg: 'flex-end'
          },
          py: {
            xs: 4,
            md: 6,
          }
        }}
      >
        <Grid item xs={12} lg={4} sx={{}}>
          <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ pb: 3.8 }}
          >
            <Grid item>
              <Typography variant='h6'>01</Typography>
            </Grid>
            <Grid item xs={4} >
              <ProgressBar number={number} />
            </Grid>
            <Grid item>
              <Typography variant='h6'>03</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{
            pb: 4,
            display: {
              xs: 'none',
              lg: 'block'
            }
          }}>
            (FISHING SERIES)
          </Typography>
          <Typography variant="h3">f - series</Typography>
        </Grid>
        <Grid item xs={11} lg={3} ref={ref}>
          <FadeInUp isVisible={inView} delay={100}>
            <Typography variant="body1" sx={{
              pb: 2
            }}>
              F - SERIES
            </Typography>
          </FadeInUp>
          <FadeInUp isVisible={inView} delay={300}>
            <Typography variant="body1" sx={{
              pb: {
                xs: 3,
                md: 3.8,
              }
            }}>
              WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.
            </Typography>
          </FadeInUp>
          <FadeInUp isVisible={inView} delay={500}>
            <LinkBtnA text={linkText} url={'#'} />
          </FadeInUp>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Fishing
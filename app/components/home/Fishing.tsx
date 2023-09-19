//Section of fishing

import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
import styles from './home.module.css';
import LinkBtn from '../ui/LinkBtnA';


const Fishing = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          <Grid container spacing={2} sx={{ pb: 3.8 }}>
            <Grid item>
              <Typography variant='h6'>01</Typography>
            </Grid>
            <Grid item xs={4} sx={{ alignContent: 'center' }}>
              <LinearProgress variant="determinate" value={progress} />
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
        <Grid item xs={11} lg={3} >
          <Typography variant="body1" sx={{
            pb: 2
          }}>
            F - SERIES
          </Typography>
          <Typography variant="body1" sx={{
            pb: {
              xs: 3,
              md: 3.8,
            }
          }}>
            WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.
          </Typography>
          <LinkBtn text={linkText} />
        </Grid>
      </Grid>
    </Box >
  )
}

export default Fishing
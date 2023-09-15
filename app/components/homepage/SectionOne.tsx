import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBtn from '../ui/button';

export const SectionOne = () => {
  const buttonText = "Contact Us";

  return (
    <section style={{ backgroundImage: 'url(/01.jpg)' }}>
      <div className='hero-overlay'></div>
      <Box
        sx={{ flexGrow: 1, zIndex: 2, position: 'relative', height: '100vh', pt: 3, px: 2 }}
        md={{ pt: 6, px: 5 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h4>SEA IT ALL</h4>
            <h1>multibeam sonar products & solutions.</h1>
          </Grid>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={12} md={2}>
            <p>WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.</p>
          </Grid>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid>
            <NavBtn text={buttonText} />
          </Grid>
        </Grid>
      </Box>

    </section>
  );
};

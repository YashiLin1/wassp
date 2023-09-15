import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBtn from '../ui/button';


const SectionTwo = () => {
  const buttonText = "Our Story";
  return (
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1>welcome to the world of wassp multibeam</h1>
          </Grid>
          <Grid item xs={0} md={4}>
          </Grid>
          <Grid item xs={6} md={3}>
            <h5>01</h5>
            <h5>ABOUT WASSP</h5>
          </Grid>
          <Grid item xs={12} md={3}>
          <p>WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</p>
          <NavBtn text={buttonText}/>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default SectionTwo;
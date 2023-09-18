import React from 'react'
import { Paper, Grid, Box, Stack, Typography, Link } from '@mui/material';


const Navbar = () => {
  return (
    <Paper elevation={0} sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'transparent',
      zIndex: 50,
    }}>
      <Box sx={{
        p: 5,
        flexGrow: 1,
      }}>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <img src="logo.svg" style={{ width: '100%' }} alt="Logo" />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={4}>
              <Link><Typography variant='h5'>SEARCH</Typography></Link>
              <Link><Typography variant='h5'>LOGIN</Typography></Link>
              <Link>
                <Stack direction="row" spacing={2}>
                  <Typography variant='h5'>EN</Typography>
                  <img src="ArrowDown.svg" alt="logo" />

                </Stack>

              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default Navbar
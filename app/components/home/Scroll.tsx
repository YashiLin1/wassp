import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import styles from './home.module.css';

const Scroll = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.section}>
      <div>
          <Typography variant='h4'>SBG SYSTEMS</Typography>
          {/* <LogoTag></LogoTag> */}
        </div>

    </Box>
  )
}

export default Scroll
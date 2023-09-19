import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Marquee from "react-fast-marquee";
import styles from './home.module.css';

const items = [
  { name: 'SBG SYSTEMS', logo: '/SbgSystems.svg' },
  { name: 'GPA SEABOTS', logo: '/Seabots.svg' },
  { name: 'HEMISPHERE', logo: '/Hemisphere.svg' },
];

const Scroll = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}>
      <Box
        sx={{
          borderTop: '0.1rem solid white',
          borderBottom: '0.1rem solid white',
          py: {
            xs: 4,
            lg: 4,
          },
        }}
      >
        <Marquee>
          <Stack direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
            sx={{
              whiteSpace: 'nowrap',
              mr: 4,
              overFlow:'hidden',
            }}
          >
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <Typography variant="h4">{item.name}</Typography>
                <Box
                  component="span"
                  sx={{
                    py: 1,
                    px: 2,
                    border: '1px solid white',
                    borderRadius: '50px',
                  }}
                >
                  <img src={item.logo} alt={`${item.name} Logo`} />
                </Box>
              </React.Fragment>
            ))}

          </Stack>
        </Marquee>
      </Box>
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayRight}></div>
    </Box>
  )
}

export default Scroll
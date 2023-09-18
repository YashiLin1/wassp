import React from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import styles from './home.module.css';
const photoUrls = ['05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];

const Photos = () => {
  return (
    <Box sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      position:'relative'
    }}>
      {photoUrls.map((photoUrl, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor:'transparent',
            border:'none',
            display: 'inline-block',
            mr: 2,
            width: {
              xs: 100,
              md: 121,
              xl: 220,
            },
            height: {
              xs: 100,
              md: 111,
              xl: 210,
            }
          }}
        >
          <CardMedia
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'relative',
 
            }}
            image={photoUrl}
            title={`Photo ${index + 1}`}
            className={styles.overlayImage}
          />
        </Card>
      ))}
      <div className={styles.overlayLeft}></div>
      <div className={styles.overlayRight}></div>
    </Box>
  );
};

export default Photos;
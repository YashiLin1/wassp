//Section of news

import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import styles from './home.module.css';

const newsData = [
  {
    id: 1,
    title: 'South Pacific reopens for superyachts, a top charter spot.',
    image: '03.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'WASSP \'s Bluebeam brings major feature advancements',
    image: '04.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'South Pacific reopens for superyachts, a top charter spot.',
    image: '04.jpg',
    link: '#',
  },

];

const News = () => {
  return (
    <Box
      sx={{
        pl: {
          xs: 2,
          md: 4,
        },
        pt: {
          xs: 7.5,
          md: 15,
        },
        pb: {
          xs: 15,
          md: 30,
        },
        zIndex:6,
      }}>
      <Grid
        container
        sx={{
          position: 'relative',
        }}>
        <Grid item xs={2} md={1} sx={{ pb: 4 }}>
          <Typography variant="h6">05</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h5">LATEST NEWS</Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{}}>
          <Box
            sx={{
              width: '100%',
              overflowY: 'hidden',
              overflowX: 'scroll',
              whiteSpace: 'nowrap',
            }}
          >
            {newsData.map((newsItem) => (
              <Card
                key={newsItem.id}
                sx={{
                  zIndex:40,
                  display: 'inline-block',
                  mr: {
                    xs:'10px',
                    xl:'18px'
                  },
                  width: {
                    xs:'95%',
                    md:300,
                    lg:409,
                    xl:450,
                  },
                  backgroundColor: 'transparent',
                  border: '0.1rem solid #ffffff8c',
                }}
              >
                <CardMedia
                  sx={{
                    height: {
                      xs:155,
                      md:200,
                      lg:227,
                      xl:300,
                    },
                    m: '20px',
                    mb: '10px',
                    position: 'relative',
                  }}
                  image={newsItem.image}
                  className={styles.photosOverlay}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      fontSize: '24px',
                      mb: '60px',
                      whiteSpace: 'normal',
                    }}
                  >
                    {newsItem.title}
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        size="small"
                        sx={{
                          m: 0,
                          p: 0,
                          minWidth: 'inherit',
                          fontSize: '14px',
                        }}
                      >
                        View
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        size="small"
                        sx={{ m: 0, p: 0, minWidth: 'inherit' }}
                      >
                        <Image
                          src="/ArrowRight.svg"
                          height={35}
                          width={35}
                          className={styles.svg}
                          alt="Arrow Right"
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
          <div className={styles.overlayRight}></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default News;

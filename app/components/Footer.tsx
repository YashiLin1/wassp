import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import NavBtn from './ui/NavBtn';
import LinkBtnA from './ui/LinkBtnA';
import LinkBtnB from './ui/LinkBtnB';

const Footer = () => {
  const buttonText = "Contact";
  const linkText = "Subscribe to our newsletter";
  return (
    <Box sx={{
      px: {
        xs: 2,
        md: 6,
      },
      pt: {
        xs: 7.5,
        md: 15
      }
    }}>
      <Grid container>
        <Grid item xs={11} md={3}>
          <Typography variant='body1'
            sx={{
              mb: '56px',
            }}>
            Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.</Typography>
          <Box
            sx={{
              mb: '84px',
            }}
          ><NavBtn text={buttonText}
            />
          </Box>
          <LinkBtnA text={linkText} />
        </Grid>

        <Grid item xs={0} md={5}></Grid>

        <Grid item xs={6} md={3}>
          <Box sx={{
            mb: 2
          }}>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnA text='Home' /></Box>

            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Products' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='About ENL' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Multibeam Technology' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='News' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Resources' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Contact' /></Box>
          </Box>
          <Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Facebook' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Instagram' /></Box>
            <Box sx={{
              mb: '2px'
            }}><LinkBtnB text='Youtube' /></Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={1}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{
              flexGrow: 1
            }}
          >
            <Grid item sx={{
              mb: 2
            }}>
              <Box sx={{
                mb: '2px'
              }}><LinkBtnB text='Offices' /></Box>
              <Box sx={{
                mb: '2px'
              }}><LinkBtnB text='Auckland - NZ' /></Box>
              <Box sx={{
                mb: '2px'
              }}><LinkBtnB text='Essex - UK' /></Box>
            </Grid>
            <Grid item>
              <LinkBtnB text='©2023 WASSP' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{
        py: {
          xs: 7,
          md: 12,
        },
        opacity: '0.04'
      }}>
        <img src="WasspMultibeam.svg" style={{ width: '100%' }} alt="WasspMultibeam" />
      </Box>
    </Box>
  )
}

export default Footer
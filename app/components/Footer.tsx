import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import NavBtn from './ui/NavBtn';
import LinkBtnA from './ui/LinkBtnA';
import LinkBtnB from './ui/LinkBtnB';

const Footer = () => {
  const buttonText = "Contact";
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
              mb: {
                xs: 5,
                md: 7
              }
            }}>
            Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id.</Typography>
          <Box
            sx={{
              mb: {
                xs: 5,
                md: 7
              }
            }}
          ><NavBtn text={buttonText}
            />
          </Box>
          <Box
            sx={{
              mb: {
                xs: 7.6,
                md:0,
              }
            }}
          >
            <LinkBtnA text={"Subscribe to our newsletter"} />
          </Box>
        </Grid>
        <Grid item xs={0} md={5}></Grid>
        <Grid item xs={6} md={2}>
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
        <Grid item xs={6} md={2}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{
              height:'100%'
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
        opacity: '0.9'
      }}>
        <img src="WasspMultibeam_blue.svg" style={{ width: '100%' }} alt="WasspMultibeam" />
      </Box>
    </Box>
  )
}

export default Footer
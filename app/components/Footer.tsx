import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import NavBtn from './ui/NavBtn';
import LinkBtnA from './ui/LinkBtnA';
import LinkBtnB from './ui/LinkBtnB';

const Footer = () => {
  const buttonText = "Contact";

  const pageLinks = [
    { text: 'Home', url: '/', buttonType: 'LinkBtnA' },
    { text: 'Products', url: '/products', buttonType: 'LinkBtnB' },
    { text: 'About ENL', url: '/about', buttonType: 'LinkBtnB' },
    { text: 'Multibeam Technology', url: '/technology', buttonType: 'LinkBtnB' },
    { text: 'News', url: '/news', buttonType: 'LinkBtnB' },
    { text: 'Resources', url: '/resources', buttonType: 'LinkBtnB' },
    { text: 'Contact', url: '/contact', buttonType: 'LinkBtnB' },
  ];

  const socialMedia = [
    { text: 'Facebook', url: 'https://www.facebook.com/' },
    { text: 'Instagram', url: 'https://www.instagram.com/' },
    { text: 'Youtube', url: 'https://www.youtube.com/' },
  ];

  const offices = [
    { text: 'Auckland - NZ', url: '/auckland' },
    { text: 'Essex - UK', url: '/essex' },
  ];

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
                md: 0,
              }
            }}>
            <LinkBtnA text={"Subscribe to our newsletter"} url="#" />
          </Box>
        </Grid>
        <Grid item xs={0} md={5}></Grid>
        <Grid item xs={6} md={2}>
          <Box sx={{
            mb: 2
          }}>
            {pageLinks.map((link, index) => (
              <Box key={index} sx={{
                mb: {
                  xs: .6,
                  md: .8,
                }
              }}>
                {/* LinkBtnA has an underline, when hover on the underline animate out. */}
                {/* LinkBtnB has no underline, when hover on the underline animate in  */}
                {/* Can be useful when in different pages */}
                {link.buttonType === 'LinkBtnA' ? (
                  <LinkBtnA text={link.text} url={link.url}/>
                ) : (
                  <LinkBtnB text={link.text} url={link.url}/>
                )}
              </Box>
            ))}
          </Box>
          {socialMedia.map((link, index) => (
            <Box key={index} sx={{
              mb: {
                xs: .6,
                md: .8,
              }
            }}>
            <LinkBtnB text={link.text} url={link.url}/>
            </Box>
          ))}

        </Grid>
        <Grid item xs={6} md={2}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{
              height: '100%'
            }}>
            <Grid item sx={{
              mb: 2
            }}>
          {offices.map((link, index) => (
            <Box key={index} sx={{
              mb: {
                xs: .6,
                md: .8,
              }
            }}>
            <LinkBtnB text={link.text} url={link.url}/>
            </Box>
          ))}


            </Grid>
            <Grid item>
              <LinkBtnB text='©2023 WASSP' url="#"/>
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
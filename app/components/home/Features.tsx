import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Tags from '../ui/Tags';

const Features = () => {
  const tags = [
    { number: '01', 
      title: 'High Resolution Chirp Sounder',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.'
    },
    { number: '02',
      title: '120° side to side coverage',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna euismod, gravida velit eu, tincidunt purus. Suspendisse potenti. Vivamus a massa eu est efficitur vehicula.'
    },
    { number: '03',
      title: 'Realtime CDX Mapping',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dolor a quam bibendum tincidunt. Fusce feugiat libero ac tortor bibendum, non eleifend libero finibus.'
    },
    { number: '04',
      title: 'Realtime 3D View CDX',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla neque in justo hendrerit, ut faucibus purus interdum. Quisque vestibulum urna nec vehicula.'
    },
    { number: '05',
      title: 'Backscatter license',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis elit a turpis imperdiet, nec facilisis mi feugiat. Aenean in est a mi malesuada hendrerit.'
    },
    { number: '06',
      title: 'High Resolution Side Scan',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut justo bibendum, volutpat libero sed, bibendum est. Aliquam eget dolor in metus euismod blandit.'
    },
    { number: '07',
      title: 'Third-Party Software Integration',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non erat vel augue suscipit consectetur. Nulla facilisi. Sed id ipsum quis sapien consectetur malesuada.'
    },
    { number: '08',
      title: 'Multiple WASSP Transducers',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ullamcorper purus, ac malesuada ex. Fusce eu dui vel ipsum fermentum elementum.'
    }
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        px: {
          xs: 2,
          md: 4,
          
        },
      }}
    >
      <Grid container>
        <Grid item xs={2} md={1} sx={{
          pb: {
            xs: 4,
          },
        }}>
          <Typography variant="h6">
            03
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} sx={{ pb: 4 }}>
          <Typography variant="h5">
            FEATURES
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{mb:2.2}}>
          <Tags tags={tags} />
        </Grid>
        <Grid item xs={0} md={4}></Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{ mb: 3 }}>08</Typography>
          <Typography variant='subtitle1' sx={{ mb: 2 }}>Title</Typography>
          <Typography variant='body1' >Paragraph</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Tag from '../ui/Tab';

const Features = () => {
  const tags = [
    {
      number: '01',
      title: 'High Resolution Chirp Sounder',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '02',
      title: '120° side to side coverage',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '03',
      title: 'Realtime CDX Mapping',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '04',
      title: 'Realtime 3D View CDX',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '05',
      title: 'Backscatter license',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '06',
      title: 'High Resolution Side Scan',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '07',
      title: 'Third-Party Software Integration',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    },
    {
      number: '08',
      title: 'Multiple WASSP Transducers',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. '
    }
  ];

  let [selectedTag, setSelectedTag] = useState<Tag | null>(tags[0] || null);
  const handleTagClick = (tag: Tag) => {
    setSelectedTag(tag);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        pt:{
          xs:10,
          md:12,
          lg:15,
        },
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
        <Grid item xs={12} md={8} 
        sx={{ mb: 2.2,
          overflowX:{
            xs:'scroll',
            md:'inherit'
          },
          height:{
            xs:45,
            md:'inherit',
          }
        }}>
          <Tag tags={tags} onTagClick={handleTagClick} selectedTag={selectedTag} />
        </Grid>
        <Grid item xs={0} md={4}></Grid>
        <Grid item xs={12} md={6}>
          {selectedTag && (
            <>
              <Typography variant="subtitle2" sx={{ mb: 3 }}>
                {selectedTag.number}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                {selectedTag.title}
              </Typography>
              <Typography variant="body1">{selectedTag.paragraph}</Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
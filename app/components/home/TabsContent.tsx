import React from 'react';
import { Typography } from '@mui/material';
import TabsGroup from './TabsGroup';

interface TabsContentProps {
  selectedTab: TabsGroup | null;
}

const TabsContent: React.FC<TabsContentProps> = ({ selectedTab }) => {
  return (
    <>
      {selectedTab && (
        <>
          <Typography variant="subtitle2" sx={{ mb: 3 }}>
            {selectedTab.number}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {selectedTab.title}
          </Typography>
          <Typography variant="body1">{selectedTab.paragraph}</Typography>
        </>
      )}
    </>
  );
};

export default TabsContent;
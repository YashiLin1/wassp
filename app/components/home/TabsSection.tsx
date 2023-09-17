import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from '../ui/TabBtn.module.css';

interface TabsSection {
  number: string;
  title: string;
  paragraph: string;
}

interface TabsProps {
  TabsContent: TabsSection[];
  onTabClick: (Tab: TabsSection) => void;
  selectedTab: TabsSection | null;
}

const TabsSection: React.FC<TabsProps> = ({ TabsContent, onTabClick, selectedTab }) => {
  return (
    <div>
      {TabsContent.map((Tab) => (
        <Button
          key={Tab.number}
          className={`${styles.TabBtn} ${
            selectedTab && selectedTab.number === Tab.number ? styles.selected : ''
          }`}
          sx={{
            py: 1,
            px: 4.4,
            mb: 1.2,
            mr: 1.4,
          }}
          onClick={() => onTabClick(Tab)}
        >
          <Typography variant="h6" sx={{ pr: 2 }}>
            {Tab.number}
          </Typography>
          <Typography variant="body2">{Tab.title}</Typography>
        </Button>
      ))}
    </div>
  );
};

export default TabsSection;
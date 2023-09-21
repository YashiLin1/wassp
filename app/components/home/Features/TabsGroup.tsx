import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import styles from "../../ui/TabBtn.module.css";

interface TabsGroup {
  number: string;
  title: string;
  paragraph: string;
}

interface TabsProps {
  TabsNames: TabsGroup[];
  onTabClick: (Tab: TabsGroup) => void;
  selectedTab: TabsGroup | null;
}

const TabsGroup: React.FC<TabsProps> = ({
  TabsNames,
  onTabClick,
  selectedTab,
}) => {
  return (
    <Stack
      sx={{
        width: {
          xs: "100%",
          md: "inherit",
        },
        whiteSpace: {
          xs: "nowrap",
          md: "inherit",
        },
        overflowY: {
          xs: "hidden",
          lg: "inherit",
        },
        scrollbarWidth: "none",
      }}
    >
      <div>
        {TabsNames.map((Tab) => (
          <Button
            key={Tab.number}
            className={`${styles.TabBtn} ${
              selectedTab && selectedTab.number === Tab.number
                ? styles.selected
                : ""
            }`}
            sx={{
              py: {
                xs: 1,
                xl: 1.2,
              },
              px: {
                xs: 4.3,
                xl: 6,
              },
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
    </Stack>
  );
};

export default TabsGroup;

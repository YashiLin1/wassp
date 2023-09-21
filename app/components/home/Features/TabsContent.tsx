import React from "react";
import { Typography } from "@mui/material";
import TabsGroup from "./TabsGroup";
import FadeIn from "../../animation/FadeIn";

interface TabsContentProps {
  selectedTab: TabsGroup | null;
  isVisible: boolean;
}

const TabsContent: React.FC<TabsContentProps> = ({
  selectedTab,
  isVisible,
}) => {
  return (
    <>
      {selectedTab && (
        <>
          <FadeIn isVisible={isVisible} delay={50}>
            <Typography variant="subtitle2" sx={{ mb: 3 }}>
              {selectedTab.number}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {selectedTab.title}
            </Typography>
            <Typography variant="body1">{selectedTab.paragraph}</Typography>
          </FadeIn>
        </>
      )}
    </>
  );
};

export default TabsContent;

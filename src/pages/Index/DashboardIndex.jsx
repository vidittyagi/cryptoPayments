import React from "react";
import { Box } from "theme-ui";
import DashboardDesktop from "../Desktop/DashboardDesktop/DashboardDesktop";
import DashboardMobile from "../Mobile/DashboardMobile/DashboardMobile";
import { useBreakpointIndex } from "@theme-ui/match-media";

const DashboardIndex = () => {
  // Dividing into desktop and mobile view depending on the user screen
  let index = useBreakpointIndex();
  return <Box>{index >= 5 ? <DashboardDesktop /> : <DashboardMobile />}</Box>;
};

export default DashboardIndex;

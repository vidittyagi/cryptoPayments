import React from "react";
import { Box } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";
import LandingPageMobile from "../Mobile/LandingPageMobile/LandingPageMobile";
import LandingPageDesktop from "../Desktop/LandingPageDesktop/LandingPageDesktop";

const LandingIndex = () => {
  // Dividing into desktop and mobile view depending on the user screen
  let index = useBreakpointIndex();

  return (
    <Box>{index >= 5 ? <LandingPageDesktop /> : <LandingPageMobile />}</Box>
  );
};

export default LandingIndex;

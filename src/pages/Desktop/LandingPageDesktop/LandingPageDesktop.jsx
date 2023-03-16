import React from "react";
import { Box, Image, Flex, Text } from "theme-ui";
import landingPageImg from "../../../assets/landingPageImg.png";
import Button from "../../../components/Button/Button";
import Navigate from "../../../components/Navigate/Navigate";

const LandingPageDesktop = () => {
  return (
    <Box variant="landingPageDStyle.mainBox">
      <Flex variant="landingPageDStyle.heightFlex">
        <Box variant="landingPageDStyle.leftBox">
          <Flex variant="landingPageDStyle.leftBoxFlex">
            <Text as="h4">CRYPTO APP</Text>
            <Text as="h1">Best thing since sliced bread</Text>
            <Text as="h5">
              Making money is as easy as spreading jam on a slice of bread.
            </Text>
            <Navigate
              variant="landingPageDStyle.leftBoxFlexNavigate"
              route="/login"
            >
              <Button
                mt={4}
                sx={{
                  width: "100%",
                  background: "#1E293B",
                  borderRadius: "8px",
                  padding: "18px 50px",
                  cursor: "pointer",
                }}
              >
                Login
              </Button>
            </Navigate>
            <Navigate
              variant="landingPageDStyle.leftBoxFlexNavigate"
              route="/signup"
            >
              <Button
                mt={3}
                sx={{
                  width: "100%",
                  background: "#fff",
                  border: "1px solid #1E293B",
                  borderRadius: "8px",
                  padding: "18px 40px",
                  color: "#1E293B",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Button>
            </Navigate>
          </Flex>
        </Box>
        <Image sx={{ width: "50%", height: "100%" }} src={landingPageImg} />
      </Flex>
    </Box>
  );
};

export default LandingPageDesktop;

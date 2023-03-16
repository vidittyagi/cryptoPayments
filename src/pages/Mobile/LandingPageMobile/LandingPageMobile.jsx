import React from "react";
import { Box, Image, Text, Flex } from "theme-ui";
import { useNavigate } from "react-router-dom";
import landingImg from "../../../assets/landingImg.png";
import Button from "../../../components/Button/Button";

const LandingPageMobile = () => {
  const navigate = useNavigate();
  return (
    <Box variant="pageHeight">
      <Flex mt={[4, 4, 4, 6, 6]} variant="mobileLogoHeading">
        <Text as="h1">crypto app</Text>
      </Flex>

      <Flex variant="landingMStyle.imageFlex">
        <Image variant="landingMStyle.imageFlex.imageHeight" src={landingImg} />
      </Flex>

      <Flex variant="landingMStyle.textFlex">
        <Box variant="landingMStyle.textFlex.textBox">
          <Box variant="landingMStyle.textFlex.h1Text">
            <Text>Best thing since sliced bread</Text>
          </Box>
          <Box mt={2} variant="landingMStyle.textFlex.h4Text">
            <Text>
              Making money is as easy as spreading jam on a slice of bread.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Flex variant="landingMStyle.textFlex">
        <Box variant="landingMStyle.buttonBoxWidth">
          <Button
            sx={{
              width: "100%",
              background: "#1E293B",
              borderRadius: "8px",
              padding: [
                "18px 40px",
                "18px 40px",
                "18px 70px",
                "18px 70px",
                "18px 70px",
                "18px 70px",
              ],
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
        <Box variant="landingMStyle.buttonBoxWidth" mt={2}>
          <Button
            sx={{
              width: "100%",
              background: "#fff",
              border: "1px solid #1E293B",
              borderRadius: "8px",
              padding: [
                "18px 40px",
                "18px 40px",
                "18px 70px",
                "18px 70px",
                "18px 70px",
                "18px 70px",
              ],
              color: "#1E293B",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageMobile;

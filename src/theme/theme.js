import { makeTheme } from "@theme-ui/css/utils";
import buttons from "./buttons";
import {
  landingMStyle,
  landingButtonMStyle,
} from "../pages/Mobile/LandingPageMobile/landingMStyle";
import { loginMStyle } from "../pages/Mobile/LoginMobile/loginMStyle";
import text from "./text";
import constants from "./constants";
import landingPageDStyle from "../pages/Desktop/LandingPageDesktop/landingPageDStyle";
import loginDStyle from "../pages/Desktop/LoginDesktop/loginDStyle";
import signUpDStyle from "../pages/Desktop/SignUpDesktop/signUpDStyle";

export const colors = {
  text: {
    black: "#000000",
    primary: "#333333",
    secondary: "#686868",
    red: "#FF0000",
  },
  blue: {
    primary: "#006FCB",
    secondary: "#349EF5",
    tertiary: "#B6DAFF",
  },
};

export const base = makeTheme({
  breakpoints: constants.breakpoints,
  space: constants.space,
  letterSpacings: constants.letterSpacings,
  colors: constants.colors,
  fontWeights: constants.fontWeights,
  lineHeights: constants.lineHeights,
  buttons: buttons,
  text: text,
  variants: {
    card: {
      minHeight: "100px",
      transform: "translate(-20%, -20%)",
      // boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, 0.2)",
    },
    pageHeight: {
      // height: "100vh",
      // overflow: "scroll",
    },
    flexAlignCenter: {
      alignItems: "center",
    },
    flexJustifyCenter: {
      justifyContent: "center",
    },
    mobileLogoHeading: {
      height: "15%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    flex: {
      justifyContent: "center",
      alignItems: "center",
    },
    landingMStyle: landingMStyle,
    landingPageDStyle: landingPageDStyle,
    loginMStyle: loginMStyle,
    loginDStyle: loginDStyle,
    signUpDStyle: signUpDStyle,
  },
});

export default base;

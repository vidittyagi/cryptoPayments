import { landingButtonMStyle } from "../pages/Mobile/LandingPageMobile/landingMStyle";

const buttonDefault = {
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: [0, 1, 1],
};

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
const buttons = {
  primary: {
    ...buttonDefault,
    backgroundColor: colors.blue.primary,
    minWidth: "96px",
    padding: "15px 20px",
    borderRadius: "100px",
    ":hover": {
      backgroundColor: "#005AA3",
    },
    ":active": {
      backgroundColor: "#004F8F",
    },
    ":disabled": {
      backgroundColor: "#EFF3F6",
      color: "#B6B6B6",
    },
  },
  primarylarge: {
    variant: "buttons.primary",
  },

  primarymedium: {
    variant: "buttons.primary",
    minWidth: "84px",
    padding: "10px 16px",
  },

  primarysmall: {
    variant: "buttons.primary",
    minWidth: "67.5px",
    padding: "5px 12px",
  },

  primaryxs: {
    variant: "buttons.primary",
    minWidth: "30px",
    borderRadius: "10px",
    padding: "3px",
  },
  secondary: {
    ...buttonDefault,
    backgroundColor: "#fff",
    border: "1px solid #006FCB",
    color: "#006FCB",
    minWidth: "96px",
    padding: "14px 20px",
    borderRadius: "100px",
    ":hover": {
      border: "1px solid #005AA3",
      color: "#005AA3",
    },
    ":active": {
      border: "1px solid #004F8F",
      color: "#004F8F",
    },
    ":disabled": {
      border: "1px solid #B6B6B6",
      color: "#B6B6B6",
    },
  },

  secondarylarge: {
    variant: "buttons.secondary",
  },

  secondarymedium: {
    variant: "buttons.secondary",
    minWidth: "84px",
    padding: "9px 16px;",
  },

  secondarysmall: {
    variant: "buttons.secondary",
    minWidth: "67.5px",
    padding: "4px 12px",
  },

  secondaryxs: {
    variant: "buttons.secondary",
    minWidth: "30px",
    borderRadius: "10px",
    padding: "2px",
    backgroundColor: "#EFF3F6",
    border: "1px solid #B6B6B6",
    color: "#B6B6B6",
  },
  landingButtonMStyle: landingButtonMStyle,
};

export default buttons;

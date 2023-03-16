import landingPageImgLeft from "../../../assets/landingPageImgLeft.png";

const landingPageDStyle = {
  mainBox: {
    height: "100vh",
    backgroundColor: "black",
  },
  heightFlex: {
    height: "100%",
  },
  leftBox: {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${landingPageImgLeft})`,
  },
  leftBoxFlex: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  leftBoxFlexNavigate: {
    width: "25%",
  },
};

export default landingPageDStyle;

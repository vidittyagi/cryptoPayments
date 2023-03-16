const landingMStyle = {
  imageFlex: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: [4, 4, 4, 5, 5, 5],
    imageHeight: {
      height: "100%",
    },
  },
  textFlex: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: [4, 4, 4, 5, 5],
    textBox: {
      width: ["80%", "80%", "80%", "50%", "50%", "50%"],
      textAlign: "center",
    },
    h1Text: {
      fontSize: [4, 5, 5, 6, 6, 6],
      fontWeight: "700",
    },
    h4Text: {
      fontSize: [1, 2, 3, 3, 3],
      width: ["95%", "95%", "100%"],
      fontWeight: "400",
    },
  },
  buttonBoxWidth: {
    width: ["60%", "60%", "60%", "40%", "40%", "40%"],
  },
};

const landingButtonMStyle = {
  loginButtonBox: {
    width: "100%",
    background: "#1E293B",
    borderRadius: "8px",
    padding: "18px 90px",
  },
  signUpButtonBox: {
    width: "100%",
    background: "#fff",
    border: "1px solid #1E293B",
    borderRadius: "8px",
    padding: "18px 70px",
    color: "#1E293B",
  },
};

export { landingMStyle, landingButtonMStyle };

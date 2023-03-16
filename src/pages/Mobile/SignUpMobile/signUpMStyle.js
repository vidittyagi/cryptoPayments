const signUpMStyle = {
  checkboxStyle: {
    appearance: "none",
    border: "1px solid #a860ff",
    borderRadius: "4px",
    outline: none,
    cursor: pointer,
    width: "20px",
    height: "20px",
    display: flex,
    justifyContent: center,
    alignItems: center,
    marginRight: "5px",
    ":after": {
      content: "✔",
      display: none,
      color: white,
      fontSize: "70%",
    },
    ":checked": {
      backgroundColor: "#6a50ee",
      border: "2px solid #a860ff",
      ":after": {
        display: block,
      },
    },
  },
  labelStyle: {
    display: flex,
    alignItems: center,
  },
};

export default signUpMStyle;

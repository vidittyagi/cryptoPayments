import React from "react";
import { Box, Image, Flex, Text } from "theme-ui";
import bitcoinIcon from "../../../assets/bitcoinIcon.png";
import LoginForm from "../../../forms/LoginForm/LoginForm";

const LoginMobile = ({
  checked,
  toggle,
  handleSubmit,
  register,
  control,
  errors,
  onSubmit,
}) => {
  return (
    <Box variant="loginMStyle.mainBox">
      <Flex variant="loginMStyle.mobileFlex">
        <Text mt={3} as="h1">
          crypto app
        </Text>
      </Flex>

      {/* login form component render by passing reuired props */}
      <LoginForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        control={control}
        errors={errors}
        mobileFlex="loginMStyle.mobileFlex"
        loginBox="loginMStyle.loginBox"
        firstInputBackground="loginMStyle.firstInputBackground"
        secondInputBackground="loginMStyle.secondInputBackground"
        googleLoginFlex="loginMStyle.googleLoginFlex"
        forgotPassFlex="loginMStyle.forgotPassFlex"
        orTextMargin="loginMStyle.orTextMargin"
      />

      <Box variant="loginMStyle.bitcoinImg">
        <Image src={bitcoinIcon} />
      </Box>
    </Box>
  );
};

export default LoginMobile;

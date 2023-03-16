import React from "react";
import { Box, Image, Flex, Text } from "theme-ui";
import bitcoinIcon from "../../../assets/bitcoinIcon.png";
import SignUpForm from "../../../forms/SignUpForm/SignUpForm";

const SignUpMobile = ({
  checked,
  toggle,
  handleSubmit,
  register,
  control,
  errors,
  onSubmit,
}) => {
  return (
    //Same classes are used from LoginMStyle.js file for styling
    <Box variant="loginMStyle.mainBox">
      <Flex variant="loginMStyle.mobileFlex">
        <Text mt={3} as="h1">
          crypto app
        </Text>
      </Flex>

      <SignUpForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        control={control}
        errors={errors}
        toggle={toggle}
        checked={checked}
        mobileFlex="loginMStyle.mobileFlex"
        loginBox="loginMStyle.loginBox"
        firstInputBackground="loginMStyle.firstInputBackground"
        secondInputBackground="loginMStyle.secondInputBackground"
      />

      <Box variant="loginMStyle.bitcoinImg">
        <Image src={bitcoinIcon} />
      </Box>

      <Box mb={3}></Box>
    </Box>
  );
};

export default SignUpMobile;

import React from "react";
import { Box, Flex, Image } from "theme-ui";
import loginImg from "../../../assets/loginImg.png";
import LoginForm from "../../../forms/LoginForm/LoginForm";

const LoginDesktop = ({
  checked,
  toggle,
  handleSubmit,
  register,
  control,
  errors,
  onSubmit,
}) => {
  return (
    <Box variant="loginDStyle.loginStyle.containerBox">
      <Flex variant="loginDStyle.loginStyle.parentFlex">
        <Flex variant="loginDStyle.loginStyle.childFlex">
          <Image sx={{ height: "70%", width: "70%" }} src={loginImg} />
        </Flex>

        {/* login form component render by passing reuired props */}
        <Flex variant="loginDStyle.loginStyle.childFlex">
          <Flex variant="loginDStyle.loginStyle.loginFormFlex">
            <LoginForm
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              control={control}
              errors={errors}
              mobileFlex="loginMStyle.mobileFlex"
              loginDesktopBox="loginDStyle.loginDesktopBox"
              firstInputBackground="loginMStyle.firstInputBackground"
              secondInputBackground="loginMStyle.secondInputBackground"
              forgotPassFlex="loginMStyle.forgotPassFlex"
              orTextDesktopMargin="loginDStyle.orTextDesktopMargin"
              googleLoginDesktopFlex="loginDStyle.googleLoginDesktopFlex"
              mainBoxLoginForm="loginDStyle.mainBoxLoginForm"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginDesktop;

import React from "react";
import { Box, Flex, Image } from "theme-ui";
import SignUpForm from "../../../forms/SignUpForm/SignUpForm";
import loginImg from "../../../assets/loginImg.png";

const SignUpDesktop = ({
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
            <SignUpForm
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              control={control}
              errors={errors}
              toggle={toggle}
              checked={checked}
              mainBoxLoginForm="loginDStyle.mainBoxLoginForm"
              mobileFlex="loginMStyle.mobileFlex"
              loginDesktopBox="loginDStyle.loginDesktopBox"
              firstInputBackground="loginMStyle.firstInputBackground"
              secondInputBackground="loginMStyle.secondInputBackground"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUpDesktop;

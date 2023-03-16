import React from "react";
import { Box, Image, Flex, Text } from "theme-ui";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import googleIcon from "../../assets/googleIcon.png";
import Navigate from "../../components/Navigate/Navigate";

const LoginForm = ({
  register,
  control,
  errors,
  handleSubmit,
  onSubmit,
  mobileFlex,
  loginBox,
  firstInputBackground,
  secondInputBackground,
  googleLoginFlex,
  mainBoxLoginForm,
  forgotPassFlex,
  loginDesktopBox,
  orTextMargin,
  orTextDesktopMargin,
  googleLoginDesktopFlex,
  ...rest
}) => {
  return (
    <Box variant={mainBoxLoginForm}>
      <Flex variant={mobileFlex}>
        <Box variant={loginBox || loginDesktopBox}>
          <Flex variant={mobileFlex}>
            <Box>
              <Text as="h2">Login</Text>
              <Text mt={2} variant="textMedium" as="h4">
                Welcome back. Input your details to pickup where you left off.
              </Text>
            </Box>
          </Flex>

          <Box variant={firstInputBackground}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              register={register}
              control={control}
              errors={errors}
              star={false}
              p={2}
              required
            />
          </Box>
          <Box variant={secondInputBackground}>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              control={control}
              errors={errors}
              star={false}
              p={2}
              required
            />
          </Box>

          <Flex variant={forgotPassFlex}>
            <Text sx={{ color: "#0D9488" }}>Hint here</Text>
            <Text>Forgot Password?</Text>
          </Flex>
        </Box>

        <Button
          variant="primary"
          size="large"
          sx={{ width: "40%", borderRadius: "10px", background: "#2D4991" }}
          mt={4}
          // Using react-hook-form onSubmit function is triggered for form submission
          onClick={() => handleSubmit(onSubmit)()}
        >
          Log In
        </Button>

        <Box variant={orTextMargin || orTextDesktopMargin}>
          <Text>OR</Text>
        </Box>

        <Flex variant={googleLoginFlex || googleLoginDesktopFlex}>
          <Box ml={1} sx={{ width: "15%", height: "80%" }}>
            <Image src={googleIcon} />
          </Box>
          <Box ml={2} sx={{ width: "80%" }}>
            <Text>Log in with Google</Text>
          </Box>
        </Flex>

        <Box mt={4}>
          <Text sx={{ color: "#334155" }}>
            Dont have an account?{" "}
            <Navigate route="/signup" sx={{ color: "blue", cursor: "pointer" }}>
              Sign Up
            </Navigate>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginForm;

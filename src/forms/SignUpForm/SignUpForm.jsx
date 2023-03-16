import React from "react";
import { Box, Image, Flex, Text } from "theme-ui";
import Navigate from "../../components/Navigate/Navigate";
import Input from "../../components/Input/Input";
import { Checkbox } from "reakit/Checkbox";
import Button from "../../components/Button/Button";

const SignUpForm = ({
  register,
  control,
  errors,
  handleSubmit,
  toggle,
  checked,
  onSubmit,
  mainBoxLoginForm,
  mobileFlex,
  loginBox,
  firstInputBackground,
  secondInputBackground,
  loginDesktopBox,
  ...rest
}) => {
  return (
    <Box variant={mainBoxLoginForm}>
      <Flex variant={mobileFlex}>
        <Box variant={loginBox || loginDesktopBox}>
          <Flex variant={mobileFlex}>
            <Box>
              <Text as="h2">Sign Up</Text>
              <Text mt={2} variant="textMedium" as="h4">
                Welcome, Sign up for the Crypto app
              </Text>
            </Box>
          </Flex>
          <Box variant={firstInputBackground}>
            <Input
              name="firstName"
              type="text"
              placeholder="Enter first name"
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
              name="lastName"
              type="text"
              placeholder="Enter last name"
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
              name="email"
              type="email"
              placeholder="Enter email"
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
          <Box variant={secondInputBackground}>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              register={register}
              control={control}
              errors={errors}
              star={false}
              p={2}
              required
            />
          </Box>

          <Box mt={3}>
            {/* <Text variant="signUpMStyle.labelStyle"> */}
            <Text>
              <Checkbox
                checked={checked}
                onChange={toggle}
                // className="signUpMStyle.checkboxStyle"
              />
              <Text>
                By clicking on ‘sign up’, you’re agreeing to the crypto app{" "}
                <Text sx={{ color: "#2D4990" }}>
                  Terms of Service and Privacy Policy
                </Text>
              </Text>
            </Text>
          </Box>
        </Box>

        <Button
          variant="primary"
          size="large"
          sx={{ width: "40%", borderRadius: "10px", background: "#2D4991" }}
          mt={4}
          // Using react-hook-form onSubmit function is triggered for form submission
          onClick={() => handleSubmit(onSubmit)()}
        >
          Sign Up
        </Button>

        <Box mt={3}>
          <Text sx={{ color: "#334155" }}>
            Already have an account?{" "}
            <Navigate route="/login" sx={{ color: "blue", cursor: "pointer" }}>
              Login
            </Navigate>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpForm;

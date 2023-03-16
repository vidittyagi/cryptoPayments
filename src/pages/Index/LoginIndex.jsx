import React from "react";
import { Box } from "theme-ui";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginMobile from "../Mobile/LoginMobile/LoginMobile";
import LoginDesktop from "../Desktop/LoginDesktop/LoginDesktop";
import { useBreakpointIndex } from "@theme-ui/match-media";

const LoginIndex = () => {
  // Dividing into desktop and mobile view depending on the user screen
  let index = useBreakpointIndex();

  //yup used for input box validation
  const loginSchema = yup
    .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    })
    .required();

  //react-hook-form used for taking input from the user
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

  //onSubmit function initialized for submitting the form values entered by user using react form
  const onSubmit = (data) => {
    console.log("Data", data);
  };

  return (
    <Box>
      {index >= 5 ? (
        <LoginDesktop
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          errors={errors}
          onSubmit={onSubmit}
        />
      ) : (
        <Box sx={{ background: "#D5F2E8", height: "100vh" }}>
          <LoginMobile
            handleSubmit={handleSubmit}
            register={register}
            control={control}
            errors={errors}
            onSubmit={onSubmit}
          />
        </Box>
      )}
    </Box>
  );
};

export default LoginIndex;

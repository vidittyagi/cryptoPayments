import React, { useState } from "react";
import { Box } from "theme-ui";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUpMobile from "../Mobile/SignUpMobile/SignUpMobile";
import SignUpDesktop from "../Desktop/SignUpDesktop/SignUpDesktop";
import { useBreakpointIndex } from "@theme-ui/match-media";

const SignUpIndex = () => {
  let index = useBreakpointIndex();
  //This state is defined for checkbox
  const [checked, setChecked] = useState(false);

  //toggle function is defined for toggling the checkbox state
  const toggle = () => setChecked(!checked);

  //yup used for input box validation
  const signUpSchema = yup
    .object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup.string().required("Password is required"),
    })
    .required();

  //react-hook-form used for taking input from the user
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema), mode: "onBlur" });

  //onSubmit function initialized for submitting the form values entered by user using react form
  const onSubmit = (data) => {
    console.log("Data", data);
  };

  return (
    <Box>
      {index >= 5 ? (
        <SignUpDesktop
          checked={checked}
          toggle={toggle}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          errors={errors}
          onSubmit={onSubmit}
        />
      ) : (
        <Box sx={{ background: "#D5F2E8", height: "100vh" }}>
          <SignUpMobile
            checked={checked}
            toggle={toggle}
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

export default SignUpIndex;

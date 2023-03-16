import React from "react";
import { Input as ThemeUiInput, Flex, Box, Text, Label, Image } from "theme-ui";
import ReactTooltip from "react-tooltip";
import exclamationMark from "../../assets/exclamation_mark";

const Input = ({
  label,
  required,
  name,
  register = () => {},
  errors = {},
  control = {},
  star = false,
  ...rest
}) => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Flex>
          <Label htmlFor={name}>
            <Text>
              {label}{" "}
              {required && star === true ? (
                <Text varaint="textRegularRed">*</Text>
              ) : (
                <></>
              )}
            </Text>
          </Label>
        </Flex>

        <ThemeUiInput
          variant="inputStyle"
          {...register(name)}
          {...rest}
          autoComplete="autoCompleteStyle"
          sx={{
            outline: (theme) => (errors[name] ? "1px solid red" : "none"),
            ":focus-visible": {
              outline: (theme) =>
                errors[name] ? "1px solid red" : "1px solid blue",
            },
          }}
        />

        {errors[name] ? (
          <Box
            data-tip={errors[name]?.message || "error"}
            sx={{
              position: "absolute",
              width: 20,
              height: 20,
              cursor: "pointer",
              background: "transparent",
              top: `${star === true ? "70%" : "50%"}`,
              right: "10px",
              transform: "translate(0,-50%)",
            }}
            onMouseOver={() => {
              ReactTooltip.rebuild();
            }}
          >
            <Image src={exclamationMark} alt="error" />
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <ReactTooltip />
    </Box>
  );
};

export default Input;

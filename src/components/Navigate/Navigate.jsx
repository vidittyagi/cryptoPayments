import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "theme-ui";

const Navigate = ({ route, children, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Text onClick={() => navigate(route)} {...rest}>
      {children}
    </Text>
  );
};

export default Navigate;

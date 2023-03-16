import React from "react";
import { Button as ThemeUIButton } from "theme-ui";

const Button = ({ variant, size, children, ...rest }) => {
  return (
    <ThemeUIButton variant={variant + size} {...rest}>
      {children}
    </ThemeUIButton>
  );
};

export default Button;

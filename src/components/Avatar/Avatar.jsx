import React from "react";
import { Avatar as ThemeAvatar } from "theme-ui";

const Avatar = ({ img, message, size, ...rest }) => {
  return (
    <ThemeAvatar
      {...rest}
      size={size}
      src={img}
      alt={message || "image not found"}
    />
  );
};

export default Avatar;

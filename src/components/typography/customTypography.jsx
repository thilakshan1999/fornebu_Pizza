import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomTypography = ({
  text,
  variant = "body1",
  color,
  align = "inherit",
  sx = {},
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      sx={{
        fontFamily: theme.typography.fontFamily,
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "360px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({ config });

export default theme;

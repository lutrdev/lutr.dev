import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { Dict } from "@chakra-ui/utils";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
  styles: {
    global: (props: Dict) => ({
      body: {
        bg: mode("gray.50", null)(props),
      },
    }),
  },
});

export default customTheme;

import { Stack } from "@chakra-ui/react";

import Projects from "../lib/layout/home/Projects";
import Welcome from "../lib/layout/home/Welcome";

//-------------------------------------------------------------------------------------

const Index = () => {
  return (
    <Stack>
      <Welcome />
      <Projects />
    </Stack>
  );
};

//-------------------------------------------------------------------------------------

export default Index;

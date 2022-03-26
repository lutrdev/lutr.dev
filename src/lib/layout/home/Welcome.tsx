import { Box, Heading, Stack, Text } from "@chakra-ui/react";

//-------------------------------------------------------------------------------------

const Welcome = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="60vh"
      mb={8}
      w="full"
    >
      <Stack>
        <Heading as="h2" size="2xl">
          Hi! 👋 I'm{" "}
          <Box as="span" color="brand.500">
            Luca
          </Box>
          .
        </Heading>
        <Text fontSize="2xl">Computer Science student & enthusiast</Text>
      </Stack>
    </Box>
  );
};

//-------------------------------------------------------------------------------------

export default Welcome;

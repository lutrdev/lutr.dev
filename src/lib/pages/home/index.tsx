import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="60vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Stack>
        <Heading as="h2">Hi! 👋 I'm Luca.</Heading>
        <Text fontSize="2xl">Computer Science student & enthusiast</Text>
      </Stack>
      <Box />
    </Box>
  );
};

export default Home;

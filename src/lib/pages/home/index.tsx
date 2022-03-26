import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";

import { projects } from "./projects";

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

const Projects = () => {
  return (
    <Box>
      <Heading as="h3" size="xl" marginBottom={6}>
        Projects
      </Heading>
      <SimpleGrid minChildWidth="210px" spacing={8}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Home = () => {
  return (
    <Stack>
      <Welcome />
      <Projects />
    </Stack>
  );
};

export default Home;

import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";

import type { Project } from "./projects";
import { projects } from "./projects";

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

interface ProjectsGridProps {
  projectsInGrid: Project[];
}

const ProjectsGrid = ({ projectsInGrid }: ProjectsGridProps) => {
  return (
    <SimpleGrid columns={{ md: 3, sm: 2, xs: 1 }} spacing={8}>
      {projectsInGrid.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </SimpleGrid>
  );
};

//-------------------------------------------------------------------------------------

interface ProjectsSectionProps {
  sectionTitle: string;
  sectionProjects: Project[];
}

const ProjectsSection = ({
  sectionTitle,
  sectionProjects,
}: ProjectsSectionProps) => {
  return (
    <Box>
      <Heading as="h4" size="lg" marginBottom={6}>
        {sectionTitle}
      </Heading>
      <ProjectsGrid projectsInGrid={sectionProjects} />
    </Box>
  );
};

//-------------------------------------------------------------------------------------

const Projects = () => {
  const bigProjects = projects.filter((project) => project.size === "big");
  const mediumSizedProjects = projects.filter(
    (project) => project.size === "medium"
  );
  const smallProjects = projects.filter((project) => project.size === "small");

  return (
    <Box>
      <Heading as="h3" size="xl" marginBottom={6}>
        Projects
      </Heading>
      <Stack gap={12}>
        {bigProjects.length > 0 && (
          <ProjectsSection
            sectionTitle="🚀 Big, cool projects"
            sectionProjects={bigProjects}
          />
        )}
        {mediumSizedProjects.length > 0 && (
          <ProjectsSection
            sectionTitle="🧠 Medium-sized, challenging projects"
            sectionProjects={mediumSizedProjects}
          />
        )}
        {smallProjects.length > 0 && (
          <ProjectsSection
            sectionTitle="😄 Small, fun projects"
            sectionProjects={smallProjects}
          />
        )}
      </Stack>
    </Box>
  );
};

//-------------------------------------------------------------------------------------

const Home = () => {
  return (
    <Stack>
      <Welcome />
      <Projects />
    </Stack>
  );
};

export default Home;

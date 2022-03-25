import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import type { Project } from "../pages/home/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <Stack backgroundColor="white" boxShadow="xl" rounded="xl">
      <Image src={project.imageUrl} roundedTop="xl" />
      <Stack padding={6}>
        <Heading as="h4" fontSize="2xl">
          {project.name}
        </Heading>
        <Text>{project.description}</Text>
        <Text>{project.type}</Text>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;

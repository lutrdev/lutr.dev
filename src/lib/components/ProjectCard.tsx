import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GrGithub } from "react-icons/gr";

import type { Project } from "../data/projects";

//-------------------------------------------------------------------------------------

interface GithubButtonProps {
  githubUrl: string;
}

const GithubButton = ({ githubUrl }: GithubButtonProps) => {
  return (
    <NextLink href={githubUrl} passHref>
      <IconButton
        as="a"
        target="_blank"
        aria-label="GitHub button"
        colorScheme="brand"
        variant="ghost"
        icon={<GrGithub />}
      />
    </NextLink>
  );
};

//-------------------------------------------------------------------------------------

interface ProjectButtonProps {
  projectType: Project["type"];
  projectUrl: string;
}

function getProjectButtonVerb(projectType: Project["type"]) {
  switch (projectType) {
    case "game":
      return "Play";
    case "website":
      return "Visit";
  }
}

const ProjectButton = ({ projectType, projectUrl }: ProjectButtonProps) => {
  const verb = getProjectButtonVerb(projectType);

  return (
    <NextLink href={projectUrl} passHref>
      <Button
        as="a"
        target="_blank"
        aria-label="Project button"
        colorScheme="brand"
      >
        {verb}
      </Button>
    </NextLink>
  );
};

//-------------------------------------------------------------------------------------

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <Flex
      backgroundColor="white"
      boxShadow="xl"
      rounded="xl"
      flexDirection="column"
      height="100%"
    >
      <Image src={project.imageUrl} roundedTop="xl" />
      <Flex
        padding={6}
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <Stack>
          <Heading as="h5" fontSize="2xl">
            {project.name}
          </Heading>
          <Text>{project.description}</Text>
        </Stack>
        <Flex justifyContent="right">
          <Flex gap={2}>
            <GithubButton githubUrl={project.githubUrl} />
            <ProjectButton
              projectType={project.type}
              projectUrl={project.projectUrl}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

//-------------------------------------------------------------------------------------

export default ProjectCard;

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";

import type { Project } from "../data/projects";

//-------------------------------------------------------------------------------------

interface GithubButtonProps {
  githubUrl: string;
}

const GithubButton = ({ githubUrl }: GithubButtonProps) => {
  return (
    <Tooltip label="Source code" shouldWrapChildren hasArrow>
      <IconButton
        as="a"
        href={githubUrl}
        target="_blank"
        aria-label="GitHub button"
        colorScheme="brand"
        variant="ghost"
        icon={<GrGithub />}
      />
    </Tooltip>
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
    <Button
      as="a"
      href={projectUrl}
      target="_blank"
      aria-label="Project button"
      colorScheme="brand"
    >
      {verb}
    </Button>
  );
};

//-------------------------------------------------------------------------------------

interface MoreDetailsPopoverProps {
  project: Project;
}

const MoreDetailsPopover = ({ project }: MoreDetailsPopoverProps) => {
  return (
    <Popover>
      <Tooltip label="More details" hasArrow>
        {/* Additional element to make Tooltips work */}
        {/* (https://github.com/chakra-ui/chakra-ui/issues/2843) */}
        <Box display="inline-block">
          <PopoverTrigger>
            <IconButton
              aria-label="More details"
              colorScheme="brand"
              variant="ghost"
              icon={<AiOutlineInfoCircle />}
            />
          </PopoverTrigger>
        </Box>
      </Tooltip>

      <PopoverContent width={350} maxHeight={400}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Flex alignItems="baseline" gap={2}>
            <Heading size="sm">{project.name}</Heading>
            <Text size="sm">({project.year})</Text>
          </Flex>
        </PopoverHeader>

        <PopoverBody overflowY="auto">
          <Stack gap={2}>
            <Text>{project.moreDetailsDescription}</Text>

            <Box>
              <Heading size="sm">Languages:</Heading>
              <UnorderedList>
                {project.languages.map((language) => (
                  <ListItem key={language}>
                    <b>{language}</b>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>

            {project.technologies.length > 0 && (
              <Box>
                <Heading size="sm">Technologies:</Heading>
                <UnorderedList>
                  {project.technologies.map((technology) => (
                    <ListItem key={technology.name}>
                      <b>{technology.name}</b> - {technology.description}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}

            {project.tools.length > 0 && (
              <Box>
                <Heading size="sm">Tools:</Heading>
                <UnorderedList>
                  {project.tools.map((tool) => (
                    <ListItem key={tool.name}>
                      <b>{tool.name}</b> - {tool.description}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

//-------------------------------------------------------------------------------------

interface ButtonsFooterProps {
  project: Project;
}

const ButtonsFooter = ({ project }: ButtonsFooterProps) => {
  return (
    <Flex marginTop={2} justifyContent="space-between">
      <MoreDetailsPopover project={project} />
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
      as="article"
      backgroundColor="white"
      boxShadow="xl"
      rounded="xl"
      flexDirection="column"
      height="100%"
    >
      <Image
        src={project.imageUrl}
        alt={`${project.name} image`}
        roundedTop="xl"
      />
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
          <Text>{project.shortDescription}</Text>
        </Stack>
        <ButtonsFooter project={project} />
      </Flex>
    </Flex>
  );
};

//-------------------------------------------------------------------------------------

export default ProjectCard;

import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import ProjectCard from "../../components/ProjectCard";
import type { Project } from "../../data/projects";
import { projects } from "../../data/projects";

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

export default Projects;

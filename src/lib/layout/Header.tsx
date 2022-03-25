import { Flex, Heading, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";

const LinkedInButton = () => {
  return (
    <NextLink href="https://www.linkedin.com/in/luca-trusca/" passHref>
      <IconButton
        as="a"
        target="_blank"
        aria-label="LinkedIn button"
        icon={<GrLinkedinOption />}
      />
    </NextLink>
  );
};

const GitHubButton = () => {
  return (
    <NextLink href="https://github.com/Luca1152" passHref>
      <IconButton
        as="a"
        target="_blank"
        aria-label="GitHub button"
        icon={<GrGithub />}
      />
    </NextLink>
  );
};

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <NextLink href="/">Luca Trușcă</NextLink>
      </Heading>

      <Flex marginLeft="auto" gap={4}>
        <LinkedInButton />
        <GitHubButton />
      </Flex>
    </Flex>
  );
};

export default Header;

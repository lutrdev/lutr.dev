import { Flex, Heading, IconButton, theme } from "@chakra-ui/react";
import NextLink from "next/link";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import Box from "lib/components/motion/Box";

//-------------------------------------------------------------------------------------

const LinkedInButton = () => {
  return (
    <IconButton
      as="a"
      href="https://www.linkedin.com/in/luca-trusca/"
      target="_blank"
      aria-label="LinkedIn button"
      colorScheme="brand"
      icon={<GrLinkedinOption />}
    />
  );
};

//-------------------------------------------------------------------------------------

const GitHubButton = () => {
  return (
    <IconButton
      as="a"
      href="https://github.com/Luca1152"
      target="_blank"
      aria-label="GitHub button"
      colorScheme="brand"
      icon={<GrGithub />}
    />
  );
};

//-------------------------------------------------------------------------------------

const Header = () => {
  // Add the 'BA' to the gray.50 HEX color to make it transparent
  // There may be a more straight-forward way to do it, however
  const transparentGray = `${theme.colors.gray["50"]}BA`;

  return (
    <Box
      position="sticky"
      top="0"
      padding="8"
      backgroundColor={transparentGray}
      backdropFilter="blur(7px)"
      zIndex={5} // Not too high (like 100), so that Popover (z=10) appear above the header
    >
      <Flex as="header" align="center">
        <Heading as="h1" size="md">
          <NextLink href="/">Luca Trușcă</NextLink>
        </Heading>

        <Flex marginLeft="auto" gap={4}>
          <LinkedInButton />
          <GitHubButton />
        </Flex>
      </Flex>
    </Box>
  );
};

//-------------------------------------------------------------------------------------

export default Header;

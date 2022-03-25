import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Luca Trușcă</Link>
      </Heading>

      <Box marginLeft="auto" />
    </Flex>
  );
};

export default Header;

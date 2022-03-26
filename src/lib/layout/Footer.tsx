import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" marginTop={20}>
      <Text>
        © {new Date().getFullYear()} -{" "}
        <NextLink href="/" passHref>
          <Link>Luca Trușcă</Link>
        </NextLink>
      </Text>
    </Flex>
  );
};

export default Footer;

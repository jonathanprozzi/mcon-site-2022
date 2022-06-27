import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

interface CopyrightProps {
  content?: string;
}

const Copyright = ({ content = "MCON" }: CopyrightProps) => (
  <Flex
    direction="row"
    alignSelf={{ base: "center", sm: "start" }}
    alignItems="center"
    justifyContent="center"
    minWidth="100vw"
    width="100%"
    paddingBottom={6}
    paddingX={{ base: "6", md: "0" }}
  >
    <Text color="brand.cyan" as="span" fontSize="lg" fontFamily="Dagheest">
      © {new Date().getFullYear()} {content} Built with{" "}
      <Text as="span" role="img" aria-labelledby="chili emoji" fontSize="24px">
        🌶️
      </Text>{" "}
      by{" "}
      <ChakraLink
        href="https://metacartel.org"
        isExternal
        _hover={{
          color: "white"
        }}
        marginRight={4}
      >
        <Text
          as="span"
          fontFamily="Basteleur"
          fontWeight="light"
          fontSize="lg"
          letterSpacing="widest"
          color="primaryNeon"
          transition="all ease-in-out .25s"
          paddingBottom={{ base: "2", md: "none" }}
          _hover={{
            color: "white"
          }}
        >
          MetaCartel
        </Text>
      </ChakraLink>
    </Text>
  </Flex>
);

export default Copyright;

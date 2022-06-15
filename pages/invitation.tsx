import {
  Flex,
  VStack,
  Text,
  Heading,
  Link as ChakraLink,
  Button
} from "@chakra-ui/react";

const Invitation = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    paddingX={{ base: 10, lg: 8 }}
    paddingY={8}
    color="black"
    bg="white"
  >
    <VStack width="100%" fontFamily="Basteleur" fontWeight="bold" fontSize="md">
      <Heading
        as="h2"
        fontFamily="Basteleur"
        fontSize={{ base: "3xl", lg: "4xl" }}
      >
        An Invitation
      </Heading>
      <Text>Dear servants of Moloch,</Text>
      <Text>Join us, or rear the punishment of the one you serve.</Text>
      <Text>You,</Text>
      <Text>who adorn yourselves</Text>
      <Text>in shallow desires,</Text>
      <Text>cannot disguise your attempt to hide</Text>
      <Text>from your vulnerabiltiies.</Text>
      <br />
      <Text>Display your devotion to the enemy</Text>
      <Text>of humanity, for that is all</Text>
      <Text>you have.</Text>
      <br />
      <Text>Moloch, the demon we face,</Text>
      <Text>the one who makes you believe that</Text>
      <Text>you must take what you can get</Text>
      <Text>or go without, he will be slayed.</Text>
      <br />
      <Text>The war may be futile and yet we fight.</Text>
      <br />
      <Text>So let us gather and</Text>
      <Text>let us look out for each other.</Text>
      <br />
      <Text>This is your invitation.</Text>
      <Flex direction={{ base: "column" }} alignItems="center">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          marginTop={{ base: 4, md: 4 }}
          gap={4}
        >
          <ChakraLink
            _hover={{
              textDecoration: "none"
            }}
            isExternal
            href="https://metacartel.typeform.com/to/yiLK5My5"
          >
            <Button
              borderRadius="none"
              paddingY={2}
              paddingX={2}
              transition="all ease-in-out .25s"
              color="primaryRed"
              bgColor="primaryNeon"
              fontFamily="Dagheest"
              border="2px solid"
              width="100%"
              minWidth="10rem"
              _hover={{
                bgColor: "black",
                color: "primaryNeon",
                border: "2px solid",
                borderColor: "primaryNeon"
              }}
            >
              Apply to Attend
            </Button>
          </ChakraLink>
          <ChakraLink
            _hover={{
              textDecoration: "none"
            }}
            isExternal
            href="https://yeet.daohaus.club/dao/0x1/0xc0da65b8c37125096e9d54bf02eb4bd8657f66b8/1"
          >
            <Button
              borderRadius="none"
              paddingY={2}
              paddingX={2}
              transition="all ease-in-out .25s"
              color="primaryRed"
              bgColor="primaryNeon"
              fontFamily="Dagheest"
              border="2px solid"
              width="100%"
              minWidth="10rem"
              _hover={{
                bgColor: "black",
                color: "primaryNeon",
                border: "2px solid",
                borderColor: "primaryNeon"
              }}
            >
              Fund MCON
            </Button>
          </ChakraLink>
        </Flex>
        <Heading
          as="span"
          textAlign="center"
          color="black"
          fontFamily="Basteleur"
          fontSize="lg"
          lineHeight={{ base: 9 }}
          letterSpacing="tighter"
          fontWeight="bold"
          maxWidth="30ch"
          marginX="auto"
          paddingBottom={4}
          marginTop={8}
        >
          Follow the action on{" "}
          <ChakraLink
            color="primaryRed"
            isExternal
            href="https://twitter.com/mcon_world"
          >
            Twitter
          </ChakraLink>
        </Heading>
      </Flex>
    </VStack>
  </Flex>
);

export default Invitation;

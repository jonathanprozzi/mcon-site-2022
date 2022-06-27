import Image from "next/image";
import {
  Flex,
  VStack,
  Text,
  Heading,
  Link as ChakraLink,
  Button,
  HStack,
  useBreakpointValue
} from "@chakra-ui/react";

const Invitation = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      paddingX={{ base: 10, lg: 8 }}
      paddingY={8}
      color="primaryRed"
      bg="black"
    >
      <Flex>
        {!isMobile && (
          <Flex alignItems="center" justifyContent="center">
            <Image src="/fire.png" width={100} height={100} />
          </Flex>
        )}
        <VStack
          width="100%"
          fontFamily="Dagheest-Gothic"
          fontWeight="bold"
          fontSize="lg"
          textAlign="center"
        >
          {isMobile ? (
            <HStack>
              <Image src="/fire.png" width={100} height={100} />
              <Text>Dear servants of Moloch,</Text>
              <Image src="/fire2.png" width={100} height={100} />
            </HStack>
          ) : (
            <Text>Dear servants of Moloch,</Text>
          )}
          <Text>Join us, or rear the punishment of the one you serve.</Text>
          <Text>
            You, who adorn yourselves in shallow desires, cannot disguise your
            desperate attempt to hide from your vulnerabilities.
          </Text>
          <br />
          <Text>Dear roasters of chili and mixers of margaritas.</Text>
          <Text>Dear changers of diapers and riders of skateboards.</Text>
          <Text>Dear builders of solutions and creators of art.</Text>
          <Text>We call you, dear slayers of Moloch.</Text>
          <Text>Bring your sombrero!</Text>
          <br />
          <Text>
            Moloch, the one who makes you believe that you must take what you
            can get or go without, he will be slayed.
          </Text>
          <br />
          <Text>The war may be futile and yet we coordinate.</Text>
          <br />
          <Text>So let us gather and let us look out for each other.</Text>
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
            </Flex>
            <Heading
              as="span"
              textAlign="center"
              color="primaryNeon"
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
        {!isMobile && (
          <Flex alignItems="center" justifyContent="center">
            <Image src="/fire2.png" width={100} height={100} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Invitation;

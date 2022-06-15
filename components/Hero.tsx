import {
  Flex,
  Box,
  VisuallyHidden,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  useDisclosure
} from "@chakra-ui/react";
import ModalWrapper from "./ModalWrapper";
import EventSubmissionForm from "./EventSubmissionForm";

interface HeroProps {
  heroHeight?: string;
}

const Hero = ({ heroHeight = "100vh" }: HeroProps) => {
  const sideEventForm = useDisclosure();

  return (
    <>
      <Flex
        id="home"
        direction="column"
        justifyContent="center"
        alignItems="center"
        // minWidth="100vw"
        // height={{ base: "50vh", md: "70vh" }}
        paddingTop={{ base: "0", md: "5vh" }}
      >
        <VisuallyHidden>
          <Heading as="h1">MCON Denver 2022</Heading>
        </VisuallyHidden>
        <Flex
          direction="column"
          alignItems="center"
          paddingBottom={{ base: 0, md: 10 }}
        >
          <Heading
            as="h2"
            fontFamily="Basteleur"
            fontSize="80px"
            fontWeight="bold"
            color="black"
          >
            MCON 2
          </Heading>
          <Flex direction={{ base: "column" }} alignItems="center">
            <Text
              as="span"
              fontFamily="Basteleur"
              color="black"
              fontSize="36px"
              lineHeight={[6, 6, 9, 9]}
              letterSpacing="tighter"
              fontWeight="normal"
              maxWidth="30ch"
            >
              One for the DAO purists
            </Text>

            <Text
              as="span"
              fontFamily="Basteleur"
              fontSize="36px"
              lineHeight={{ base: 9 }}
              letterSpacing="tighter"
              fontWeight="bold"
              maxWidth="30ch"
              marginTop={{ base: "5", md: "5" }}
              paddingY={{ base: "5", md: "0" }}
              flexWrap="wrap"
              color="black"
            >
              September 6 - 9th, 2022 Denver, Colorado
            </Text>
          </Flex>
          <Flex
            direction={{ base: "column" }}
            alignItems="center"
            paddingTop={{ base: 4, md: 10 }}
            marginTop={{ base: 4 }}
            gap={4}
          >
            <ChakraLink
              _hover={{
                textDecoration: "none"
              }}
              isExternal
              href="https://yeet.daohaus.club/dao/0x1/0xc0da65b8c37125096e9d54bf02eb4bd8657f66b8/1"
            >
              <Button
                borderRadius="none"
                paddingY={8}
                paddingX={8}
                fontSize="2xl"
                transition="all ease-in-out .25s"
                color="primaryRed"
                bgColor="primaryNeon"
                fontFamily="Dagheest"
                border="2px solid"
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
            <Button
              borderRadius="none"
              paddingY={8}
              paddingX={8}
              fontSize="2xl"
              transition="all ease-in-out .25s"
              color="primaryRed"
              bgColor="primaryNeon"
              fontFamily="Dagheest"
              border="2px solid"
              _hover={{
                bgColor: "black",
                color: "primaryNeon",
                border: "2px solid",
                borderColor: "primaryNeon"
              }}
              onClick={sideEventForm.onOpen}
            >
              Submit a Side Event
            </Button>

            <Heading
              as="span"
              textAlign="center"
              color="black"
              fontFamily="Basteleur"
              fontSize="36px"
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
                color="primaryNeon"
                isExternal
                href="https://twitter.com/mcon_world"
              >
                Twitter
              </ChakraLink>
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      <ModalWrapper
        isOpen={sideEventForm.isOpen}
        onClose={sideEventForm.onClose}
        title="Submit a Side Event"
        content={<EventSubmissionForm onClose={sideEventForm.onClose} />}
      />
    </>
  );
};

export default Hero;

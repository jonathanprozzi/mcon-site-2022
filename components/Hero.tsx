import {
  Flex,
  Image,
  VisuallyHidden,
  Heading,
  Text,
  Button,
  AspectRatio,
  Link as ChakraLink,
  useDisclosure
} from "@chakra-ui/react";
import StyledBox from "components/StyledBox";
import ModalWrapper from "components/ModalWrapper";
import EventSubmissionForm from "components/EventSubmissionForm";

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
        paddingTop={{ base: "0", md: "5rem" }}
        marginTop="10vh"
      >
        <VisuallyHidden>
          <Heading as="h1">MCON Denver 2022</Heading>
        </VisuallyHidden>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          paddingBottom={{ base: 0, md: 10 }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            gap={2}
            marginY={4}
          >
            <Heading
              as="h2"
              fontFamily="Basteleur"
              fontSize={{ base: "64px", lg: "80px" }}
              fontWeight="bold"
              color="black"
              paddingY={0}
            >
              MCON 2
            </Heading>
            <Flex
              direction={{ base: "column" }}
              fontFamily="Dagheest-Gothic"
              fontSize={{ base: "20px", lg: "36px" }}
              // lineHeight={{ base: 9 }}
              letterSpacing="tighter"
              fontWeight="bold"
              color="black"
            >
              <Text as="span">One for the DAO purists</Text>

              <Text
                as="span"
                fontWeight="regular"
                fontSize={{ base: "16px", lg: "30px" }}
                color="black"
              >
                September 6 - 9th, 2022 Denver, CO
              </Text>
            </Flex>
          </Flex>
          <Flex direction={{ base: "column" }} marginX={8} gap={8}>
            <StyledBox title="mcon.gif" showIcon>
              <Image src="/mcon2.gif" width={350} height={350} />
            </StyledBox>
            <StyledBox title="about">
              <Flex bgColor="white" paddingX={4} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="details" collapsed>
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="speakers" collapsed>
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="sponsors" collapsed>
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="apply to attend" collapsed>
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text>
              </Flex>
            </StyledBox>
          </Flex>
          <Flex
            direction={{ base: "column" }}
            alignItems="center"
            paddingTop={{ base: 4, md: 10 }}
            marginTop={{ base: 4 }}
            gap={4}
          >
            <Flex direction={{ base: "column", lg: "row" }} gap={4}>
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
              <Button
                borderRadius="none"
                paddingY={8}
                paddingX={8}
                fontSize="2xl"
                transition="all ease-in-out .25s"
                color="primaryNeon"
                bgColor="primaryRed"
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
                onClick={sideEventForm.onOpen}
              >
                Submit a Side Event
              </Button>
            </Flex>

            <Heading
              as="span"
              textAlign="center"
              color="black"
              fontFamily="Basteleur"
              fontSize={{ base: "24px", lg: "36px" }}
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
            <Text
              textAlign="center"
              color="black"
              fontFamily="Basteleur"
              lineHeight={{ base: 9 }}
              fontSize={{ base: "20px", lg: "36px" }}
              letterSpacing="tighter"
              fontWeight="bold"
              maxWidth="30ch"
              marginX="auto"
              paddingBottom={4}
            >
              Check out the{" "}
              <ChakraLink
                color="primaryNeon"
                isExternal
                href="https://2021.mcon.fun"
              >
                2021 MCON Site
              </ChakraLink>
            </Text>
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

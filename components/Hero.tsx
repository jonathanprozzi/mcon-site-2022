import {
  Flex,
  Image,
  VisuallyHidden,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  useDisclosure,
  useBreakpointValue
} from "@chakra-ui/react";
import StyledBox from "components/StyledBox";
import ModalWrapper from "components/ModalWrapper";
import EventSubmissionForm from "components/EventSubmissionForm";
import SpeakersGrid from "components/SpeakersGrid";
import SponsorsGrid from "./SponsorsGrid";

interface HeroProps {
  heroHeight?: string;
}

const Hero = ({ heroHeight = "100vh" }: HeroProps) => {
  const sideEventForm = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Flex
        id="home"
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={{ base: "0", md: "5rem" }}
        maxWidth="3xl"
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
            <Flex
              direction={{ base: "column" }}
              fontFamily="Dagheest-Gothic"
              fontSize={{ base: "20px", lg: "36px" }}
              letterSpacing="tighter"
              fontWeight="bold"
              color="black"
            >
              <Text as="span">Get Your Spicy DAO Fix</Text>

              <Text
                as="span"
                fontWeight="regular"
                fontSize={{ base: "16px", lg: "30px" }}
                color="black"
              >
                September 6 - 9th, 2022 Denver, C.O.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={{ base: "column" }} marginX={8} gap={8}>
            <StyledBox title="mcon.gif" showIcon>
              {isMobile ? (
                <Image src="/MCON2.gif" width={350} height={350} />
              ) : (
                <Image src="/MCON2.gif" width={700} height={700} />
              )}
            </StyledBox>
            <StyledBox title="about" id="about">
              <Flex bgColor="white" paddingX={4} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bringing together a limited number of attendees, MCON gives
                  you an experience of valuable conversations, learnings and
                  experimental growth all about DAOs.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="details" id="details" collapsed>
              <Flex
                direction="column"
                bgColor="white"
                paddingX={8}
                paddingY={4}
                color="black"
                fontFamily="Dagheest"
                fontSize="xl"
              >
                <Text>
                  Join the Meta Network as we head to DAOSchool, This year MCON
                  takes over a boutique high school campus in downtown denver
                  &quot;Evan School&quot; on Acoma.
                </Text>
                <br />
                <Text>
                  If you&apos;ve only ever dreamed of drinking tequila in
                  between classes we&apos;re here to make it a reality.
                </Text>
                <br />
                <Text>
                  With 6 classrooms of experiences to choose from, a main hall
                  seating only 200 people you&apos;ll be encouraged to choose
                  your own adventure while attending different talks and
                  discussions. Worst comes to worse you can always form a circle
                  on the lawn.
                </Text>
              </Flex>
            </StyledBox>
            <StyledBox title="speakers" id="speakers" collapsed>
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Coming soon!
                </Text>
                {/* <SpeakersGrid /> */}
              </Flex>
            </StyledBox>
            <StyledBox title="sponsors" id="sponsors">
              <Flex bgColor="white" paddingX={8} paddingY={4}>
                {/* <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Bring the Meta Network together for a rare Cryptopalooza of
                  fun, learning, and experimental growth in every direction.
                </Text> */}
                <SponsorsGrid />
              </Flex>
            </StyledBox>
            <StyledBox title="apply to attend" collapsed>
              <Flex
                bgColor="white"
                direction="column"
                alignItems="center"
                justifyContent="center"
                paddingX={8}
                paddingY={4}
                gap={4}
              >
                <Text color="black" fontFamily="Dagheest" fontSize="xl">
                  Fill out the form to apply to attend MCON 2022!
                </Text>
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
            </StyledBox>
          </Flex>
          <Flex
            direction={{ base: "column" }}
            alignItems="center"
            paddingTop={{ base: 4, md: 10 }}
            marginTop={{ base: 4 }}
            gap={4}
          >
            {/* <Flex direction={{ base: "column", lg: "row" }} gap={4}>
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
                onClick={sideEventForm.onOpen}
              >
                Submit a Side Event
              </Button>
            </Flex> */}

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

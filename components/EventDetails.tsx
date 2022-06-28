import { Box, Button, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import StyledBox from "components/StyledBox";
import EventCard from "components/EventCard";

interface EventsProps {
  events: any[];
}

const EventDetails = ({ events }: EventsProps) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={{ base: "0", md: "5rem" }}
      width="100%"
      maxWidth="3xl"
    >
      <Text
        as="span"
        fontFamily="Dagheest"
        fontSize="md"
        lineHeight={[6, 6, 6, 6]}
        letterSpacing="widest"
        color="black"
        paddingX={8}
        paddingY={4}
        width="100%"
      >
        Here is the MCON 2022 Events Calendar. Check back for updates. If
        you&apos;re signed in to your Google account, you can click the Add
        Calendar button to add the events schedule.{" "}
      </Text>

      <Flex
        direction="column"
        paddingX={{ base: 10, lg: 0 }}
        gap={{ base: 4, lg: 2 }}
        paddingTop={{ base: "2", md: "2" }}
        paddingBottom={{ base: "4", md: "4" }}
      >
        <ChakraLink
          isExternal
          // href="https://calendar.google.com/calendar/u/5?cid=Y19hZzZhc21jczJ2ZGlpMGFrc3RxdGsyOTBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          _hover={{
            textDecoration: "none"
          }}
        >
          <Button
            textDecoration="none"
            fontSize="2xl"
            borderRadius="none"
            paddingY={1}
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
              borderColor: "primaryNeon",
              cursor: "not-allowed"
            }}
          >
            Add Calendar (Soon!)
          </Button>
        </ChakraLink>

        <Box position="relative">
          {/* <Image
          alt="MCON 2022 Event Schedule"
          layout="responsive"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="/mcon-schedule.jpg"
          src="/mcon-schedule.jpg"
        /> */}
        </Box>
        {/* <AspectRatio ratio={1} maxHeight="100vh" marginY={4}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=599&wkst=1&bgcolor=%23D50000&ctz=America%2FDenver&src=ZGFtYWdlZGdvb2RzQG1ldGFjYXJ0ZWwub3Jn&src=Y19hZzZhc21jczJ2ZGlpMGFrc3RxdGsyOTBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23AD1457&color=%230B8043&color=%23B39DDB&mode=WEEK&showNav=0&showPrint=0&showCalendars=1&title=MCON%202021"
          scrolling="no"
          width="800"
          height="600"
        />
      </AspectRatio> */}
        {/* <AspectRatio ratio={1} maxHeight='60vh' marginY={4}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/J1NV6CUJl18'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </AspectRatio> */}
        <StyledBox title="SCHEDULE.txt" showIcon={false}>
          {events?.length > 0 ? (
            <Flex direction="column" bgColor="primaryRed" padding={4} gap={4}>
              {events?.map((event: any) => (
                <EventCard
                  title={event.fields["Event Title"]}
                  description={event.fields["Event Description"]}
                  startTime={event.fields["Event Start Time"]}
                  endTime={event.fields["Event End Time"]}
                />
              ))}
            </Flex>
          ) : (
            <Flex
              direction="column"
              bgColor="white"
              paddingX={8}
              paddingY={4}
              color="black"
              fontFamily="Dagheest"
              fontSize="md"
            >
              <Text>
                There are no side events scheduled yet! Check back soon.
              </Text>
            </Flex>
          )}
        </StyledBox>
      </Flex>
    </Flex>
  );
};

export default EventDetails;

import {
  Box,
  Button,
  Text,
  Flex,
  AspectRatio,
  Link as ChakraLink,
  Img
} from "@chakra-ui/react";
import StyledBox from "components/StyledBox";
import EventCard from "components/EventCard";

interface IEvents {
  events: any[];
}

const EventDetails = ({ events }: IEvents) => {
  console.log("events", events);
  return (
    <Box id="events" as="section">
      <Box
        maxW={{ base: "3xl", md: "7xl" }}
        width={{ base: "100vw", md: "70vw" }}
        marginX="auto"
        paddingX={{ base: "6", md: "10" }}
        paddingY={{ base: "8", md: "10" }}
      >
        <Text
          as="span"
          fontFamily="Dagheest"
          fontSize="md"
          // fontSize={["lg", "lg", "4xl", "4xl"]}
          lineHeight={[6, 6, 6, 6]}
          letterSpacing="widest"
          color="black"
        >
          Here is the MCON 2022 Events Calendar. Check back for updates. If
          you're signed in to your Google account, you can click the Add
          Calendar button to add the events schedule.{" "}
        </Text>

        <Flex
          maxW={{ base: "3xl", md: "7xl" }}
          width={{ base: "100vw", md: "70vw" }}
          marginX="auto"
          paddingTop={{ base: "2", md: "2" }}
          paddingBottom={{ base: "4", md: "4" }}
        >
          <ChakraLink
            isExternal
            href="https://calendar.google.com/calendar/u/5?cid=Y19hZzZhc21jczJ2ZGlpMGFrc3RxdGsyOTBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            _hover={{
              textDecoration: "none"
            }}
          >
            <Box
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
                cursor: "pointer"
              }}
            >
              Add Calendar
            </Box>
          </ChakraLink>
        </Flex>
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
        <StyledBox>
          <Flex direction="column" bgColor="primaryRed" padding={4} gap={4}>
            {events.map((event: any) => (
              <EventCard
                title={event.fields["Event Title"]}
                description={event.fields["Event Description"]}
                startTime={event.fields["Event Start Time"]}
                endTime={event.fields["Event End Time"]}
              />
            ))}
          </Flex>
        </StyledBox>
      </Box>
    </Box>
  );
};

export default EventDetails;

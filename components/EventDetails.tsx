import {
  AspectRatio,
  Box,
  Button,
  Text,
  Flex,
  Link as ChakraLink
} from "@chakra-ui/react";
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
          // href="https://calendar.google.com/calendar/embed?src=frdm8ja96g96c059nm8ejii8uk%40group.calendar.google.com&ctz=UTC"
          href="https://calendar.google.com/calendar/u/3?cid=ZnJkbThqYTk2Zzk2YzA1OW5tOGVqaWk4dWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
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
              borderColor: "primaryNeon"
            }}
          >
            Add Calendar
          </Button>
        </ChakraLink>
        {/* <AspectRatio ratio={1} maxHeight="100vh" marginY={4}>
          <iframe
            title="MetaCartel MCON2022 Events Calendar"
            src="https://calendar.google.com/calendar/embed?src=frdm8ja96g96c059nm8ejii8uk%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
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
                  key={`${event.fields["Event Title"]}-${event.fields["Event Start Time"]}`}
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

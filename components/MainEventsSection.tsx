import { Flex, Text } from "@chakra-ui/react";
import MainEventCard from "./MainEventCard";
import { mainEvents } from "./_mainEventsData";

const dayOneEvents = mainEvents.filter(event => event.sessionDay === "day 1");
const dayTwoEvents = mainEvents.filter(event => event.sessionDay === "day 2");

const MainEventsSection = () => (
  <Flex direction="column" bgColor="primaryRed" padding={4} gap={4}>
    <Text>Day One</Text>
    {dayOneEvents.map(event => (
      <MainEventCard
        key={event.sessionTime}
        title={event.title}
        sessionTime={event.sessionTime}
        nameOne={event.nameOne}
        orgOne={event.orgOne}
        nameTwo={event.nameTwo}
        orgTwo={event.orgTwo}
      />
    ))}
    <Text>Day Two</Text>
    {dayTwoEvents.map(event => (
      <MainEventCard
        key={event.sessionTime}
        title={event.title}
        sessionTime={event.sessionTime}
        nameOne={event.nameOne}
        orgOne={event.orgOne}
        nameTwo={event.nameTwo}
        orgTwo={event.orgTwo}
      />
    ))}
  </Flex>
);
export default MainEventsSection;

import { Flex, Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";

interface IEvent {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

const EventCard = ({ title, description, startTime, endTime }: IEvent) => {
  return (
    <Flex direction="row" bgColor="primaryNeon">
      <Flex
        paddingY={4}
        paddingLeft={4}
        flexBasis="40%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="primaryRed"
          fontFamily="Dagheest"
          fontWeight="bold"
          fontSize="xl"
        >
          {title}
        </Text>
        <Text
          color="primaryRed"
          fontFamily="Dagheest"
          fontWeight="bold"
          fontSize="md"
        >
          {format(new Date(startTime), "Pp")} -{" "}
          {format(new Date(endTime), "Pp")}
        </Text>
      </Flex>
      <Flex flexBasis="60%" paddingY={1} paddingRight={1}>
        <Text
          fontFamily="Dagheest"
          bgColor="primaryRed"
          color="primaryNeon"
          border="2px solid"
          borderColor="primaryNeon"
          width="100%"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default EventCard;

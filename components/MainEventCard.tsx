import { Flex, Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";

interface IEvent {
  title: string;
  sessionTime: string;
  nameOne: string;
  orgOne: string;
  nameTwo?: string;
  orgTwo?: string;
}

const MainEventCard = ({
  title,
  sessionTime,
  nameOne,
  orgOne,
  nameTwo,
  orgTwo
}: IEvent) => {
  return (
    <Flex direction={{ base: "column", lg: "column" }} bgColor="primaryNeon">
      <Flex
        paddingY={2}
        paddingLeft={4}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        <Flex direction="column" justifyContent="center" width="100%">
          <Text
            color="primaryRed"
            fontFamily="Dagheest"
            fontWeight="bold"
            fontSize="md"
          >
            {sessionTime}
          </Text>
          <Text
            color="primaryRed"
            fontFamily="Dagheest"
            fontWeight="bold"
            fontSize="xl"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <Flex
        paddingY={1}
        paddingX={4}
        width="100%"
        justifyContent="space-around"
      >
        {title !== "Break" && (
          <Flex flexBasis="50%" width="100%">
            <Text
              paddingX={2}
              width="100%"
              fontFamily="Dagheest"
              bgColor="primaryRed"
              color="primaryNeon"
              border="2px solid"
              borderColor="primaryNeon"
            >
              {nameOne}({orgOne})
            </Text>
          </Flex>
        )}
        {title !== "Break" && (
          <>
            {nameTwo && (
              <Flex flexBasis="50%" width="100%">
                <Text
                  paddingX={2}
                  width="100%"
                  fontFamily="Dagheest"
                  bgColor="primaryRed"
                  color="primaryNeon"
                  border="2px solid"
                  borderColor="primaryNeon"
                >
                  {nameTwo ?? nameTwo} ({orgTwo ?? orgTwo})
                </Text>
              </Flex>
            )}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default MainEventCard;

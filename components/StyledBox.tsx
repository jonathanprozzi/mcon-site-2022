import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

interface StyledBoxProps {
  title?: string;
  showIcon: boolean;
  children: React.ReactNode;
}

const StyledBox = ({ title, showIcon = false, children }: StyledBoxProps) => (
  <Flex
    direction="column"
    borderTop="2px solid black"
    borderX="2px solid black"
    borderBottom="2px solid black"
    position="relative"
  >
    <Flex
      direction="row"
      bgColor="white"
      padding={0}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      borderBottom="2px solid black"
    >
      {title && (
        <Text
          color="black"
          fontFamily="Dagheest"
          fontWeight="bold"
          paddingLeft={4}
        >
          {title}
        </Text>
      )}
      {showIcon && (
        <IconButton
          aria-label="Close box"
          color="black"
          alignSelf="flex-end"
          icon={<HiX />}
          padding={0}
        />
      )}
    </Flex>
    <Box borderBottom="2px solid black" boxShadow="-20px 10px 0px 10px black">
      {children}
    </Box>
  </Flex>
);

export default StyledBox;

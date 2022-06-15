import { Flex, Box, IconButton } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

interface StyledBoxProps {
  children: React.ReactNode;
}

const StyledBox = ({ children }: StyledBoxProps) => (
  <Flex
    direction="column"
    borderTop="2px solid black"
    borderX="2px solid black"
    borderBottom="2px solid black"
  >
    <Flex
      direction="row"
      bgColor="white"
      justifyContent="space-between"
      width="100%"
      borderBottom="2px solid black"
    >
      <IconButton
        aria-label="Close box"
        color="black"
        alignSelf="flex-end"
        icon={<HiX />}
      />
    </Flex>
    <Box borderBottom="2px solid black" boxShadow="-20px 10px 0px 10px black">
      {children}
    </Box>
  </Flex>
);

export default StyledBox;

import { useState } from "react";
import { Flex, Box, Text, IconButton, BoxProps } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

interface StyledBoxProps extends BoxProps {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
  collapsed?: boolean;
  id?: string;
}

const StyledBox = ({
  title,
  showIcon = false,
  children,
  collapsed = false,
  id,
  ...props
}: StyledBoxProps) => {
  const [collapsedContent, setCollapsedContent] = useState(collapsed);
  const [hideSelf, setHideSelf] = useState(false);
  const handleCollapseContent = () => setCollapsedContent(!collapsedContent);
  const handleHideSelf = () => setHideSelf(!hideSelf);

  return (
    <Flex
      id={id}
      direction="column"
      borderTop="4px solid black"
      borderX="4px solid black"
      borderBottom="4px solid black"
      position="relative"
      display={hideSelf ? "none" : "block"}
      {...props}
    >
      <Flex
        direction="row"
        bgColor="primaryNeon"
        padding={0}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        borderBottom="4px solid black"
        onClick={handleCollapseContent}
      >
        {title && (
          <>
            {collapsedContent ? (
              <Flex
                borderBottom={
                  collapsedContent ? "2px solid black" : "4px solid black"
                }
                boxShadow={
                  collapsedContent ? "-20px 20px 0px 1px black" : "none"
                }
                width="100%"
              >
                <Text
                  color="black"
                  fontFamily="Dagheest-Italic"
                  fontStyle="italic"
                  paddingX={6}
                  paddingY={1}
                  width="100%"
                >
                  {title}
                </Text>
              </Flex>
            ) : (
              <Text
                color="black"
                fontFamily="Dagheest-Italic"
                fontStyle="italic"
                paddingX={6}
                paddingY={1}
                width="100%"
              >
                {title}
              </Text>
            )}
          </>
        )}
        {showIcon && (
          <IconButton
            aria-label="Close box"
            color="black"
            alignSelf="flex-end"
            icon={<HiX />}
            padding={0}
            borderLeft="4px solid black"
            borderRadius="0"
            onClick={handleHideSelf}
          />
        )}
      </Flex>
      {!collapsedContent && (
        <Box
          borderBottom="2px solid black"
          boxShadow="-20px 10px 0px 10px black"
        >
          {children}
        </Box>
      )}
    </Flex>
  );
};

export default StyledBox;

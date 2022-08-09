import { useState } from "react";
import { Flex, Box, Text, IconButton, BoxProps } from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

interface SpeakerBoxProps extends BoxProps {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
  collapsed?: boolean;
  id?: string;
}

const SpeakerBox = ({
  title,
  showIcon = false,
  children,
  collapsed = false,
  id,
  ...props
}: SpeakerBoxProps) => {
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
      position="relative"
      display={hideSelf ? "none" : "block"}
      minWidth="100%"
      {...props}
    >
      <Flex
        direction="row"
        bgColor="primaryNeon"
        padding={0}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        onClick={handleCollapseContent}
        _hover={{
          cursor: 'url("/Mouse.png"), pointer'
        }}
      >
        {title && (
          <>
            {collapsedContent ? (
              <Flex width="100%">
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
            _hover={{
              cursor: 'url("/Mouse.png"), pointer'
            }}
          />
        )}
      </Flex>
      {!collapsedContent && (
        <Box backgroundColor="black" paddingX={4}>
          {children}
        </Box>
      )}
    </Flex>
  );
};

export default SpeakerBox;

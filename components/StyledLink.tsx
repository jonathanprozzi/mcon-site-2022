import { Text, Link as ChakraLink } from "@chakra-ui/react";

interface StyledLinkProps {
  text: string;
  fontSize?: string;
  color?: string;
}

const StyledLink = ({
  text,
  fontSize = "xl",
  color = "primaryNeon"
}: StyledLinkProps) => {
  return (
    <ChakraLink textDecoration="none" marginRight={4}>
      <Text
        fontFamily="Dagheest"
        fontSize={fontSize}
        textTransform="uppercase"
        color={color}
        transition="all ease-in-out .25s"
        _hover={{
          color: "black"
        }}
      >
        {text}
      </Text>
    </ChakraLink>
  );
};
export default StyledLink;

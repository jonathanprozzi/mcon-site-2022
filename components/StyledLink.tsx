import Link from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

interface StyledLinkProps {
  href: string;
  text: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  isExternal?: boolean;
}

const StyledLink = ({
  href,
  text,
  fontSize = "xl",
  color = "primaryNeon",
  hoverColor = "black",
  isExternal = false
}: StyledLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink textDecoration="none" marginRight={4} isExternal={isExternal}>
        <Text
          fontFamily="Dagheest"
          fontSize={fontSize}
          textTransform="uppercase"
          color={color}
          transition="all ease-in-out .25s"
          _hover={{
            color: { hoverColor }
          }}
        >
          {text}
        </Text>
      </ChakraLink>
    </Link>
  );
};
export default StyledLink;

import Link from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

interface StyledLinkProps {
  href: string;
  text: string;
  fontSize?: string;
  color?: string;
  isExternal?: boolean;
}

const StyledLink = ({
  href,
  text,
  fontSize = "xl",
  color = "primaryNeon",
  isExternal = false
}: StyledLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        marginRight={4}
        isExternal={isExternal}
        style={{ textDecoration: "none" }}
      >
        <Text
          fontFamily="Dagheest"
          textDecoration="none"
          fontSize={fontSize}
          textTransform="uppercase"
          color={color}
          transition="all ease-in-out .25s"
          _hover={{
            color: "primaryRed"
          }}
        >
          {text}
        </Text>
      </ChakraLink>
    </Link>
  );
};
export default StyledLink;

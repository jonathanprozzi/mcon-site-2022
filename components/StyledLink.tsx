import Link from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

interface StyledLinkProps {
  href: string;
  text: string;
  fontSize?: string;
  color?: string;
}

const StyledLink = ({
  href,
  text,
  fontSize = "xl",
  color = "primaryNeon"
}: StyledLinkProps) => {
  return (
    <Link href={href} passHref>
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
    </Link>
  );
};
export default StyledLink;

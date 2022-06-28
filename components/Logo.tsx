import Image from "next/image";
import { Stack } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Image src="/chili.png" width={50} height={50} />
    </Stack>
  );
};

export default Logo;

import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      color="gray.50"
      align="center"
      p={[5, 10]}
      maxWidth="1400px"
      h={14}
      bg="gray.800"
      _dark={{ bg: "gray.900" }}
    >
      <Link href="/" passHref>
        <a>
          <Text fontSize="lg" mr={6}>
            Admin
          </Text>
        </a>
      </Link>

      <Link href="/shop" passHref>
        <a>
          <Text fontSize="lg">Shop</Text>
        </a>
      </Link>
    </Flex>
  );
}

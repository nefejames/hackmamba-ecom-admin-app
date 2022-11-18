import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function ProductCard({ id, img, name, price }) {
  return (
    <Flex
      w="full"
      h="full"
      rounded="md"
      shadow="md"
      alignItems="center"
      justifyContent="space-around"
      padding={2}
    >
      <Text>{name}</Text>
      <Text>${price}</Text>

      <Box w="50px" height="50px" position="relative">
        <Image src={img} objectFit="cover" alt="a product" layout="fill" />
      </Box>

      <Link href={`/product/${id}`} passHref>
        <Text as="a" textDecor="underline" color="green.500">
          View Product
        </Text>
      </Link>
    </Flex>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { getXataClient } from "@utils/xata";
import ProductModal from "@components/ProductModal";
import UpdateProductForm from "@components/UpdateProductForm";

const xata = getXataClient();

export default function Product({ product }) {
  const router = useRouter();

  function deleteProduct(id) {
    fetch("/api/delete-product", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    router.push("/shop");
  }

  return (
    <Box>
      <Head>
        <title>{`Product - ${product.name}`}</title>
      </Head>
      <Box>
        <Flex justify="space-between" align="center" mb={5}>
          <Heading as="h1">{product.name}</Heading>

          <HStack spacing={3}>
            <ProductModal
              modalTitle="Update product"
              modalBtnTitle="Update Product"
            >
              <UpdateProductForm product={product} />
            </ProductModal>
            <Button
              color="white"
              bg="red.700"
              fontSize="md"
              _hover={{ bg: "red.600" }}
              onClick={() => deleteProduct(product.id)}
            >
              Delete product
            </Button>
          </HStack>
        </Flex>

        <Box w={["full", "500px"]} height="290px" position="relative" mb={5}>
          <Image
            src={product.img}
            objectFit="cover"
            alt="a product"
            layout="fill"
          />
        </Box>
        <Text fontsize={["md", "xl"]}>Price: ${product.price}</Text>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  try {
    const data = await xata.db.Products.filter({
      id: params.id,
    }).getMany();
    return {
      props: { product: data[0] },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  const products = await xata.db.Products.getAll();

  return {
    paths: products.map((product) => ({
      params: { id: product.id },
    })),
    fallback: true,
  };
}

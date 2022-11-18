import { useState } from "react";
import { Button, Box, Image, Input, VStack, useToast } from "@chakra-ui/react";
import ShowImageUploadWidget from "@utils/upload";

export default function AddProductForm() {
  const [imgUrl, setImgUrl] = useState(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const name = data.name;
    const price = data.price;

    fetch("/api/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        imgUrl,
      }),
    });
    e.target.reset();

    toast({
      title: "Product added",
      description: "Product sent to db.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={6}>
        <Input
          bg="white"
          name="name"
          type="text"
          w="full"
          mb={2}
          display="inline-block"
          placeholder="Name"
        />
        <Input
          bg="white"
          name="price"
          type="text"
          w="full"
          mb={2}
          display="inline-block"
          placeholder="Price"
        />
        <Button
          color="white"
          bg="green.600"
          fontSize="md"
          mb={4}
          _hover={{ bg: "green.500" }}
          onClick={() => ShowImageUploadWidget(setImgUrl)}
        >
          Upload Avatar
        </Button>
        {imgUrl && (
          <Box w="50px" height="50px" position="relative">
            <Image
              src={imgUrl}
              objectFit="cover"
              alt="a product"
              layout="fill"
            />
          </Box>
        )}
        <Button
          type="submit"
          color="white"
          bg="green.900"
          fontSize="md"
          w="full"
          _hover={{ bg: "green.800" }}
        >
          Add Product
        </Button>
      </VStack>
    </form>
  );
}

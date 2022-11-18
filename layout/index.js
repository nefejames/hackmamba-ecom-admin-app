import { Box } from "@chakra-ui/react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <Box>
      <Nav />

      <Box as="main" px={[5, 10]} py={[5, 10]} maxWidth="1400px">
        {children}
      </Box>
    </Box>
  );
}

import Head from "next/head";
import { Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <Heading>
        A CMS Admin built with{" "}
        <Link href="https://xata.io" color="green.700" isExternal>
          {" "}
          Xata
        </Link>{" "}
        and{" "}
        <Link href="https://cloudinary.com" color="green.700" isExternal>
          Cloudinary
        </Link>
      </Heading>
    </div>
  );
}

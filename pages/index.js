import Head from "next/head"
import Container from "../components/Container"
import BounceCard from "../components/BounceCard"
import { Box, Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react"
import BounceDescriptor from "../components/BounceDescriptor"

export default function Home() {

  return (
    <Container>
      <Head>

      </Head>
      <Box justifyContent="center" m="0 auto 7rem auto">
        <Text>I do not do front-end, sorry mobile users</Text>
      </Box>

      <Stack direction="row">
      <Box m="0 auto 4rem auto">
        <BounceCard></BounceCard>
      </Box>
      </Stack>
    </Container>
  )
}

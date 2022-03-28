import React from "react"
import {
    Flex,
    Stack,
    SimpleGrid,
    Heading,
    Link,
    Box,
    Text,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"
//import NextLink from "next/link"
import styled from "@emotion/styled"

const Container = ({ children }) => {
    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s
    `

    return(
        <>
        <Stack direction="column" alignItems="center" overflow="hidden">        
            <Flex
                as="main"
                justifyContent= "center"
                flexDirection="column"
                bgColor="#7D84B2"
                minWidth="100vw"
                minHeight="100vh"
            >
                {children}
                
            </Flex>
            <Flex
                overflow="hidden"
                justifyContent= "center"
                flexDirection="column"
                bgColor="#323031"
                height="20vh"
                w="100%"
            >
                <Stack direction="row" justifyContent="center" spacing="1vw">
                    <Box px="2rem">
                        <Text fontWeight="bold" color='white'>Legal</Text>
                        <UnorderedList>
                            <ListItem color="white">
                                <Link href="#" color="white">Privacy Policy</Link>
                            </ListItem>
                            <ListItem color="white">
                                <Link href="#" color="white">Terms and Conditions</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box px="2rem">
                        <Text fontWeight="bold" color='white'>Found Here</Text>
                        <UnorderedList>
                            <ListItem color="white">
                                <Link href="#" color="white">top.gg</Link>
                            </ListItem>
                            <ListItem color="white">
                                <Link href="#" color="white">discordbotlist.com</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box px="2rem">
                        <Text fontWeight="bold" color='white'>Social Media</Text>
                        <UnorderedList>
                            <ListItem color="white">
                                <Link href="https://discord.gg/Q9ykjvUcXu" rel="noopener noreferrer" color="white">Support Server</Link>
                            </ListItem>
                            <ListItem color="white">
                                <Link href="#" color="white">Twitter</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Stack>
            </Flex>
        </Stack>    
        </>
    )
}

export default Container

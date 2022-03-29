import { IconButton, Box, Image, Text, Stack, Tooltip, Button, Link } from "@chakra-ui/react"

const BounceCard = () => {
    return(
        <>
        <Box bg="#8FA6CB" maxWidth="30vw" boxShadow="0 0.3em 0.4em 0 rgba(0, 0, 0, 0.2), 0 0.1em 1em 0 rgba(0, 0, 0, 0.19)" display="flex" p="4" justifyContent="center" borderRadius="md">
            <Stack alignItems="center">
            <Box display="flex" boxSize={["60vw","40vw","40vw","24vw", "18vw"]}>
                <Image alt="A picture of me" src="https://i.imgur.com/XigtkGw.png" borderRadius="full" borderStyle="solid" borderWidth="0.3em" borderColor="#7D84B2"/>
            </Box>
            </Stack>
        </Box>
        <Stack>
            <Button onClick={() => window.location.href = "https://discord.com/api/oauth2/authorize?client_id=935876912931307520&permissions=36964352&scope=applications.commands%20bot"} colorScheme="messenger" boxShadow="0 0.3em 0.4em 0 rgba(0, 0, 0, 0.2), 0 0.1em 1em 0 rgba(0, 0, 0, 0.19)">
                Invite Me!
            </Button>
        </Stack>
        </>
    )
}

export default BounceCard

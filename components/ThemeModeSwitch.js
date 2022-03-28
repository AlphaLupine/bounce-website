import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColour = {
        light: "8FA6CB",
        dark: "7D84B2" 
    }
    return(
        <Tooltip label={colorMode === "dark" ? "Lights On?" : "Lights Off?"}>
            <IconButton
                aria-label={colorMode === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
                icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
                onClick={toggleColorMode}
                color={iconColour[colorMode]}
            />
        </Tooltip>
    )
}

export default ThemeModeSwitch

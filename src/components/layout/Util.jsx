import { InfoOutlineIcon, SearchIcon } from "@chakra-ui/icons"
import { Avatar, Box, Flex, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FaPalette, FaRegBell } from "react-icons/fa";

const Util = () => {
    return (
        <Flex  alignItems={'center'}
        bg={'gray.300'}
        h={61}
        mt={2}
        px={2}
        borderRadius={61}
        boxShadow={'0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)'}>
            <InputGroup w="50%">
                <InputLeftElement >
                    <IconButton
                        icon={<SearchIcon />}
                        aria-label="Search"
                        variant="ghost"
                        iconSize="15px"
                    />
                </InputLeftElement>
                <Input
                    type='text'
                    placeholder='Search...'
                    focusBorderColor="transparent"
                    bgColor="#f4f7fe"
                    borderRadius="30px"
                    border="transparent"
                />
            </InputGroup>
            <Box display={"flex"} alignItems={"center"} w={"45%"}>
                <IconButton
                    icon={<FaRegBell />}
                    aria-label="Notification"
                    variant="ghost"
                />
                <IconButton
                    icon={<InfoOutlineIcon />}
                    aria-label="Information"
                    variant="ghost"
                />
                <IconButton
                    icon={<FaPalette />}
                    aria-label="Theme"
                    variant="ghost"

                />
                <Avatar src='https://bit.ly/broken-link' h={"40px"} w={"40px"} marginLeft="10px" />
            </Box>
        </Flex>
    )
}

export default Util;

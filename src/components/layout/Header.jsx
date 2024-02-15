import { Box, Heading, Link,} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import Gnb from "./Gnb";
// import { SearchIcon, SunIcon } from "@chakra-ui/icons";
// import { PiHamburger } from "react-icons/pi";
// import gsap from "gsap";
// import { useEffect, useState } from "react";

const Header = () => {

    return (
        <>
        <Box
            as="header"
            id="header"
            flexDirection={"column"}
            justifyContent={"flex-start"}
            position={'fixed'}
            top={0}
            left={{base: "-100%", xl : 0}}
            bottom={0}
            zIndex={1000}
            maxW={"292px"}
            w={"100%"}
            bg={"white"}
            transition={"left 0.3s"}
            >
                    <Heading 
                    as={"h1"} 
                    fontSize={26}
                    fontWeight={400}
                    pt={14}
                    pb={9}
                    textAlign={"center"}
                    borderBottom={"1px solid"}
                    borderColor={"lineDefault"}
                    >
                        <Link 
                        as={ReactRouterLink}
                        to="/">
                        <strong>HORIZON</strong> 
                        FREE
                        </Link>
                    </Heading>
                    <Gnb/>
        </Box>
        </>
        
    )
}


export default Header;
import { Box, Stack } from '@chakra-ui/react'
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom";
import History  from "./History";
import Util from "./Util"
import DynamicTitle from "./DynamicTitle"

const Layout = (props) => {
    
    return (
        <>
        <Box display={"flex"} flexDirection={"column"} minH={"100vh"} >
            <Header/>
                
            <Box
                as="main"
                id="main"
                flexGrow={1}
                pl={{ base: '20px', md: '30px' ,xl: 312}}
                pr={{ base: '20px', md: '30px', xl: '12px'}}
                pt={{ base: 200, md: 140 }}
                transition={'all 0.2s'}
            >                {/* {props.showTitle && <h2>{props.title}</h2>}
                    {props.children} */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={'space-between'}
                    spacing={0}
                    pos={'fixed'}
                    top={'27px'}
                    left={{ base: '12px', xl: '315px' }}
                    right={'12px'}
                    py={2}
                    bg={'rgba(255, 255, 255, 0.1)'}
                    // bg={'red'}
                    backdropFilter={'blur(10px)'}
                    borderRadius={'0.75rem'}
                    transition={'all 0.2s'}
                    zIndex={100}
                >
                    <Box>
                    <History />
                    <DynamicTitle/>
                    </Box>
                    <Util />
                </Stack>
                    <Outlet/>
                </Box>
            <Footer/>
        </Box>
        </>
    )
}

const NoneLayout = () => {
    return (
        <>
        <Box bg={"#e2e2e2"}>
            <Box>
                <div>none</div>
                <Outlet/>
            </Box>
        </Box>
        </>
    )
}

export default Layout;
export {NoneLayout};
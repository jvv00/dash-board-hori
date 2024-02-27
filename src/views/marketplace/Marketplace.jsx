import { Box, Button, Card, Flex, Grid, GridItem, Image, Link, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import Banner from "./components/Banner";
import NFT from "./components/NFT";
import { TitleH2, TitleH3 } from '../../components/common/Title'
// import { motion } from "framer-motion";
import Nft1 from "../../assets/images/Nft1.png";
import Nft2 from "../../assets/images/Nft2.png";
import Nft3 from "../../assets/images/Nft3.png";
import Avatar1 from "../../assets/images/avatars/avatar1.png";
import Avatar2 from "../../assets/images/avatars/avatar2.png";
import Avatar3 from "../../assets/images/avatars/avatar3.png";
import Avatar4 from "../../assets/images/avatars/avatar4.png";
import TopCreatorTable from "./components/TopCreatorTable";
import History from "./components/History";

const Marketplace = () => {
    const textColor = useColorModeValue("navy.700", "white");
    const textColorBid = useColorModeValue("brand.500", "white");

    return (
        <>
        <Grid templateColumns="repeat(3, 1fr)" display={{ base: 'block', xl: 'grid' }} gap={6}>
            <Flex gridColumn={'1 / span 2'} flexDir={'column'} w="100%" gap={10}>
                {/* <Box w="100%" h="100" bg="blue.500"> */}
                <Banner/>
                <Flex
                flexDirection='column'
                gap={10} mb={'20px'}>
                    <Box>
                    <Flex
                        mt='45px'
                        mb='20px'
                        justifyContent='space-between'
                        direction={{ base: "column", md: "row" }}
                        align={{ base: "start", md: "center" }}>
                    <TitleH3>Trending NFTs</TitleH3>
                    <Flex>
                        <Link
                            color={textColor}
                            fontWeight={500}
                            me={{base: "34px", md: "44px"}}
                        >Art</Link>
                        <Link
                            color={textColor}
                            fontWeight={500}
                            me={{base: "34px", md: "44px"}}
                        >Music</Link>
                        <Link
                            color={textColor}
                            fontWeight={500}
                            me={{base: "34px", md: "44px"}}
                        >Collectibles</Link>
                        <Link
                            color={textColor}
                            fontWeight={500}
                            me={{base: "34px", md: "44px"}}
                        >Sports</Link>
                    </Flex>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
                        <NFT 
                        name='Abstract Colors'
                        author="By Esthera Jackson"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft1}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                        <NFT 
                        name='ETH AI Brain'
                        author="By Nick Wilson"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft2}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                        <NFT 
                        name='Mesh Gradients'
                        author="By Will Smith"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft3}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                    </SimpleGrid>
                    </Box>
                    <Box>
                        <TitleH3>Recently Added</TitleH3>
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
                        <NFT 
                        name='Abstract Colors'
                        author="By Esthera Jackson"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft1}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                        <NFT 
                        name='ETH AI Brain'
                        author="By Nick Wilson"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft2}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                        <NFT 
                        name='Mesh Gradients'
                        author="By Will Smith"
                        bidders={[
                        Avatar1, 
                        Avatar2, 
                        Avatar3, 
                        Avatar4,
                        Avatar4,
                        Avatar4,
                    ]}
                        image={Nft3}
                        currentbid='0.91 ETH'
                        download='#'
                        />
                    </SimpleGrid>
                    </Box>
                    </Flex>
                {/* </Box> */}
            </Flex>
            <Flex w="100%" flexDir={'column'} gap={10} mb={'20px'}>
                {/* <Box w="100%" h="100" bg="blue.500"></Box> */}
                <Card p={'20px 0'}>
                <TopCreatorTable/>
                </Card>
            </Flex>
            <Flex w="100%" flexDir={'column'} gap={10}>
                {/* <Box w="100%" h="100" bg="blue.500"></Box> */}
                <Card p={'20px 0'}>
                <Flex
            align={{ sm: "flex-start", lg: "center" }}
            justify='space-between'
            w='100%'
            px='22px'
            pb='20px'
            mb='10px'
            boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
            <TitleH2>History</TitleH2>
            <Button variant='action'>See all</Button>
            </Flex>
                <History
                name='Abstract Colors'
                author="By Esthera Jackson"
                date='58s ago'
                image={Nft1}
                price='0.91 ETH'
                />
                </Card>
            </Flex>
        </Grid>
        </>
        
    )
}

export default Marketplace;
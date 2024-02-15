import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
// import { motion } from "framer-motion";
import topImg from '../../assets/images/_8dhZ2QXoOxi4QAviL_x3x5lusaeVJGtVDvOJ8iyVrBQXOA-nEcst9MlALAimjErAAucAtO1Wb7CPknkBGNmITqi_wIqA0mbKeVM_4E.avif'
import { useEffect, useState } from "react";

const Marketplace = () => {

// const boxStyle = {
//     width: "200px",
//     height: "200px",
//     background: "red",
//     borderRadius: "50%",
// }
useEffect(() => {
    const handleScroll = () => {
        const headerHeight = document.querySelector('header').offsetHeight; // header의 높이
        const tabContainer = document.getElementById('lnb'); // tab 컨테이너
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // 스크롤 위치
        const topContHeight = document.getElementsByClassName('topCont')[0].offsetHeight;

        // 만약 스크롤 위치가 header 아래로 이동하면 tab을 fixed로 설정
        if (scrollPosition > headerHeight + topContHeight) {
            document.getElementById('header').style.top = '-90px'
            tabContainer.style.position = 'fixed';
            tabContainer.style.top = '0';
            tabContainer.style.width = '100%';

        } else {
            // 그렇지 않으면 tab의 position을 static으로 변경
            tabContainer.style.position = 'static';

        }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
        <>
            <div>
            {/* <h2>Marketplace</h2> */}
            </div>
            {/* <motion.div 
            style={boxStyle} 
            initial={{ opacity: 0 }} 
            animate={{opacity: 1, x: 100}}
            transition={{ duration: 2, ease: "easeInOut",}}
            /> */}
             <Box className="topCont" h={'500px'} bg={`url(${topImg}) no-repeat 50% 50% / cover `}>
             <Image src={topImg} alt=""/>
             <Image src="/logo192.png"/>
             </Box>
            <Tabs as='lnb' id="lnb" position={'static'} >
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>
                        </p>
                    </TabPanel>
                   
                </TabPanels>
                </Tabs>
                <div style={{ height: '100vh' }}></div>
        </>
        
    )
}

export default Marketplace;
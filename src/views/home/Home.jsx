// import Layout from "../../components/layout/Layout"
import Ministatistics from "../../components/card/MiniStatistics";
// import MainSlide from "./components/MainSlide";
import { Box,  SimpleGrid,  VStack } from "@chakra-ui/react";
import IconBox from "../../components/icons/IconBox";
import { FaChartSimple, FaDollarSign } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdAddTask, MdOutlineTask } from "react-icons/md";
import TotalSpent from "./components/TotalSpent";
import Weekly from "./components/Weekly";
import CheckTable from "./components/CheckTable";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";

const Home = () => {
    return (
        <>
        <VStack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 ,"2xl" : 6}} spacing="20px" w={'100%'}>
                <Ministatistics 
                name="Earnings" 
                value="$350.4"
                startContent={
                    <IconBox w={"56px"}h={"56px"} bg={"bgDefault"} icon={<FaChartSimple/>}/> 
                }/>
                <Ministatistics
                 name="Spend this month" 
                 value="$642.39"
                 startContent={
                     <IconBox w={"56px"}h={"56px"} bg={"bgDefault"} icon={<FaDollarSign />}/> 
                 }/>
                <Ministatistics
                growth="+10.39%"
                name="Sales" 
                value="$574.34"
                text="since last month"
                />
                <Ministatistics
                name="Your balance"
                value="$1,000"
                 endContent={
                    <IconBox  w={"56px"}h={"56px"} bg={"bgDefault"} icon={<LiaFlagUsaSolid/>}/> 
                 }
                />
                <Ministatistics 
                name="New Tasks"
                value="154"
                startContent={
                     <IconBox w={"56px"}h={"56px"} bg={"bgDefault"} icon={<MdAddTask />}/> 
                 }/>
                <Ministatistics 
                name="Total Projects"
                value="2935"
                startContent={
                     <IconBox w={"56px"}h={"56px"} bg={"bgDefault"} icon={<MdOutlineTask />}/> 
                 }/>  
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <TotalSpent/>
                <Weekly/>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <CheckTable/>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <DailyTraffic/>
                    <PieCard/>
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <Box bg="tomato" height="80px">
                    1
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Box bg="tomato" height="80px">
                        1
                    </Box>
                    <Box bg="tomato" height="80px">
                        1
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </VStack>
        </>
    )
}


export default Home;
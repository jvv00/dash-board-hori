import { Box, Card, Flex, Select, Text } from "@chakra-ui/react"
import { pieChartData, pieChartOptions } from "../../../variables/charts"
import PieChart from "../../../components/charts/PieChart"
const PieCard = () => {
    return (
        <Card padding={"20px"} direction={"column"}>
            <Flex justifyContent={"space-between"} align={"center"}>
                <Text fontWeight='700'>
                    Your Pie Chart
                </Text>
            <Select defaultValue='monthly' fontSize="14px" fontWeight='700' border={"transparent"} width={"max-content"} color={"gray.400"}>
            <option value='daily'>Daily</option>
            <option value='monthly'>Monthly</option>
            <option value='yearly'>Yearly</option>
            </Select>
            </Flex>
            <PieChart
                
                chartData={pieChartData}
                chartOptions={pieChartOptions}
            />
            <Card 
            display={"flex"} 
            flexDirection={"row"} 
            p='15px'
            px='20px'
            mt='15px'>
                <Flex direction={"column"} >
                <Flex pb={2} align={"center"}>
                <Box w={"8px"} h={"8px"} borderRadius={"50%"} bg={"brandScheme.500"} me='4px'/>
                <Text  color={"gray.400"} fontSize={"12px"} fontWeight={700}>
                    Your files
                </Text>
                </Flex>
                <Text fontSize={"18px"} fontWeight={700} align={"center"}>
                    63%
                </Text>
                </Flex>
                <Flex w={"1px"} bg='rgba(135, 140, 189, 0.3)'mx={{ base: "60px", md: "20px"}} />
                <Flex direction={"column"}>
                <Flex pb={2} align={"center"}>
                <Box w={"8px"} h={"8px"} borderRadius={"50%"} bg={"cyan.300"} me='4px'/>
                <Text  color={"gray.400"} fontSize={"12px"} fontWeight={700}>
                    System
                </Text>
                </Flex>
                <Text fontSize={"18px"} fontWeight={700} align={"center"}>
                    25%
                </Text>
                </Flex>
                
            </Card>
        </Card>
    )
}

export default PieCard
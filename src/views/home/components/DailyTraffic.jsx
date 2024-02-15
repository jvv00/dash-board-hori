import { Box, Card, CardBody, CardHeader, Flex, Icon, Stat, StatArrow, StatHelpText, Text } from "@chakra-ui/react"
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../../variables/charts"
import BarChart from "../../../components/charts/BarChart"
import { IoMdArrowDropup } from "react-icons/io"
const DailyTraffic = () => {
    return (
        <>
        <Card>
            <CardBody>
                <Flex justifyContent={"space-between"}>

                </Flex>
                <Flex direction={"row"} justifyContent={"space-between"}>

                    <Text fontSize={"14px"} fontWeight={500} color={"gray.400"}>
                        Daily Traffic
                    </Text>
                    <Box display={"flex"} alignItems={"center"}>
                    <Icon as={IoMdArrowDropup} color='green.500' h={"14px"}/><Text>+2.45%</Text>
                    </Box>

                </Flex>                   
                  <Flex alignItems={"baseline"}>       
                <Text fontSize={"34px"} fontWeight={700}>2.579</Text><Text fontSize={"14px"} fontWeight={500} color={"gray.400"} ml={"6px"}>Visitors</Text>
                </Flex>
            <Box h={"240px"}>
            <BarChart
            chartData={barChartDataDailyTraffic}
            chartOptions={barChartOptionsDailyTraffic}
            />
            </Box>
                

            </CardBody>
        </Card>
        </>
    )
}

export default DailyTraffic
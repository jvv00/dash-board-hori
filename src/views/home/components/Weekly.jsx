import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react"
import BarChart from "../../../components/charts/BarChart"
import { barChartDataConsumption, barChartOptionsConsumption } from "../../../variables/charts"
const Weekly = () => {
    return (
        <>
        <Card>
            <CardHeader fontSize="20px" fontWeight='700'>Weekly Revenue</CardHeader>
            <CardBody>
                <Box h='240px' mt='auto'>
                <BarChart
                chartData={barChartDataConsumption}
                chartOptions={barChartOptionsConsumption}
                />
                </Box>
            </CardBody>
        </Card>
        </>
    )
}

export default Weekly
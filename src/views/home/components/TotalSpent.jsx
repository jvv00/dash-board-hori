import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import Chart from 'react-apexcharts'
import LineChart from '../../../components/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../variables/charts';

const TotalSpent = () => {

        return (
            <Card>
                <CardHeader>
                    <Stat>
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>$37.5K</StatNumber>
                        <StatHelpText>
                            Total Spent
                            <StatArrow type="increase" />
                            +2.45%
                        </StatHelpText>
                    </Stat>
                    <Text color='green.500' fontSize='md' fontWeight='700'>
                        On track
                    </Text>
                </CardHeader>
                <CardBody>
                <LineChart
                    chartData={lineChartDataTotalSpent}
                    chartOptions={lineChartOptionsTotalSpent}
                />
                </CardBody>
            </Card>
        )
    }

export default TotalSpent

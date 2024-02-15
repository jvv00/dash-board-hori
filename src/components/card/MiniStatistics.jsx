import { Box, Card, CardBody, Flex, Spacer, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react"
import { FaChartSimple } from "react-icons/fa6";

const Ministatistics = (props) => {
    const {startContent, name, value, text, growth, endContent} = props
    return(
        <>
        <Card>
            <CardBody>
            <Flex>
                {startContent}
                    <Stat ml={startContent ? 5 : 0}>
                    <StatLabel> {name}</StatLabel>
                    <StatNumber>{value}</StatNumber>
                    <StatHelpText>
                        {growth ? ( <Flex align='center'>
              <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
                {growth}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text}
              </Text>
            </Flex>

                    ) : null}
                    </StatHelpText>
                    </Stat>
                <Spacer />
                <Box
                 w={"56px"}
                 h={"56px"} 
                 display={"flex"} 
                 justifyContent={"center"} 
                 alignItems={"center"} 
                 borderRadius={"50%"} 
                 color={"primary"}
                 fontSize={"24px"}
                 bg={"bgDefault"}
                 >
                    {endContent}
                </Box>
            </Flex>
            </CardBody>
        </Card>
    </>
        
    )
}

export default Ministatistics
import { Box, Card, CardBody, CardHeader, Checkbox, Flex, Icon, Text } from "@chakra-ui/react"
import { MdCheckBox, MdDragIndicator } from "react-icons/md"
import IconBox from "../../../components/icons/IconBox"
import { TitleH2 } from "../../../components/common/Title"

const Tasks = () => {
    return(
        <Card>
            <CardHeader>
                <Flex align={"center"}>
            <IconBox
          me='12px'
          w='38px'
          h='38px'
          icon={<Icon as={MdCheckBox} color={"brand.500"} w='24px' h='24px' />}
        />
                <TitleH2>Tasks</TitleH2>
                </Flex>                                             
            </CardHeader>
            <CardBody>
                <Box>
                    <Flex align={"center"} mb={"20px"}>
                    <Checkbox me={"16px"} /> 
                    <Text>Landing Page Design</Text>
                    <Icon as={MdDragIndicator} ms={"auto"}/>
                    </Flex>
                    <Flex align={"center"} mb={"20px"}>
                    <Checkbox me='16px' defaultChecked colorScheme='brandScheme' />
                    <Text>Dashboard Builder</Text>
                    <Icon as={MdDragIndicator} ms={"auto"}/>
                    </Flex>
                    <Flex align={"center"} mb={"20px"}>
                    <Checkbox me='16px' defaultChecked colorScheme='brandScheme' />
                    <Text>Mobile App Design</Text>
                    <Icon as={MdDragIndicator} ms={"auto"}/>
                    </Flex>
                    <Flex align={"center"} mb={"20px"}>
                    <Checkbox me={"16px"} /> 
                    <Text>Illustrations</Text>
                    <Icon as={MdDragIndicator} ms={"auto"}/>
                    </Flex>
                    <Flex align={"center"} mb={"20px"}>
                    <Checkbox me='16px' defaultChecked colorScheme='brandScheme' />
                    <Text>Promotional LP</Text>
                    <Icon as={MdDragIndicator} ms={"auto"}/>
                    </Flex>
                </Box>
            </CardBody>
        </Card>
    )
}

export default Tasks
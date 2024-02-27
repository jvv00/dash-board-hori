import { Button, Card, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { TitleH2 } from "components/common/Title"
import { FaEthereum } from "react-icons/fa6";

const History = (props) => {
    const {  image, name, author, price, date } = props;
    return (
        <>
        <Flex
            align={{ sm: "flex-start", lg: "center" }}
            justify='space-between'
            w='100%'
            px='22px'
            pb='20px'
            mb='10px'
            boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
           
        </Flex>
        <Card>
        <Flex direction={'row'} align='center'>
            <Image
            src={image}
            w='66px' h='66px' me={'16px'}
            objectFit={'cover'}
            borderRadius={'xl'}/>
            <Flex direction={'column'} align='center'>
                <Text>{name}</Text>
                <Text>{author}</Text>
            </Flex>
            <Flex me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
            align='center'>
            <Icon as={FaEthereum} width='9px' me='7px' />
                <Text>{price}</Text>
            </Flex>
            <Flex>
                <Text>{date}</Text>
            </Flex>
        </Flex>
        </Card>
        </>
    )
}

export default History
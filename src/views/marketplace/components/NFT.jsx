import { Avatar, AvatarGroup, Box, Button, Card, Flex, Icon, Image, Link, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const NFT = (props) => {
    const {  image, name, author, bidders, download, currentbid } = props;
    const [like, setLike] = useState(false);
    const textColor = useColorModeValue("navy.700", "white");
    const textColorBid = useColorModeValue("brand.500", "white");
    return (
        <>
        <Card p={'20px'}>
        <Flex direction={{ base: "column" }} justify='center'>
        <Box mb={{ base: "20px", "2xl": "20px" }} position='relative' borderRadius='xl' overflow={'hidden'}>
            <Image
                src={image}
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                />
            <Button
                variant={'link'}
                position={'absolute'}
                top={"14px"}
                right={"14px"}
                w={'36px'}
                h={'36px'}
                borderRadius={'full'}
                bg={'white'}
                color={'primary'}
                onClick={() => {
                    setLike(!like);
                  }}>
                <Icon
                transition='0.2s linear'
                w='20px'
                h='20px'
                as={like ? IoHeart : IoHeartOutline}
                color='brand.500'
                />
            </Button>
        </Box>
            <Flex flexDirection='column' justify={'space-between'} h={'100%'}>
                <Flex
                    justify={'space-between'}
                    direction={{
                        base: 'row',
                        md: 'column',
                        lg: 'row',
                        xl: 'column',
                        '2xl': 'row',
                    }}
                    mb={0}
                >
                <Flex direction={'column'}>
                <Text
                    color={textColor}
                    fontSize={{
                    base: "xl",
                    md: "lg",
                    lg: "lg",
                    xl: "lg",
                    "2xl": "md",
                    "3xl": "lg",
                    }}
                    mb='5px'
                    fontWeight='bold'
                    me='14px'>
                    {name}
                </Text>
                <Text
                    color='secondaryGray.600'
                    fontSize={{
                    base: "sm",
                    }}
                    fontWeight='400'
                    me='14px'>
                    {author}
                </Text>
            </Flex>
            <AvatarGroup
            max={3}
            color={textColorBid}
            size='sm'
            mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
            }}
            fontSize='12px'>
            {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
            ))}
            </AvatarGroup>
            </Flex>
          <Flex
            align='start'
            justify='space-between'
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt='25px'>
            <Text fontWeight='700' fontSize='sm' color={"#11047A"}>
              Current Bid: {currentbid}
            </Text>
            <Link
              href={download}
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}>
              <Button
                variant='darkBrand'
                bg={"#11047A"}
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'>
                Place Bid
              </Button>
            </Link>
          </Flex>
          </Flex>
          </Flex>
          </Card>
        </>
    )

}
export default NFT
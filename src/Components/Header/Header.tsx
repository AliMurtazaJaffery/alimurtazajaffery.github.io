import React from 'react';
import { Image,Box,Flex,Heading,Text } from "@chakra-ui/react"
import myImage from "./photo.jpg"


function Header(){
  return(
    <>
      <Box mt="90px">
        <Flex align="center" justify="center">
          <Image boxSize={["65px","65px","130px","130px"]} borderRadius="full" src={myImage}/>
          <Heading mx={["15px","25px"]} fontSize={["23px","40px"]}>S M Ali Murtaza Jaffery</Heading>
        </Flex>
        <Flex mt="-5px"justify="center">
          <Text >Engineer  </Text>
          <Text mx="10px">|</Text>
          <Text>Software Developer</Text>
        </Flex>
      </Box>
    </>
  )

}
export default Header
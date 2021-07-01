import React from 'react';
import { Box,Flex,Heading,Text,useColorMode,IconButton } from "@chakra-ui/react"
import {SunIcon,MoonIcon} from "@chakra-ui/icons"
import Image from "next/image"


function Header(){
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <>
      <Box mt="60px">
        <Flex align="center" justify="center">
          <Box boxSize={["65px","65px","130px","130px"]} >
          <Image src="/photo.jpg" width={100} height={100} className="myHeaderImage"/>
          </Box>
          <Heading mx={["15px","25px"]} fontSize={["20px","29px","35px","40px"]}>S M Ali Murtaza Jaffery</Heading>
        </Flex>
        <Flex mt="-5px"justify="center" align="center" pl={["70px","70px"]}>
          <Text fontSize={["13px","18px"]}>Engineer  </Text>
          <Text mx="10px">|</Text>
          <Text fontSize={["13px","18px"]}>Software Developer</Text>
          <IconButton
            ml="20px"
            aria-label="Dark Mode"
            size="xs"
            variant="outline"
            icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </>
  )

}
export default Header
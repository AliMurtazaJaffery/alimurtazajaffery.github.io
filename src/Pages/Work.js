import firstCode from './WorkImages/firstcode.png'
import {Flex,Image,Heading,Box,Text} from '@chakra-ui/react'

export default function Work(){
  return(
    <>
      <Flex align="space-around" w="80%" mx="10%">
      <Box align="center" >          
          <Image src={firstCode} boxSize="120px"  width="300px"/>
          <Heading mt="20px" fontSize="xl">First Code Academy</Heading>
          <Text>Summer Instructor (May 2019 - August 2019)</Text>
        </Box>
      </Flex>
    </>
  )
}
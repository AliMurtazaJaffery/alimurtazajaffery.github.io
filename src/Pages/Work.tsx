import firstCode from './WorkImages/firstcode.png'
import {Flex,Image,Heading,Box,Text} from '@chakra-ui/react'

export default function Work(){
  return(
    <>
      <Flex align="space-between" w="40%" mx="30%">
      <Box align="center" >          
          <Image src={firstCode} boxSize="100px"  width="240px"/>
          <Heading mt="20px" fontSize="xl">First Code Academy</Heading>
          <Text>Summer tech Instructor</Text>
          <Text>(May 2019 - August 2019)</Text>
        </Box>
      </Flex>
    </>
  )
}
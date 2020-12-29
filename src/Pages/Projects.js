
import {Flex,Image,Heading,Box,Text} from '@chakra-ui/react'
import bigtwo from './ProjectsImages/bigTwoGUI.PNG'
import notakto from './ProjectsImages/notakto.png'
import weatherApp from './ProjectsImages/weatherWebApp.PNG'


export default function Projects() {
  return (
    <>
      <Flex justify="space-around" w="80%" mx="10%" wrap="wrap" mb="80px">
        <Box align="center" >          
          <Image src={weatherApp} boxSize="250px"  width="300px"/>
          <Heading mt="20px" fontSize="xl">Weather Web App</Heading>
          <Text></Text>
        </Box>
        <Box align="center" >         
          <Image src={bigtwo} boxSize="250px" w="300px"/>
          <Heading mt="20px" fontSize="xl">Big Two Game</Heading>
          <Text></Text>
        </Box>
        <Box align="center" >         
          <Image src={notakto} boxSize="250px" width="300px"/>
          <Heading mt="20px" fontSize="xl">AI version of Notakto </Heading>
          <Text></Text>
        </Box>
        
      </Flex>
      <Text>Will Add Description to all</Text>
    </>
  );
}

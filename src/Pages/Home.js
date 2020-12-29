
import {Image,Box,Heading,Text,Flex,Spacer} from "@chakra-ui/react"
import fgs from "./HomeImages/fgs.png"
import hku from "./HomeImages/hku.jpg"

export default function App() {
  return (
    <>

      <Box textAlign="center" mt="50px" mx="23%">
        <Heading fontSize="2xl"  >About Me</Heading>
        <Text mt="20px">
          I am currently a Sophomore at The University of Hong Kong and will be graduating in 2023.
          Solving problems and brainstorming new ideas are some of the things which I relish.
          Besides coding, I enjoy Cooking and playing Tennis. And yes, I am a proud Chelsea supporter. 
        </Text>
      </Box>
      <Box textAlign="center" mb="40px">
        <Heading fontSize="2xl" my="30px">Education</Heading>
        <Flex justify="center">
          <Box align="center" mx={["40px","80px"]}>
            <Image src={fgs} boxSize={["90px","150px"]} />
            <Heading fontSize={["xs","lg"]} my="10px">FFC Grammar H/S School</Heading>
            <Text fontSize={["xs","lg"]}>(2006-2019)</Text>
            <Text fontSize={["xs","lg"]}>Cambridge O' Levels 9A*</Text>
            <Text fontSize={["xs","lg"]}>Cambridge A' Levels 4A*</Text>
            <Text fontSize={["xs","lg"]}>A perfect SAT score of 2400 in SAT Subject Test</Text>
            
          </Box>
          <Box align="center" mx={["40px","80px"]}>
            <Image src={hku} boxSize={["90px","150px"]}/>
            <Heading fontSize={["xs","lg"]} my="10px">The University Of Hong Kong</Heading>
            <Text fontSize={["xs","lg"]}>(2019-2023)</Text>
            <Text fontSize={["xs","lg"]}>Full 100% Scholarship</Text>
            <Text fontSize={["xs","lg"]}>Current CGPA : 3.97</Text>            
            <Text fontSize={["xs","lg"]}>Dean's Honours List in academic year 2019-2020</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

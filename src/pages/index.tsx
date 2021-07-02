import {Box,Heading,Text,Flex,Divider} from "@chakra-ui/react"
import fgs from "../../public/HomeImages/fgs.png"
import hku from "../../public/HomeImages/hku.jpg"
import Image from 'next/image';
import SEO from "../Components/SEO/SEO"

export default function App() {
  return (
    <>
    <SEO/>
    <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]}>
      <Box textAlign="center" mt="30px">
        <Heading fontSize="2xl"  >About Me</Heading>
        <Divider my='20px' orientation="horizontal" />
        <Text mb="25px">
          I am currently a Sophomore at The University of Hong Kong and will be graduating in 2023.
          Solving problems and brainstorming new ideas are some of the things which I relish.
          Besides coding, I enjoy Cooking and playing Tennis. According to my mother, I am an amazing chef.
        </Text>
      </Box>
      <Box textAlign="center" mb="40px">
        <Heading fontSize="2xl" >Education</Heading>
        <Divider my='20px' orientation="horizontal" />
        <Flex>
          <Box align="center" mr="5.5px" mt="10px">
            <Image src={fgs} height={120} width={120}/>
            <Heading fontSize={["xs","md"]} my="10px">FFC Grammar H/S School</Heading>
            <Text fontSize={["xs","md"]}>(2006-2019)</Text>
            <Text fontSize={["xs","md"]}>Cambridge O' Levels 9A*</Text>
            <Text fontSize={["xs","md"]}>Cambridge A' Levels 4A*</Text>
            <Text fontSize={["xs","md"]}>A perfect SAT score of 2400 in SAT Subject Test</Text>
            
          </Box>
          <Box align="center" ml="5.5px" mt="10px">
            <Image src={hku} height={120} width={120}/>
            <Heading fontSize={["xs","lg"]} my="10px">The University Of Hong Kong</Heading>
            <Text fontSize={["xs","lg"]}>(2019-2023)</Text>
            <Text fontSize={["xs","lg"]}>Full 100% Scholarship</Text>
            <Text fontSize={["xs","lg"]}>Current CGPA : 3.84</Text>            
            <Text fontSize={["xs","lg"]}>Dean's Honours List in academic year 2019-2020</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
    </>
  );
}

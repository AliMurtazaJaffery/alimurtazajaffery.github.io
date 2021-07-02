import {Flex,Heading,Box,Text} from '@chakra-ui/react'
import Image from "next/image"
import SEO from "../../Components/SEO/SEO"

type workProps={
  image:any,
  position: React.ReactNode,
  company:React.ReactNode,
  timePeriod:React.ReactNode,
}
const WorkExperience:React.FunctionComponent<workProps> = ({position,company, image,timePeriod})=>(
  <Box align="center" mb="45px" w="45%" >  
    <Image src={image} height={100} width={250}/>
    <Heading mt="20px" fontSize={["sm","md","xl","xl"]}>{company}</Heading>
    <Text fontSize={["xs","sm","md","md"]}>{position}</Text>
    <Text fontSize={["xs","sm","md","md"]}>{timePeriod}</Text>
  </Box>
)

export default function Work(){
  return(
    <>
      <SEO siteTitle="Work"/>
      <Flex justify="space-between" w={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} wrap="wrap" mb="80px">
        <WorkExperience image='/WorkImages/riodefi.svg' position="Full Stack Engineer" company="RioDefi" timePeriod="(June 2021 - Present)" /> 
        <WorkExperience image='/WorkImages/hku.png' position="Student Teaching Assistant" company="The University Of Hong kong" timePeriod="February(2021) - April(2021)" /> 
        <WorkExperience image="/WorkImages/FSI.png" position="Software Developer (Part Time)" company="Foundation For Shared Impact" timePeriod="February(2021) - April(2021)"/>
        <WorkExperience image='/WorkImages/firstcode.png' position="Summer tech Instructor" company="First Code Academy" timePeriod="(May 2019 - August 2019)" /> 
      </Flex>
    </>
  )
}
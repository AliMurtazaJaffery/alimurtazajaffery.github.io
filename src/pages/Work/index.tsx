import firstCode from '../../../public/WorkImages/firstcode.png'
import FSI from '../../../public/WorkImages/FSI.png'
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
    <Image src='/WorkImages/FSI.png' height={100} width={250}/>
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
        <WorkExperience image={FSI} position="Software Developer (Part Time)" company="Foundation For Shared Impact" timePeriod="January(2021) - Present"/>
        <WorkExperience image={firstCode} position="Summer tech Instructor" company="First Code Academy" timePeriod="(May 2019 - August 2019)" /> 
      </Flex>
    </>
  )
}
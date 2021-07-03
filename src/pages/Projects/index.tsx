import React from 'react';
import {Flex,Heading,Box,Text,useColorModeValue} from '@chakra-ui/react';
import Image from 'next/image';
import SEO from "../../components/SEO/SEO"
import Link from 'next/link'
import styled from 'styled-components'


type ProjectsProp={
  src:string,
  name: React.ReactNode,
  href: string,
  description: React.ReactNode,
}
const ProjectLink : React.FunctionComponent<ProjectsProp> = ({src,name,href,description}) => {
  const linkColor=useColorModeValue('#5F9F9F','#7AC5CD');
  const StyledLink = styled.a`
  :hover{
    text-decoration:underline;
    color:${linkColor};
  }
`
 return(
  <Box align="center" w="40%" >          
    <Image src={src} width={250} height={150} layout="responsive"/>
    <Link href={href} passHref>
      <StyledLink>
      <Heading mt="15px" fontSize={["sm","md","xl","xl"]}>{name}</Heading>
      <Text fontSize={["xs","sm","md","md"]} mb="45px">{description}</Text>
      </StyledLink>
    </Link>
  </Box>
)
  }
export default function Projects() {
  return (
    <>
      <SEO siteTitle="Projects"/>
      <Flex justify="space-between" w={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} wrap="wrap" mb="80px">
        <ProjectLink src='/ProjectsImages/studentbase.png' name="StudentBase" description="A community of O and A Level students, tutors and teachers." href="/Projects/studentbase"/>
        <ProjectLink src='/ProjectsImages/Forum.png' name="User Interactive Forum" description="A place where users can interact with each other and get answers to their questions" href="/Projects/interactiveforum"/>
        <ProjectLink src='/ProjectsImages/weatherWebApp.png' name="Weather Web App" description="Getting Hong Kong's weather data from HK Observatory using Vanilla JS " href="/Projects/weatherapp"/>
        <ProjectLink src='/ProjectsImages/bigTwoGUI.png' name="Big two Card Game" description="A fully featured multiplayer networking game made using Java" href="/Projects/bigtwo"/>
        <ProjectLink src='/ProjectsImages/notakto.png' name="Notakto" description="A triple board game made using Python with an invincible AI player." href="/Projects/notakto"/>
      </Flex>
    </>
  );
}

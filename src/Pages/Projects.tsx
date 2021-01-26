import React from 'react';
import {Flex,Image,Heading,Box,Text,Link} from '@chakra-ui/react';
// import { BrowserRouter as Link } from 'react-router-dom'
import bigtwo from './ProjectsImages/bigTwoGUI.PNG';
import notakto from './ProjectsImages/notakto.png';
import weatherApp from './ProjectsImages/weatherWebApp.PNG';
import studentbase from './ProjectsImages/studentbase.png';

type ProjectsProp={
  src:string,
  name: React.ReactNode,
  date?: React.ReactNode,
  href: string,
  description: React.ReactNode,
}

const ProjectLink : React.FunctionComponent<ProjectsProp> = ({src,name,date,href,description}) => (
  <Box align="center" w="40%" >          
    <Image src={src} boxSize={["80px","130px"]}  width={["200px","220px"]}/>
    <Link href={href}>
      <Heading mt="15px" fontSize={["sm","md","xl","xl"]}>{name}</Heading>
      <Text>{date}</Text>
      <Text fontSize={["xs","sm","md","md"]} mb="45px">{description}</Text>
    </Link>
  </Box>
)

export default function Projects() {
  return (
    <>
      <Flex justify="space-between" w={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} wrap="wrap" mb="80px">
        <ProjectLink src={studentbase} name="StudentBase" description="A community of O and A Level students, tutors and teachers." href="/Projects/studentbase"/>
        <ProjectLink src={weatherApp} name="Weather Web App" description="Getting Hong Kong's weather data from HK Observatory using Vanilla JS " href="/Projects/weatherapp"/>
        <ProjectLink src={bigtwo} name="Big two Card Game" description="A fully featured multiplayer networking game made using Java" href="/Projects/bigtwo"/>
        <ProjectLink src={notakto} name="Notakto" description="A triple board game made using Python with an invincible AI player." href="/Projects/notakto"/>
        {/* <ProjectLink src={weatherApp} name="User Interactive Forum" description="Fething d" href="/Projects/interactiveforum"/> */}
      </Flex>
    </>
  );
}

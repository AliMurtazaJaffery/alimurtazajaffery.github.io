import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import bigTwo from './ProjectsImages/bigTwoGUI.PNG';

export default function BigTwoDescription() {
    return(
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>BigTwo</Heading>
                <Text my="5px">November 25th, 2020</Text>
                <hr/>
                <Text my="5px">
                    A full-featured multiplayer networked card game made in Java. 
                    A total of 4 players can play this game at a time and communicate with each other using the chat feature.
                </Text>
                <Image mb="20px" src={bigTwo} mt="10px" height={["220px","350px"]}  width="100%"/>
                <Heading >Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://github.com/AliMurtazaJaffery/BigTwo">Github</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading >Design</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList>
                        <ListItem>OOP(Object Oriented Programming) approach to conveniently handle complex game mechanics and rules</ListItem>
                        <ListItem>Java GUI for the client</ListItem>
                        <ListItem>Proper use of exceptions for error handling</ListItem>
                        <ListItem>Multi-threaded approach to handle networking</ListItem>
                        <ListItem>Java Sockets to handle network multiplayer</ListItem>
                        <ListItem>Proper comments and documentation has been made for all classes and methods</ListItem>
                    </UnorderedList>
                </Box>
                <Heading>Game Rules</Heading>
                <Text my="20px">The basis of Big Two is a race to get rid of your cards.<br/> Read more <Link color="teal.500" href="https://en.wikipedia.org/wiki/Big_two" >here</Link>.</Text>
            </Box>        
        </Box>
    )
}
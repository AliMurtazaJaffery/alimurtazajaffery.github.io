import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import notakto from './ProjectsImages/notakto.png';

export default function BigTwoDescription() {
    return(
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>Notakto</Heading>
                <Text my="5px">December 30th, 2019</Text>
                <hr/>
                <Text my="5px">
                    A 3 board game of Notakto with a special player who knows all about the game and it's almost impossible to defeat it in this game. 
                </Text>
                <Image mb="20px" src={notakto} mt="10px" height={["220px","350px"]}  width="100%"/>
                <Heading >Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://github.com/AliMurtazaJaffery/Notakto">Github</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading>Game Rules</Heading>
                <Text my="20px">The basis of Notakto is to avoid making the last move. <br/> Read more <Link color="teal.500" href="https://en.wikipedia.org/wiki/Notakto" >here</Link>.</Text>
            </Box>        
        </Box>
    )
}
import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList,Flex, ListItem} from '@chakra-ui/react';
import SEO from "../../components/SEO/SEO";

export default function GameShowDescription() {
    const projectImage1 = "/ProjectsImages/gameshowmain.png" as any;
    const projectImage2 = "/ProjectsImages/lucky7.png" as any;
    return(
        <>
        <SEO title="Projects" siteTitle="notakto"/>
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>Trivia Based Gameshow</Heading>
                <Text my="5px">May 2nd, 2020</Text>
                <hr/>
                <Text mt="5px" mb="15px">
                    A trivia based game with multiple rounds including rapid fire and 2 bonus rounds of the famous <Link color="teal.500" href="https://en.wikipedia.org/wiki/Lucky_7">Lucky 7</Link>.
                </Text>
                <Box>
                    <Image src={projectImage1}  height={["180px","300px"]}  width="100%"/>
                    <Image src={projectImage2}  height={["180px","300px"]}  width="100%" mt="20px"/>
                </Box>

                <Heading mt="20px">Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://github.com/AliMurtazaJaffery/Game-Show">Github</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading >Game Details</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList>
                        <ListItem>This is dedicated to emulate a trivia based gameshow. This game show would include several rounds bound by a sequential game pattern i.e. succession of rounds in an order.</ListItem>
                        <ListItem>The project structure is based on our user earning points in the form of money by answering trivia questions. Every right decision would lead to addition of points, in turn every error would lead to the reduction of points i.e. the game money</ListItem>
                        <ListItem>The questions will be divided into different rounds. In some rounds, the questions will be answered by manually by entering the answer, while in other rounds the user would have to select an option.</ListItem>
                        <ListItem>The topics would include but are not limited to science, sports, politics and general knowledge.</ListItem>
                        <ListItem>The game will include rapid fire rounds and lucky 7 round's that would allow the user to gamble with large amounts of money.</ListItem>
                        <ListItem>At the end of the game, a player report will be generated and a score status of current player would be displayed.</ListItem>
                    </UnorderedList>
                </Box>
            </Box>        
        </Box>
        </>
    )
}
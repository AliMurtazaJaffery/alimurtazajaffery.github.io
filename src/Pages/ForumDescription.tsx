import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import bigTwo from './ProjectsImages/Forum.png';

export default function ForumDescription() {
    return(
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>Question Answer Forum</Heading>
                <Text my="5px">December 5, 2020</Text>
                <hr/>
                <Text my="5px">
                    Users can interact with each other and help clear any doubts regarding computer science topics.
                </Text>
                <Image mb="20px" src={bigTwo} mt="10px" height={["220px","350px"]}  width="100%"/>
                <Heading >Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://github.com/AliMurtazaJaffery/QuestionAnswerForum">Github</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading >Technical Details</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList>
                        <ListItem>React js at Client side</ListItem>
                        <ListItem>Express js at Server side</ListItem>
                        <ListItem>MongoDB as database</ListItem>
                    </UnorderedList>
                </Box>
            </Box>        
        </Box>
    )
}
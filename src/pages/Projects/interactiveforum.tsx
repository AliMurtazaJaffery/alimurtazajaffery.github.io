import React  from "react";
import {Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import forum from '../../../public/ProjectsImages/Forum.png'
import Image from 'next/image';
import SEO from "../../Components/SEO/SEO";

export default function ForumDescription() {
    return(
        <>
        <SEO title="Projects" siteTitle="Interactive Forum"/>
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>Question Answer Forum</Heading>
                <Text my="5px">December 5, 2020</Text>
                <hr/>
                <Text mt="5px" mb="15px">
                    Users can interact with each other and help clear any doubts regarding computer science topics.
                </Text>
                <Image src={forum}/>
                <Heading mt="20px" >Links</Heading>
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
    </>
    )
}
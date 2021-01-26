import React  from "react";
import {Image,Box} from '@chakra-ui/react';
import construction from '../underconstruction.png';

export default function projectDescription() {
    return(
        <Box width="40%" mx="30%" align="center">
            {/* <Heading>StudentBase</Heading>
            <Text>Working Since December 2020</Text>
            <Image src={studentbase} boxSize="130px"  width="220px"/> */}
            <Image src={construction} boxSize="300px"  width="500px"/> 
        </Box>
    )
}
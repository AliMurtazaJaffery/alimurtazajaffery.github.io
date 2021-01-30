import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import weather from '../Pages/ProjectsImages/weatherWebApp.PNG';

export default function WeatherAppDescription() {
    return(
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>Weather App</Heading>
                <Text my="5px">October 25th, 2020</Text>
                <hr/>
                <Text my="5px">
                    Get to know the current weatherof all 18 districts of Hong kong and the forecast for the next 9 days.
                    Moreover, you will get to see a warning sign in case of any emergency such as a Thunderstorm.
                </Text>
                <Image mb="20px" src={weather} mt="10px" height={["220px","350px"]}  width="100%"/>
                <Heading >Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://alimurtaza.dev/HKWeatherWebApp/">Weather App</Link></ListItem>
                        <ListItem><Link color="teal.500" href="https://github.com/AliMurtazaJaffery/HKWeatherWebApp">Github</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading >Technical Details</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList>
                        <ListItem>Vanilla Javascript</ListItem>
                        <ListItem>"Fetch" to get API from HK Observatory</ListItem>
                    </UnorderedList>
                </Box>
            </Box>        
        </Box>
    )
}
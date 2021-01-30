import React  from "react";
import {Image,Box,Heading,Text,Link,UnorderedList, ListItem} from '@chakra-ui/react';
import studentbase from '../Pages/ProjectsImages/studentbase.png';

export default function StudentBaseDescription() {
    return(
        <Box width={["80%","80%","60%","40%"]} mx={["10%","10%","20%","30%"]} align="center">
            <Box align="left">
                <Heading>StudentBase</Heading>
                <Text my="5px">December 2020-Present</Text>
                <hr/>
                <Text my="5px">A platform for high school students to share useful resources with each other. 
                Released on January 11, 2020, it has 10k monthly unique users and 125k monthly page views (as of March 10, 2020).
                </Text>
                <Image mb="20px" src={studentbase} mt="10px" height={["220px","350px"]} width="100%"/>
                <Heading >Links</Heading>
                <Box my="15px" ml="20px">
                    <UnorderedList>
                        <ListItem><Link color="teal.500" href="https://studentbase.app/">StudentBase.app</Link></ListItem>
                        <ListItem><Link color="teal.500" href="https://www.facebook.com/StudentBaseApp/">Facebook Page</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Heading >Technical Details</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList>
                        <ListItem>Fully TypeScript</ListItem>
                        <ListItem>React on Frontend, Express.js on Backend</ListItem>
                        <ListItem>GraphQL Server (Apollo Server)</ListItem>
                        <ListItem>GraphQL Client (Apollo Client)</ListItem>
                        <ListItem>Infrastructure as Code (Terraform with DigitalOcean)</ListItem>
                        <ListItem>Containerization (Docker)</ListItem>
                        <ListItem>Content Delivery Network (DigitalOcean)</ListItem>
                        <ListItem>S3 Content Storage (DigitalOcean Spaces)</ListItem>
                        <ListItem>HTTPS (Let's Encrypt)</ListItem>
                        <ListItem>95% Testing Coverage</ListItem>       
                        <ListItem>Caching to external services (node-cache)</ListItem>
                        <ListItem>Email and Facebook Authentication</ListItem>
                        <ListItem>Continuous Integration/Deployment (GitHub Actions)</ListItem>
                        <ListItem>Automated Backups</ListItem>   
                        <ListItem>Multiple environments (Production, Staging)</ListItem>
                        <ListItem>A/B Testing</ListItem>
                        <ListItem>Dynamic Sitemap Generation</ListItem>
                        <ListItem>Google Analytics to track behavior</ListItem>     
                        <ListItem>Integration with Google Analytics to show item views</ListItem>                                        
                    </UnorderedList>
                </Box>
                <Heading>Founder</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList >
                        <ListItem><Link color="teal.500" href="https://www.linkedin.com/in/waqasaliabbasi/">Waqas Ali</Link></ListItem>
                    </UnorderedList>
                </Box>                
                <Heading>Senior Engineers</Heading>
                <Box ml="20px" my="15px">
                    <UnorderedList >
                        <ListItem><Link color="teal.500" href="https://www.linkedin.com/in/uday1331/">Uday Jain</Link></ListItem>
                        <ListItem><Link color="teal.500" href="https://www.linkedin.com/in/ahsan-syed-930a2014a/">Ahsan Syed</Link></ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            
            
        </Box>
    )
}
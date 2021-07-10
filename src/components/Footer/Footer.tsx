import React from 'react';
import {Box,Text,Link} from "@chakra-ui/react"

const NavbarLink: React.FunctionComponent=()=>(
    <>
      <Box mb="20px" align="center" mt="100px"> 
      <Text fontSize="xs">This website was made using <Link href="https://nextjs.org/" color="teal.500" >Next.js</Link> and <Link href="https://www.typescriptlang.org/" color="teal.500">Typescript</Link>.</Text>
      <Text fontSize="xs">Last Updated: 1 July 2021 &nbsp; | &nbsp; &copy; 2021</Text>
      </Box>
    </>
)
export default NavbarLink;

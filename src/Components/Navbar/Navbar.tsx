import React from 'react'
import {Box,Flex,Link} from "@chakra-ui/react";
// import {Link} from "react-router-dom";
import Resume from '../../Pages/resume.pdf'

type NavbarProps={
  href:string,
  children:React.ReactNode,
}

const NavbarLink: React.FunctionComponent<NavbarProps> = ({ href, children}) => (
  <Box
    mr={[0, 0, 6, 10, 12]}
    mb={[3, 4, 0, 0, 0]}
    fontSize={["15px","25px"]}
    mx="10px"
  >
    <Link href={href}>{children}</Link>
  </Box>
);



function Navbar(){
  return(
    <>
      <Flex m="10px" justify="center" my="40px">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href={Resume}>Resume</NavbarLink>
          <NavbarLink href="/Work">Work</NavbarLink>
          <NavbarLink href="/Projects">Projects</NavbarLink>

      </Flex>
    </>
  )
}
export default Navbar;
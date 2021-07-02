import React from 'react'
import {Box,Flex,useColorModeValue} from "@chakra-ui/react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

type NavbarProps={
  href:string,
  children:React.ReactNode,
}

const NavbarLink: React.FunctionComponent<NavbarProps> = ({ href, children}) => {
  const linkColor=useColorModeValue('#707070','#D3D3D3');
  const NavLink = styled.a`
  :hover{
    color:${linkColor};
    text-decoration:underline;
  }
  `
  return(
      <Box
        mr={[0, 0, 6, 10, 12]}
        mb={[3, 4, 0, 0, 0]}
        fontSize={["15px","21px"]}
        mx="10px"
      >
        <Link href={href} passHref><NavLink>{children}</NavLink></Link>
      </Box>
    )};



function Navbar(){
  return(
    <Box align="center">
      <Flex justify="center" my="35px">
          <NavbarLink href="/"><FontAwesomeIcon icon={faHome}/></NavbarLink>
          <NavbarLink href="/resume.pdf">Resume</NavbarLink>
          <NavbarLink href="/Work">Work</NavbarLink>
          <NavbarLink href="/Projects">Projects</NavbarLink>

      </Flex>
    </Box>
  )
}
export default Navbar;
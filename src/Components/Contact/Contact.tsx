import React  from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link,Flex} from "@chakra-ui/react";
import {faGithub,faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type contactProps={
  icon:any,
  link:string,
  size?:any,
}

const ContactIcon:React.FunctionComponent<contactProps>=({icon,link,size=["x","2x"]})=>(
  <Link mx="10px" href={link}>
    <FontAwesomeIcon icon={icon} size={size}/>
  </Link>
)

export default function Contact(){
  return(
    <>
      <Flex justify="center" mt="25px">
      <ContactIcon icon={faGithub} link="https://github.com/AliMurtazaJaffery"/>
      <ContactIcon icon={faTwitter} link="https://twitter.com/s_m_ali_murtaza"/>
      <ContactIcon icon={faEnvelope} link="mailto:murtaza@connect.hku.hk"/> 
      <ContactIcon icon={faLinkedin} link="https://www.linkedin.com/in/s-m-ali-murtaza-jaffery-b039941ba/"/>
      </Flex>
    </>
  )
}

import { ChakraProvider } from "@chakra-ui/react"
import Header from "../Components/Header/Header"
import Contact from "../Components/Contact/Contact"
import Navbar from "../Components/Navbar/Navbar"
import SEO from "../Components/SEO/SEO"
import Footer from "../Components/Footer/Footer"
import type { AppProps } from 'next/app'
import '../../public/style.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
    <SEO/>
    <ChakraProvider>
    	<Header/>
			<Contact/>
			<Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
    </>
  )
}

export default MyApp 
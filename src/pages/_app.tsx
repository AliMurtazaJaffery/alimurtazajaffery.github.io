import { ChakraProvider } from "@chakra-ui/react"
import Header from "../components/Header/Header"
import Contact from "../components/Contact/Contact"
import Navbar from "../components/Navbar/Navbar"
import SEO from "../components/SEO/SEO"
import Footer from "../components/Footer/Footer"
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import '../../public/style.css'
import { useEffect } from "react"
import { initGA, logPageView } from "../utils/analytics";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }:AppProps) {
  const { events } = useRouter();
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    events.on("routeChangeComplete", logPageView);
    return () => {
      events.off("routeChangeComplete", logPageView);
    };
  }, [events]);
  return (
    <>
    <NextNprogress height={6}/>
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
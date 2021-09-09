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
  const router = useRouter()
  useEffect(() => {
    initGA()
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      logPageView()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView)
    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [router.events])

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
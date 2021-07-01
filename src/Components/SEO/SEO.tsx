import Head from 'next/head'
import React from 'react'

type SEOProps={
    title?:string,
    siteTitle?:string,
  }
  

const SEO: React.FunctionComponent<SEOProps>=({ title, siteTitle }) =>{
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="icon" href="/photo.jpg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Head>
  )
}
SEO.defaultProps={
    title:"Ali Murtaza",
    siteTitle:"HKU"
}
export default SEO;

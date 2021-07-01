import Head from 'next/Head'
import React from 'react'

// const SEO = (title?:string) => {
//     return (
//         <Head>
//             <meta charSet="utf-8" />
//             <link rel="icon" href="../../../public/photo.jpg" />
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//             <meta name="theme-color" content="#000000" />
//             <title>{title}</title>
//         </Head>
//     )
// }

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

import Head from 'next/head'
import '../styles/globals.css'
import '../styles/main.scss'
import '../styles/main-2.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp

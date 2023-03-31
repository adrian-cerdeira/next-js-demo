import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>      
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

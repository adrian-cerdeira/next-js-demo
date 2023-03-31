import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/navbar'
import type { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
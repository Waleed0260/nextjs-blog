import '@/styles/globals.css'
import "../Component/global.css"
export default function App({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  </>
}

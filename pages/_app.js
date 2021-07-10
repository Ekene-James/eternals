import Layout from '../component/layout/Layout'
import '../styles/globals.css'
import AppStoreContextProvider from '../store/AppStore'

function MyApp({ Component, pageProps }) {
  return <AppStoreContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppStoreContextProvider>
}

export default MyApp

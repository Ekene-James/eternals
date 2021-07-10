import Layout from '../component/layout/Layout'
import '../styles/globals.css'
import AppStoreContextProvider from '../store/appStore'

function MyApp({ Component, pageProps }) {
  return <AppStoreContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppStoreContextProvider>
}

export default MyApp

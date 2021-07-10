import Head from 'next/head'
import Carousel from '../component/carousel/Carousel'
import Effortless from '../component/effortless/Effortless'
import TrueFurniture from '../component/truefurniture/TrueFurniture'
import BrowseCollections from '../component/BrowseCollections.js/BrowseCollections'
import ViewEverything from '../component/viewEverything/ViewEverything'
import NewsLetter from '../component/newsLetter/Newsletter'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Eternals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Carousel/>
        <TrueFurniture/>
        <BrowseCollections/>
        <ViewEverything/>
        <Effortless/>
        <NewsLetter/>
    </div>
  )
}

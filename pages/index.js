import React from 'react'
import Head from 'next/head'
import Carousel from '../component/carousel/Carousel'
import Effortless from '../component/effortless/Effortless'
import TrueFurniture from '../component/truefurniture/TrueFurniture'
import BrowseCollections from '../component/browseCollections.js/BrowseCollections'
import ViewEverything from '../component/viewEverything/ViewEverything'
import NewsLetter from '../component/newsLetter/Newsletter'
import { AppStoreContext } from '../store/AppStore';
import CustomizedSnackbars from '../component/snackBar/SnackBar'
import { handleSnackBar } from '../store/actions/AppAction'

export default function Home() {
  const appCtx = React.useContext(AppStoreContext);
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
        <CustomizedSnackbars type={appCtx.state.snackBarObj.type} msg={appCtx.state.snackBarObj.msg} open={appCtx.state.snackBarObj.open} setOpen={() => appCtx.dispatch(handleSnackBar({...appCtx.state.snackBarObj,open:false}))} />
    </div>
  )
}

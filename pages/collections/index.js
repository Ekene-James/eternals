import React from 'react'
import {addToCart} from '../../store/actions/AppAction'
import Head from 'next/head'
import { makeStyles, Grid,Typography,Hidden } from '@material-ui/core';
import CollectionSideBar from '../../component/collectionSidebar/CollectionSideBar';
import { AppStoreContext } from '../../store/appStore';
import Cards from '../../component/card/Cards';
import Modal from '../../component/Modal';
import ModalContent from '../../component/Modal/ModalContent';
import { sofa } from './sofas';
import { chair } from './chairs';
import { ottoman } from './ottomans';
import { light } from './lights';
import { stool } from './stools';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    container: {
       overflowX:'hidden',
       position:'relative',
       minHeight:'100vh',
      },
 
      mainBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: '300px',
        padding:'80px',
        paddingLeft:0,
        height:'100% !important',
        [theme.breakpoints.down('sm')]: {
            width: `100%`,
            marginLeft: '0px',
            padding:'30px',
           
        },
      },
      typo: {
        cursor : 'pointer',
        '&:hover':{
            fontStyle : 'italic'
        }
        },

  
  }));

function Collections() {
    const classes = useStyles();
    const appCtx = React.useContext(AppStoreContext);
 
    const [bottom, setbottom] = React.useState(false);
    const [open,setOpen] = React.useState(false);
    const [item,setitem] = React.useState();
    const handleClick = (product) => {
      setOpen(true);
      setitem(product);
    }
    const handleClose = () => {
      setOpen(false);
     
    }
    const AddToCart = () => {
        appCtx.dispatch(addToCart(item))   
    }

    React.useMemo(() => {
        setbottom(appCtx.state.onFooter);
        
}, [appCtx.state.onFooter])

    return (
        <>
        <Head>
            <title>COLLECTIONS</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className={classes.container}>
        <Hidden smDown>
            <CollectionSideBar bottom={bottom}/>
        </Hidden>
       
        <div className={classes.mainBar} >
             <Grid container spacing={3}>
             <Grid item xs={12}>
             <Typography style={{textAlign:'start',marginBottom:'20px',color:'gray'}} variant="h6" gutterBottom>
                        CHAIRS
                </Typography>
             </Grid>
                {
                    chair.map((data,i) => (
                    <Grid key={i} item xs={6} md={3} >
                        <Cards handleClick={handleClick} data={data} i={i}/>
                    </Grid>
                    ))
                }
             <Grid item xs={12}>
             <Typography style={{textAlign:'start',marginBottom:'20px',color:'gray'}} variant="h6" gutterBottom>
                        LIGHTS
                </Typography>
             </Grid>
                {
                    light.map((data,i) => (
                    <Grid key={i} item xs={6} md={3} >
                        <Cards handleClick={handleClick} data={data} i={i}/>
                    </Grid>
                    ))
                }
             <Grid item xs={12}>
             <Typography style={{textAlign:'start',marginBottom:'20px',color:'gray'}} variant="h6" gutterBottom>
                        SOFAS
                </Typography>
             </Grid>
                {
                    sofa.map((data,i) => (
                    <Grid key={i} item xs={6} md={3} >
                        <Cards handleClick={handleClick} data={data} i={i}/>
                    </Grid>
                    ))
                }
             <Grid item xs={12}>
             <Typography style={{textAlign:'start',marginBottom:'20px',color:'gray'}} variant="h6" gutterBottom>
                        STOOLS
                </Typography>
             </Grid>
                {
                    stool.map((data,i) => (
                    <Grid key={i} item xs={6} md={3} >
                        <Cards handleClick={handleClick} data={data} i={i}/>
                    </Grid>
                    ))
                }
             <Grid item xs={12}>
             <Typography style={{textAlign:'start',marginBottom:'20px',color:'gray'}} variant="h6" gutterBottom>
                        OTTOMANS
                </Typography>
             </Grid>
                {
                    ottoman.map((data,i) => (
                    <Grid key={i} item xs={6} md={3} >
                        <Cards handleClick={handleClick} data={data} i={i}/>
                    </Grid>
                    ))
                }
        </Grid>
        </div>
        <Modal open={open} maxWidth='md' handleClose={handleClose} actions={[{handler:() => handleClose(),
                    text:"Close",id:5}]} title='Product Description'>
                   <ModalContent item={item} AddToCart={AddToCart}/>
          </Modal>
        </div>
        </>
    )
}

export default Collections
